import { useState, useEffect } from 'react';
import Cookies from 'react-cookies';
import axios from 'axios';
import { Input, Select } from '../../Other-component/FormProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";

const AddVehicleSection = ({ onClick, setVehicleForm, fetchVehicles }) => {
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        vehicleName: '',
        model: '',
        chassisNumber: '',
        productType: '',
        purchaseDate: '',
        permitType: '',
        ownersName: '',
        ownersLicense: '',
        ownersAddress: {
            addressLine: '',
            state: '',
            country: ''
        },
        assignedDriver: '',
        insurance: '',
        insuranceDueDate: ''
    });
    const [drivers, setDrivers] = useState([]);

    const token = Cookies.load('token');

    // Fetch drivers data on component mount
    useEffect(() => {
        const fetchDrivers = async () => {
            try {
                const response = await axios.get('https://gamma-fleet-backend.onrender.com/api/get-driver', {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setDrivers(response.data.drivers);
            } catch (error) {
                console.error('There was an error fetching the drivers!', error);
            }
        };

        fetchDrivers();
    }, [token]);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (['addressLine', 'state', 'country'].includes(name)) {
            setFormData(prevState => ({
                ...prevState,
                ownersAddress: {
                    ...prevState.ownersAddress,
                    [name]: value
                }
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    // Handle form submission
   const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null); // Reset the message

    if (!token) {
        setMessage("Authentication error. Please log in again.");
        setLoading(false);
        return;
    }

    const insurance = formData.insurance === 'Yes';

    // Log the form data
    console.log('Form data being submitted:', { ...formData, insurance });

    try {
        const response = await axios.post('https://gamma-fleet-backend.onrender.com/api/add-vehicle', {
            ...formData,
            insurance,
        }, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log('Vehicle added successfully:', response.data);
        setLoading(false);
        setVehicleForm(false);
        fetchVehicles(); // Fetch updated vehicles after successful addition

    } catch (error) {
        setLoading(false);
        console.error('Error while adding vehicle:', error);
        const errorMsg = error.response?.data?.message || "Error occurred while adding vehicle. Please try again.";
        console.error('Error response message:', errorMsg);
        setMessage(errorMsg);
    }
};

    return (
        <section className='addVehicleSection'>
            <div className='addVehicleContainer'>
                <FontAwesomeIcon icon="fa-solid fa-x" className='x-icon' onClick={onClick} />
                <h1>Add a new vehicle</h1>
                <form className='add-vehicle-form' onSubmit={handleFormSubmit}>
                    {message && <div className='error v-error'><FontAwesomeIcon icon="fa-solid fa-circle-exclamation" /><p>{message}</p></div>}
                    <div className='add-vehicle-form-content form-1'>
                        <Input
                            label="Vehicle Name"
                            type="text"
                            name="vehicleName"
                            placeholder="e.g BENZ ES360"
                            value={formData.vehicleName}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            label="Model"
                            name="model"
                            value={formData.model}
                            type="text"
                            placeholder="Enter a model"
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            label="Chassis Number"
                            type="text"
                            name="chassisNumber"
                            placeholder="00-231-2024"
                            value={formData.chassisNumber}
                            onChange={handleInputChange}
                            required
                        />
                        <Select
                            label="Product type"
                            name="productType"
                            value={formData.productType}
                            options={["Sedan", "SUV", "Truck", "Van", "Coach"]}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            label="Purchase Date"
                            type="date"
                            name="purchaseDate"
                            placeholder="Enter"
                            value={formData.purchaseDate}
                            onChange={handleInputChange}
                            required
                        />
                        <Select
                            label="Permit type"
                            name="permitType"
                            value={formData.permitType}
                            options={["Commercial", "Personal", "Government", "Rental", "Emergency"]}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='add-vehicle-form-content form-2'>
                        <Input
                            label="Owner’s Name"
                            type="text"
                            name="ownersName"
                            placeholder="e.g John tall"
                            value={formData.ownersName}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            label="Owner’s License"
                            type="text"
                            name="ownersLicense"
                            placeholder="e.g ABC123456"
                            value={formData.ownersLicense}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            label="Address Line"
                            type="text"
                            name="addressLine"
                            placeholder="house no, street, city"
                            value={formData.ownersAddress.addressLine}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            label="State"
                            type="text"
                            name="state"
                            placeholder="e.g Lagos state"
                            value={formData.ownersAddress.state}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            label="Country"
                            type="text"
                            name="country"
                            placeholder="e.g Nigeria"
                            value={formData.ownersAddress.country}
                            onChange={handleInputChange}
                            required
                        />
                        <span className="inputFormStyle">
                            <label htmlFor="assignedDriver">Assign Driver</label>
                            <select
                                id="assignedDriver"
                                name="assignedDriver"
                                value={formData.assignedDriver}
                                className="selectStyle"
                                onChange={handleInputChange}
                                required
                            >
                                <option value="" disabled>Select Driver</option>
                                {Array.isArray(drivers) && drivers.length > 0 ? (
                                    drivers.filter(driver => driver.assignedVehicle === null).map((driver, index) => (
                                        <option key={index} value={driver._id}>
                                            {driver.fullName}
                                        </option>
                                    ))
                                ) : (
                                    <option value="manual">Assign Driver Manually</option>
                                )}
                            </select>
                        </span>
                    </div>
                    <div className='add-vehicle-form-content form-2'>
                        <span className='insurance'>
                            <p>Insurance</p>
                            <span className='radio-input'>
                                <span>
                                    <input type="radio" name="insurance" id="insurance-yes" value="Yes" onChange={handleInputChange} required />
                                    <label htmlFor="insurance-yes">Yes</label>
                                </span>
                                <span>
                                    <input type="radio" name="insurance" id="insurance-no" value="No" onChange={handleInputChange} required />
                                    <label htmlFor="insurance-no">No</label>
                                </span>
                            </span>
                        </span>
                        <Input
                            label="Insurance Due Date"
                            type="date"
                            name="insuranceDueDate"
                            value={formData.insuranceDueDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='add-vehicle-button'>
                        <button type="button" onClick={onClick}>Discard</button>
                        <button type="submit">
                            {loading ? <FontAwesomeIcon icon="fa-solid fa-spinner" size="1x" spin /> : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

AddVehicleSection.propTypes = {
    onClick: PropTypes.func.isRequired,
    setVehicleForm: PropTypes.func,
    fetchVehicles: PropTypes.func
};

export default AddVehicleSection;

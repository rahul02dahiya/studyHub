// /components/CheckoutForm.js
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

const CheckoutForm = ({ isOpen, onClose }) => {
    const [errors, setErrors] = useState({});

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const name = formData.get("name");
        const phone = formData.get("phone");
        const parentsPhone = formData.get("parentsPhone");
        const address = formData.get("address");

        const newErrors = {};

        // Basic validations
        if (!name || name.length < 3) {
            newErrors.name = "Name must be at least 3 characters long.";
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phone || !phonePattern.test(phone)) {
            newErrors.phone = "Phone number must be 10 digits long.";
        }

        if (!parentsPhone || !phonePattern.test(parentsPhone)) {
            newErrors.parentsPhone = "Parent phone number must be 10 digits long.";
        }

        if (!address || address.length < 10) {
            newErrors.address = "Address must be at least 10 characters long.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        // Fetch cart data from localStorage
        const cartData = localStorage.getItem("cart");
        const totalPay = localStorage.getItem("total");

        const orderDateTime = new Date().toLocaleString()

        // Create a combined payload with form data and cart data
        const payload = {
            name,
            phone,
            parentsPhone,
            address,
            orderDateTime: orderDateTime,
            cart: cartData,
            total: totalPay,
        };

        // Make a POST request to save data in Google Sheets (or your API)
        try {
            const response = await fetch("/api/submitForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload), // Send payload with cart data
            });

            if (response.ok) {
              e.target.reset(); // Optionally reset the form
              onClose(); // Close the form modal
              alert("Order place! We will connect with you soon");
              toast.success("Order placed!");
            } else {
                toast.error("Error submitting the form. Please try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error("There was an error submitting the form.");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 md:p-8 rounded-lg w-full max-w-lg relative mx-4">
                {/* Close button */}
                <button
                    className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* Title */}
                <h2 className="text-lg md:text-xl font-bold mb-4">Checkout Form</h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className={`mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : ""
                                }`}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-gray-700 font-semibold">
                            Phone Number
                        </label>
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            required
                            pattern="[0-9]{10}" // For HTML5 validation
                            className={`mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-500" : ""
                                }`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>

                    {/* Parents' Phone Number */}
                    <div>
                        <label htmlFor="parentsPhone" className="block text-gray-700 font-semibold">
                            Parent Phone Number
                        </label>
                        <input
                            type="number"
                            id="parentsPhone"
                            name="parentsPhone"
                            required
                            pattern="[0-9]{10}" // For HTML5 validation
                            className={`mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 ${errors.parentsPhone ? "border-red-500" : ""
                                }`}
                        />
                        {errors.parentsPhone && (
                            <p className="text-red-500 text-sm">{errors.parentsPhone}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-gray-700 font-semibold">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            required
                            className={`mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 ${errors.address ? "border-red-500" : ""
                                }`}
                        ></textarea>
                        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                    >
                        Submit
                    </button>
                </form>

                {/* Toast Notification Container */}
                <ToastContainer 
                  position="top-right" 
                  autoClose={5000} 
                  hideProgressBar={false} 
                  closeOnClick 
                  draggable 
                  pauseOnHover 
                  theme="colored" 
                  style={{ zIndex: 9999 }} 
                />
            </div>
        </div>
    );
};

export default CheckoutForm;

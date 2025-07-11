"use client";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'
export default function CheckoutForm({ clientSecret }) {
  const router = useRouter()
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [alert, setAlert] = useState(false);
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    country: "",
   
  });
  useEffect(() => {
    // Fetch the list of countries from a public API
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryList = data.map((country) => ({
          name: country.name.common,
          code: country.cca2,
        }));
        setCountries(countryList.sort((a, b) => a.name.localeCompare(b.name))); // Sort alphabetically
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement, billing_details: {
          name: formData.name,
          email: formData.email,
          phone: formData.contactNumber,
          address: {
            country: formData.country,
          },
        },
      },
    });

    if (error) {
      console.error(error.message);
      console.log("Payment failed: " + error.message);
    } else if (paymentIntent.status === "succeeded") {
      displayAlert()
      window.location.reload();
     
    }

    setIsProcessing(false);
  };
  const displayAlert = () => {
    setAlert(true);
  };
    useEffect(() => {
          if (alert) {
            Swal.fire({
              icon: "success",
              title: "Payment done Successfully ",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              setAlert(false);
            });
          }
        }, [alert]);

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-transparent">
         {/* <h1 className="block mb-1 font-medium text-center text-black"> Stripe Card Payment Form </h1> */}
       <div>
        <label className="block mb-1 font-medium  text-black">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border text-gray-500   bg-transparent  border-yellow-300 focus:bg-transparent  p-2 rounded-lg"
          placeholder="Your Full Name"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium text-black">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full  border text-gray-500  bg-transparent  border-yellow-300 p-2 rounded-lg"
          placeholder=" email address"
        />
      </div>
      <div >
        <label className="block mb-1 font-medium text-black">Contact Number</label>
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          className="w-full border text-gray-500  bg-transparent border-yellow-300  focus:bg-white p-2 rounded-lg"
          placeholder="Your Contact Number"
        />
      </div>
     
      <div >
        <label className="block mb-1 font-medium text-black">Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          className="w-full border bg-transparent text-gray-700 border-yellow-300 p-2 rounded-lg   focus:bg-transparent"
        >
          <option value="" disabled className="border border-yellow-300 bg-transparent  focus:bg-yellow-300 text-black">
            Select your country
          </option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block mb-1 font-medium  text-black ">Card Details</label>
        <CardElement className="border p-2 border-yellow-300 rounded-lg" />
      </div>
      {/* <CardElement className="border p-2 rounded-lg" /> */}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="mt-4 w-full bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-white py-2 rounded-lg"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}

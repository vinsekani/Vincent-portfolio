"use client";

import React, { useState, useRef } from "react";
import Particle from "../../components/Particle"; // Assuming Particle component is being used
import emailjs from '@emailjs/browser';
import ContactNav from "@/components/ContactNav";
import ContactMobileNav from "@/components/ContactMobileNav"

const ContactPage: React.FC = () => {

  const form = useRef(null);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    // Check if there are any errors
    return !Object.values(newErrors).some((error) => error);
  };




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validate form data before submission (optional validation function)
    if (!validateForm()) {
      return; // Stop submission if the form is invalid
    }
  
    setLoading(true); // Show loading state
    setSuccessMessage(""); // Reset success message
  
    try {
      // Use EmailJS to send the email
      const result = await emailjs.sendForm(
        ".b3t7uy@Q", // Replace with your EmailJS service ID
        "template_m674v08", // Replace with your EmailJS template ID
        form.current, // Form reference
        "D3O9l7burq-PmwqwN" // Replace with your public EmailJS user ID
      );
  
      // If successful, show a success message
      console.log("SUCCESS!", result.text);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset the form
    } catch (error) {
      // Handle failure
      console.error("FAILED...", error.text);
      setSuccessMessage("Failed to send your message. Please try again.");
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);



  
  return (
    <div>
      <ContactMobileNav nav={nav} closeNav={closeNav}/>
            <ContactNav openNav={openNav}/>

    <div className="w-full min-h-screen bg-[#141c27] text-white py-10 px-5 flex flex-col items-center lg:mt-10 fixed">
      <Particle />

      <h2 className="text-3xl font-bold text-center mb-8">
        Get in <span className="text-yellow-300">Touch</span>
      </h2>

      {successMessage && (
        <p className={`mb-6 ${successMessage.includes("successfully") ? "text-green-500" : "text-red-500"} font-semibold`}>
          {successMessage}
        </p>
      )}

      <form
        ref={form} onSubmit={handleSubmit}
        className="bg-[#09101a] w-full max-w-[600px] p-6 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-[#141c27] text-white border ${
              errors.name ? "border-red-500" : "border-[#2a2f38]"
            } rounded-md outline-none focus:ring-2 focus:ring-yellow-300`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-[#141c27] text-white border ${
              errors.email ? "border-red-500" : "border-[#2a2f38]"
            } rounded-md outline-none focus:ring-2 focus:ring-yellow-300`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-[#141c27] text-white border ${
              errors.subject ? "border-red-500" : "border-[#2a2f38]"
            } rounded-md outline-none focus:ring-2 focus:ring-yellow-300`}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-[#141c27] text-white border ${
              errors.message ? "border-red-500" : "border-[#2a2f38]"
            } rounded-md outline-none focus:ring-2 focus:ring-yellow-300`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-300 text-[#141c27] py-2 rounded-md font-bold hover:bg-yellow-400 transition-all disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactPage;



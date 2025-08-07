import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .send(
        "service_tj3axql/rishav",     // replace with your EmailJS service ID
        "template_tmw52am",    // replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "rcSF3Edj1FGxDLGXK"       // replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-8">
        <span className="text-orange-500">Contact</span> Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition"
        >
          Send Message
        </button>
        {status && (
          <p className="mt-4 text-center text-sm font-medium">
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;

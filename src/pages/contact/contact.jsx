import React, { useState, useRef } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_0pa5y0d",
        "template_0n36gma",
        form.current,
        "Ex1HaTpAQYDoXjFDp"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonText: "OK",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Failed to Send!",
            text: "There was an issue sending your message. Please try again later.",
            confirmButtonText: "OK",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4"
      // data-aos="fade-up"
    >
      <div className="w-full max-w-5xl bg-white dark:bg-darkModal shadow-sm rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2" data-aos="fade-right">
          <div className="p-6 md:p-8">
            <h2
              className="text-3xl font-semibold text-gray-900 dark:text-fontDark mb-4"
              data-aos="fade-left"
            >
              Send a Message
            </h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-smallFontDark text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-darkBox dark:border-gray-700 dark:text-fontDark"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-smallFontDark text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-darkBox dark:border-gray-700 dark:text-fontDark"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-smallFontDark text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none dark:bg-darkBox dark:border-gray-700 dark:text-fontDark"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full bg-blue-500 dark:bg-buttonDark hover:bg-blue-700 dark:hover:bg-buttonDark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          <div className="bg-gray-100 dark:bg-darkModal p-6 md:p-8">
            <h2
              className="text-3xl font-semibold text-gray-900 dark:text-fontDark mb-4"
              data-aos="fade-right"
            >
              Contact Information
            </h2>
            <div
              className="space-y-6 bg-white dark:bg-darkBox p-4 rounded-lg flex-col"
              data-aos="fade-left"
            >
              <div className="flex items-center">
                <FaPhone className="text-gray-600 mr-4 text-xl rotate-90" />
                <a href="tel:+919789762908" className=" hover:text-blue-500">
                  +91 9789762908
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-gray-600 mr-4 text-base sm:text-xl" />
                <a
                  href="mailto:bpriyan18082004@gmail.com"
                  className=" hover:text-blue-500 text-sm sm:text-base"
                >
                  bpriyan18082004@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-600 mr-4 text-xl" />
                <span>43, AVP Layout, Thirumurugan Poondi, Tirupur</span>
              </div>
            </div>
            <br />
            <iframe
              data-aos="fade-up"
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d628.7256305306181!2d77.30500567869308!3d11.173899484638332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba906f722392849%3A0x201d2d9eb94e8d9a!2sA.V.P%20Layout%2C%20Gandhinagar%2C%20Velampalayam%2C%20Tiruppur%2C%20Tamil%20Nadu%20641603!5e1!3m2!1sen!2sin!4v1736441554864!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: "0", borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

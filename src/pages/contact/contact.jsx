import React, { useState, useRef } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Card, CardBody, CardHeader } from "@heroui/react";
import Input from "../../components/input/input";
import Button from "../../components/button/button"
import {Textarea} from "@heroui/input";
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
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-down">
          <Card isPressable
          >
            <CardHeader className="p-6 md:p-8">
              <h2 className="text-3xl font-semibold" data-aos="fade-left">
                Send a Message
              </h2>
            </CardHeader>
            <CardBody>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  label="Name"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  required
                  isClearable
                />
                <Input
                  type="email"
                  label="Email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  required
                  isClearable
                />
                <Textarea
                  id="message"
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
                <br />
                  <Button type="submit" disabled={isSubmitting} className="float-end">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
              </form>
            </CardBody>
          </Card>
          
          <Card isPressable className="overflow-hidden">
            <CardHeader className="p-6 md:p-8">
              <h2 className="text-3xl font-semibold" data-aos="fade-left">
                Contact Information
              </h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-6 dark:bg-darkBox p-4 rounded-lg" data-aos="zoom-in">
                <div className="flex items-center">
                  <FaPhone className="text-gray-600 mr-4 text-xl rotate-90" />
                  <a href="tel:+919789762908" className="hover:text-blue-500">
                    +91 9789762908
                  </a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-gray-600 mr-4 text-base sm:text-xl" />
                  <a href="mailto:bpriyan18082004@gmail.com" className="hover:text-blue-500 text-sm sm:text-base">
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
                data-aos="zoom-in"
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d628.7256305306181!2d77.30500567869308!3d11.173899484638332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba906f722392849%3A0x201d2d9eb94e8d9a!2sA.V.P%20Layout%2C%20Gandhinagar%2C%20Velampalayam%2C%20Tiruppur%2C%20Tamil%20Nadu%20641603!5e1!3m2!1sen!2sin!4v1736441554864!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: "0", borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;

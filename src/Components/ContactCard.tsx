import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas/Earth";
import ConnectMe from "./MainPage/ConnectMe";

// Animation function with proper types
const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

// Define Form State Type
interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: form.name,
          to_name: "sharath elumle",
          from_email: form.email,
          to_email: "sharathelumle23@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY as string
      );

      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Ahh, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <section
      id="Experience"
      className="py-5 text-black animate__animated animate__fadeIn"
      style={{
        background: "linear-gradient(135deg,#f4f4f4,#f4f4f4)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container mt-5">
        <div className="row g-4">
          {/* Form Section */}
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="col-md-6 bg-light text-dark p-5 rounded shadow-lg"
          >
            <h3 className="mb-4 text-center">Contact Us</h3>

            <form ref={formRef} onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-4">
                <label className="form-label" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="What's your good name?"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="form-label" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="What's your email address?"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <label className="form-label" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  className="form-control"
                  rows={5}
                  placeholder="What do you want to say?"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4 py-2">
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Earth Animation */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="col-md-6 d-flex justify-content-center align-items-center"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </section>
         <ConnectMe />
</>
  );
};

export default Contact;

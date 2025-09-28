import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { RiSendPlaneFill } from "react-icons/ri";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("❌ Failed to send. Try again later.");
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-5 py-20">
      <h2 className="text-3xl font-bold text-center text-[#ec9956] mb-5 flex justify-center items-center gap-2">
        📬 Get in Touch
      </h2>

      {/* Display Email */}
      <p className="text-center text-white mb-8">
        Or email me directly at:{" "}
        <a
          href="mailto:shivamtripathi504@gmail.com"
          className="text-[#ec9956] underline"
        >
          shivamtripathi504@gmail.com
        </a>
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[#1e2347] border border-[#2a2a40] rounded-2xl shadow-2xl p-8 space-y-6"
      >
        {/* Name Field */}
        <div className="relative">
          <input
            type="text"
            name="user_name"
            required
            className="peer input-modern placeholder-transparent"
            placeholder="Your Name"
          />
          <label
            className="absolute left-3 top-1 text-[#ec9956] text-sm transition-all 
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
            peer-focus:-top-2 peer-focus:text-[#ec9956] peer-focus:text-sm peer-valid:top-1 peer-valid:text-[#ec9956] peer-valid:text-sm"
          >
            Your Name
          </label>
        </div>

        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            name="user_email"
            required
            className="peer input-modern placeholder-transparent"
            placeholder="Your Email"
          />
          <label
            className="absolute left-3 top-1 text-[#ec9956] text-sm transition-all 
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
            peer-focus:-top-2 peer-focus:text-[#ec9956] peer-focus:text-sm peer-valid:top-1 peer-valid:text-[#ec9956] peer-valid:text-sm"
          >
            Your Email
          </label>
        </div>

        {/* Message Field */}
        <div className="relative">
          <textarea
            name="message"
            rows="5"
            required
            className="peer input-modern placeholder-transparent resize-none"
            placeholder="Your Message"
          ></textarea>
          <label
            className="absolute left-3 top-1 text-[#ec9956] text-sm transition-all 
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
            peer-focus:-top-2 peer-focus:text-[#ec9956] peer-focus:text-sm peer-valid:top-1 peer-valid:text-[#ec9956] peer-valid:text-sm"
          >
            Your Message
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full cursor-pointer flex justify-center items-center gap-2 py-3 rounded-lg font-semibold text-lg text-white 
            ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-[#e9615e] to-[#ec9956] hover:scale-105 hover:shadow-lg transition"
            }`}
        >
          {loading ? (
            "⏳ Sending..."
          ) : (
            <>
              <RiSendPlaneFill /> Send Message
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

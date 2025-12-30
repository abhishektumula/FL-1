"use client";
import { useState } from "react";
import { IconMail, IconPhone, IconUser } from "@tabler/icons-react";
import { div } from "framer-motion/client";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <div className="w-full max-w-xl min-h-screen mx-auto">
      <div className="w-full flex justify-center py-20 px-4 bg-white">
        <div className="max-w-3xl w-full">
          {/* Top heading */}
          <p className="text-center text-sm text-gray-500 mb-3">Contact Us</p>
          <h1 className="text-4xl font-bold text-center mb-2">
            Let’s Get In Touch.
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Or reach out manually at{" "}
            <a
              href="mailto:hello@sreejainteriors.com"
              className="text-blue-500 underline"
            >
              hello@sreejainteriors.com
            </a>
          </p>

          {/* FORM */}
          <form className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <div className="flex items-center gap-3 border bg-white rounded-xl px-4 py-3 shadow-sm">
                <IconUser size={20} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter your full name…"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <div className="flex items-center gap-3 border bg-white rounded-xl px-4 py-3 shadow-sm">
                <IconMail size={20} className="text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your email address…"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <div className="flex items-center gap-3 border bg-white rounded-xl px-4 py-3 shadow-sm">
                <IconPhone size={20} className="text-gray-500" />
                <input
                  type="tel"
                  placeholder="+91 0000 000 000"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                placeholder="Enter your message here…"
                maxLength={300}
                className="w-full border rounded-xl p-4 h-32 resize-none outline-none text-[15px] shadow-sm"
              />
              <p className="text-right text-sm text-gray-500">0/300</p>
            </div>

            {/* Privacy Checkbox */}
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="accent-blue-600 scale-110" />I
              hereby agree to the{" "}
              <a href="#" className="text-blue-500 underline">
                Privacy Policy
              </a>{" "}
              terms.
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-full font-medium hover:from-indigo-600 hover:to-blue-500 transition"
            >
              Submit Form →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

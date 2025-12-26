import React from "react";

const PersonalizeSpaceForm: React.FC = () => {
  return (
    <section className="bg-white w-full py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Ready To Personalize Your Space?
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-md">
            Our service is for people who believe in owning a safe, clean, and
            organized space. We promise that engaging with what we make will
            help you declutter your life.
          </p>
        </div>

        {/* FORM SECTION */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-gray-400 bg-transparent outline-none py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b border-gray-400 bg-transparent outline-none py-2"
            />
          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            className="border-b border-gray-400 bg-transparent outline-none py-2"
          />

          <input
            type="text"
            placeholder="Anything we should know?"
            className="border-b border-gray-400 bg-transparent outline-none py-2"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 font-medium mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PersonalizeSpaceForm;

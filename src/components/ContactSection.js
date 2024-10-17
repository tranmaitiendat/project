import React from "react";

const ContactSection = () => (
  <section className="py-12">
    <div className="container mx-auto flex space-x-12">
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <div className="flex items-center mb-4">
          <i className="fas fa-phone-alt text-orange-500 text-2xl mr-4"></i>
          <div>
            <h3 className="text-xl font-semibold">Call</h3>
            <p>03 9497 5429</p>
          </div>
        </div>
        <div className="flex items-center">
          <i className="fas fa-map-marker-alt text-orange-500 text-2xl mr-4"></i>
          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p>26 Seddon St, Ivanhoe VIC 3079</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-gray-900 text-white p-8 rounded">
        <h2 className="text-2xl font-bold mb-6">
          Reach out to learn more about our market research and buyer advocacy services.
        </h2>
        <form>
          {["First Name", "Last Name", "Email", "Message"].map((label, idx) => (
            <div className="mb-4" key={idx}>
              <label className="block text-sm font-medium" htmlFor={label.toLowerCase().replace(" ", "-")}>
                {label}
              </label>
              {label === "Message" ? (
                <textarea
                  id="message"
                  className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded"
                  rows="4"
                ></textarea>
              ) : (
                <input
                  type={label === "Email" ? "email" : "text"}
                  id={label.toLowerCase().replace(" ", "-")}
                  className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded"
                />
              )}
            </div>
          ))}
          <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;

import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <div className="flex flex-col md:flex-row md:justify-center">
        <div className="md:w-1/2 p-4">
          <form className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-2">Feel free to reach out to us via email or phone.</p>
          <p className="text-gray-600 mb-2">Email: contact@example.com</p>
          <p className="text-gray-600">Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

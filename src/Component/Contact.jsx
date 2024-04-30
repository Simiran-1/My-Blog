import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">
        We'd love to hear from you! Please feel free to reach out to us with any questions, comments, or feedback you may have.
      </p>
      <p className="text-lg mb-4">
        You can contact us via email at <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>, or fill out the form below.
      </p>
      <form className="mb-4">
        <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
        <input type="text" id="name" name="name" className="border rounded-md border-gray-300 px-3 py-2 w-full" />
        
        <label htmlFor="email" className="block text-lg font-bold mt-4 mb-2">Email</label>
        <input type="email" id="email" name="email" className="border rounded-md border-gray-300 px-3 py-2 w-full" />
        
        <label htmlFor="message" className="block text-lg font-bold mt-4 mb-2">Message</label>
        <textarea id="message" name="message" rows="4" className="border rounded-md border-gray-300 px-3 py-2 w-full"></textarea>
        
        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

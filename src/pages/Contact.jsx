import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen  py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto  shadow-lg rounded-2xl p-10">
        <h2 className="text-3xl font-bold text-center text-(--Dark_Mode_BG) mb-10">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--Dark_Mode_BG)"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--Dark_Mode_BG)"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--Dark_Mode_BG)"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-(--Dark_Mode_BG) hover:bg-[#6bb781] text-white py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-(--Dark_Mode_BG) mb-2">
                Our Office
              </h3>
              <p>123 Green Street, New City</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-(--Dark_Mode_BG) mb-2">
                Phone
              </h3>
              <p>+1 (555) 123-4567</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-(--Dark_Mode_BG) mb-2">
                Email
              </h3>
              <p>contact@clinic.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

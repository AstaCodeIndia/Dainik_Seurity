import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import Section from '../../components/Section';
import Button from '../../components/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // In a real application, you would send the form data to a server here
  //   console.log('Form submitted:', formData);
  //   setFormSubmitted(true);
  //   // Reset form after submission
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     service: '',
  //     message: '',
  //   });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    const response = await fetch('http://69.62.73.109:5000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      }),
    });

    const result = await response.json();
    alert(result.status || result.error);


  };
  const contactInfo = [
    {
      icon: <FiMapPin className="h-6 w-6" />,
      title: 'Our Location',
      details: ['Office no. 24 first floor Gausala market', 'Opp. Gurgaon bus stand', 'Gurgaon, Haryana'],
    },
    {
      icon: <FiPhone className="h-6 w-6" />,
      title: 'Phone Number',
      details: ['+91 92649 02846', '+91 98104 13896'],
    },
    {
      icon: <FiMail className="h-6 w-6" />,
      title: 'Email Address',
      details: ['mail@dainiksecurity.com'],
    },
    {
      icon: <FiClock className="h-6 w-6" />,
      title: 'Working Hours',
      details: ['Opened 24/7'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Have questions or need reliable security solutions? <br /> Contact the Dainik Security team today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            ) : null}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a Services</option>
                    <option value="Security Guard">Security Guard</option>
                    <option value="Gunman">Gunman</option>
                    <option value="Doorman">Doorman</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="Labor">Labor</option>
                    <option value="Typist Clerk">Typist Clerk</option>
                    <option value="Steno/Typist">Steno/Typist</option>
                    <option value="Driver/Peon">Driver/Peon</option>
                    <option value="Electrician">Electrician</option>
                    <option value="Liftman">Liftman</option>
                    <option value="Housekeeping">Housekeeping</option>
                    <option value="Plumber">Plumber</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        {item.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                      <div className="mt-1 text-gray-600">
                        {item.details.map((detail, i) => (
                          <p key={i}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;

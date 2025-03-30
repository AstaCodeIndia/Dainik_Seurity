import { Link } from 'react-router-dom';
// import { FiMonitor, FiSmartphone, FiLayout, FiTrendingUp } from 'react-icons/fi';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Card from '../../components/Card';
// import HomeImg from '../assets/Home_Img.jpeg';

const HomePage = () => {
  const services = [
    {
      id: 1,
      title: 'Security Guard',
      description:
        "Our highly trained security guards provide vigilant surveillance and protection for residential, commercial, and industrial properties, ensuring a secure environment.",
    },
    {
      id: 2,
      title: 'Supervisor',
      description:
        'We provide experienced security supervisors to oversee operations, ensuring compliance with security protocols and smooth management of security personnel.'
    },
    {
      id: 3,
      title: 'Typist Clerk',
      description:
        'For administrative support, our typist clerks are proficient in handling documentation, data entry, and office-related tasks with accuracy and efficiency.'
    },
    {
      id: 4,
      title: 'Driver/Peon',
      description:
        'We provide responsible drivers for safe transportation and peons for office assistance, ensuring smooth operations in your workplace.'
    },
  ];

  const clients = [
    {
      id: 1,
      name: 'Rajesh Mehta',
      tareef:
        "Danik Security has been a game-changer for our business. Their security guards are well-trained, disciplined, and highly professional. We feel much safer knowing they are protecting our premises around the clock.",
    },
    {
      id: 2,
      name: 'Pooja Sharma',
      tareef: "The housekeeping staff provided by Danik Security is outstanding. They maintain cleanliness with great attention to detail and professionalism. Our office space has never looked better!"
    },
    {
      id: 3,
      name: 'Vikram Joshi',
      tareef: "We needed reliable electricians for our residential complex, and Danik Security delivered. Their team is knowledgeable, prompt, and ensures all safety standards are met. Highly recommended!"
    },

  ];
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-4xl font-bold mb-6">
                Reliable Security Solutions for Your Peace of Mind
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                We provide top-tier security and workforce services to safeguard your business, property, and people.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-blue-700">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
              src='https://images.unsplash.com/photo-1743361380635-c71590fcba06?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt="Team working together"
                className="rounded-[20px] shadow-xl"
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section
        title="Who We Are"
        subtitle="A Team of Dedicated Professionals Committed to Your Security"
        className='content-center'
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4 text-gray-600">
              Established in 2010, Danik Security has been a trusted name in providing top-tier security and workforce solutions. We are committed to safeguarding businesses, institutions, and communities with reliability and excellence.
            </p>
            <p className="mb-6 text-gray-600">
              Our team of trained professionals brings a wealth of experience and expertise, ensuring a proactive approach to security and operational efficiency. With a focus on innovation and client satisfaction, we tailor our services to meet your unique needs.
            </p>
            <Link to="/about">
              <Button variant="outline">Learn More About Us</Button>
            </Link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Our team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section
        title="Our Services"
        className='content-center'
        bgColor="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} title={service.title}>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section title="What Our Clients Say" className='content-center'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client) => (
            <Card key={client.id} title={client.name}>
              <p className="text-gray-600">{client.tareef}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-blue-600" className="text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Premises?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Contact us today to discuss how our expert security solutions can help protect your business, property, and workforce.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-500">
              Contact Us
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default HomePage;

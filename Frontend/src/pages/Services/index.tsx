import { Link } from 'react-router-dom';
import { FiMonitor, FiSmartphone, FiLayout, FiTrendingUp, FiDatabase, FiShield, FiCloud, FiMessageCircle } from 'react-icons/fi';
import Section from '../../components/Section';
import Button from '../../components/Button';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Security Guard',
      description:
      "Our highly trained security guards provide vigilant surveillance and protection for residential, commercial, and industrial properties, ensuring a secure environment.",
      icon: <FiMonitor className="h-10 w-10" />
    },
    {
      id: 2,
      title: 'Gunman',
      description:"For high-risk security needs, our armed personnel are trained in firearm handling, threat assessment, and emergency response to ensure the utmost safety.",
            icon: <FiSmartphone className="h-10 w-10" />
    },
    {
      id: 3,
      title: 'Doorman',
      description:
        'Our professional doormen enhance the security and hospitality of your premises by managing access control and providing a welcoming yet secure presence.',
      icon: <FiLayout className="h-10 w-10" />
    },
    {
      id: 4,
      title: 'Supervisor',
      description:
        'We provide experienced security supervisors to oversee operations, ensuring compliance with security protocols and smooth management of security personnel.',
      icon: <FiTrendingUp className="h-10 w-10" />,
    },
    {
      id: 5,
      title: 'Labor',
      description:
        'Our reliable workforce includes skilled and unskilled labor for various industries, offering efficiency and productivity in day-to-day tasks.',
      icon: <FiCloud className="h-10 w-10" />
    },
    {
      id: 6,
      title: 'Typist Clerk',
      description:
        'For administrative support, our typist clerks are proficient in handling documentation, data entry, and office-related tasks with accuracy and efficiency.',
      icon: <FiDatabase className="h-10 w-10" />
    },
    {
      id: 7,
      title: 'Steno/Typist',
      description:
        'Our expert stenographers and typists assist in transcription, documentation, and correspondence, ensuring fast and accurate record-keeping.',
      icon: <FiShield className="h-10 w-10" />
    },
    {
      id: 8,
      title: 'Driver/Peon',
      description:
        'We provide responsible drivers for safe transportation and peons for office assistance, ensuring smooth operations in your workplace.',
      icon: <FiMessageCircle className="h-10 w-10" />
      
    },
    {
      id: 9,
      title: 'Electrician',
      description:
        'Our certified electricians handle electrical maintenance, repair, and installation work with safety and efficiency in mind.',
      icon: <FiMessageCircle className="h-10 w-10" />
      
    },
    {
      id: 10,
      title: 'Liftman',
      description:
        'Our trained lift operators ensure the smooth and safe operation of elevators in residential and commercial buildings.',
      icon: <FiMessageCircle className="h-10 w-10" />
      
    },
    {
      id: 11,
      title: 'Housekeeping',
      description:
        'We offer professional housekeeping services for commercial and residential spaces, ensuring cleanliness and hygiene standards are maintained.',
      icon: <FiMessageCircle className="h-10 w-10" />
      
    },
    {
      id: 12,
      title: 'Plumber',
      description:
        'Our skilled plumbers handle installations, repairs, and maintenance of plumbing systems, ensuring hassle-free water management solutions.',
      icon: <FiMessageCircle className="h-10 w-10" />
      
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
            Comprehensive Security & Workforce Solutions for Your Safety and Efficiency
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600">
          At Danik Security, we provide professional and reliable security solutions tailored to meet your specific needs. Our well-trained personnel ensure safety, protection, and efficiency in various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden p-8 border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 flex flex-col items-center md:items-start">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center md:text-left">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-gray-50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Secure Your Premises?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
          Contact us today to discuss how our expert security solutions can help protect your business, property, and workforce.
          </p>
          <Link to="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage;

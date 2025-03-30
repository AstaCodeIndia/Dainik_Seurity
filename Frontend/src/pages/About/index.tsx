import { FiUsers, FiTarget, FiAward, FiHeart } from 'react-icons/fi';
import Section from '../../components/Section';
import Card from '../../components/Card';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ranvijay Singh',
      title: 'Prop',
      image: "https://images.unsplash.com/photo-1743361676485-c7e94291fa8a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: 'Surendra prashad yadav',
      title: 'MD',
      image: 'https://images.unsplash.com/photo-1743361676542-0dbcb11c3d45?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
  ];

  const values = [
    {
      id: 1,
      title: 'Integrity & Trust',
      icon: <FiUsers className="h-8 w-8" />,
      description: 'We operate with honesty, transparency, and accountability, ensuring our clients can always rely on us.',
    },
    {
      id: 2,
      title: 'Excellence',
      icon: <FiAward className="h-8 w-8" />,
      description: 'Our team is trained to provide top-tier security services with discipline, expertise, and efficiency.',
    },
    {
      id: 3,
      title: 'Innovation',
      icon: <FiTarget className="h-8 w-8" />,
      description: 'We embrace modern security technologies and upgrade our strategies to stay ahead of evolving threats.',
    },
    {
      id: 4,
      title: 'Passion',
      icon: <FiHeart className="h-8 w-8" />,
      description: 'We are passionate about our work and committed to delivering the best possible outcomes for our clients.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Company
            </h1>
            <p className="text-xl text-gray-300">
              Learn about our journey, our mission, and the team behind our success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <Section title="Our Story" className='content-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Company office"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              Established in 2010, Danik Security has been a trusted name in providing top-tier security and workforce solutions. We are committed to safeguarding businesses, institutions, and communities with reliability and excellence. </p>
            <p className="text-gray-600 mb-4">
            Our team of trained professionals brings a wealth of experience and expertise, ensuring a proactive approach to security and operational efficiency. With a focus on innovation and client satisfaction, we tailor our services to meet your unique needs.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section
        title="Our Values"
        subtitle="The principles that guide everything we do"
        className='content-center'
        bgColor="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.id} title={value.title} icon={value.icon}>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section title="Our Team" subtitle="Meet the people behind our success">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 image-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6" >
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section centered bgColor="bg-blue-600" className="text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
            <div className="text-xl text-blue-100">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
            <div className="text-xl text-blue-100">Staff Members</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
            <div className="text-xl text-blue-100">Years of Experience</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
            <div className="text-xl text-blue-100">Client Satisfaction</div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;

import React, { useState, useEffect } from 'react';
import './Home.css';
import { ArrowRight, CheckCircle, TrendingUp, Clock, Users } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
}

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

const Home: React.FC = () => {
  const [visibleStats, setVisibleStats] = useState<number[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats: StatItem[] = [
    { value: '98%', label: 'Clean Claim Submission Rate' },
    { value: '30%', label: 'Average Increase in Revenue' },
    { value: '24/7', label: 'Dedicated Support' },
    { value: '40+', label: 'Specialties Supported' },
  ];

  const services: ServiceItem[] = [
    {
      title: 'Medical Billing',
      icon: <TrendingUp size={32} color="#2EE6D6" />,
      description: 'Maximize reimbursements with precision and accuracy.',
    },
    {
      title: 'Medical Coding',
      icon: <CheckCircle size={32} color="#2EE6D6" />,
      description: 'Ensure compliance and accuracy in every code.',
    },
    {
      title: 'RCM Services',
      icon: <Users size={32} color="#2EE6D6" />,
      description: 'End-to-end revenue optimization solutions.',
    },
    {
      title: 'Credentialing',
      icon: <CheckCircle size={32} color="#2EE6D6" />,
      description: 'Streamline provider enrollment and management.',
    },
    {
      title: 'Denial Management',
      icon: <TrendingUp size={32} color="#2EE6D6" />,
      description: 'Efficiently recover lost revenue and reduce denials.',
    },
    {
      title: 'AR Follow-up',
      icon: <Clock size={32} color="#2EE6D6" />,
      description: 'Proactive accounts receivable management.',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Medical Director, Metropolitan Clinic',
      content: 'Aromed transformed our billing process. We saw a 35% increase in revenue within the first quarter.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
    {
      name: 'James Rodriguez',
      role: 'Financial Manager, Heart & Wellness Center',
      content: 'Their attention to detail and customer support is unmatched. Highly recommended for any practice.',
      image: 'https://images.pexels.com/photos/304048/pexels-photo-304048.jpeg',
    },
    {
      name: 'Emily Chen',
      role: 'Practice Administrator, Premier Surgical Group',
      content: 'The most reliable billing partner we have had. Professional, efficient, and results-driven.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundPosition: `center ${scrollPosition * 0.5}px` }}>
        <div
          className="hero-background-img"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(26, 32, 44, 0.85) 0%, rgba(15, 23, 42, 0.85) 100%), url(https://images.pexels.com/photos/3936404/pexels-photo-3936404.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container hero-content">
          <h1 className="hero-headline">Revolutionizing Your Revenue Cycle with Expert Billing & Coding</h1>
          <p className="hero-subheadline">
            Aromed delivers unparalleled accuracy, efficiency, and compliance for healthcare providers nationwide.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="primary-btn">
              Get a Free Consultation
            </a>
            <a href="#services" className="secondary-btn">
              Explore Services <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section-padding">
        <div className="container stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item" onMouseEnter={() => setVisibleStats([...visibleStats, index])}>
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-overview section-padding" id="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services: Precision in Every Financial Step</h2>
            <p className="subtitle">
              Comprehensive solutions designed to accelerate your practice's financial performance.
            </p>
          </div>

          <div className="service-cards-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="read-more">
                  Learn More <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="why-choose-us-parallax section-padding"
        id="why-choose"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(26, 32, 44, 0.9) 100%), url(https://images.pexels.com/photos/3769710/pexels-photo-3769710.jpeg)`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container parallax-content">
          <h2>Why Partner With Aromed?</h2>
          <p>
            We combine deep industry expertise with cutting-edge technology to ensure meticulous accuracy and maximum
            compliance, turning your billing challenges into financial success.
          </p>
          <div className="why-choose-features">
            <div className="feature">
              <CheckCircle size={24} color="#2EE6D6" />
              <h4>Expert Team</h4>
              <p>Certified professionals with decades of combined experience</p>
            </div>
            <div className="feature">
              <TrendingUp size={24} color="#2EE6D6" />
              <h4>Proven Results</h4>
              <p>98% clean claim rate and 30% average revenue increase</p>
            </div>
            <div className="feature">
              <Clock size={24} color="#2EE6D6" />
              <h4>24/7 Support</h4>
              <p>Dedicated support team available round the clock</p>
            </div>
            <div className="feature">
              <Users size={24} color="#2EE6D6" />
              <h4>Partnership Approach</h4>
              <p>Your success is our success - true collaboration</p>
            </div>
          </div>
          <a href="#contact" className="primary-btn">
            Discover The Aromed Advantage
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section-padding" id="testimonials">
        <div className="container">
          <h2 className="section-header">Trusted By Healthcare Professionals</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section section-padding">
        <div className="container">
          <h2>Ready to Transform Your Practice's Financial Health?</h2>
          <p className="subtitle">Partner with Aromed Billing & Coding for a streamlined, profitable future.</p>
          <a href="#contact" className="primary-btn cta-large">
            Schedule Your Consultation Today
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;

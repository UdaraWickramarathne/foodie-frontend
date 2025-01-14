import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <div style={styles.container}>
      {/* Chef Image Section */}
      <div style={styles.imageSection}>
        <div style={styles.chefBadge}>Our Best Chef</div>
        <img
          src="src/assets/chef/chef.jpeg"
          alt="Best Chef"
          style={styles.chefImage}
        />
      </div>

      {/* Testimonial Text Section */}
      <div style={styles.textSection}>
        <h4 style={styles.testimonialHeading}>Testimonials</h4>
        <h2 style={styles.mainHeading}>What Our Customers Say About Us</h2>
        <p style={styles.testimonialText}>
          "I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable."
        </p>

        {/* Customer Feedback */}
        <div style={styles.feedbackSection}>
          <Link to="/feedback" style={styles.starRating}>
            <FaStar color="#FFD700" /> <span>4.9</span>
          </Link>
          <p style={styles.reviewsText}><Link to="/feedback">(18.6k Reviews)</Link></p>

          {/* Avatar List */}
          <div style={styles.avatarList}>
            <Link to="/feedback">
              <img
                src="src/assets/custo/cus4.jpeg"
                alt="Customer 1"
                style={styles.avatar}
              />
            </Link>
            <Link to="/feedback">
              <img
                src="src/assets/custo/cus3.jpg"
                alt="Customer 2"
                style={styles.avatar}
              />
            </Link>
            <Link to="/feedback">
              <img
                src="src/assets/custo/cus1.jpeg"
                alt="Customer 3"
                style={styles.avatar}
              />
            </Link>
            <Link to="/feedback">
              <img
                src="src/assets/custo/cus2.jpeg"
                alt="Customer 4"
                style={styles.avatar}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
    maxWidth: '1200px',
    margin: 'auto',
  },
  imageSection: {
    position: 'relative',
    marginRight: '30px',
  },
  chefImage: {
    borderRadius: '50%',
    width: '300px',
    height: 'auto',
    objectFit: 'cover',
  },
  chefBadge: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    backgroundColor: '#fff',
    padding: '10px 20px',
    borderRadius: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontWeight: 'bold',
  },
  textSection: {
    maxWidth: '600px',
  },
  testimonialHeading: {
    color: '#FF5A5F',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  mainHeading: {
    fontSize: '36px',
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginBottom: '20px',
  },
  testimonialText: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  feedbackSection: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  starRating: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    marginRight: '10px',
  },
  reviewsText: {
    fontSize: '16px',
    color: '#777',
    marginRight: '20px',
  },
  avatarList: {
    display: 'flex',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginLeft: '-10px',
    border: '2px solid #fff',
  },
};

export default Testimonials;
 
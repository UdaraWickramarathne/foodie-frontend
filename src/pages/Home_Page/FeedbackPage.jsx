import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FeedbackPage = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [picture, setPicture] = useState(null); // For storing the uploaded picture
  const [feedbackList, setFeedbackList] = useState([]);

  const navigate = useNavigate();

  // Load dummy feedback and feedback from localStorage when the page loads
  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || [];

    // Add dummy feedback with pictures
    const dummyFeedback = [
      { name: 'Mahee ayya', feedback: 'Supiriiiiiii.', rating: 5, picture: 'src/assets/custo/cus4.jpeg' },
      { name: 'John Doe', feedback: 'Great service, highly recommend!', rating: 3, picture: 'src/assets/custo/cus1.jpeg' },
      { name: 'Jane Smith', feedback: 'The food was delicious and well presented.', rating: 4, picture: 'src/assets/custo/cus2.jpeg' },
      { name: 'Anura Kumara', feedback: 'Very satisfied with the experience.', rating: 5, picture: 'src/assets/custo/cus3.jpg' },
    ];

    const combinedFeedback = [...dummyFeedback, ...storedFeedback];

    setFeedbackList(combinedFeedback);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = { name, feedback, rating, picture: picture || 'https://via.placeholder.com/100' };

    const updatedFeedbackList = [...feedbackList, newFeedback];

    localStorage.setItem('feedback', JSON.stringify(updatedFeedbackList));

    setFeedbackList(updatedFeedbackList);

    setName('');
    setFeedback('');
    setRating(5);
    setPicture(null);
  };

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (index) => {
    const updatedFeedbackList = feedbackList.filter((_, i) => i !== index);

    localStorage.setItem('feedback', JSON.stringify(updatedFeedbackList));
    setFeedbackList(updatedFeedbackList);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={i <= rating ? styles.starFilled : styles.starEmpty}>★</span>
      );
    }
    return stars;
  };

  return (
    <div style={styles.container}>
        <div style={styles.feedbackListContainer}>
        <h3>Customer Feedback</h3>
        <div style={styles.feedbackGrid}>
          {feedbackList.length > 0 ? (
            feedbackList.map((item, index) => (
              <div key={index} style={styles.feedbackItem}>
                <img src={item.picture} alt={item.name} style={styles.picture} />
                <p>"{item.feedback}"</p>
                <p><strong>- {item.name}</strong></p>
                <div>{renderStars(item.rating)} {item.rating}/5</div> {/* Display rating as stars */}
                <button style={styles.deleteButton} onClick={() => handleDelete(index)}>Delete</button>
              </div>
            ))
          ) : (
            <p>No feedback yet. Be the first to leave a review!</p>
          )}
        </div>
      </div>
      <div style={styles.formContainer}>
        <h2>Submit Your Feedback</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label>Your Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Your Feedback:</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              style={styles.textarea}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Your Rating (1-5):</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Upload Profile Picture:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePictureUpload}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.submitButton}>Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formContainer: {
    marginTop: '20px',
  },
  form: {
    marginBottom: '40px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedbackListContainer: {
    marginBottom: '40px',
    textAlign: 'center',
  },
  feedbackGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', // 5 items per row
    gap: '20px',
  },
  feedbackItem: {
    padding: '20px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  picture: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  starFilled: {
    color: '#FFD700',
    fontSize: '20px',
  },
  starEmpty: {
    color: '#ddd',
    fontSize: '20px',
  },
};

export default FeedbackPage;

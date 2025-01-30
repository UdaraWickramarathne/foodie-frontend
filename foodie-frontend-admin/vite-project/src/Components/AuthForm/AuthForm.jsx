import { useState } from 'react';
import './SignUp_LogIn_Form.css';

const AuthForm = ({ onLogin }) => {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Send request to backend API for validation
      const response = await axios.post('http://localhost:8080/login', {
        username: formData.username,
        password: formData.password
      });

      if (response.data.success) {
        setError('');
        onLogin(); // Call the onLogin function if login is successful
      } else {
        setError(response.data.message || 'Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      setError('');
      onLogin();
    } else {
      setError('Please fill all fields');
    }
  };

  return (
    <div className="auth-container">
      <div className={`container ${isActive ? 'active' : ''}`}>
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            {error && <div className="error-message">{error}</div>}
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                value={formData.username}
                onChange={handleInputChange}
              />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>
            {error && <div className="error-message">{error}</div>}
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                value={formData.username}
                onChange={handleInputChange}
              />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <button type="submit" className="btn">Register</button>
            <p>or register with social platforms</p>
            <div className="social-icons">
              {['google', 'facebook', 'github', 'linkedin'].map((icon) => (
                <a key={icon} href="#"><i className={`bx bxl-${icon}`}></i></a>
              ))}
            </div>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="btn register-btn" onClick={() => setIsActive(true)}>
              Register
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn login-btn" onClick={() => setIsActive(false)}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
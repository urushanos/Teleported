import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import GlobeCanvas from '../components/GlobeCanvas';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm]     = useState({ email: '', password: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError]   = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post('http://localhost:5000/api/auth/login', form);
      login(data.token, data.user);
      toast.success(`Welcome back, ${data.user.username}! 🌏`);
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <GlobeCanvas />
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="auth-logo">
          <span className="plane-icon">✈️</span>
          <h1>Teleported</h1>
          <p>Your travel dreams, mapped.</p>
        </div>

        <div className="auth-title">Welcome back</div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-input"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input
                className="form-input"
                name="password"
                type={showPwd ? 'text' : 'password'}
                placeholder="Your password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button type="button" className="eye-btn" onClick={() => setShowPwd(s => !s)}>
                {showPwd ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {error && <div className="form-error" style={{ marginBottom: 12 }}>{error}</div>}

          <button className="btn-gold" type="submit" disabled={loading} style={{ width: '100%', padding: '12px' }}>
            {loading ? 'Signing in…' : 'Sign In 🌏'}
          </button>
        </form>

        <div className="auth-divider">or</div>

        <div className="auth-footer">
          New to Teleported?{' '}
          <span
            style={{ color: 'var(--gold)', cursor: 'pointer', fontWeight: 600 }}
            onClick={() => navigate('/signup')}
          >
            Create an account
          </span>
        </div>
      </motion.div>
    </div>
  );
}

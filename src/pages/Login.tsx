import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, User, Lock, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !username || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
  
    try {
      const response = await fetch('https://fyet-2.onrender.com/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          username,
          password
        }),
      });
  
      const data = await response.json();
  
      console.log('Login response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
  
      // Assuming the response contains a token and user data
      // You might want to store the token in localStorage or context
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
  
      toast.success('Login successful');
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'An error occurred during login');
    } finally {
      setIsSubmitting(false);
    }
  };

  return <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-70 bg-orange-100"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-70 bg-orange-100"></div>
      </div>
      
      <div className="glass-morphism w-full max-w-md rounded-2xl p-8 z-10 animate-fade-in">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-2">Welcome back</h2>
          <p className="text-gray-500">Please enter your details to sign in</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="form-input-container">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
              <Mail size={18} />
            </div>
            <input type="email" id="email" placeholder=" " className="pl-10" value={email} onChange={e => setEmail(e.target.value)} />
            <label htmlFor="email">Email</label>
          </div>
          
          <div className="form-input-container">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
              <User size={18} />
            </div>
            <input type="text" id="username" placeholder=" " className="pl-10" value={username} onChange={e => setUsername(e.target.value)} />
            <label htmlFor="username">Username</label>
          </div>
          
          <div className="form-input-container">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
              <Lock size={18} />
            </div>
            <input type={isPasswordVisible ? "text" : "password"} id="password" placeholder=" " className="pl-10 pr-10" value={password} onChange={e => setPassword(e.target.value)} />
            <label htmlFor="password">Password</label>
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors" onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <label htmlFor="remember" className="text-gray-500">Remember me</label>
            </div>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Forgot password?</a>
          </div>
          
          <Button type="submit" disabled={isSubmitting} className="login-button w-full h-12 text-white rounded-xl font-medium transition-all duration-200 ease-in-out bg-orange-600 hover:bg-orange-500">
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </Button>
          
          <p className="text-center text-gray-500 text-sm mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-black hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
    </div>;
};
export default Login;
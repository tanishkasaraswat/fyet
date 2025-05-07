import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, User, Lock, Eye, EyeOff, Calendar, UserCircle, Image as ImageIcon, Tag } from 'lucide-react';
import { toast } from 'sonner';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !username || !password || !age || !role) {
      toast.error('Please fill in all required fields');
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Account created successfully!');
      navigate('/login');
    }, 1500);
  };
  return <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-70 bg-orange-100"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-70 bg-orange-100"></div>
      </div>
      
      <div className="glass-morphism w-full max-w-md rounded-2xl p-8 z-10 animate-fade-in">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-2">Create an account</h2>
          <p className="text-gray-500">Please enter your details to sign up</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center mb-4">
            <div className="relative cursor-pointer" onClick={handleAvatarClick}>
              <Avatar className="w-24 h-24 border-2 border-primary/10">
                {avatarPreview ? <AvatarImage src={avatarPreview} alt="Avatar preview" /> : <AvatarFallback className="bg-secondary">
                    <ImageIcon className="w-8 h-8 text-gray-400" />
                  </AvatarFallback>}
              </Avatar>
              <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full">
                <ImageIcon size={14} />
              </div>
              <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
            </div>
          </div>
          
          <div className="form-input-container">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
              <UserCircle size={18} />
            </div>
            <input type="text" id="fullName" placeholder=" " className="pl-10" value={fullName} onChange={e => setFullName(e.target.value)} />
            <label htmlFor="fullName">Full Name</label>
          </div>
          
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
          
          <div className="form-input-container">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
              <Calendar size={18} />
            </div>
            <input type="number" id="age" placeholder=" " className="pl-10" value={age} onChange={e => setAge(e.target.value)} min="1" max="120" />
            <label htmlFor="age">Age</label>
          </div>
          
          <div className="form-input-container">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
              <Tag size={18} />
            </div>
            <input type="text" id="role" placeholder=" " className="pl-10" value={role} onChange={e => setRole(e.target.value)} />
            <label htmlFor="role">Role (e.g. user, admin)</label>
          </div>
          
          <Button type="submit" disabled={isSubmitting} className="login-button w-full h-12 text-white rounded-xl font-medium transition-all duration-200 ease-in-out mt-2 bg-orange-600 hover:bg-orange-500">
            {isSubmitting ? 'Creating account...' : 'Create account'}
          </Button>
          
          <p className="text-center text-gray-500 text-sm mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-black hover:underline">Sign in</Link>
          </p>
        </form>
      </div>
    </div>;
};
export default SignUp;
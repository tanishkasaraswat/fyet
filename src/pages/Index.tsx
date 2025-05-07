import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Index = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full opacity-70 bg-orange-100"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full opacity-70 bg-orange-100"></div>
      </div>
      
      <div className={`z-10 text-center max-w-3xl transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full uppercase tracking-wide animate-pulse-slow">Welcome</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">Come and Join Us</h1>
        <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">Let's F.Y.E.T. from F.Y.E.T. for F.Y.E.T.</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/login">
            <Button className="login-button min-w-[160px] h-12 text-white rounded-xl font-medium transition-all duration-200 ease-in-out bg-orange-600 hover:bg-orange-500">
              Sign In
            </Button>
          </Link>
          <Button variant="outline" className="min-w-[160px] h-12 border-gray-300 hover:bg-gray-50 text-gray-900 rounded-xl font-medium transition-all duration-200 ease-in-out">
            Learn More
          </Button>
        </div>
      </div>
    </div>;
};
export default Index;
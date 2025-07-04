"use client"
import { useState } from "react";
import  Link from "next/link";
import { Eye, EyeOff, ArrowRight, Shield, Users, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { toast } from "sonner";
import axios from "axios";
import BACKEND_URL from "@/config/confit";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });
  

  const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault()
    const name = formData.name
    const email = formData.email
    const password = formData.password
    const confirmPassword = formData.confirmPassword

    if(confirmPassword != password){
        toast.error("password should be same")
        return
    }
    
    const response = await axios.post(`${BACKEND_URL}/user/signup`,{
        username : email,
        password
    })

   
    if(response.data.id){
        toast.success("you're signed up")
        router.push('/signin')
    }
    
    
    
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const features = [
    { icon: Users, text: "Join 50,000+ happy customers" },
    { icon: Globe, text: "Monitor websites globally" },
    { icon: Zap, text: "Get alerts in < 30 seconds" }
  ];

  return (
    <ThemeProvider defaultTheme="system" storageKey="uptimewatch-theme">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500 flex items-center justify-center p-4">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Sign Up Form */}
          <div className="animate-fade-in">
            <Card className="w-full max-w-md mx-auto bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in">
              <CardHeader className="space-y-1 text-center">
                <div className="mx-auto mb-4">
                  <Link href="/" className="inline-flex items-center space-x-2 text-xl font-bold text-slate-900 dark:text-slate-100 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span>UptimeWatch</span>
                  </Link>
                </div>
                
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Create your account
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  Start monitoring your websites today
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
                      required
                    />
                  </div>

                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <Label htmlFor="password" className="text-slate-700 dark:text-slate-300">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-200"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <Label htmlFor="confirmPassword" className="text-slate-700 dark:text-slate-300">Confirm Password</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-200"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                      className="border-slate-300 dark:border-slate-600"
                    />
                    <Label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400">
                      I agree to the{" "}
                      <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={!formData.acceptTerms}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 hover:scale-105 animate-fade-in group disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ animationDelay: '0.7s' }}
                  >
                    Create account
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </form>

                <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <p className="text-slate-600 dark:text-slate-400">
                    Already have an account?{" "}
                    <Link
                      href="/signin"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Features */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  Join thousands of
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                    happy customers
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  Start monitoring your websites and applications with our powerful uptime monitoring platform.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 animate-fade-in hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Live Status</span>
                </div>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">99.99% Uptime</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Last 30 days - All systems operational
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default SignUp;

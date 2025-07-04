"use client"
import { useState } from "react";
import Link  from "next/link";
import { Eye, EyeOff, ArrowRight, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import axios from "axios";
import BACKEND_URL from "@/config/confit";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useStore from "@/lib/isLoggedIn";


export default function Page(){
     const [showPassword, setShowPassword] = useState(false);
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const router = useRouter()
      const { isLoggedIn, verifyUser } = useStore()
      const [token,setToken] = useState('')
    
      // const handleSubmit = (e: React.FormEvent) => {
      //   e.preventDefault();
      //   // Handle sign in logic here
      //   console.log("Sign in with:", { email, password });
      // };
    const handleSubmit =async (e:React.FormEvent)=>{
      e.preventDefault()
      const username = email
      const code = password
      
      const response = axios.post(`${BACKEND_URL}/user/signin`,{
        username:email,
        password:code
      }).then((res)=>{
        if(res.status ==200){
          setToken(res.data.token)
          localStorage.setItem('token',res.data.token)
          verifyUser(true)
          console.log('signin',res.data.token)
          router.push('dashboard')
        }
      }).catch((e)=>{
        toast.error("some happens from backend side")
      }) 
      
     
      
    }
     return (
    <ThemeProvider defaultTheme="system" storageKey="uptimewatch-theme">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500 flex items-center justify-center p-4">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Branding */}
          <div className="hidden lg:block animate-fade-in">
            <div className="space-y-8">
              <div>
                <Link href="/" className="inline-flex items-center space-x-2 text-2xl font-bold text-slate-900 dark:text-slate-100 hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span>UptimeWatch</span>
                </Link>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  Welcome back to
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                    UptimeWatch
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  Monitor your websites and get instant alerts when things go wrong. Join thousands of developers who trust us.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="group p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Instant Alerts</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Get notified within seconds when your site goes down</p>
                </div>
                
                <div className="group p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">99.99% Uptime</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Reliable monitoring you can count on</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Sign In Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="w-full max-w-md mx-auto bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Sign in to your account
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  Enter your credentials to access your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

                  <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <Link
                      href="/"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 hover:scale-105 animate-fade-in group"
                    style={{ animationDelay: '0.6s' }}
                  >
                    Sign in
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </form>

                <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <p className="text-slate-600 dark:text-slate-400">
                    Don't have an account?{" "}
                    <Link
                      href="/signup"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
 </ThemeProvider>   
  );
}
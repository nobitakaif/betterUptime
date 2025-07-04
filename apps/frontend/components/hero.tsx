
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle2, Zap, Shield, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mb-6 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all duration-300 animate-scale-in">
            <Zap className="w-3 h-3 mr-1" />
            99.99% Uptime Guaranteed
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
            <span className="block text-slate-900 dark:text-slate-100">Monitor Your</span>
            <span className="block bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Website Uptime
            </span>
            <span className="block text-slate-900 dark:text-slate-100">Like a Pro</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Get instant alerts when your website goes down. Monitor performance, 
            track uptime, and keep your users happy with our powerful monitoring platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Monitoring Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-slate-500 dark:text-slate-400 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center transition-all duration-300 hover:scale-105">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
              30-day free trial
            </div>
            <div className="flex items-center transition-all duration-300 hover:scale-105">
              <Shield className="w-4 h-4 text-emerald-500 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center transition-all duration-300 hover:scale-105">
              <Globe className="w-4 h-4 text-emerald-500 mr-2" />
              Global monitoring network
            </div>
          </div>
        </div>

        {/* Hero Dashboard Preview */}
        <div className="mt-16 relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
              {/* Browser Header */}
              <div className="bg-slate-100 dark:bg-slate-700 px-4 py-3 flex items-center border-b dark:border-slate-600">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-white dark:bg-slate-600 rounded-md px-3 py-1 text-sm text-slate-600 dark:text-slate-300 inline-block">
                    app.uptimewatch.com
                  </div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">Uptime</h3>
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-3xl font-bold text-emerald-600">99.98%</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Last 30 days</div>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">Response Time</h3>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="text-3xl font-bold text-blue-600">127ms</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Average</div>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">Incidents</h3>
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    </div>
                    <div className="text-3xl font-bold text-orange-600">2</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">This month</div>
                  </div>
                </div>
                
                {/* Status Chart Placeholder */}
                <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Response Time Chart</h3>
                  <div className="h-32 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-lg flex items-end justify-between p-4">
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i}
                        className="bg-gradient-to-t from-emerald-500 to-blue-500 rounded-sm transition-all duration-300 hover:scale-110"
                        style={{ 
                          height: `${Math.random() * 80 + 20}%`,
                          width: '6%'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

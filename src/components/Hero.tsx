import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/90 text-sm">Trusted by 50,000+ customers</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Tech,
            <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Delivered Fast
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Discover the latest in technology with our curated collection of premium electronics. 
            From cutting-edge smartphones to professional-grade laptops.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur"
            >
              View Catalog
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-8 text-white/80">
            <div>
              <div className="text-2xl font-bold text-white">Free</div>
              <div className="text-sm">Shipping</div>
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <div>
              <div className="text-2xl font-bold text-white">2-Year</div>
              <div className="text-sm">Warranty</div>
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
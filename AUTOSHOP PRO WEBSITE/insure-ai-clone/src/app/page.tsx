"use client";

import { useState } from "react";
import {
  Check,
  Wrench,
  Sparkles,
  DollarSign,
  TrendingUp,
  ArrowRight,
  CloudUpload,
  Menu,
  X,
  Car,
  Upload,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
              <span className="text-xl font-bold">INSURE.AI</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#benefits" className="hover:text-primary transition-colors duration-300">
                Benefits
              </a>
              <a href="#how-it-works" className="hover:text-primary transition-colors duration-300">
                How It Works
              </a>
              <a href="#technologies" className="hover:text-primary transition-colors duration-300">
                Technologies
              </a>
              <a href="#features" className="hover:text-primary transition-colors duration-300">
                Key Features
              </a>
              <a href="#pricing" className="hover:text-primary transition-colors duration-300">
                Pricing
              </a>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="px-4 py-2 hover:text-primary transition-colors duration-300">
                CONTACT US
              </button>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300">
                LOGIN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-4 py-4 space-y-4">
              <a href="#benefits" className="block hover:text-primary transition-colors duration-300">
                Benefits
              </a>
              <a href="#how-it-works" className="block hover:text-primary transition-colors duration-300">
                How It Works
              </a>
              <a href="#technologies" className="block hover:text-primary transition-colors duration-300">
                Technologies
              </a>
              <a href="#features" className="block hover:text-primary transition-colors duration-300">
                Key Features
              </a>
              <a href="#pricing" className="block hover:text-primary transition-colors duration-300">
                Pricing
              </a>
              <button className="w-full px-4 py-2 text-left hover:text-primary transition-colors duration-300">
                CONTACT US
              </button>
              <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300">
                LOGIN
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-purple-600/30 via-purple-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-purple-500/20 to-transparent"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        {/* Scan Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="scanline absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" style={{ top: '20%' }}></div>
          <div className="scanline-2 absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" style={{ top: '50%' }}></div>
          <div className="scanline-3 absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" style={{ top: '80%' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <div className="relative inline-block">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  AI-Powered Car Damage Assessment in Minutes
                </h1>
                <div className="absolute -top-4 -right-12 bg-pink-500 text-white px-3 py-1 text-xs font-semibold rounded-full transform rotate-12">
                  Guaranteed Reliability
                </div>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Upload photos of your vehicle damage and get instant, accurate repair estimates powered by advanced AI technology. Trusted by thousands of drivers nationwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                  START FOR FREE
                </button>
                <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all duration-300">
                  HOW IT WORKS
                </button>
              </div>
            </div>

            {/* Right Side - Dashboard Preview */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl p-8 border border-primary/20 shadow-2xl shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6">AI Dashboard Preview</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Analysis Complete</div>
                      <div className="text-muted-foreground">Damage assessment ready</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Confidence Score</span>
                      <span className="font-semibold text-primary">98.5%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Processing Time</span>
                      <span className="font-semibold">2.3 seconds</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Parts Detected</span>
                      <span className="font-semibold">4 components</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="benefits" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Why Thousands of<br />Drivers Trust Us
            </h2>
            <div className="lg:max-w-md">
              <p className="text-muted-foreground mb-4">
                Experience the future of car damage assessment with our cutting-edge AI technology that delivers accurate results in seconds.
              </p>
              <a href="#pricing" className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300">
                VIEW PRICING <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature Card 1 */}
            <div className="group relative bg-card rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Instant Assessments</h3>
                <p className="text-muted-foreground">
                  Get comprehensive damage reports in under 3 seconds. Our AI analyzes photos instantly, identifying all damaged components with precision.
                </p>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative bg-card rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Accurate AI Analysis</h3>
                <p className="text-muted-foreground">
                  Powered by advanced machine learning trained on millions of damage cases. Our AI delivers 98.5% accuracy in damage detection and cost estimation.
                </p>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative bg-card rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Save Time and Money</h3>
                <p className="text-muted-foreground">
                  Skip the hassle of multiple shop visits. Get instant estimates and compare repair costs from certified service stations in your area.
                </p>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>

            {/* Feature Card 4 */}
            <div className="group relative bg-card rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Insurance-Approved Accuracy</h3>
                <p className="text-muted-foreground">
                  Trusted by major insurance providers. Our reports are accepted nationwide, streamlining your claims process and ensuring fair compensation.
                </p>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              3 Simple Steps to<br />Get Started
            </h2>
            <div className="lg:max-w-md">
              <p className="text-muted-foreground mb-4">
                From upload to approval, our streamlined process makes getting your car repaired easier than ever before.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300">
                GET IN TOUCH <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Step 1: Upload Photos */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="text-6xl font-bold text-primary/20 mb-4">01</div>
              <h3 className="text-3xl font-bold mb-4">Upload Photos</h3>
              <p className="text-muted-foreground text-lg">
                Simply drag and drop or click to upload clear photos of your vehicle damage from multiple angles. Our AI works best with 3-5 high-quality images showing the affected areas.
              </p>
            </div>
            <div className="relative">
              {/* Upload Interface Mockup */}
              <div className="bg-[#1f2128] rounded-2xl p-8 border-2 border-dashed border-primary/30 hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CloudUpload className="w-12 h-12 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Drag and Drop Photos of the Damage Here</h4>
                  <p className="text-muted-foreground">or click to browse</p>
                  <button className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300">
                    Select Files
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Get Instant Repair Estimates */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              {/* Car Damage Analysis Mockup */}
              <div className="bg-[#1f2128] rounded-2xl p-8 border border-primary/20">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold">Damage Analysis</h4>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                    Complete
                  </span>
                </div>

                {/* Car Image Placeholder */}
                <div className="relative bg-[#2a2d3a] rounded-xl p-8 mb-6">
                  <Car className="w-full h-32 text-primary/40" />
                  <div className="absolute top-12 left-16 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-16 right-20 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>

                {/* Damage Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center p-3 bg-[#2a2d3a] rounded-lg">
                    <span className="text-muted-foreground">Front</span>
                    <span className="font-semibold text-primary">$320.50</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#2a2d3a] rounded-lg">
                    <span className="text-muted-foreground">Left side</span>
                    <span className="font-semibold text-primary">$270.08</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#2a2d3a] rounded-lg">
                    <span className="text-muted-foreground">Back</span>
                    <span className="font-semibold text-primary">$200.00</span>
                  </div>
                </div>

                {/* Total Estimate */}
                <div className="border-t border-primary/20 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">Estimated amount</span>
                    <span className="text-2xl font-bold text-primary">$790.58</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-[#2a2d3a] rounded-lg">
                      <div className="text-muted-foreground text-sm">For review</div>
                      <div className="font-semibold">2 weeks</div>
                    </div>
                    <div className="p-3 bg-[#2a2d3a] rounded-lg">
                      <div className="text-muted-foreground text-sm">Damaged</div>
                      <div className="font-semibold">4 parts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-6xl font-bold text-primary/20 mb-4">02</div>
              <h3 className="text-3xl font-bold mb-4">Get Instant Repair Estimates</h3>
              <p className="text-muted-foreground text-lg">
                Our AI analyzes your photos and provides detailed repair cost estimates for each damaged component. See exactly what needs fixing and how much it will cost.
              </p>
            </div>
          </div>

          {/* Step 3: Approve Your Estimate */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl font-bold text-primary/20 mb-4">03</div>
              <h3 className="text-3xl font-bold mb-4">Approve Your Estimate</h3>
              <p className="text-muted-foreground text-lg">
                Review your comprehensive damage report, browse certified repair shops in your area, and approve your estimate to begin the repair process with confidence.
              </p>
            </div>
            <div>
              {/* Dashboard Mockup */}
              <div className="bg-[#1f2128] rounded-2xl p-8 border border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-[#2a2d3a] rounded-lg flex items-center justify-center">
                    <Car className="w-12 h-12 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">License Plate</div>
                    <div className="text-xl font-bold">NM-2546</div>
                    <div className="text-sm text-muted-foreground">Audi A4, 2008</div>
                  </div>
                </div>

                {/* Uploaded Photos Grid */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold mb-3">Uploaded Photos (8)</h5>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="aspect-square bg-[#2a2d3a] rounded-lg"></div>
                    ))}
                  </div>
                </div>

                {/* Repair Cost Breakdown */}
                <div className="bg-[#2a2d3a] rounded-lg p-4 mb-4">
                  <h5 className="text-sm font-semibold mb-3">Repair Cost Breakdown</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Parts</span>
                      <span>$590.58</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Labor</span>
                      <span>$200.00</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t border-primary/20">
                      <span>Total</span>
                      <span className="text-primary">$790.58</span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300">
                  Approve Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Simple Pricing for Every Driver
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your needs. All plans include our AI-powered damage assessment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>1 damage assessment per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Basic damage detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Email support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cost estimate range</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-card rounded-2xl p-8 border-2 border-primary shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$19.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>10 damage assessments per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Advanced AI analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Detailed cost breakdown</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Service station recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Insurance report export</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Business Plan */}
            <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Business</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$49.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Unlimited assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Premium AI analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>API access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>White-label options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Team management</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
                <span className="text-xl font-bold">INSURE.AI</span>
              </div>
              <p className="text-muted-foreground text-sm">
                AI-powered car damage assessment trusted by thousands of drivers nationwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h4 className="font-semibold mb-4">Policies</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    Facebook
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    X
                  </a>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">
                  helloinsure@gmail.com
                </li>
                <li className="text-muted-foreground">
                  +1341 987 3009
                </li>
                <li className="text-muted-foreground">
                  123 AI Street<br />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} INSURE.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

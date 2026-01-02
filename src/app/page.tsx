import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ROICalculator } from "@/components/roi-calculator";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-32 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Never Miss Another <span className="text-primary">Lead</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                AI-powered automation systems built specifically for auto repair and body shops. Answer every call, book appointments 24/7, and run your shop like a Fortune 500 company.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/50">
                  <Link href="#roi-calculator">See Your ROI</Link>
                </Button>
                <Button asChild size="lg" className="text-xl px-10 py-7 bg-primary text-slate-900 hover:bg-primary/90 font-black shadow-xl tracking-wide">
                  <Link href="/contact">BOOK A DEMO</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/30 bg-slate-900">
              <img
                src="https://ugc.same-assets.com/CBsQ5FpimEar7yVkQAbB1d7jXb7yjXLv.png"
                alt="AutoShop Pro Dashboard - AI-Driven Collision & Repair Operations Hub"
                className="w-full h-full object-contain object-center"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Your Shop is Losing <span className="text-primary">Money</span> Every Day
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-primary/20 bg-slate-800/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <CardTitle className="text-white">Missed Calls = Lost Revenue</CardTitle>
                <CardDescription className="text-gray-400">
                  30-40% of calls go to voicemail during business hours. Each missed call is a customer choosing your competitor instead.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 bg-slate-800/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-white">Manual Processes Waste Time</CardTitle>
                <CardDescription className="text-gray-400">
                  3-4 hours per day spent on admin work, appointment scheduling, and follow-ups. That's time you could spend growing your business.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 bg-slate-800/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <CardTitle className="text-white">No-Shows Hurt Your Bottom Line</CardTitle>
                <CardDescription className="text-gray-400">
                  20-30% no-show rate without automated reminders. Empty bays mean lost revenue and wasted time.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Introducing <span className="text-primary">AutoShop Pro</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A complete automation system that works like having a full front-office team—without the payroll.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/30 border border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all hover:shadow-xl hover:shadow-primary/20">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-yellow-600 text-slate-900 flex items-center justify-center mb-4 shadow-lg shadow-primary/50">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-white">24/7 AI Receptionist</CardTitle>
                <CardDescription className="text-base text-gray-400">
                  Answers calls, books appointments, answers questions about services and pricing, transfers complex calls when needed, and handles multiple calls simultaneously.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/30 border border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all hover:shadow-xl hover:shadow-primary/20">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-yellow-600 text-slate-900 flex items-center justify-center mb-4 shadow-lg shadow-primary/50">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-white">Smart Job Management</CardTitle>
                <CardDescription className="text-base text-gray-400">
                  Track every job from estimate to completion. Customer database with vehicle info, photo uploads, service notes, and real-time updates accessible on mobile and desktop.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/30 border border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all hover:shadow-xl hover:shadow-primary/20">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-yellow-600 text-slate-900 flex items-center justify-center mb-4 shadow-lg shadow-primary/50">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-white">Automated Follow-Ups</CardTitle>
                <CardDescription className="text-base text-gray-400">
                  Confirmation texts, appointment reminders, "ready for pickup" notifications, and review requests—all automatic. Never manually send another reminder.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi-calculator" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              See What Automation Could Add to Your Bottom Line
            </h2>
            <p className="text-xl text-gray-300">
              Most shops recover $30K-80K annually in missed revenue alone
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffffff]">
              Built for Auto Shops Like Yours
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <CardDescription className="text-base text-[#000000]">
                  "AutoShop Pro transformed our business. We went from missing 40% of calls to answering 100%. Our revenue is up 35% in just 3 months."
                </CardDescription>
                <CardTitle className="text-sm font-semibold mt-4">
                  Mike Rodriguez
                </CardTitle>
                <p className="text-sm text-gray-500">Owner, Metro Body Shop</p>
              </CardHeader>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <CardDescription className="text-base text-[#000000]">
                  "The automated follow-ups are a game-changer. Our no-show rate dropped from 25% to under 5%. That's real money back in our pockets."
                </CardDescription>
                <CardTitle className="text-sm font-semibold mt-4">
                  Sarah Chen
                </CardTitle>
                <p className="text-sm text-gray-500">Manager, Precision Auto Repair</p>
              </CardHeader>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <CardDescription className="text-base text-[#000000]">
                  "Best investment we've made. It's like having 3 extra employees but for a fraction of the cost. The ROI was obvious within the first month."
                </CardDescription>
                <CardTitle className="text-sm font-semibold mt-4">
                  James Thompson
                </CardTitle>
                <p className="text-sm text-gray-500">Owner, Elite Tire & Auto</p>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-300 mb-2">Trusted by auto shops nationwide</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="px-6 py-3 bg-slate-800 rounded-lg border border-primary/30 text-sm font-semibold text-gray-300">
                Auto Body Shops
              </div>
              <div className="px-6 py-3 bg-slate-800 rounded-lg border border-primary/30 text-sm font-semibold text-gray-300">
                Tire Centers
              </div>
              <div className="px-6 py-3 bg-slate-800 rounded-lg border border-primary/30 text-sm font-semibold text-gray-300">
                Repair Shops
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Modernize Your Shop?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Book a free 15-minute demo and see the system in action
          </p>
          <Button asChild size="lg" className="text-2xl px-16 py-8 bg-primary hover:bg-primary/90 text-white font-black shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all tracking-wider">
            <Link href="/contact">SCHEDULE YOUR DEMO</Link>
          </Button>
          <p className="mt-6 text-sm text-gray-400">
            No commitment. See exactly how it works for your shop.
          </p>
        </div>
      </section>
    </div>
  );
}

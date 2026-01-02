import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Complete Shop Operating System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to capture leads, manage jobs, and delight customers—in one platform
          </p>
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Feature 1
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                AI Voice Receptionist
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Answers every call 24/7 with natural conversation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Books appointments directly into your calendar</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Answers FAQs about services, pricing, and hours</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Transfers complex calls when needed</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Handles multiple calls simultaneously</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-lg h-[400px] overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20">
              <img
                src="https://ugc.same-assets.com/HOpTEa4sK9MqNDn5GZxUtrK287z4hgnq.png"
                alt="Leads & Calls Dashboard - AutoShop Pro"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-slate-900 rounded-lg h-[400px] overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20 order-2 lg:order-1 flex items-center justify-center">
              <img
                src="https://ugc.same-assets.com/SwyN_k3zdK0Vf_6EBBxp1QhM_tj8jOPj.png"
                alt="Automated SMS Communication - AutoShop Pro"
                className="h-full object-contain"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Feature 2
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Customer Communication Hub
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Dedicated business phone number</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>2-way SMS messaging with customers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Automated confirmation texts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Appointment reminder system</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>"Ready for pickup" notifications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Review request automation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Feature 3
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Job Management System
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Customer database with vehicle info</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Job tracking: Lead → Estimate → Scheduled → In Progress → Complete</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Photo uploads and service notes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Mobile and desktop access</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Real-time updates for your team</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-lg h-[400px] overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20">
              <img
                src="https://ugc.same-assets.com/rBDny-YEkNe8DRtGqGKDbt91qxLeuuIp.png"
                alt="Estimates & Work Orders Dashboard - AutoShop Pro"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-lg overflow-hidden h-[400px] order-2 lg:order-1 bg-slate-900">
              <img
                src="https://ugc.same-assets.com/Bh7BKLu_k7CRwGtPI5Z_kc2mS8KDo9vW.png"
                alt="Website Integration - Contact Form"
                className="w-full h-full object-fill"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Feature 4
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Website Integration
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Online estimate request forms</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Instant lead capture</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Automatic job creation from web forms</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Google Calendar sync</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Unified dashboard for all activity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Customer Journey
            </h2>
            <p className="text-xl text-gray-600">
              From first contact to completed service, everything is automated
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Customer Calls or Submits Form</h3>
                  <p className="text-sm text-gray-600">Lead enters your system</p>
                </CardContent>
              </Card>

              <div className="hidden md:flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">AI Answers & Books</h3>
                  <p className="text-sm text-gray-600">Appointment scheduled instantly</p>
                </CardContent>
              </Card>

              <div className="hidden md:flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Auto Confirmations</h3>
                  <p className="text-sm text-gray-600">Reminders sent automatically</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 max-w-2xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Job Tracked</h3>
                  <p className="text-sm text-gray-600">From start to completion</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    5
                  </div>
                  <h3 className="font-semibold mb-2">Review Request</h3>
                  <p className="text-sm text-gray-600">Sent automatically after pickup</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a 15-minute demo and we'll show you exactly how AutoShop Pro works for your business
          </p>
          <Button asChild size="lg" className="text-2xl px-16 py-8 bg-primary hover:bg-primary/90 text-white font-black shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all tracking-wider">
            <Link href="/contact">BOOK YOUR DEMO</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

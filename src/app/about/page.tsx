import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Built by Auto Industry Insiders
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand your business because we've lived it
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  I've worked with dozens of auto shops over the years, and I kept seeing the same problems everywhere. Great mechanics running successful businesses were losing thousands of dollars every month to something completely preventable: missed calls.
                </p>

                <p>
                  Shop owners would tell me the same story: "We're slammed during the day. When someone calls and we're under a car or dealing with a customer, it goes to voicemail. By the time we call them back, they've already booked with someone else."
                </p>

                <p>
                  Most shops were using five different tools—one for scheduling, one for texting, one for managing customers, one for their website, and another for tracking jobs. And they were STILL missing leads and wasting hours on manual admin work.
                </p>

                <p>
                  I built AutoShop Pro to solve this problem once and for all. The goal was simple: give independent shop owners the same technology advantages that only big chains could afford, but at a price that makes sense for a small business.
                </p>

                <p>
                  Today, we work with shops across the country helping them capture every lead, automate their busywork, and compete with the big guys. Every shop is different, so every system we build is custom-tailored to how that specific business operates.
                </p>

                <p className="font-semibold text-gray-900">
                  We're not a software company selling to auto shops. We're auto industry people who happen to build software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Give every auto shop owner the tools to compete with the big guys—without the enterprise price tag.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center bg-gray-50 border-2">
              <CardHeader className="pt-8">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <CardTitle className="text-2xl mb-4">Built for Auto Shops</CardTitle>
                <CardDescription className="text-base">
                  We're not generic software trying to work for every industry. We only work with auto shops, so every feature is designed specifically for your business.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-gray-50 border-2">
              <CardHeader className="pt-8">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl mb-4">Transparent Pricing</CardTitle>
                <CardDescription className="text-base">
                  No hidden fees, no surprise charges, no bait-and-switch. We tell you exactly what it costs upfront, and that's what you pay. Period.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-gray-50 border-2">
              <CardHeader className="pt-8">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl mb-4">Real Support</CardTitle>
                <CardDescription className="text-base">
                  When you call us, a real person answers. No phone trees, no ticket systems, no waiting 48 hours for an email response. We actually answer the phone.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team/Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              How We Work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">We Listen First</h3>
                    <p className="text-gray-600">
                      Every shop is different. We start by understanding how YOUR business works, not forcing you into our template.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Custom Build</h3>
                    <p className="text-gray-600">
                      We build your system from scratch, tailored to your specific workflow, services, and customer base.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">White Glove Setup</h3>
                    <p className="text-gray-600">
                      We handle everything—setup, testing, training, and launch. You don't lift a finger.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Ongoing Partnership</h3>
                    <p className="text-gray-600">
                      We don't disappear after launch. Monthly check-ins, continuous improvements, and real support when you need it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Results Focused</h3>
                    <p className="text-gray-600">
                      We track what matters: calls answered, revenue captured, time saved. Your success is our success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">No Surprises</h3>
                    <p className="text-gray-600">
                      Clear pricing, realistic timelines, honest communication. We do what we say we'll do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to see how AutoShop Pro can transform your business?
          </p>
          <Button asChild size="lg" className="text-2xl px-16 py-8 bg-primary hover:bg-primary/90 text-white font-black shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all tracking-wider">
            <Link href="/contact">BOOK YOUR DEMO</Link>
               </Button>
        </div>
      </section>
    </div>
  );
}

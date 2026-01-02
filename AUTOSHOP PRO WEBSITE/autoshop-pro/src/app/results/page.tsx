import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResultsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Real Shops. Real Results.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how auto businesses are using AutoShop Pro to grow revenue and save time
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">

            {/* Case Study 1 */}
            <Card className="overflow-hidden border-2">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gray-100 h-64 lg:h-auto flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Metro Body Shop</p>
                  </div>
                </div>
                <CardHeader className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">Metro Body Shop</h3>
                    <p className="text-gray-600">Phoenix, Arizona</p>
                  </div>

                  <CardTitle className="text-xl mb-4">The Challenge</CardTitle>
                  <CardDescription className="text-base mb-6">
                    Missing 40% of inbound calls, no systematic follow-up process, and struggling to compete with larger chain shops in the area.
                  </CardDescription>

                  <CardTitle className="text-xl mb-4">Results After 90 Days</CardTitle>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">95%</div>
                      <div className="text-sm text-gray-700">Call Answer Rate</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">$42K</div>
                      <div className="text-sm text-gray-700">Additional Revenue</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">3 hrs</div>
                      <div className="text-sm text-gray-700">Daily Time Saved</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">23</div>
                      <div className="text-sm text-gray-700">New Google Reviews</div>
                    </div>
                  </div>
                </CardHeader>
              </div>
            </Card>

            {/* Case Study 2 */}
            <Card className="overflow-hidden border-2">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gray-100 h-64 lg:h-auto flex items-center justify-center order-2 lg:order-1">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Precision Auto Repair</p>
                  </div>
                </div>
                <CardHeader className="p-8 order-1 lg:order-2">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">Precision Auto Repair</h3>
                    <p className="text-gray-600">Denver, Colorado</p>
                  </div>

                  <CardTitle className="text-xl mb-4">The Challenge</CardTitle>
                  <CardDescription className="text-base mb-6">
                    High no-show rate costing thousands per month, inconsistent customer communication, and owner spending too much time on admin work instead of growing the business.
                  </CardDescription>

                  <CardTitle className="text-xl mb-4">Results After 90 Days</CardTitle>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">82%</div>
                      <div className="text-sm text-gray-700">Reduction in No-Shows</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">$38K</div>
                      <div className="text-sm text-gray-700">Recovered Revenue</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">4.2 hrs</div>
                      <div className="text-sm text-gray-700">Daily Time Saved</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">100%</div>
                      <div className="text-sm text-gray-700">Lead Capture Rate</div>
                    </div>
                  </div>
                </CardHeader>
              </div>
            </Card>

            {/* Case Study 3 */}
            <Card className="overflow-hidden border-2">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gray-100 h-64 lg:h-auto flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Elite Tire & Auto</p>
                  </div>
                </div>
                <CardHeader className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">Elite Tire & Auto</h3>
                    <p className="text-gray-600">Tampa, Florida</p>
                  </div>

                  <CardTitle className="text-xl mb-4">The Challenge</CardTitle>
                  <CardDescription className="text-base mb-6">
                    Growing shop struggling to keep up with demand, losing weekend calls, and couldn't afford to hire additional front office staff.
                  </CardDescription>

                  <CardTitle className="text-xl mb-4">Results After 90 Days</CardTitle>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                      <div className="text-sm text-gray-700">Coverage Achieved</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">$51K</div>
                      <div className="text-sm text-gray-700">Additional Revenue</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">67%</div>
                      <div className="text-sm text-gray-700">More Weekend Bookings</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">35</div>
                      <div className="text-sm text-gray-700">5-Star Reviews Added</div>
                    </div>
                  </div>
                </CardHeader>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Average Results Across All Shops
            </h2>
            <p className="text-xl text-gray-600">
              Real data from shops using AutoShop Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center bg-white">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-primary mb-2">87%</div>
                <div className="text-lg font-semibold mb-2">Reduction</div>
                <p className="text-gray-600">in missed calls</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-primary mb-2">$38K</div>
                <div className="text-lg font-semibold mb-2">Average Annual</div>
                <p className="text-gray-600">revenue increase</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-primary mb-2">2.8</div>
                <div className="text-lg font-semibold mb-2">Hours Saved</div>
                <p className="text-gray-600">per day on admin work</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-primary mb-2">43%</div>
                <div className="text-lg font-semibold mb-2">Reduction</div>
                <p className="text-gray-600">in no-shows</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 italic">
              Data compiled from shops using AutoShop Pro for 90+ days
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Shop Owners Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <CardDescription className="text-base text-gray-700">
                  "The ROI was immediate. Within the first month we captured $15K in calls that would have gone to voicemail. This system paid for itself in week three."
                </CardDescription>
                <CardTitle className="text-sm font-semibold mt-4">
                  Mike Rodriguez
                </CardTitle>
                <p className="text-sm text-gray-500">Owner, Metro Body Shop</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <CardDescription className="text-base text-gray-700">
                  "I can finally take a day off without worrying about missed calls. The AI handles everything perfectly, and my customers love the instant responses."
                </CardDescription>
                <CardTitle className="text-sm font-semibold mt-4">
                  Sarah Chen
                </CardTitle>
                <p className="text-sm text-gray-500">Manager, Precision Auto Repair</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <CardDescription className="text-base text-gray-700">
                  "We're competing with corporate chains now. Our customers can't tell the difference between our AI and a live person, and we're booking more appointments than ever."
                </CardDescription>
                <CardTitle className="text-sm font-semibold mt-4">
                  James Thompson
                </CardTitle>
                <p className="text-sm text-gray-500">Owner, Elite Tire & Auto</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become Our Next Success Story
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            See how AutoShop Pro can transform your business in the next 90 days
          </p>
          <Button asChild size="lg" className="text-2xl px-16 py-8 bg-primary hover:bg-primary/90 text-white font-black shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all tracking-wider">
            <Link href="/contact">BOOK YOUR DEMO</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

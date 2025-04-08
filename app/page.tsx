import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  CheckCircle,
  ChevronRight,
  CreditCard,
  Download,
  FileText,
  Gift,
  Globe,
  Laptop,
  LifeBuoy,
  Mail,
  MessageSquare,
  PhoneIcon as MobilePhone,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">GyaanGlitch</span>
            <span className="text-sm text-muted-foreground">ज्ञान में ट्विस्ट</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#courses" className="text-sm font-medium hover:text-primary">
              Courses
            </Link>
            <Link href="#why" className="text-sm font-medium hover:text-primary">
              Why Us
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Badge className="mb-4" variant="outline">
                Learn New Skills. Earn New Opportunities.
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                <span className="text-primary">GyaanGlitch</span> – ज्ञान में ट्विस्ट
              </h1>
              <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground">
                Your one-stop platform for practical, high-quality, and career-boosting courses — created for students,
                freelancers, entrepreneurs, and dreamers like you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="gap-2">
                  Explore Courses <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Learn More <BookOpen className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center text-sm text-muted-foreground">
                <MobilePhone className="h-4 w-4 mr-2" />
                <span>
                  Learn from the comfort of your home, in your own language (Hindi + English), at your own pace.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why GyaanGlitch Section */}
        <section id="why" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why GyaanGlitch?</h2>
              <p className="text-muted-foreground max-w-[700px]">
                We've designed our platform with your success in mind. Here's what makes us different.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6 text-primary" />,
                  title: "Step-by-step beginner to pro",
                  description:
                    "Our courses are structured to take you from zero knowledge to professional level skills.",
                },
                {
                  icon: <Download className="h-6 w-6 text-primary" />,
                  title: "Lifetime access",
                  description: "Buy once, access forever. Your courses will always be available when you need them.",
                },
                {
                  icon: <Laptop className="h-6 w-6 text-primary" />,
                  title: "Real-world projects",
                  description:
                    "Learn by doing with practical projects that build your portfolio and demonstrate your skills.",
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Trusted instructors",
                  description: "Learn from experienced professionals with proven expertise in their fields.",
                },
                {
                  icon: <MobilePhone className="h-6 w-6 text-primary" />,
                  title: "100% mobile & desktop friendly",
                  description: "Our platform works seamlessly on all devices, so you can learn anywhere.",
                },
                {
                  icon: <Globe className="h-6 w-6 text-primary" />,
                  title: "Learn anytime, anywhere",
                  description: "No schedules, no pressure. Learn at your own pace, whenever it suits you.",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Courses We Offer</h2>
              <p className="text-muted-foreground max-w-[700px]">
                Expand your skills with our comprehensive range of courses designed to help you succeed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: "Forex & Stock Market Trading",
                  description:
                    "From Basics to Pro: Learn how to analyze markets, manage risk, and build a profitable trading strategy.",
                  popular: true,
                },
                {
                  icon: <Laptop className="h-6 w-6" />,
                  title: "Web Development",
                  description:
                    "Master HTML, CSS, JavaScript, and React to build modern, responsive websites and web applications.",
                  popular: false,
                },
                {
                  icon: <MobilePhone className="h-6 w-6" />,
                  title: "App Development",
                  description:
                    "Create native Android and iOS applications using the latest technologies and frameworks.",
                  popular: false,
                },
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "Digital Marketing Mastery",
                  description: "Learn SEO, social media marketing, content creation, and paid advertising strategies.",
                  popular: true,
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Freelancing & Earning from Home",
                  description:
                    "Build a successful freelance career with client acquisition, project management, and pricing strategies.",
                  popular: false,
                },
                {
                  icon: <Star className="h-6 w-6" />,
                  title: "Mindset & Productivity Courses",
                  description: "Develop the mental frameworks and habits that lead to success in any field.",
                  popular: false,
                },
              ].map((course, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center">
                      <div className="p-4 rounded-full bg-background/90">{course.icon}</div>
                    </div>
                    {course.popular && (
                      <Badge className="absolute top-3 right-3" variant="secondary">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        <span>1000+ students</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button size="lg" className="gap-2">
                View All Courses <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Payment Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure Payments – Start Learning Instantly</h2>
              <p className="text-muted-foreground max-w-[700px]">
                We've made it super easy and secure for you to purchase courses and start your learning journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 mt-1">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Payment Gateway Integrated</h3>
                    <p className="text-muted-foreground mb-4">
                      Our secure payment system supports multiple payment methods for your convenience.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>UPI (PhonePe, Google Pay)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Debit/Credit Card</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Net Banking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Wallets</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 mt-1">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">After Payment</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Instant course access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Invoice with GST</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Email confirmation and support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-8 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Limited Time Offer!</h3>
                  <Badge variant="destructive">30% OFF</Badge>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-primary" />
                    <span>Flat 30% OFF on your first course</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <span>
                      Use Code: <span className="font-semibold">GYAN30</span> at checkout
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Bonus: FREE eBook with every course</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Claim Offer Now
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Offer valid for a limited time only. Terms and conditions apply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
              <p className="text-muted-foreground max-w-[700px]">
                Don't just take our word for it. Hear from our students who have transformed their skills and careers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Rohit",
                  location: "Delhi",
                  quote:
                    "Best Hindi + English courses I've ever taken. So practical and easy to follow. The step-by-step approach made complex topics simple to understand.",
                  rating: 5,
                },
                {
                  name: "Ayesha",
                  location: "Mumbai",
                  quote:
                    "I started freelancing after learning from GyaanGlitch! The courses provided me with practical skills that I could immediately apply to real-world projects.",
                  rating: 5,
                },
                {
                  name: "Vikram",
                  location: "Bangalore",
                  quote:
                    "The trading course helped me understand the market in ways I never thought possible. Now I have a consistent strategy that works.",
                  rating: 4,
                },
                {
                  name: "Priya",
                  location: "Hyderabad",
                  quote:
                    "The digital marketing course was comprehensive and up-to-date. I've been able to grow my business's online presence significantly.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                    </div>
                    <p className="italic mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Level Up?</h2>
              <p className="max-w-[700px] text-primary-foreground/80">
                Start today and turn your passion into income. Your knowledge is your asset. Invest in it wisely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" variant="secondary" className="gap-2">
                  Explore Courses <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Buy & Learn Now <CreditCard className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Chat with Support <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t bg-background">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <span className="text-primary">GyaanGlitch</span>
                <span className="text-sm text-muted-foreground">ज्ञान में ट्विस्ट</span>
              </div>
              <p className="text-muted-foreground">
                Your one-stop platform for practical, high-quality, and career-boosting courses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#courses" className="text-muted-foreground hover:text-primary">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#why" className="text-muted-foreground hover:text-primary">
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-primary">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>support@gyaanglitch.com</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Support</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <LifeBuoy className="h-4 w-4" />
                  <span>Help Center</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GyaanGlitch. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

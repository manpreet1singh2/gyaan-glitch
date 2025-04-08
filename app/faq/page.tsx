import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqs = {
    general: [
      {
        question: "What is GyaanGlitch?",
        answer:
          "GyaanGlitch is an online learning platform that offers high-quality courses in various domains including web development, digital marketing, stock trading, and more. Our courses are designed to help you learn practical skills that can boost your career or business.",
      },
      {
        question: "How do I create an account?",
        answer:
          "Creating an account is simple. Click on the 'Sign Up' button at the top right corner of the homepage. Fill in your details like name, email, and password. Verify your email address through the link sent to your inbox, and you're ready to start learning!",
      },
      {
        question: "Are the courses available in Hindi?",
        answer:
          "Yes, most of our courses are available in both Hindi and English. You can choose your preferred language when enrolling in a course. Some courses may also offer subtitles in multiple languages.",
      },
      {
        question: "Can I access the courses on mobile devices?",
        answer:
          "Our platform is fully responsive and works seamlessly on smartphones, tablets, and desktop computers. You can download our mobile app from the App Store or Google Play Store for an optimized mobile learning experience.",
      },
      {
        question: "Do you offer any free courses?",
        answer:
          "Yes, we offer several free introductory courses to help you get started. Additionally, most paid courses have free preview lessons that you can access before making a purchase decision.",
      },
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept various payment methods including credit/debit cards, UPI (PhonePe, Google Pay, Paytm), net banking, and digital wallets. All payments are processed securely through our payment gateway.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "Yes, we offer a 30-day money-back guarantee for most courses. If you're not satisfied with the course content, you can request a refund within 30 days of purchase. Please note that certain conditions may apply.",
      },
      {
        question: "Do you offer any discounts?",
        answer:
          "Yes, we regularly offer discounts and special promotions. New users can get 30% off on their first course using the code 'GYAN30'. We also have seasonal sales and bundle offers. Subscribe to our newsletter to stay updated on the latest deals.",
      },
      {
        question: "Can I pay in installments?",
        answer:
          "Yes, for selected premium courses, we offer EMI options through partner banks. The EMI details will be displayed on the checkout page if available for your chosen course.",
      },
      {
        question: "Will I get an invoice for my purchase?",
        answer:
          "Yes, an invoice with GST details will be automatically generated and sent to your registered email address after successful payment.",
      },
    ],
    courses: [
      {
        question: "How long do I have access to a course after purchase?",
        answer:
          "Once you purchase a course, you have lifetime access to it. This includes all future updates and additional materials that may be added to the course.",
      },
      {
        question: "Can I download the course videos for offline viewing?",
        answer:
          "Yes, our mobile app allows you to download videos for offline viewing. This feature is particularly useful when you have limited internet connectivity or are traveling.",
      },
      {
        question: "Do I get a certificate after completing a course?",
        answer:
          "Yes, upon successful completion of a course, you will receive a certificate of completion. This certificate can be shared on your LinkedIn profile or added to your resume.",
      },
      {
        question: "What if I have questions during the course?",
        answer:
          "Each course has a discussion forum where you can ask questions and interact with instructors and fellow students. For premium courses, you may also have direct access to the instructor through scheduled Q&A sessions.",
      },
      {
        question: "Are there any assignments or projects in the courses?",
        answer:
          "Yes, most courses include practical assignments, quizzes, and projects to help you apply what you've learned. These hands-on exercises are designed to reinforce your understanding and build your portfolio.",
      },
    ],
    technical: [
      {
        question: "What are the technical requirements for accessing the courses?",
        answer:
          "You need a computer or mobile device with an internet connection. Our platform works best on updated browsers like Chrome, Firefox, Safari, or Edge. For coding courses, specific software requirements will be mentioned in the course description.",
      },
      {
        question: "I'm having trouble playing videos. What should I do?",
        answer:
          "First, check your internet connection and try refreshing the page. Make sure your browser is updated to the latest version. If the issue persists, try clearing your browser cache or using a different browser. If none of these solutions work, please contact our support team.",
      },
      {
        question: "How do I reset my password?",
        answer:
          "Click on the 'Login' button, then select 'Forgot Password'. Enter your registered email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password.",
      },
      {
        question: "Can I change my email address or username?",
        answer:
          "Yes, you can update your email address and other profile information from your account settings. However, your username cannot be changed once created.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Yes, we take data security very seriously. We use industry-standard encryption to protect your personal and payment information. Our privacy policy details how we collect, use, and protect your data.",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Find answers to common questions about GyaanGlitch, our courses, payment options, and more.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <Tabs defaultValue="general" className="space-y-8">
          <TabsList className="w-full justify-start overflow-auto">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="payment">Payment & Pricing</TabsTrigger>
            <TabsTrigger value="courses">Courses & Content</TabsTrigger>
            <TabsTrigger value="technical">Technical Support</TabsTrigger>
          </TabsList>

          {Object.entries(faqs).map(([category, questions]) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                {questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Still Have Questions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex flex-col items-center gap-2">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  Live Chat
                </CardTitle>
                <CardDescription>Chat with our support team</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Get instant answers to your questions through our live chat support.
                </p>
                <Button>Start Chat</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex flex-col items-center gap-2">
                  <Mail className="h-8 w-8 text-primary" />
                  Email Support
                </CardTitle>
                <CardDescription>Send us an email</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Email us your questions and we'll respond within 24 hours.</p>
                <Button variant="outline">support@gyaanglitch.com</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex flex-col items-center gap-2">
                  <Phone className="h-8 w-8 text-primary" />
                  Phone Support
                </CardTitle>
                <CardDescription>Call our helpline</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Available Monday to Friday, 9 AM to 6 PM IST.</p>
                <Button variant="outline">+91 1234567890</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our wide range of courses and take the first step towards mastering new skills.
          </p>
          <Button size="lg" asChild>
            <Link href="/">Browse Courses</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

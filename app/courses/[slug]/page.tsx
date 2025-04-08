import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  Laptop,
  Play,
  Star,
  Users,
  MessageSquare,
  BadgeIcon as Certificate,
  Download,
} from "lucide-react"
import Link from "next/link"

// This would typically come from a database
const getCourseData = (slug: string) => {
  return {
    title: "Web Development Masterclass",
    subtitle: "Learn HTML, CSS, JavaScript, React and Node.js",
    description:
      "A comprehensive course to take you from beginner to professional web developer. Learn front-end and back-end technologies with practical projects.",
    price: 4999,
    discountedPrice: 3499,
    rating: 4.8,
    reviewCount: 1245,
    studentCount: 12500,
    instructor: {
      name: "Rahul Sharma",
      title: "Senior Web Developer",
      bio: "10+ years of experience in web development and teaching. Worked with companies like Google, Microsoft and Amazon.",
      image: "/placeholder.svg?height=100&width=100",
    },
    duration: "40 hours",
    lectures: 120,
    level: "Beginner to Advanced",
    lastUpdated: "March 2025",
    language: "Hindi & English",
    features: [
      "Lifetime access to 120+ lectures",
      "40+ hours of HD video content",
      "15 real-world projects",
      "Certificate of completion",
      "Access on mobile and desktop",
      "Source code and resources",
      "24/7 support",
    ],
    curriculum: [
      {
        title: "Introduction to Web Development",
        lectures: 8,
        duration: "2 hours",
        topics: [
          "Understanding the Web",
          "How Browsers Work",
          "Setting Up Your Development Environment",
          "Introduction to HTML, CSS and JavaScript",
        ],
      },
      {
        title: "HTML Fundamentals",
        lectures: 12,
        duration: "4 hours",
        topics: [
          "HTML Document Structure",
          "Text Elements and Formatting",
          "Links and Navigation",
          "Images and Multimedia",
          "Tables and Forms",
        ],
      },
      {
        title: "CSS Styling",
        lectures: 15,
        duration: "5 hours",
        topics: [
          "CSS Selectors and Properties",
          "Box Model and Layout",
          "Flexbox and Grid",
          "Responsive Design",
          "CSS Animations and Transitions",
        ],
      },
      {
        title: "JavaScript Programming",
        lectures: 20,
        duration: "8 hours",
        topics: [
          "JavaScript Syntax and Variables",
          "Functions and Objects",
          "DOM Manipulation",
          "Events and Event Handling",
          "Asynchronous JavaScript",
        ],
      },
      {
        title: "React Framework",
        lectures: 25,
        duration: "10 hours",
        topics: [
          "React Fundamentals",
          "Components and Props",
          "State and Lifecycle",
          "Hooks and Context API",
          "Routing and State Management",
        ],
      },
      {
        title: "Backend Development with Node.js",
        lectures: 18,
        duration: "7 hours",
        topics: [
          "Node.js Basics",
          "Express Framework",
          "RESTful API Development",
          "Database Integration",
          "Authentication and Authorization",
        ],
      },
      {
        title: "Deployment and Best Practices",
        lectures: 10,
        duration: "4 hours",
        topics: [
          "Version Control with Git",
          "Testing and Debugging",
          "Performance Optimization",
          "Deployment to Production",
          "Continuous Integration/Continuous Deployment",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need prior programming experience?",
        answer:
          "No, this course is designed for beginners. We start from the basics and gradually move to advanced topics.",
      },
      {
        question: "Will I get a certificate after completing the course?",
        answer:
          "Yes, you will receive a certificate of completion that you can share on your LinkedIn profile or resume.",
      },
      {
        question: "How long do I have access to the course?",
        answer: "You have lifetime access to the course content, including all future updates.",
      },
      {
        question: "Is there any support if I get stuck?",
        answer: "Yes, we have a dedicated support team and a community forum where you can ask questions and get help.",
      },
      {
        question: "Can I access the course on mobile devices?",
        answer:
          "Yes, the course is fully responsive and can be accessed on any device including smartphones and tablets.",
      },
    ],
  }
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseData(params.slug)

  return (
    <div className="min-h-screen">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">{course.level}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{course.subtitle}</p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(course.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 font-medium">{course.rating}</span>
                  <span className="ml-1 text-muted-foreground">({course.reviewCount} reviews)</span>
                </div>

                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>{course.studentCount.toLocaleString()} students</span>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center mb-8">
                <img
                  src={course.instructor.image || "/placeholder.svg"}
                  alt={course.instructor.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">{course.instructor.name}</p>
                  <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/checkout">Enroll Now</Link>
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Play className="h-4 w-4" />
                  Watch Preview
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Play className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">₹{course.discountedPrice.toLocaleString()}</span>
                    <span className="ml-2 text-lg text-muted-foreground line-through">
                      ₹{course.price.toLocaleString()}
                    </span>
                  </div>
                  <Badge variant="destructive">30% OFF</Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Course Duration</p>
                      <p className="text-sm text-muted-foreground">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Lectures</p>
                      <p className="text-sm text-muted-foreground">{course.lectures} lessons</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Language</p>
                      <p className="text-sm text-muted-foreground">{course.language}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Last Updated</p>
                      <p className="text-sm text-muted-foreground">{course.lastUpdated}</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mb-4" size="lg" asChild>
                  <Link href="/checkout">Enroll Now</Link>
                </Button>

                <p className="text-center text-sm text-muted-foreground mb-4">30-Day Money-Back Guarantee</p>

                <div className="space-y-2">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="w-full justify-start border-b rounded-none p-0">
              <TabsTrigger
                value="overview"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="curriculum"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Curriculum
              </TabsTrigger>
              <TabsTrigger
                value="instructor"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Instructor
              </TabsTrigger>
              <TabsTrigger
                value="faqs"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                FAQs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <p className="text-muted-foreground mb-6">{course.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Laptop className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Learn Anywhere</h3>
                          <p className="text-sm text-muted-foreground">Access on mobile and desktop</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Certificate className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Certificate</h3>
                          <p className="text-sm text-muted-foreground">Get certified upon completion</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Download className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Resources</h3>
                          <p className="text-sm text-muted-foreground">Downloadable source code & materials</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Build responsive websites using HTML, CSS and JavaScript",
                    "Create dynamic web applications with React",
                    "Develop backend APIs with Node.js and Express",
                    "Connect to databases and implement CRUD operations",
                    "Deploy your applications to production",
                    "Implement authentication and authorization",
                    "Optimize website performance",
                    "Debug and troubleshoot common issues",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Basic computer knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>A computer with internet connection (Windows, Mac, or Linux)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>No prior programming experience required</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
                <p className="text-muted-foreground mb-6">
                  {course.lectures} lectures • {course.duration} of content
                </p>

                <div className="space-y-4">
                  {course.curriculum.map((section, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div className="bg-muted p-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">
                            Section {index + 1}: {section.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {section.lectures} lectures • {section.duration}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Expand
                        </Button>
                      </div>
                      <div className="p-4 space-y-2">
                        {section.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center py-2">
                            <Play className="h-4 w-4 mr-3 text-muted-foreground" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="instructor" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Meet Your Instructor</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <img
                      src={course.instructor.image || "/placeholder.svg"}
                      alt={course.instructor.name}
                      className="rounded-lg w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2">{course.instructor.name}</h3>
                    <p className="text-muted-foreground mb-4">{course.instructor.title}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="font-medium">{course.rating} Instructor Rating</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-5 w-5 mr-1 text-muted-foreground" />
                        <span>1,245 Reviews</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-1 text-muted-foreground" />
                        <span>12,500 Students</span>
                      </div>
                    </div>
                    <p className="mb-4">{course.instructor.bio}</p>
                    <Button variant="outline">View Full Profile</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {course.faqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Development Journey?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have transformed their careers with our comprehensive web development course.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/checkout">Enroll Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

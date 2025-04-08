import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  BadgeIcon as Certificate,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Laptop,
  Play,
  Settings,
  User,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Mock data - in a real app, this would come from a database
  const enrolledCourses = [
    {
      id: 1,
      title: "Web Development Masterclass",
      progress: 35,
      lastAccessed: "2 days ago",
      totalLectures: 120,
      completedLectures: 42,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      progress: 68,
      lastAccessed: "Yesterday",
      totalLectures: 85,
      completedLectures: 58,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const upcomingLessons = [
    {
      id: 1,
      title: "CSS Flexbox and Grid Layout",
      course: "Web Development Masterclass",
      duration: "45 minutes",
      date: "Today",
    },
    {
      id: 2,
      title: "JavaScript DOM Manipulation",
      course: "Web Development Masterclass",
      duration: "60 minutes",
      date: "Tomorrow",
    },
    {
      id: 3,
      title: "Social Media Marketing Strategy",
      course: "Digital Marketing Mastery",
      duration: "50 minutes",
      date: "Wed, Apr 11",
    },
  ]

  const achievements = [
    {
      id: 1,
      title: "Fast Learner",
      description: "Completed 5 lessons in one day",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Coding Ninja",
      description: "Completed all HTML exercises",
      icon: <Laptop className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Consistent Student",
      description: "Logged in for 7 consecutive days",
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-muted/40">
      {/* Dashboard Header */}
      <header className="bg-background border-b">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Student Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Rahul!</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Profile
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Courses */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">My Courses</h2>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button variant="secondary" size="sm" className="gap-2">
                          <Play className="h-4 w-4" />
                          Continue Learning
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{course.title}</h3>
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Progress: {course.progress}%</span>
                        <span>Last accessed: {course.lastAccessed}</span>
                      </div>
                      <Progress value={course.progress} className="h-2 mb-4" />
                      <div className="flex justify-between text-sm">
                        <span>
                          {course.completedLectures} / {course.totalLectures} lectures
                        </span>
                        <Link href={`/courses/${course.id}`} className="text-primary hover:underline">
                          Go to Course
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Lessons */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Upcoming Lessons</h2>
              <div className="space-y-4">
                {upcomingLessons.map((lesson) => (
                  <Card key={lesson.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{lesson.title}</h3>
                          <p className="text-sm text-muted-foreground">{lesson.course}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{lesson.date}</p>
                          <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                        </div>
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Play className="h-4 w-4" />
                          Start Lesson
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Learning Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Stats</CardTitle>
                <CardDescription>Your progress this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Hours Spent</span>
                      <span className="font-medium">24.5 hrs</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Lessons Completed</span>
                      <span className="font-medium">42/120</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Quizzes Passed</span>
                      <span className="font-medium">12/15</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Detailed Report
                </Button>
              </CardFooter>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Badges you've earned</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-full text-primary">{achievement.icon}</div>
                      <div>
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Achievements
                </Button>
              </CardFooter>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Resources</CardTitle>
                <CardDescription>Course materials and downloads</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
                      <span>HTML Cheat Sheet.pdf</span>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
                      <span>CSS Reference Guide.pdf</span>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
                      <span>JavaScript Basics.pdf</span>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Resources
                </Button>
              </CardFooter>
            </Card>

            {/* Certificate */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Certificate className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Get Your Certificate</h3>
                  <p className="mb-4">Complete the course to earn your certificate of completion</p>
                  <Button variant="secondary">View Certificate</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

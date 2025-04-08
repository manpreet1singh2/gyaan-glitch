import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  // Mock data - in a real app, this would come from a database or CMS
  const featuredPost = {
    id: 1,
    title: "10 Essential Web Development Skills for 2025",
    excerpt:
      "Stay ahead of the curve with these must-have skills that will make you a sought-after web developer in 2025 and beyond.",
    date: "April 5, 2025",
    readTime: "8 min read",
    author: "Rahul Sharma",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=800",
  }

  const recentPosts = [
    {
      id: 2,
      title: "How to Build a Successful Freelancing Career",
      excerpt:
        "Learn the strategies and tips to establish yourself as a successful freelancer in today's competitive market.",
      date: "April 2, 2025",
      readTime: "6 min read",
      author: "Priya Patel",
      category: "Freelancing",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Understanding Stock Market Fundamentals",
      excerpt: "A beginner's guide to understanding the basics of stock market trading and investment strategies.",
      date: "March 28, 2025",
      readTime: "10 min read",
      author: "Vikram Singh",
      category: "Stock Trading",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "The Future of Digital Marketing in 2025",
      excerpt:
        "Explore the emerging trends and technologies that will shape the digital marketing landscape in the coming years.",
      date: "March 25, 2025",
      readTime: "7 min read",
      author: "Ayesha Khan",
      category: "Digital Marketing",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "5 Productivity Hacks for Remote Workers",
      excerpt:
        "Boost your productivity and maintain work-life balance with these effective strategies for remote work.",
      date: "March 20, 2025",
      readTime: "5 min read",
      author: "Arjun Mehta",
      category: "Productivity",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Getting Started with React: A Beginner's Guide",
      excerpt: "A step-by-step guide to help beginners understand and start building applications with React.",
      date: "March 15, 2025",
      readTime: "9 min read",
      author: "Rahul Sharma",
      category: "Web Development",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      title: "How to Create Engaging Content for Social Media",
      excerpt:
        "Learn the art of creating content that resonates with your audience and drives engagement on social platforms.",
      date: "March 10, 2025",
      readTime: "6 min read",
      author: "Ayesha Khan",
      category: "Digital Marketing",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = [
    "Web Development",
    "Digital Marketing",
    "Stock Trading",
    "Freelancing",
    "Productivity",
    "App Development",
    "Career Advice",
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">GyaanGlitch Blog</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            Insights, tutorials, and resources to help you master new skills and advance your career.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Featured Post */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {featuredPost.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    <Link href={`/blog/${featuredPost.id}`} className="hover:text-primary transition-colors">
                      {featuredPost.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                    <span>{featuredPost.date}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.id}`}>Read Full Article</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 left-2" variant="secondary">
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">
                        <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-xs">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-sm text-primary flex items-center hover:underline"
                      >
                        Read More <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More Articles</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="absolute right-1 top-1 h-8 w-8 p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center justify-between py-2 hover:text-primary transition-colors"
                    >
                      <span>{category}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Subscribe to Our Newsletter</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Get the latest articles and resources directly in your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border rounded-md text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button variant="secondary" className="w-full">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-primary-foreground/80 mt-4">
                  By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
                </p>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "React",
                    "CSS",
                    "HTML",
                    "Node.js",
                    "SEO",
                    "Marketing",
                    "Freelancing",
                    "Career",
                    "Productivity",
                    "Trading",
                    "Design",
                  ].map((tag, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-muted">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  // In a real app, this would be fetched from a database
  const orderDetails = {
    orderId: "ORD" + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleDateString(),
    courseName: "Web Development Masterclass",
    amount: 3499,
    paymentMethod: "Credit Card",
    email: "student@example.com",
  }

  return (
    <div className="container max-w-3xl py-10 px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-muted-foreground">Thank you for your purchase. Your course access has been activated.</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Order Confirmation</CardTitle>
          <CardDescription>Order #{orderDetails.orderId}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Date</p>
                <p className="font-medium">{orderDetails.date}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="font-medium">{orderDetails.email}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Amount</p>
                <p className="font-medium">₹{orderDetails.amount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Payment Method</p>
                <p className="font-medium">{orderDetails.paymentMethod}</p>
              </div>
            </div>

            <Separator />

            <div className="bg-muted p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{orderDetails.courseName}</h3>
                  <p className="text-sm text-muted-foreground">Lifetime Access</p>
                </div>
                <p className="font-semibold">₹{orderDetails.amount.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download Invoice
          </Button>
          <Button variant="outline" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            View Order Details
          </Button>
        </CardFooter>
      </Card>

      <div className="space-y-6">
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold">Access Your Course</h3>
                <p className="text-sm text-muted-foreground">
                  Your course is now available in your dashboard. You can start learning right away.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold">Download Resources</h3>
                <p className="text-sm text-muted-foreground">
                  Access all course materials, including your free eBook, from the resources section.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold">Join Community</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with fellow students in our exclusive community forum for support and networking.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

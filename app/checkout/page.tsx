"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { processPayment } from "@/app/actions"
import {
  CreditCard,
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  Lock,
  Shield,
  Smartphone,
  Building,
  Wallet,
} from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [couponCode, setCouponCode] = useState("")
  const [discountApplied, setDiscountApplied] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")

  const originalPrice = 4999
  const discountPercentage = 30
  const discountAmount = discountApplied ? (originalPrice * discountPercentage) / 100 : 0
  const finalPrice = originalPrice - discountAmount

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === "GYAN30") {
      setDiscountApplied(true)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // In a real app, this would connect to a payment processor
      await processPayment({
        amount: finalPrice,
        paymentMethod,
        discountApplied,
      })

      // Redirect to success page
      router.push("/checkout/success")
    } catch (error) {
      console.error("Payment failed:", error)
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-6xl py-10 px-4 md:px-6">
      <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Checkout</CardTitle>
              <CardDescription>Complete your purchase to gain instant access to your course</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="card">Card</TabsTrigger>
                  <TabsTrigger value="upi">UPI</TabsTrigger>
                  <TabsTrigger value="netbanking">Net Banking</TabsTrigger>
                  <TabsTrigger value="wallet">Wallet</TabsTrigger>
                </TabsList>

                <form onSubmit={handleSubmit}>
                  <TabsContent value="card">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input id="cardName" placeholder="John Doe" required />
                        </div>
                        <div className="col-span-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <div className="relative">
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                            <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input id="expiryDate" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" required />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="upi">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="upiId">UPI ID</Label>
                        <div className="relative">
                          <Input id="upiId" placeholder="name@upi" required />
                          <Smartphone className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mt-4">
                        {["Google Pay", "PhonePe", "Paytm", "BHIM UPI"].map((app) => (
                          <div key={app} className="flex items-center space-x-2">
                            <RadioGroup defaultValue="googlepay">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value={app.toLowerCase().replace(" ", "")}
                                  id={app.toLowerCase().replace(" ", "")}
                                />
                                <Label htmlFor={app.toLowerCase().replace(" ", "")}>{app}</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="netbanking">
                    <div className="space-y-4">
                      <Label>Select your Bank</Label>
                      <RadioGroup defaultValue="sbi">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {["SBI", "HDFC", "ICICI", "Axis", "Kotak", "Yes Bank", "PNB", "Bank of Baroda"].map(
                            (bank) => (
                              <div key={bank} className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value={bank.toLowerCase().replace(" ", "")}
                                  id={bank.toLowerCase().replace(" ", "")}
                                />
                                <Label htmlFor={bank.toLowerCase().replace(" ", "")}>
                                  <div className="flex items-center">
                                    <Building className="h-4 w-4 mr-2" />
                                    {bank}
                                  </div>
                                </Label>
                              </div>
                            ),
                          )}
                        </div>
                      </RadioGroup>
                    </div>
                  </TabsContent>

                  <TabsContent value="wallet">
                    <div className="space-y-4">
                      <Label>Select your Wallet</Label>
                      <RadioGroup defaultValue="paytm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {["Paytm", "Amazon Pay", "PhonePe", "Mobikwik"].map((wallet) => (
                            <div key={wallet} className="flex items-center space-x-2">
                              <RadioGroupItem
                                value={wallet.toLowerCase().replace(" ", "")}
                                id={wallet.toLowerCase().replace(" ", "")}
                              />
                              <Label htmlFor={wallet.toLowerCase().replace(" ", "")}>
                                <div className="flex items-center">
                                  <Wallet className="h-4 w-4 mr-2" />
                                  {wallet}
                                </div>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </TabsContent>

                  <div className="mt-8">
                    <Label htmlFor="billingAddress">Billing Address</Label>
                    <Input id="billingAddress" placeholder="Enter your full address" className="mb-4" required />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" required />
                      </div>
                      <div>
                        <Label htmlFor="pincode">PIN Code</Label>
                        <Input id="pincode" placeholder="PIN Code" required />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mt-8 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4 mr-2" />
                    <span>
                      Your payment information is secure. We use industry-standard encryption to protect your data.
                    </span>
                  </div>

                  <div className="mt-8">
                    <Button type="submit" className="w-full" size="lg" disabled={loading}>
                      {loading ? "Processing..." : `Pay ₹${finalPrice.toLocaleString()}`}
                    </Button>
                  </div>
                </form>
              </Tabs>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium">100% Secure Payment</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium">30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Web Development Masterclass</span>
                  <span>₹{originalPrice.toLocaleString()}</span>
                </div>

                {discountApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (30%)</span>
                    <span>-₹{discountAmount.toLocaleString()}</span>
                  </div>
                )}

                <Separator />

                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹{finalPrice.toLocaleString()}</span>
                </div>

                <div className="pt-4">
                  <Label htmlFor="couponCode">Have a coupon?</Label>
                  <div className="flex mt-1">
                    <Input
                      id="couponCode"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="rounded-r-none"
                    />
                    <Button
                      onClick={handleApplyCoupon}
                      variant="secondary"
                      className="rounded-l-none"
                      disabled={discountApplied}
                    >
                      Apply
                    </Button>
                  </div>
                  {discountApplied && (
                    <div className="flex items-center mt-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span>Coupon applied successfully!</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-4">
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">What you'll get:</p>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Lifetime access to course</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>24/7 support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Free eBook worth ₹999</span>
                  </li>
                </ul>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  By completing this purchase, you agree to our Terms of Service and Privacy Policy.
                </AlertDescription>
              </Alert>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

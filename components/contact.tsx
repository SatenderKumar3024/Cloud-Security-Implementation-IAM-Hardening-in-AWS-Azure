"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Calendar,
  LinkIcon,
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-background/50 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, cybersecurity challenges, or opportunities.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Feel free to reach out or schedule a call.</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="general" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="general">General Inquiry</TabsTrigger>
                    <TabsTrigger value="resume">Request Resume</TabsTrigger>
                    <TabsTrigger value="project">Project Discussion</TabsTrigger>
                  </TabsList>

                  <TabsContent value="general">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input id="name" placeholder="Your Name" required disabled={formStatus !== "idle"} />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            required
                            disabled={formStatus !== "idle"}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Your Message"
                          rows={5}
                          required
                          disabled={formStatus !== "idle"}
                        />
                      </div>

                      <div className="text-xs text-muted-foreground">
                        <p className="mb-2">Security Notice</p>
                        <p>
                          This form is protected by reCAPTCHA and implements strict CSP headers, input validation, and
                          DOMPurify sanitization to ensure secure communication.
                        </p>
                      </div>

                      <Button type="submit" className="w-full gap-2" disabled={formStatus !== "idle"}>
                        {formStatus === "idle" && (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                        {formStatus === "submitting" && <span>Sending...</span>}
                        {formStatus === "success" && (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            <span>Message Sent!</span>
                          </>
                        )}
                        {formStatus === "error" && (
                          <>
                            <AlertCircle className="w-4 h-4" />
                            <span>Error Sending</span>
                          </>
                        )}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="resume">
                    <div className="space-y-6">
                      <p className="text-sm text-muted-foreground">
                        Please provide your contact information to receive my latest resume with detailed experience in
                        cloud security implementation.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="resume-name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input id="resume-name" placeholder="Your Name" required disabled={formStatus !== "idle"} />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="resume-email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="resume-email"
                            type="email"
                            placeholder="Your Email"
                            required
                            disabled={formStatus !== "idle"}
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="resume-company" className="text-sm font-medium">
                            Company (Optional)
                          </label>
                          <Input id="resume-company" placeholder="Your Company" disabled={formStatus !== "idle"} />
                        </div>

                        <Button type="submit" className="w-full gap-2" disabled={formStatus !== "idle"}>
                          {formStatus === "idle" && (
                            <>
                              <FileText className="w-4 h-4" />
                              <span>Request Resume</span>
                            </>
                          )}
                          {formStatus === "submitting" && <span>Processing...</span>}
                          {formStatus === "success" && (
                            <>
                              <CheckCircle className="w-4 h-4" />
                              <span>Resume Sent!</span>
                            </>
                          )}
                          {formStatus === "error" && (
                            <>
                              <AlertCircle className="w-4 h-4" />
                              <span>Error Sending</span>
                            </>
                          )}
                        </Button>
                      </form>
                    </div>
                  </TabsContent>

                  <TabsContent value="project">
                    <div className="space-y-6">
                      <p className="text-sm text-muted-foreground">
                        Let's discuss your cloud security project requirements and how I can help implement robust IAM
                        solutions.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="project-name" className="text-sm font-medium">
                              Name
                            </label>
                            <Input
                              id="project-name"
                              placeholder="Your Name"
                              required
                              disabled={formStatus !== "idle"}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="project-email" className="text-sm font-medium">
                              Email
                            </label>
                            <Input
                              id="project-email"
                              type="email"
                              placeholder="Your Email"
                              required
                              disabled={formStatus !== "idle"}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="project-type" className="text-sm font-medium">
                            Project Type
                          </label>
                          <select
                            id="project-type"
                            className="w-full p-2 rounded-md border bg-background"
                            disabled={formStatus !== "idle"}
                          >
                            <option>AWS IAM Implementation</option>
                            <option>Azure RBAC Configuration</option>
                            <option>Multi-Cloud Security</option>
                            <option>Security Assessment</option>
                            <option>Other</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="project-details" className="text-sm font-medium">
                            Project Details
                          </label>
                          <Textarea
                            id="project-details"
                            placeholder="Describe your project requirements"
                            rows={5}
                            required
                            disabled={formStatus !== "idle"}
                          />
                        </div>

                        <Button type="submit" className="w-full gap-2" disabled={formStatus !== "idle"}>
                          {formStatus === "idle" && (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Submit Project Inquiry</span>
                            </>
                          )}
                          {formStatus === "submitting" && <span>Submitting...</span>}
                          {formStatus === "success" && (
                            <>
                              <CheckCircle className="w-4 h-4" />
                              <span>Inquiry Submitted!</span>
                            </>
                          )}
                          {formStatus === "error" && (
                            <>
                              <AlertCircle className="w-4 h-4" />
                              <span>Error Submitting</span>
                            </>
                          )}
                        </Button>
                      </form>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Multiple ways to reach me</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a
                        href="mailto:satenderkumar.analyst@gmail.com"
                        className="text-sm text-muted-foreground hover:text-cyber-blue transition-colors"
                      >
                        satenderkumar.analyst@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a
                        href="tel:+12266374000"
                        className="text-sm text-muted-foreground hover:text-cyber-blue transition-colors"
                      >
                        +1 (226) 637-****
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Linkedin className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <a
                        href="https://www.linkedin.com/in/satender-singh2430/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-cyber-blue transition-colors"
                      >
                        linkedin.com/in/satender-singh2430
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Twitter className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="font-medium">Twitter/X</div>
                      <a
                        href="https://x.com/SatendeK2430"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-cyber-blue transition-colors"
                      >
                        @SatendeK2430
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="font-medium">Calendly</div>
                      <a
                        href="https://calendly.com/satenderkumar-analyst"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-cyber-blue transition-colors"
                      >
                        calendly.com/satenderkumar-analyst
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <LinkIcon className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="font-medium">Linktree</div>
                      <a
                        href="https://linktr.ee/satendersingh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-cyber-blue transition-colors"
                      >
                        linktr.ee/satendersingh
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Download vCard</span>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

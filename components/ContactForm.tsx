"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current!,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none"
          >
            Name
          </label>
          <Input id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none"
          >
            Email
          </label>
          <Input id="email" name="email" type="email" placeholder="Your Email" required />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium leading-none"
        >
          Subject
        </label>
        <Input id="subject" name="subject" placeholder="Subject" required />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium leading-none"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message"
          className="min-h-[120px]"
          required
        />
      </div>
      <Button type="submit" className="w-full gap-2">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;

import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | De Boerderij",
  description: "Get in touch to discuss art inquiries, purchases, or questions",
};

export const runtime = "edge";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="px-6 py-20 md:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Lets Connect
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Interested in commissioning a piece, discussing exhibitions, or
              learning more about my work? I would love to hear from you.
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-background border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-background border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 bg-background border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={8}
                className="w-full px-4 py-2 bg-background border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title:
    "CONXA | AI Customer Support Platform for Enterprise",
  description:
    "Transform your business knowledge into an intelligent AI assistant. Connect documents, automate customer support, and deliver accurate answers across WhatsApp, Slack, Microsoft Teams, web chat, and enterprise channels with Conxa.",
  keywords: [
    "CONXA",
    "AI Customer Support",
    "Omnichannel AI",
    "Enterprise AI",
    "AI Chatbot",
    "RAG Platform",
    "Knowledge Base",
    "Retrieval-Augmented Generation",
    "WhatsApp AI",
    "Slack AI",
    "Microsoft Teams AI",
    "Customer Service Automation",
    "Enterprise Chatbot",
    "AI Knowledge Management",
  ],
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

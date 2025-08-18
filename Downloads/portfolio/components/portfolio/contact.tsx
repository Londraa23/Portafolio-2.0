"use client"

import Link from "next/link"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageCircle } from "lucide-react"
import type { Translations } from "@/lib/translations"

interface ContactProps {
  t: Translations["es"]["contact"]
}

export default function Contact({ t }: ContactProps) {
  return (
    <section id="contact" className="relative z-10 py-16 md:py-24 px-4 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">{t.title}</h2>
      <div className="bg-gray-900/70 border border-gray-800/50 p-6 md:p-8 rounded-xl shadow-lg backdrop-blur-sm">
        {/* Formspree form */}
        <form
          action="https://formspree.io/f/xdkdvyko"
          method="POST"
          className="space-y-6"
        >
          <div>
            <Label htmlFor="name" className="text-gray-200">
              {t.nameLabel}
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder={t.namePlaceholder}
              required
              className="mt-1 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-200">
              {t.emailLabel}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t.emailPlaceholder}
              required
              className="mt-1 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
            />
          </div>
          <div>
            <Label htmlFor="message" className="text-gray-200">
              {t.messageLabel}
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t.messagePlaceholder}
              rows={5}
              required
              className="mt-1 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
            />
          </div>
          <Button
            type="submit"
            className="w-full px-8 py-3 text-lg font-semibold rounded-xl
                       bg-gradient-to-r from-blue-500/30 to-teal-400/30
                       hover:from-blue-600/40 hover:to-teal-500/40
                       transition-all duration-300 shadow-lg
                       backdrop-blur-md border border-white/20"
          >
            {t.sendButton}
          </Button>
        </form>

        <div className="mt-8 text-center text-gray-300 space-y-4">
          <p className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-cyan-400" />
            {t.emailContact}{" "}
            <Link href="mailto:contacto@pabloestevez.es" className="text-blue-300 hover:underline">
              contacto@pabloestevez.es
            </Link>
          </p>
          <p className="flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5 text-cyan-400" />
            {t.discordContact} <span className="text-blue-300">Londra23</span>
          </p>
        </div>
      </div>
    </section>
  )
}

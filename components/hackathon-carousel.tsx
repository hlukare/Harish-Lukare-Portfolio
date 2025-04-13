"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const hackathons = [
  {
    name: "iDEA Hackathon, Union Bank of India",
    date: "March 2025",
    description:
      "Developed a banking assistant for Union Bank, categorizing video queries, generating tickets, and routing services. Ranked in top 17 at the national level.",
  },
  {
    name: "TechFest Sangivani 2025 Winner",
    date: "February 2025",
    description:
      "Smart alert system for beachside cyclones and disasters, ensuring timely warnings and enhanced public safety. Won 3rd place in the Sustainability track.",
  },
  {
    name: "Smart India Hackathon 2024 Winner",
    date: "December 2024",
    description:
      "Smart ML system monitors classroom activities, evaluates skills, enhances learning outcomes and ranks the institutes. Secured 1st position nationally.",
  },
  {
    name: "CMR Institute of Technology, HackFest 1.0 2024 Finalists",
    date: "January 2024",
    description:
      "Developed smart street light system detecting faults like dimming, leakage, or burst, auto-alerting wiremen instantly. Reached the national finals.",
  },
]

export function HackathonCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setVisibleCards([activeIndex])
      } else if (width < 1024) {
        setVisibleCards([activeIndex, (activeIndex + 1) % hackathons.length])
      } else {
        setVisibleCards([activeIndex, (activeIndex + 1) % hackathons.length, (activeIndex + 2) % hackathons.length])
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeIndex])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + hackathons.length) % hackathons.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % hackathons.length)
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <Button variant="outline" size="icon" onClick={handlePrev} aria-label="Previous hackathon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next hackathon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300"
          style={{ transform: `translateX(-${activeIndex * (100 / visibleCards.length)}%)` }}
        >
          {hackathons.map((hackathon, index) => (
            <div
              key={hackathon.name}
              className={`flex-shrink-0 ${visibleCards.includes(index) ? "block" : "hidden"}`}
              style={{
                width: `calc(${100 / visibleCards.length}% - ${((visibleCards.length - 1) * 16) / visibleCards.length}px)`,
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{hackathon.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{hackathon.date}</p>
                  <p>{hackathon.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-1">
        {hackathons.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-primary" : "bg-muted"}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to hackathon ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

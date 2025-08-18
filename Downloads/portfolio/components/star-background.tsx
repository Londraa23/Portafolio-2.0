"use client"

import { useRef, useEffect, useCallback } from "react"

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | null>(null)

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    const canvas = ctx.canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const numStars = 300 // Number of stars

    // Initialize stars if not already
    if (!ctx.stars) {
      ctx.stars = []
      for (let i = 0; i < numStars; i++) {
        ctx.stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * canvas.width, // Depth
          size: Math.random() * 2 + 0.5, // Initial size
        })
      }
    }

    ctx.stars.forEach((star: Star) => {
      // Move star towards viewer
      star.z -= 0.5 // Speed of movement (changed from 1.5 to 0.5)

      // If star passes viewer, reset its position
      if (star.z <= 0) {
        star.z = canvas.width // Reset depth
        star.x = Math.random() * canvas.width - canvas.width / 2
        star.y = Math.random() * canvas.height - canvas.height / 2
        star.size = Math.random() * 2 + 0.5
      }

      // Calculate perspective
      const perspective = canvas.width / star.z
      const x = star.x * perspective + canvas.width / 2
      const y = star.y * perspective + canvas.height / 2
      const size = star.size * perspective

      // Draw star
      ctx.beginPath()
      ctx.arc(x, y, size / 2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, perspective * 0.5)})` // Fade out further stars
      ctx.fill()
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    const animate = () => {
      draw(ctx)
      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ background: "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)" }}
    />
  )
}

interface Star {
  x: number
  y: number
  z: number
  size: number
}

// Extend CanvasRenderingContext2D to include a 'stars' property
declare global {
  interface CanvasRenderingContext2D {
    stars?: Star[]
  }
}

export default StarBackground

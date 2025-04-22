"use client"

import { useState, useEffect } from "react"

export function TypingTagline({
  phrases = ["Information Security Analyst", "Cloud Security Expert"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1000,
}) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentPhrase = phrases[currentPhraseIndex]

        if (isDeleting) {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1))
        } else {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === currentPhrase) {
          // Start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentPhraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className="text-cyber-blue">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

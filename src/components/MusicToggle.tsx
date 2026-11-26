import { useEffect, useRef, useState } from "react"
import { Music, VolumeX } from "lucide-react"
import config from "@/config"

/**
 * Floating music toggle — interactive audio player with visual animation.
 */
export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const toggle = () => {
    const el = audioRef.current
    if (!el) return
    if (playing) {
      el.pause()
      setPlaying(false)
    } else {
      el.play()
        .then(() => setPlaying(true))
        .catch((err) => console.log("Audio play prevented:", err))
    }
  }

  // Attempt gentle autoplay on first user gesture anywhere on the page
  useEffect(() => {
    if (hasInteracted) return

    const handleFirstInteraction = () => {
      setHasInteracted(true)
      const el = audioRef.current
      if (el && !playing) {
        el.play()
          .then(() => setPlaying(true))
          .catch(() => {
            // Autoplay blocked by browser policy, user will click button manually
          })
      }
      window.removeEventListener("click", handleFirstInteraction)
      window.removeEventListener("touchstart", handleFirstInteraction)
    }

    window.addEventListener("click", handleFirstInteraction, { once: true })
    window.addEventListener("touchstart", handleFirstInteraction, { once: true })

    return () => {
      window.removeEventListener("click", handleFirstInteraction)
      window.removeEventListener("touchstart", handleFirstInteraction)
    }
  }, [hasInteracted, playing])

  if (!config.music.src) return null

  return (
    <>
      <audio
        ref={audioRef}
        src={config.music.src}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause music" : `Play ${config.music.label}`}
          title={playing ? "Pause music" : `Play ${config.music.label}`}
          className={`group flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ivory/95 shadow-xl backdrop-blur transition-all duration-300 hover:scale-110 active:scale-95 ${
            playing ? "ring-2 ring-gold/40 ring-offset-2 ring-offset-cream" : ""
          }`}
        >
          {playing ? (
            <div className="relative flex items-center justify-center">
              <span className="absolute -inset-1 rounded-full animate-ping bg-gold/20" />
              <Music className="h-5 w-5 text-gold animate-bounce" />
            </div>
          ) : (
            <VolumeX className="h-5 w-5 text-gold/70 group-hover:text-gold transition-colors" />
          )}
        </button>
      </div>
    </>
  )
}

import { useAppSelector } from "@/redux/store"
import type { PlasmoCSUIAnchor } from "plasmo"
import { useEffect } from "react"

type IProps = {
  anchor: PlasmoCSUIAnchor
}

const BlurOverlay = ({ anchor }: IProps) => {
  const element = anchor?.element as HTMLElement
  const { count } = useAppSelector((state) => state.counter)

  useEffect(() => {
    // TODO: Apply condition here
    element.style.filter = `blur(7px)`

    // Add hover event listeners
    const handleMouseEnter = () => {
      element.style.filter = "none" // Remove blur on hover
    }

    const handleMouseLeave = () => {
      element.style.filter = `blur(7px)` // Reapply blur when not hovering
    }

    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)

    // Cleanup event listeners when component unmounts or count changes
    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [count])

  return <></>
}

export default BlurOverlay

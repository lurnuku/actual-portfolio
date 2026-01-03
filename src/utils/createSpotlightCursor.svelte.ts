export function createSpotlightCursor(cursorSize: number = 36) {
    let mouseX = $state(0)
    let mouseY = $state(0)
    let isHovering = $state(false)
    let containerRef = $state<HTMLDivElement>()

    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef) return
        const rect = containerRef.getBoundingClientRect()
        mouseX = e.clientX - rect.left
        mouseY = e.clientY - rect.top
    }

    const handleMouseEnter = () => {
        isHovering = true
    }

    const handleMouseLeave = () => {
        isHovering = false
    }

    return {
        get mouseX() { return mouseX },
        get mouseY() { return mouseY },
        get isHovering() { return isHovering },
        get containerRef() { return containerRef },
        set containerRef(value) { containerRef = value },
        handleMouseMove,
        handleMouseEnter,
        handleMouseLeave,
        cursorSize
    }
}
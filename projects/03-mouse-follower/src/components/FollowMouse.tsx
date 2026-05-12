import { useEffect, useState } from "react"

export const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        console.log('effect: ', { enabled })

        const handleMove = (event: PointerEvent) => {
            const { clientX, clientY } = event
            console.log('handleMove', { clientX, clientY })
            setPosition({ x: clientX, y: clientY })
        }

        if (enabled) {
            window.addEventListener('pointermove', handleMove);
        }

        // se ejecuta para limpiar las suscripciones que tengamos en el momento
        return () => {
            window.removeEventListener('pointermove', handleMove);
        }
    }, [enabled])

    const handleClick = () => {
        setEnabled(!enabled);
    }

    return (
        <>
            {enabled && (
                <div style={{
                    position: 'absolute',
                    backgroundColor: 'blue',
                    border: '1px solid #fff',
                    borderRadius: '50%',
                    opacity: 0.8,
                    pointerEvents: 'none',
                    left: -25,
                    top: -25,
                    width: 40,
                    height: 40,
                    transform: `translate(${position.x}px, ${position.y}px)`
                }} />
            )}

            <button onClick={handleClick}>{enabled ? 'Desactivar' : 'Activar'} puntero</button>
        </>
    )
}
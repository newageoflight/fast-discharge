import React, { useEffect, useState } from "react";

export default function useOnScreen(ref: React.RefObject<any>) {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    , {threshold: 0.5})

    useEffect(() => {
        observer.observe(ref.current)
        return () => {observer.disconnect()}
    }, [])
    
    return isIntersecting;
}
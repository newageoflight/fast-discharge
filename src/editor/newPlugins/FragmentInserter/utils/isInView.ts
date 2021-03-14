import React, { useEffect, useState } from "react";

// https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
export default function useOnScreen(ref: React.RefObject<any>) {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    , {threshold: 0.5})

    useEffect(() => {
        ref.current && observer.observe(ref.current)
        return () => {observer.disconnect()}
    }, [])
    
    return isIntersecting;
}
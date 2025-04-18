import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = (selector, options = {}) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            ScrollReveal().reveal(selector, {
                origin: "top",
                distance: "60px",
                duration: 2500,
                delay: 300,
                reset: true,
                ...options,
            });
        }
    }, [selector, options]);
};

export default useScrollReveal;
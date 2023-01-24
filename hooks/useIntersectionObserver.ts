import { useEffect, useRef, useState } from "react";

export default function useIntersect({
    root = null,
    rootMargin,
    threshold = 0,
}) {
    const [entry, setEntry] = useState({});
    const [node, setNode] = useState(null);

    const observer = useRef(
        new window.IntersectionObserver(([e]) => setEntry(e), {
            root,
            rootMargin,
            threshold,
        })
    );

    useEffect(() => {
        const { current: currentObserver } = observer;
        currentObserver.disconnect();

        if (node) currentObserver.observe(node);

        return () => currentObserver.disconnect();
    }, [node]);

    return [setNode, entry];
}

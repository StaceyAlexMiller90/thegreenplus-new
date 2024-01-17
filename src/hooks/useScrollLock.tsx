import { useEffect, useState } from 'react';

const useScrollLock = () => {
    const [scrollLocked, setScrollLocked] = useState(false);

    useEffect(() => {
        const html = document.documentElement;

        if (scrollLocked) {
            html.style.overflow = 'hidden';
        } else {
            html.style.overflow = '';
        }

        return () => {
            html.style.overflow = '';
        };
    }, [scrollLocked]);

    return { scrollLocked, setScrollLocked };
};

export default useScrollLock;

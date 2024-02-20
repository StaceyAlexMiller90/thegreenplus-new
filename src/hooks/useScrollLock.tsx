import { useEffect, useState } from 'react';
import { scrollToTop } from '@/utils/utils';

const useScrollLock = (resetScrollPosition?: boolean) => {
    const [scrollLocked, setScrollLocked] = useState(false);

    useEffect(() => {
        const html = document.documentElement;

        if (scrollLocked) {
            if (resetScrollPosition && window.scrollY) {
                scrollToTop();
            }
            html.style.overflow = 'hidden';
        } else {
            html.style.overflow = '';
        }

        return () => {
            html.style.overflow = '';
        };
    }, [scrollLocked, resetScrollPosition]);

    return { scrollLocked, setScrollLocked };
};

export default useScrollLock;

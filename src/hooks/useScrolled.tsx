import { useState, useEffect } from 'react';

const useIsScrolled = (scrollThreshold?: number) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        let isScrollingTimeout: NodeJS.Timeout;

        const handleScroll = () => {
            clearTimeout(isScrollingTimeout);
            isScrollingTimeout = setTimeout(() => {
                setIsScrolled(window.pageYOffset > (scrollThreshold || window.innerHeight));
            }, 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(isScrollingTimeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollThreshold]);

    return isScrolled;
};

export default useIsScrolled;

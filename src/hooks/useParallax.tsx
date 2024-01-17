import { MotionValue, useTransform } from 'framer-motion';

const useParallax = (
    scrollValue: MotionValue<number>,
    start: number | string,
    end: number | string,
) => {
    return useTransform(scrollValue, [0, 1], [start, end]);
};

export default useParallax;

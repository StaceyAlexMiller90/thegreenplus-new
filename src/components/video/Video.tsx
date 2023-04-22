'use client';
import { useEffect, useRef } from 'react';

const Video = () => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.play();
        }
    }, []);

    return (
        <video ref={ref} id="introvideo" loop muted playsInline className="introvideo">
            <source src="./greenplus.mp4" type="video/mp4" />
            <source src="./greenplus.webm" type="video/webm" />
        </video>
    );
};

export default Video;

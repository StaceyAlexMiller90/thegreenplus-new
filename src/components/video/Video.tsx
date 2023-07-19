'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Video.module.scss';

const Video = () => {
    const ref = useRef<HTMLVideoElement>(null);
    const [poster, setPoster] = useState('');

    useEffect(() => {
        if (ref.current) {
            ref.current.play();
        }
    }, []);

    return (
        <video
            ref={ref}
            id="introvideo"
            loop
            muted
            playsInline
            className={styles.Video}
            onError={() => setPoster('./poster.jpg')}
            poster={poster}>
            <source src="./greenplus.mp4" type="video/mp4" />
            <source src="./greenplus.webm" type="video/webm" />
        </video>
    );
};

export default Video;

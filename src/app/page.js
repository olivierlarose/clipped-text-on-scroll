'use client';
import styles from './page.module.css'
import { useEffect, useRef } from 'react';

export default function Home() {

  const sticky = useRef(null);
  const container = useRef(null);
  const initialMaskSize = .8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect( () => {
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    sticky.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate)
  }

  const getScrollProgress = () => {
    const scrollProgress = sticky.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress
  }

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        <div ref={sticky} className={styles.stickyContainer}>
          <video autoPlay muted loop>
            <source src="/medias/nature.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
      <div className={styles.footer}>
        <h2></h2>
      </div>
    </main>
  )
}

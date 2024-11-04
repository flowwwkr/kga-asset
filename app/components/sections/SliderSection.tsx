"use client";

import styles from "@/app/page.module.css";
import Image from "next/image";
import s1 from "@/app/asset/s1.png";
import s2 from "@/app/asset/s2.png";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";

const SliderSection = () => {
  const [cnt, setCnt] = useState(1);
  const translateX = useMemo(
    () => [
      "translateX(0%)",
      "translateX(calc(-1 * 100% / 3))",
      "translateX(calc(-2 * 100% / 3))",
    ],
    []
  );
  const slideRef = useRef<HTMLDivElement>(null);

  const move = useCallback(() => {
    setCnt((prevCnt) => (prevCnt === 2 ? 1 : prevCnt + 1));
    if (slideRef.current) {
      slideRef.current.style.transform = translateX[cnt];
    }
  }, [cnt, translateX]);

  useEffect(() => {
    const interval = setInterval(() => {
      move();
      if (cnt === 2) {
        setTimeout(() => {
          if (slideRef.current) {
            slideRef.current.style.transition = "none";
            slideRef.current.style.transform = "translateX(0%)";
          }
        }, 500);
        setTimeout(() => {
          if (slideRef.current) {
            slideRef.current.style.transition = "0.4s";
          }
        }, 600);
      }
    }, 3000);

    // 클린업
    return () => clearInterval(interval);
  }, [cnt, move]);

  return (
    <section className={styles.sliderSection}>
      <span>
        맞춤 상담부터 보험금 관리 및 청구 가능한
        <em> 개인별 전문 상담사 배정!</em>
      </span>

      <div className={styles.slideFrame}>
        <div ref={slideRef} className={styles.slideWrap}>
          <div className={styles.slide}>
            <Image src={s1} alt="slideImg" />
          </div>
          <div className={styles.slide}>
            <Image src={s2} alt="slideImg" />
          </div>
          <div className={styles.slide}>
            <Image src={s1} alt="slideImg" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SliderSection;

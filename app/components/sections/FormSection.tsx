"use client";

import styles from "@/app/page.module.css";
import { useState, useRef } from "react";

const FormSection = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const refMale = useRef<HTMLButtonElement>(null);
  const refFemale = useRef<HTMLButtonElement>(null);

  const handleCheckboxChange1 = () => {
    setIsChecked1((prev) => !prev);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2((prev) => !prev);
  };

  const onClickBtn = (gender: string) => {
    setSelectedGender(gender);
  };
  return (
    <section className={styles.formSection}>
      <div className={styles.section1Text}>
        고객님 가장 편하신 시간에
        <br />
        보험 전문가가 직접 찾아 뵙겠습니다.
      </div>
      <div className={styles.formBox}>
        <form action="" className={styles.form}>
          <h4>기본 정보 입력</h4>

          <div className={styles.formContents}>
            <div className={styles.formRow}>
              <h5>이&nbsp;름</h5>
              <input
                type="text"
                className={`${styles.design} ${styles.input1}`}
                placeholder="예시 : 홍길동"
              />
            </div>
            <div className={styles.formRow}>
              <h5>성&nbsp;별</h5>
              <div className={styles.halfRow}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onClickBtn("male");
                  }}
                  ref={refMale}
                  className={selectedGender === "male" ? styles.on : ""}
                >
                  남성
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onClickBtn("female");
                  }}
                  ref={refFemale}
                  className={selectedGender === "female" ? styles.on : ""}
                >
                  여성
                </button>
              </div>
            </div>
            <div className={styles.formRow}>
              <h5>생년월일</h5>
              <div className={styles.halfRow2}>
                <input
                  type="text"
                  className={`${styles.design} ${styles.input2}`}
                  placeholder="예시 : 19810227"
                />
                <span>&nbsp;&#40;60~95년생만 신청가능&#41;</span>
              </div>
            </div>
            <div className={styles.formRow}>
              <h5>전화번호</h5>
              <input
                type="text"
                className={`${styles.design} ${styles.input1}`}
                placeholder="예시 : 01012345678"
              />
            </div>
          </div>

          <div className={styles.checkArea}>
            <label
              htmlFor="check1"
              className={`${styles.customChk} ${
                isChecked1 ? styles.checked : ""
              }`}
            ></label>
            <input
              onChange={handleCheckboxChange1}
              type="checkbox"
              id="check1"
            />
            <label htmlFor="check1">
              개인정보 수집&middot;이용 동의 <span>[약관보기]</span>
            </label>

            <label
              htmlFor="check2"
              className={`${styles.customChk} ${
                isChecked2 ? styles.checked : ""
              }`}
            ></label>
            <input
              onChange={handleCheckboxChange2}
              type="checkbox"
              id="check2"
            />
            <label htmlFor="check2">
              제3자 제공 동의 <span>[약관보기]</span>
            </label>
          </div>
          <button className={styles.submitBtn}>상담 신청하기</button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
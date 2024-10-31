import styles from "./components.module.css";
import Image from "next/image";
import logo from "@/app/asset/logo_ft.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoBox}>
        <div className={styles.footLogo}>
          <Image src={logo} alt="logo" />
        </div>
        <span>개인정보처리방침</span>
      </div>
      <ul className={styles.enterInfo}>
        <li>황준윤 팀장&#40;생명보험협회 등록번호 : 20240720003001&#41;</li>
        <li>KGA에셋&#40;주&#41; &#40;보험대리점등록번호 : 2009071004&#41; </li>
        <li>
          본사 : &#40;06252&#41; 서울특별시 강남구 역삼로 114, 2층
          &#40;현죽빌딩&#41;
        </li>
      </ul>
      <div className={styles.line}></div>
      <span className={styles.copyright}>
        Copyright©2024 KGA에셋&#40;주&#41; All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;

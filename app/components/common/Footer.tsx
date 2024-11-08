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
          KGA에셋&#40;주&#41; 다움지사 : &#40;41959&#41; 대구광역시 중구 이천로
          237, 제일에스타워 9층
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

import styles from "./components.module.css";
import Image from "next/image";
import logo from "@/app/asset/logo_hd.png";
import ico_phone from "@/app/asset/phone.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="logo" className={styles.logo} />
      <a href="tel:01086997275">
        <div className={styles.phone}>
          <Image src={ico_phone} alt="icon-phone" className={styles.icon} />
          <div>010-8699-7275</div>
        </div>
      </a>
    </header>
  );
};

export default Header;

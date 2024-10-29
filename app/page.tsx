import styles from "./page.module.css";
import Header from "./components/common/Header";
import Image from "next/image";
import img_banner from "@/app/asset/KGAasset_LandingImage.jpg";
import FormSection from "./components/sections/FormSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header />
        <div className={styles.banner}>
        <Image src={img_banner} alt="main-banner"  />

        </div>
        <FormSection/>
      </div>
    </div>
  );
}

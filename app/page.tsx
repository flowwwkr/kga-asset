import styles from "./page.module.css";
import Image from "next/image";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import img_banner from "@/app/asset/KGAasset_LandingImage.jpg";
import FormSection from "./components/sections/FormSection";
import SliderSection from "./components/sections/SliderSection";
import ReadMeSection from "./components/sections/ReadMeSection";
import kakaoIcon from "./asset/chat.gif";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header />
        <div className={styles.banner}>
          <Image src={img_banner} alt="main-banner" />
        </div>
        <FormSection />
        <SliderSection />
        <ReadMeSection />
        <Footer />
        <button className={styles.floatBtn}>
          <Image src={kakaoIcon} alt="kakao" />
        </button>
      </div>
    </div>
  );
}

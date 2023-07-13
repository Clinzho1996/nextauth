import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";

import Image from "next/image";
import google from "../../app/assets/google.png";
import instagram from "../../app/assets/instagram.png";
import twitter from "../../app/assets/twitter.png";
import styles from "./page.module.css";

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={10}
      autoplay={true}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className={styles.card_inner}>
          <Image src={twitter} alt="twitter" width={30} />
          <h3>Twitter Account</h3>
          <p>
            Tweet, reply to tweet, manage DMs, and more in a single dashboard.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.card_inner}>
          <Image src={instagram} alt="instagram" width={30} />
          <h3>Instagram Account</h3>
          <p>
            Tweet, reply to tweet, manage DMs, and more in a single dashboard.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.card_inner}>
          <Image src={google} alt="google" width={30} />
          <h3>Google Account</h3>
          <p>
            Tweet, reply to tweet, manage DMs, and more in a single dashboard.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;

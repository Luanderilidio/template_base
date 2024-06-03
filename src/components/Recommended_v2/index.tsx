import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../Styles/styles.css";
import CardRecommended from "./CardRecommended_v2";

const Recommended_v2: React.FC = () => {
  
  return (
    <div>
      <Swiper
        spaceBetween={5}
        slidesPerView={1.1}

        modules={[Pagination]}
        className="mySwiper"
      >
      
        {[1,1,1,1].map((item, index) => (
          <SwiperSlide key={index} className="rounded-2xl bg-transparent">
           <CardRecommended />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommended_v2;

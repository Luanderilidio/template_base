import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../Styles/styles.css";
import CardRecommended from "./CardRecommended";




// { id, urlImage, title, subtitle, link }: PropsSlides
const Recommendeds: React.FC = () => {
  
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1.2}

        modules={[Pagination]}
        className="mySwiper"
      >
      
        {[1,1,1,1].map((item, index) => (
          <SwiperSlide key={index} className="rounded-2xl px-2 bg-transparent">
           <CardRecommended />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommendeds;

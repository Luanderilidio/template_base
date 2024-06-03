import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../Styles/styles.css";
import CardRecommended from "../Recommended/CardRecommended";

const categories = ['Todos', 'item2','item3', 'item4', 'item5', 'item6', 'item7', 'item8']

const CategoriesFilter: React.FC = () => {
  
  return (
    <div>
      <Swiper
        spaceBetween={8}
        slidesPerView={5}
        
        modules={[Pagination]}
        className="mySwiper"
      >
      
        {categories.map((item, index) => (
          <SwiperSlide key={index} className="rounded-2xl px-2">
           <button className="transition-colors ease-in-out px-3 py-2 font-light text-[#2C2C2C] border rounded-lg hover:bg-[#2C2C2C]  active:bg-[#2C2C2C] active:text-white hover:text-white">{item}</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoriesFilter;

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../Styles/styles.css";

export interface PropsSlides {
  [x: string]: any;
  id: string;
  urlImage: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

interface SlidesComponentProps {
  slides: PropsSlides[];
}

// { id, urlImage, title, subtitle, link }: PropsSlides
const SlidesComponent: React.FC<SlidesComponentProps> = ({ slides }) => {
  console.log(slides);
  return (
    <div>
      <Swiper
        spaceBetween={10}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper rounded-2xl"
      >
        {slides.map((item: PropsSlides) => (
          <SwiperSlide key={item.id} className="rounded-2xl">
            <div className="overflow-hidden rounded-2xl w-full h-[400px] relative group">
              <img
                className="w-full group-hover:scale-125 transition duration-500 cursor-pointer object-cover rounded-2xl "
                src={item.urlImage}
              />
              <div className="absolute rounded-xl bg-gradient-to-t from-black via-black/40 to-black/10 w-full h-full overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <p className=" !z-50 absolute top-6 left-4 text-left !leading-none  font-Roboto text-sm font-bold text-white">
                {item.subtitle}
              </p>
              <div className="!z-50 absolute bottom-16 left-6 w-11/12 ">
                <p className="text-left !leading-none  font-Roboto bottom-28 left-5 text-5xl font-bold text-white">
                  {item.title}
                </p>
                <p className="ml-2 w-4/5 mt-2 leading-tight font-Roboto  left-5 text-md text-left font-light text-white">
                 ° {item.description}
                </p>
              </div>
                {item.link && (
                  <button className="transition ease-in-out font-bold hover:scale-105 active:scale-95 text-white text-sm font-Roboto  !z-50 absolute bottom-5 right-5 bg-gray-300/50 px-4 py-2 rounded-full ">
                    Saiba Mais
                  </button>
                )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidesComponent;

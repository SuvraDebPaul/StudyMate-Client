import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const Slider = () => {
  const slides = [
    {
      image: "https://i.ibb.co/Z6Ns49GR/Slider1.jpg",
      title: "Take the world's best courses, online.",
      subtitle:
        "We provide always our best services for our clients and always try to achieve our client's trust and satisfaction",
      button: "Read More",
    },
    {
      image: "https://i.ibb.co/60t6jY7M/Slider2.jpg",
      title: "Take the world's best courses, online.",
      subtitle:
        "We provide always our best services for our clients and always try to achieve our client's trust and satisfaction",
      button: "Read More",
    },
    {
      image: "https://i.ibb.co/rRjMbzrL/Slider3.jpg",
      title: "Take the world's best courses, online.",
      subtitle:
        "We provide always our best services for our clients and always try to achieve our client's trust and satisfaction",
      button: "Read More",
    },
  ];
  return (
    <div className="mt-1 bg-white  shadow-lg relative w-full">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true, type: "progressbar" }}
        autoplay={{ delay: 2500 }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        className="mySwiper relative"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-[80vh] bg-cover bg-center relative flex items-center justify-center px-10 text-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/40 p-6 py-20 max-w-3xl rounded-md text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <h3 className="text-xl my-10">{slide.subtitle}</h3>
                <Link
                  to="findpartner"
                  className="hover:bg-blue-600 px-4 py-2 rounded cursor-pointer btn btn-primary"
                >
                  {slide.button}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* ✅ Custom navigation buttons */}
        <button className="custom-prev absolute top-1/2 left-5 -translate-y-1/2 bg-white/60 hover:bg-white/80 text-gray-800 p-2 rounded-full shadow-md z-50">
          <ChevronLeft size={28} />
        </button>
        <button className="custom-next absolute top-1/2 right-5 -translate-y-1/2 bg-white/60 hover:bg-white/80 text-gray-800 p-2 rounded-full shadow-md z-50">
          <ChevronRight size={28} />
        </button>
      </Swiper>
    </div>
  );
};

export default Slider;

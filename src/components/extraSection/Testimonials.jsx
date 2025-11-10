import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aisha Rahman",
    subject: "Computer Science",
    review:
      "StudyMate helped me find a study partner who matched my learning pace perfectly!",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Riad Hasan",
    subject: "Physics Major",
    review: "Collaborating with peers here boosted my confidence before exams.",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Priya Das",
    subject: "Business Studies",
    review:
      "The matching system is extremely accurate. Loved the UI and simplicity!",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Nafis Chowdhury",
    subject: "Mathematics",
    review:
      "Group study sessions became 10x more productive through this platform.",
    img: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Mehnaz Akter",
    subject: "English Literature",
    review:
      "Super easy to use and perfect for students who want structured study partners.",
    img: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Jubair Khan",
    subject: "Chemistry",
    review:
      "I found a partner just 2 km away. The best tool for local collaboration!",
    img: "https://i.pravatar.cc/100?img=6",
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 uppercase">
            What <span className="text-secondary">Students</span> Say
          </h2>

          <Swiper
            slidesPerView={1}
            spaceBetween={25}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-stone-50 p-6 rounded-2xl shadow hover:shadow-lg transition h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{t.name}</h3>
                      <p className="text-gray-500 text-sm">{t.subject}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{t.review}</p>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

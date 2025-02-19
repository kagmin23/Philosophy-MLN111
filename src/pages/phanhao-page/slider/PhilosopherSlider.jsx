import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const philosophers = [
  {
    id: 1,
    name: "Karl Marx",
    avatar: "https://i.pravatar.cc/150?img=1",
    quote:
      "Sự phát triển của một người là điều kiện cho sự phát triển của tất cả mọi người.",
  },
  {
    id: 2,
    name: "Friedrich Nietzsche",
    avatar: "https://i.pravatar.cc/150?img=2",
    quote:
      "Không có gì quý hơn tình yêu, nhưng cũng không có gì nguy hiểm hơn nó.",
  },
  {
    id: 3,
    name: "Plato",
    avatar: "https://i.pravatar.cc/150?img=3",
    quote: "Tình yêu là khát vọng vĩnh cửu đối với cái đẹp tuyệt đối.",
  },
  {
    id: 4,
    name: "Aristotle",
    avatar: "https://i.pravatar.cc/150?img=4",
    quote: "Tình yêu là hành động của linh hồn hướng tới sự hoàn thiện.",
  },
  {
    id: 5,
    name: "Confucius",
    avatar: "https://i.pravatar.cc/150?img=5",
    quote: "Tình yêu bắt đầu từ sự tôn trọng và lòng nhân ái.",
  },
];

const PhilosopherSlider = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-5">
        Quan Điểm Triết Học Về Tình Yêu
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        className="w-full mt-6 pb-10"
      >
        {philosophers.map((philosopher) => (
          <SwiperSlide key={philosopher.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <motion.img
                src={philosopher.avatar}
                alt={philosopher.name}
                className="w-24 h-24 rounded-full shadow-md mb-4 border-2 border-pink-500"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                }}
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {philosopher.name}
              </h3>
              <p className="mt-3 text-gray-600 italic max-w-xs px-4 py-3 border-l-4 border-pink-500 bg-pink-50 shadow-sm">
                "{philosopher.quote}"
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhilosopherSlider;

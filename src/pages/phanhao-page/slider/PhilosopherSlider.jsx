import { Card } from "antd";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="mx-auto mt-10 rounded-lg">
      <Card className="my-4 border-pink-300 shadow-md">
        <h2 className="mb-5 text-2xl font-bold text-center text-pink-600">
          Quan Điểm Triết Học Về Tình Yêu
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          className="w-full max-w-lg pb-10 mt-6"
        >
          {philosophers.map((philosopher) => (
            <SwiperSlide key={philosopher.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center p-4 space-x-4 rounded-lg shadow-md bg-pink-50 "
              >
                <motion.img
                  src={philosopher.avatar}
                  alt={philosopher.name}
                  className="w-20 h-20 border-2 border-pink-500 rounded-full shadow-md"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                  }}
                />

                <div className="flex flex-col">
                  <p className="text-lg italic leading-relaxed text-gray-600">
                    " {philosopher.quote} "
                  </p>
                  <span className="mt-2 text-sm font-semibold text-right text-gray-700">
                    – {philosopher.name}
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </div>
  );
};

export default PhilosopherSlider;
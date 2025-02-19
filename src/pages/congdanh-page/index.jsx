import { useState } from "react";
import { motion } from "framer-motion";
import { Modal, ModalContent, ModalBody } from "@heroui/react";

const posts = [
  {
    id: 1,
    title: "Áp Dụng Triết Học Tình Yêu Trong Đời Sống",
    image: "https://photo.znews.vn/w660/Uploaded/piqbzcvo/2021_02_14/1_20210214_163651_0000.png",
    summary: "Khám phá cách áp dụng triết lý về tình yêu và trách nhiệm vào cuộc sống đương đại, cân bằng giữa công nghệ và kết nối thật sự.",
    sections: [
      {
        title: "Cân bằng giữa cảm xúc và lý trí",
        points: [
          "Không để công nghệ làm mất đi sự kết nối thật sự",
          "Duy trì giao tiếp trực tiếp trong các mối quan hệ",
          "Tôn trọng ranh giới cá nhân trong thế giới số"
        ]
      },
      {
        title: "Thích ứng với nhịp sống hiện đại",
        points: [
          "Tạo thời gian chất lượng cho người thân",
          "Kết hợp giá trị truyền thống với lối sống mới",
          "Xây dựng các mối quan hệ bền vững"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Vai Trò Của Trách Nhiệm Trong Tình Yêu",
    image: "https://photo.znews.vn/w660/Uploaded/piqbzcvo/2021_02_14/4.png",
    summary: "Tìm hiểu về trách nhiệm trong các mối quan hệ tình yêu: tình yêu đôi lứa, gia đình và tổ quốc.",
    sections: [
      {
        title: "Trong tình yêu đôi lứa",
        points: [
          "Tôn trọng và thấu hiểu đối phương",
          "Chung thủy và giữ lời hứa",
          "Cùng nhau vượt qua khó khăn"
        ]
      },
      {
        title: "Trong tình yêu gia đình",
        points: [
          "Nuôi dạy con cái nên người",
          "Tạo môi trường an toàn, lành mạnh",
          "Làm gương về đạo đức và lối sống"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Trách Nhiệm Của Con Cái Trong Gia Đình",
    image: "https://photo.znews.vn/w660/Uploaded/piqbzcvo/2021_02_14/5.png",
    summary: "Vai trò và trách nhiệm của con cái trong việc xây dựng hạnh phúc gia đình và duy trì giá trị truyền thống.",
    sections: [
      {
        title: "Trách nhiệm của con cái",
        points: [
          "Hiếu thảo với cha mẹ",
          "Góp phần xây dựng gia đình hạnh phúc",
          "Kế thừa và phát huy truyền thống gia đình",
          "Chia sẻ trách nhiệm trong công việc gia đình",
          "Tạo không khí đầm ấm, gắn kết"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Tình Yêu Đất Nước Trong Thời Đại Mới",
    image: "https://photo.znews.vn/w660/Uploaded/piqbzcvo/2021_02_14/2.png",
    summary: "Thể hiện tình yêu đất nước thông qua việc sống và làm việc có trách nhiệm, đóng góp cho sự phát triển của xã hội.",
    sections: [
      {
        title: "Tình yêu đất nước",
        points: [
          "Sống và làm việc theo pháp luật",
          "Đóng góp cho sự phát triển của xã hội",
          "Bảo vệ và phát huy văn hóa dân tộc",
          "Tham gia xây dựng cộng đồng",
          "Giữ gìn và phát huy bản sắc dân tộc"
        ]
      }
    ]
  }
];

export default function UngDungVaoDoiSong() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [hoveredPost, setHoveredPost] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-pink-300 mb-4 font-sans">
            Triết Học về Tình Yêu và Trách Nhiệm
          </h1>
          <p className="text-lg text-gray-600 font-sans">
            Khám phá những góc nhìn sâu sắc về tình yêu và trách nhiệm
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, staggerChildren: 0.1 }}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
              onClick={() => setSelectedPost(post)}
            >
              <div className="aspect-[16/14] relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <h2 className="text-2xl font-bold text-white mb-2 font-sans">
                    {post.title}
                  </h2>
                  <motion.p
                    className="text-white font-sans"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredPost === post.id ? 1 : 0,
                      y: hoveredPost === post.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {post.summary}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedPost && (
          <Modal
            isOpen={!!selectedPost}
            onClose={() => setSelectedPost(null)}
            hideCloseButton
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            >
              <ModalContent className="w-full max-w-3xl z-50 bg-[#0B1011] rounded-xl shadow-lg p-0 max-h-[80vh] overflow-y-auto mt-28 relative">
                <ModalBody className="pt-0">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-[300px] object-cover rounded-t-xl mb-0"
                  />
                  <div className="p-6">
                    <p className="text-white mb-4 font-sans">{selectedPost.summary}</p>
                    {selectedPost.sections && selectedPost.sections.map((section, idx) => (
                      <div key={idx} className="mb-4">
                        <h3 className="text-lg font-semibold text-white font-sans">{section.title}</h3>
                        <ul className="list-disc list-inside text-white font-sans">
                          {section.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ModalBody>
              </ModalContent>
            </motion.div>
          </Modal>
        )}
      </div>
    </div>
  );
}

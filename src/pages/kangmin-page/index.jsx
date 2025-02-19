import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Input, List, Tabs } from 'antd';
import { useState } from 'react';

const { TabPane } = Tabs;
const { Search } = Input;

const articles = [
  { title: "So sánh quan điểm của Kant và Sartre về tình yêu", category: "Triết học" },
  { title: "Tình yêu trong triết học Mác - Lênin", category: "Chủ nghĩa Mác" },
  { title: "Ứng dụng triết học vào quan hệ gia đình", category: "Xã hội học" }
];

const videos = [
  { title: "Bài giảng triết học về tình yêu", link: "https://www.youtube.com/watch?v=3LCl2UOtUlk" },
  { title: "Video phân tích Sartre", link: "https://www.youtube.com/watch?v=3bQsZxDQgzU" }
];

const documents = [
  { title: "Sách triết học cổ điển", link: "#" },
  { title: "Bài báo học thuật", link: "#" }
];

export default function TaiLieuBaiViet() {
  const [searchTerm, setSearchTerm] = useState("");

  // Hàm tìm kiếm
  const getFilteredData = (data) => {
    if (!searchTerm) return data; // Trả về danh sách gốc nếu ô tìm kiếm trống
    return data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen p-6 mt-5 bg-gradient-to-b from-pink-100 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-pink-700">Tài Liệu & Bài Viết</h1>
        <p className="my-2 text-center text-gray-600">Khám phá những bài viết, video và tài liệu triết học</p>

        <Search
          placeholder="Tìm kiếm tài liệu..."
          allowClear
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={setSearchTerm}
          className="my-4"
        />

        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Bài Viết" key="1">
            <List
              dataSource={getFilteredData(articles)}
              renderItem={(item) => (
                <Card className="my-2 border-pink-300">
                  <h3 className="text-lg font-semibold text-pink-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">Chủ đề: {item.category}</p>
                </Card>
              )}
            />
          </TabPane>
          <TabPane tab="Video & Bài Giảng" key="2">
            <List
              dataSource={getFilteredData(videos)}
              renderItem={(item) => (
                <Card className="my-2 border-blue-300">
                  <h3 className="text-lg font-semibold text-blue-800">{item.title}</h3>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Button type="link">Xem ngay</Button>
                  </a>
                </Card>
              )}
            />
          </TabPane>
          <TabPane tab="Tài Liệu & Sách" key="3">
            <List
              dataSource={getFilteredData(documents)}
              renderItem={(item) => (
                <Card className="my-2 border-green-300">
                  <h3 className="text-lg font-semibold text-green-800">{item.title}</h3>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Button type="link">Tải về</Button>
                  </a>
                </Card>
              )}
            />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  List,
  Button,
  Input,
  Form,
  message,
  Card,
  Row,
  Col,
  Pagination,
} from "antd";

const API_URL = "https://65f3f34a105614e654a18199.mockapi.io/comments";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [newComment, setNewComment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setComments(response.data.reverse());
    } catch (error) {
      message.error("Lỗi khi tải bình luận!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleAddComment = async () => {
    if (!username.trim() || !newComment.trim()) {
      message.warning("Vui lòng nhập tên và bình luận!");
      return;
    }
    try {
      const response = await axios.post(API_URL, {
        username,
        comment: newComment,
      });
      setComments([response.data, ...comments]);
      setUsername("");
      setNewComment("");
      message.success("Bình luận đã được gửi thành công!");
    } catch (error) {
      message.error("Lỗi khi gửi bình luận!");
    }
  };

  const indexOfLastComment = currentPage * pageSize;
  const indexOfFirstComment = indexOfLastComment - pageSize;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-pink-600 mb-5">
        Bình luận
      </h2>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={10}>
          <Card className="border border-pink-300 shadow-md">
            <Form layout="vertical" onFinish={handleAddComment}>
              <Form.Item label="Tên của bạn">
                <Input
                  placeholder="Nhập tên..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Bình luận">
                <Input.TextArea
                  rows={3}
                  placeholder="Nhập bình luận..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
              </Form.Item>
              <Form.Item className="text-center">
                <Button type="primary" htmlType="submit" className="w-full">
                  Gửi bình luận
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} md={14}>
          <Card className="border border-gray-200 shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Danh sách bình luận
            </h3>
            <List
              loading={loading}
              dataSource={currentComments}
              className="border border-gray-200 rounded-lg shadow-sm"
              renderItem={(item) => (
                <List.Item className="border-b border-gray-100">
                  <List.Item.Meta
                    title={
                      <span className="font-semibold text-gray-800">
                        {item.username}
                      </span>
                    }
                    description={
                      <p className="text-gray-600 bg-gray-100 rounded-md">
                        {item.comment}
                      </p>
                    }
                  />
                </List.Item>
              )}
            />

            <Pagination
              className="mt-4 text-center"
              current={currentPage}
              pageSize={pageSize}
              total={comments.length}
              onChange={(page) => setCurrentPage(page)}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CommentList;

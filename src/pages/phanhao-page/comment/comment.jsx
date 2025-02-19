import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, Button, Input, Form, message } from "antd";

const API_URL = "https://65f3f34a105614e654a18199.mockapi.io/comments";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [newComment, setNewComment] = useState("");

  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setComments(response.data);
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
      setComments([...comments, response.data]);
      setUsername("");
      setNewComment("");
      message.success("Bình luận đã được gửi thành công!");
    } catch (error) {
      message.error("Lỗi khi gửi bình luận!");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: "20px" }}>
      <h2>Danh sách bình luận</h2>

      <Form layout="vertical" onFinish={handleAddComment}>
        <Form.Item label="Tên của bạn">
          <Input
            placeholder="Nhập tên..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Bình luận">
          <Input
            placeholder="Nhập bình luận..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Gửi
          </Button>
        </Form.Item>
      </Form>

      {/* Danh sách bình luận */}
      <List
        loading={loading}
        dataSource={comments}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.username} description={item.comment} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default CommentList;

// Trong file services.js
import axios from "axios";

const getCategory = async () => {
  const response = await axios.get('http://localhost:8080/api/APIgetalluser');
  return response.data; // Đảm bảo trả về mảng dữ liệu
};

export default { getCategory };
import React, { useState, useEffect } from 'react';
import services from './services';

const ListCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await services.getCategory();
        setCategories(data);
      } catch (error) {
        console.error('Lỗi khi lấy danh mục:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Danh sách danh mục</h1>
      <ul>
        {categories.length > 0 ? ( // Kiểm tra xem categories có rỗng không
          categories.map((category) => (
            <li key={category.fullname}>{category.role}</li>
          ))
        ) : (
          <li>Danh sách danh mục đang được tải...</li> // Hiển thị thông báo khi chưa có dữ liệu
        )}
      </ul>
    </div>
  );
};

export default ListCategory;
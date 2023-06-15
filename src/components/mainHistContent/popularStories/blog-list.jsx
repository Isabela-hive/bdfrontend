import React, { useState } from 'react';
import './styles.css'; // Import the CSS file for styling

const BlogList = ({ blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-container">
      <h2>Popular Stories</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-item"
            onClick={() => handleBlogClick(blog)}
          >
            {blog.title}
          </div>
        ))}
      </div>
      {selectedBlog && (
        <div className="modal open">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.content}</p>
            <p>Author: {selectedBlog.author}</p>
            <p>Date: {selectedBlog.date}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default BlogList;

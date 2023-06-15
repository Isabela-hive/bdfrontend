import BlogList from './blog-list';

// Usage example
const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      content: 'Content of Blog 1',
      author: 'John Doe',
      date: 'May 15, 2023',
    },
    {
      id: 2,
      title: 'Blog 2',
      content: 'Content of Blog 2',
      author: 'Jane Smith',
      date: 'April 28, 2023',
    },
    {
      id: 3,
      title: 'Blog 3',
      content: 'Content of Blog 3',
      author: 'Samuel Johnson',
      date: 'June 2, 2023',
    },
  ];

  return <BlogList blogs={blogs} />;
};

export default Blog;

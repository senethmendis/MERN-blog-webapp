import { useEffect, useState } from "react";
import { blogImg } from "../assets";
import BlogCard from "./BlogCard";

const API_BASE = "http://localhost:3001";

const BlogPostGrid = () => {
  const [blogData, setBlogData] = useState([]);

  async function getBlogData() {
    fetch(API_BASE + "/blogs")
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((err) => console.log("Error : " + err));
  }
  useEffect(() => {
    getBlogData();
    console.log(blogData);
  }, []);
  return (
    <section
      id="blog"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
    >
      {blogData.map((blog) => (
        <BlogCard
          key={blog._id}
          blogImg={blogImg}
          description={blog.description}
          timestamp={blog.timestamp}
          title={blog.title}
          blogObj={blog}
        />
      ))}
    </section>
  );
};

export default BlogPostGrid;

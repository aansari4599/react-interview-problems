import postsData from "./data/postsData";
import PostCard from "./PostCard";
import "./styles.css";
export default function BlogPosts() {
  return (
    <div className="main-container">
      <h2>Blog Posts </h2>
      <div className="post-grid">
        {postsData.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

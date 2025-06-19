//👍 likes | 👎 dislikes | 👁️ views
export default function PostCard({ title, body, tags, reactions, views }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{body}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
      <div className="meta">
        <p>
          👍 {reactions.likes} | 👎 {reactions.dislikes} | 👁️ {views} views
        </p>
      </div>
    </div>
  );
}

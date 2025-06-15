import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";

function Accordion({ items }) {
  const [togglePost, setTogglePost] = useState(null);
  const handleToggle = (index) => {
    setTogglePost(togglePost === index ? null : index);
  };
  return items.length > 0 ? (
    <div>
      {items.map((post, index) => (
        <div
          key={index}
          onClick={() => handleToggle(index)}
          className="accordion">
          <div
            className="accordion-item"
            style={{
              display: "flex",
            }}>
            <h3 className="accordion-title accordion-title:hover">
              {post.title}
            </h3>
            <FaChevronDown
              style={{
                float: "right",
              }}
            />
          </div>
          {togglePost === index && (
            <p className="accordion-content">{post.content}</p>
          )}
        </div>
      ))}
    </div>
  ) : (
    <div>No items available</div>
  );
}

export default Accordion;

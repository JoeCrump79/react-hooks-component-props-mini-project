import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Emoji logic
  let emoji = "";

  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5); // 1 cup per 5 minutes
    emoji = "☕️".repeat(cups);
  } else {
    const boxes = Math.ceil(minutes / 10); // 1 bento per 10 minutes
    emoji = "🍱".repeat(boxes);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{emoji} {minutes} min read</p>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

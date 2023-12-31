// pages/api/posts.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const folder = "posts";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => path.extname(file) === ".md");
    const slugs = markdownPosts.map((file) => file.replace(".md", ""));
    res.status(200).json(slugs);
  } catch (error) {
    console.error("Error reading posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

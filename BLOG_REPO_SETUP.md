# Blogs Repository Structure

This is the structure you need for your `dragoon4890/blogs` repository.

## Required Files

```
blogs/
├── posts.json          # Index of all posts (required)
└── posts/
    ├── my-first-post.md
    ├── another-post.md
    └── ...
```

## posts.json Format

```json
[
  {
    "slug": "my-first-post",
    "title": "My First Blog Post",
    "date": "2024-12-21",
    "description": "A short description for the list view"
  },
  {
    "slug": "another-post",
    "title": "Another Post Title",
    "date": "2024-12-20",
    "description": "Another description"
  }
]
```

**Important:**
- `slug` must match the filename (without .md)
- `date` format: YYYY-MM-DD
- Posts are automatically sorted by date (newest first)

## Markdown Post Format

Each `.md` file in `/posts/` should have frontmatter:

```markdown
---
title: "My First Blog Post"
date: "2024-12-21"
description: "A short description"
---

# Your Content Here

Write your blog post content using standard markdown.

## Code Snippets

```javascript
const hello = "world";
console.log(hello);
```

## Lists

- Item 1
- Item 2
- Item 3

## Links and Images

[Link text](https://example.com)

![Image alt text](https://example.com/image.jpg)
```

## Quick Start

1. Create a new repo called `blogs` on GitHub
2. Add `posts.json` with your posts index
3. Create a `posts/` folder
4. Add your `.md` files
5. Push to GitHub
6. Your portfolio blog will automatically fetch from this repo!

## Adding a New Post

1. Write your `.md` file in `posts/`
2. Add an entry to `posts.json`
3. Push to GitHub
4. Done! No rebuild needed.

// Blog Service - Fetches posts from external GitHub repository
// Change this to your blogs repository
const GITHUB_USER = 'dragoon4890';
const BLOG_REPO = 'blogs';
const BRANCH = 'main';

const BASE_URL = `https://raw.githubusercontent.com/${GITHUB_USER}/${BLOG_REPO}/${BRANCH}`;

/**
 * Fetches the posts index (posts.json) from the blogs repository
 * @returns {Promise<Array>} Array of post metadata sorted by date (newest first)
 */
export async function fetchPostsIndex() {
    try {
        const response = await fetch(`${BASE_URL}/posts.json`);
        if (!response.ok) {
            throw new Error('Failed to fetch posts index');
        }
        const posts = await response.json();

        // Sort by date (newest first)
        return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

/**
 * Fetches a single post's markdown content
 * @param {string} slug - The post slug (filename without .md)
 * @returns {Promise<{metadata: Object, content: string} | null>}
 */
export async function fetchPost(slug) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${slug}.md`);
        if (!response.ok) {
            throw new Error('Failed to fetch post');
        }
        const text = await response.text();

        // Parse frontmatter (simple parser)
        const { metadata, content } = parseFrontmatter(text);

        return { metadata, content };
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
}

/**
 * Simple frontmatter parser
 * Parses YAML-like frontmatter between --- markers
 */
function parseFrontmatter(text) {
    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
    const match = text.match(frontmatterRegex);

    if (!match) {
        return { metadata: {}, content: text };
    }

    const frontmatterStr = match[1];
    const content = match[2];

    // Parse simple YAML (key: value format)
    const metadata = {};
    frontmatterStr.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.slice(0, colonIndex).trim();
            let value = line.slice(colonIndex + 1).trim();
            // Remove quotes if present
            if ((value.startsWith('"') && value.endsWith('"')) ||
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            metadata[key] = value;
        }
    });

    return { metadata, content };
}

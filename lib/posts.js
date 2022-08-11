import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostIds() {
    return fs.readdirSync(postsDirectory);
}

export function getPostById(id, fields = []) {
    const realId = id.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realId}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items = {};

    fields.forEach((field) => {
        if (field === 'id') {
            items[field] = realId;
        }
        if (field === 'content') {
            items[field] = content;
        }
        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    })
    return items;
}

export function getAllPosts(fields = []) {
    const ids = getPostIds();
    const posts = ids.map((id) => getPostById(id, fields)).sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
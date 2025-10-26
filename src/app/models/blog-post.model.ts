export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: Date;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  slug: string;
  views: number;
  likes: number;
  comments: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  postCount: number;
}


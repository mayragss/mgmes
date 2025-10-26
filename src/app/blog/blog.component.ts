import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogPost, BlogCategory } from '../models/blog-post.model';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blog.data';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];
  categories: BlogCategory[] = [];
  selectedCategory: string = 'all';
  searchTerm: string = '';
  featuredPosts: BlogPost[] = [];
  recentPosts: BlogPost[] = [];
  BLOG_POSTS = BLOG_POSTS;

  ngOnInit() {
    this.categories = BLOG_CATEGORIES;
    this.posts = BLOG_POSTS;
    this.featuredPosts = BLOG_POSTS.filter(post => post.featured);
    this.recentPosts = BLOG_POSTS
      .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
      .slice(0, 3);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.posts = BLOG_POSTS;
    } else {
      this.posts = BLOG_POSTS.filter(post => post.category === category);
    }
  }

  searchPosts() {
    if (this.searchTerm.trim() === '') {
      this.posts = BLOG_POSTS;
      return;
    }
    
    this.posts = BLOG_POSTS.filter(post => 
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
  }

  getCategoryColor(category: string): string {
    const cat = this.categories.find(c => c.id === category);
    return cat ? cat.color : 'gray';
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  getReadingTimeText(minutes: number): string {
    return `${minutes} min de leitura`;
  }

  formatNumber(num: number): string {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  }

  getSelectedCategoryName(): string {
    if (this.selectedCategory === 'all') {
      return 'Todos os Artigos';
    }
    const category = this.categories.find(c => c.id === this.selectedCategory);
    return category ? category.name : 'Todos os Artigos';
  }
}


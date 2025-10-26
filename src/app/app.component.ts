import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Project } from './models/project.model';
import { PROJECTS } from './data/projects.data';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styles: [`
    /* CSS Variables */
    :root {
      --primary-50: #f0f9ff;
      --primary-100: #e0f2fe;
      --primary-200: #bae6fd;
      --primary-300: #7dd3fc;
      --primary-400: #38bdf8;
      --primary-500: #0ea5e9;
      --primary-600: #0284c7;
      --primary-700: #0369a1;
      --primary-800: #075985;
      --primary-900: #0c4a6e;
    }
    
    /* Base Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html {
      scroll-behavior: smooth;
      font-family: 'Inter', system-ui, sans-serif;
    }
    
    body {
      font-family: 'Inter', system-ui, sans-serif;
      line-height: 1.6;
      color: #374151;
    }
    
    /* Navigation */
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(12px);
      z-index: 50;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .nav-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 4rem;
    }
    
    .nav-links {
      display: none;
    }
    
    .nav-links a {
      color: #6b7280;
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.15s;
    }
    
    .nav-links a:hover {
      color: var(--primary-600);
    }
    
    .nav-links a:first-child {
      color: #111827;
    }
    
    /* Hero Section */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #111827 0%, #1e3a8a 50%, #312e81 100%);
      background-image: 
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
      overflow: hidden;
    }
    
    .hero-pattern {
      position: absolute;
      inset: 0;
      opacity: 0.1;
      background-image: 
        url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.1%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%272%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'),
        url('data:image/svg+xml,%3Csvg%20width%3D%2740%27%20height%3D%2740%27%20viewBox%3D%270%200%2040%2040%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%3E%3Cpath%20d%3D%27M20%2020c0-11.046-8.954-20-20-20v20h20z%27/%3E%3C/g%3E%3C/svg%3E');
      background-size: 60px 60px, 40px 40px;
      background-position: 0 0, 30px 30px;
    }
    
    .hero-content {
      position: relative;
      z-index: 10;
      text-align: center;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      gap: 3rem;
    }
    
    .hero-text {
      flex: 1;
      text-align: left;
    }
    
    .hero-image {
      flex: 0 0 300px;
      position: relative;
    }
    
    .profile-photo {
      width: 100%;
      height: 400px;
      object-fit: cover;
      object-position: center 20%;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      border: 4px solid rgba(255, 255, 255, 0.2);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      backdrop-filter: blur(10px);
      clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%);
      filter: brightness(1.1) contrast(1.1) saturate(1.1);
    }
    
    .profile-photo::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, 
        rgba(59, 130, 246, 0.15) 0%, 
        rgba(16, 185, 129, 0.15) 50%, 
        rgba(147, 51, 234, 0.15) 100%);
      border-radius: 20px;
      clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%);
      z-index: 1;
    }
    
    .profile-photo::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, 
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.05) 50%,
        rgba(0, 0, 0, 0.1) 100%);
      border-radius: 20px;
      clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%);
      z-index: 2;
    }
    
    .hero-title {
      font-size: 2.25rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1.5rem;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      color: #93c5fd;
      margin-bottom: 2rem;
      max-width: 48rem;
      margin-left: auto;
      margin-right: auto;
    }
    
    .hero-description {
      font-size: 1.125rem;
      color: #d1d5db;
      margin-bottom: 3rem;
      max-width: 56rem;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.75;
    }
    
    .hero-buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
    }
    
    .btn-primary {
      background-color: var(--primary-600);
      color: white;
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      font-weight: 500;
      text-decoration: none;
      transition: background-color 0.15s;
      display: inline-block;
    }
    
    .btn-primary:hover {
      background-color: var(--primary-700);
    }
    
    .btn-secondary {
      border: 1px solid white;
      color: white;
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.15s;
      display: inline-block;
    }
    
    .btn-secondary:hover {
      background-color: white;
      color: #111827;
    }
    
    /* Floating Code Elements */
    .floating-code {
      position: absolute;
      font-family: 'Courier New', monospace;
      font-size: 0.875rem;
      opacity: 0.2;
      animation: pulse 2s infinite;
    }
    
    .floating-code.green {
      color: #4ade80;
      top: 5rem;
      left: 2.5rem;
    }
    
    .floating-code.blue {
      color: #60a5fa;
      top: 10rem;
      right: 5rem;
    }
    
    .floating-code.yellow {
      color: #fbbf24;
      bottom: 10rem;
      left: 5rem;
    }
    
    /* Sections */
    .section {
      padding: 5rem 0;
      position: relative;
      z-index: 1;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    
    .section-title {
      font-size: 1.875rem;
      font-weight: 700;
      color: #111827;
      margin-bottom: 1rem;
    }
    
    .section-subtitle {
      font-size: 1.25rem;
      color: #4b5563;
      max-width: 48rem;
      margin: 0 auto;
    }
    
    /* Projects Section */
    .projects {
      background-color: #f9fafb;
      background-image: 
        radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
      position: relative;
    }
    
    .projects::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('data:image/svg+xml,%3Csvg%20width%3D%2780%27%20height%3D%2780%27%20viewBox%3D%270%200%2080%2080%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23000000%27%20fill-opacity%3D%270.02%27%3E%3Cpath%20d%3D%27M40%2040c0-22.091-17.909-40-40-40v40h40z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
      background-size: 80px 80px;
      opacity: 0.3;
      pointer-events: none;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .project-card {
      background-color: white;
      border-radius: 0.75rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: all 0.3s ease;
    }
    
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
    
    .project-icon {
      width: 3rem;
      height: 3rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }
    
    .project-icon.blue {
      background-color: #dbeafe;
      color: #2563eb;
    }
    
    .project-icon.green {
      background-color: #dcfce7;
      color: #16a34a;
    }
    
    .project-icon.purple {
      background-color: #f3e8ff;
      color: #9333ea;
    }
    
    .project-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 0.5rem;
    }
    
    .project-description {
      color: #4b5563;
      margin-bottom: 1rem;
    }
    
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .tech-tag {
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .tech-tag.blue {
      background-color: #dbeafe;
      color: #1d4ed8;
    }
    
    .tech-tag.green {
      background-color: #dcfce7;
      color: #166534;
    }
    
    .tech-tag.purple {
      background-color: #f3e8ff;
      color: #7c3aed;
    }
    
    .tech-tag.orange {
      background-color: #fed7aa;
      color: #ea580c;
    }
    
    /* Skills Section */
    .skills {
      background-color: white;
      background-image: 
        radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.03) 0%, transparent 50%);
      position: relative;
    }
    
    .skills::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23000000%27%20fill-opacity%3D%270.01%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
      background-size: 60px 60px;
      opacity: 0.5;
      pointer-events: none;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .skill-category {
      text-align: center;
    }
    
    .skill-category-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 1.5rem;
    }
    
    .skill-items {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    
    .skill-item {
      background-color: #f3f4f6;
      border-radius: 0.5rem;
      padding: 0.75rem;
      transition: all 0.2s ease;
    }
    
    .skill-item:hover {
      background-color: #e5e7eb;
      transform: scale(1.05);
    }
    
    .skill-item-text {
      color: #374151;
      font-weight: 500;
    }
    
    /* Contact Section */
    .contact {
      background-color: #111827;
      background-image: 
        radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.05) 0%, transparent 50%);
      color: white;
      position: relative;
    }
    
    .contact::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        url('data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%27100%27%20viewBox%3D%270%200%20100%20100%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.02%27%3E%3Cpath%20d%3D%27M50%2050c0-27.614-22.386-50-50-50v50h50z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'),
        url('data:image/svg+xml,%3Csvg%20width%3D%2750%27%20height%3D%2750%27%20viewBox%3D%270%200%2050%2050%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.01%27%3E%3Ccircle%20cx%3D%2725%27%20cy%3D%2725%27%20r%3D%272%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
      background-size: 100px 100px, 50px 50px;
      background-position: 0 0, 50px 50px;
      opacity: 0.3;
      pointer-events: none;
    }
    
    .contact-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    
    .contact-title {
      font-size: 1.875rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1rem;
    }
    
    .contact-subtitle {
      font-size: 1.25rem;
      color: #d1d5db;
      max-width: 48rem;
      margin: 0 auto;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .contact-icon {
      width: 3rem;
      height: 3rem;
      background-color: var(--primary-600);
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .contact-icon svg {
      width: 1.5rem;
      height: 1.5rem;
      color: white;
    }
    
    .contact-details h3 {
      font-size: 1.125rem;
      font-weight: 600;
      color: white;
      margin-bottom: 0.25rem;
    }
    
    .contact-details p,
    .contact-details a {
      color: #d1d5db;
      text-decoration: none;
    }
    
    .contact-details a:hover {
      color: var(--primary-400);
    }
    
    /* Contact Form */
    .contact-form {
      background-color: #1f2937;
      border-radius: 0.75rem;
      padding: 2rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-label {
      display: block;
      font-size: 0.875rem;
      font-weight: 500;
      color: #d1d5db;
      margin-bottom: 0.5rem;
    }
    
    .form-input,
    .form-textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      background-color: #374151;
      border: 1px solid #4b5563;
      border-radius: 0.5rem;
      color: white;
      font-family: inherit;
      transition: all 0.15s;
    }
    
    .form-input:focus,
    .form-textarea:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.5);
    }
    
    .form-input::placeholder,
    .form-textarea::placeholder {
      color: #9ca3af;
    }
    
    .form-submit {
      width: 100%;
      background-color: var(--primary-600);
      color: white;
      font-weight: 500;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      transition: background-color 0.15s;
    }
    
    .form-submit:hover {
      background-color: var(--primary-700);
    }
    
    /* Footer */
    .footer {
      background-color: #111827;
      border-top: 1px solid #1f2937;
      padding: 2rem 0;
      text-align: center;
    }
    
    .footer p {
      color: #9ca3af;
    }
    
    /* Animations */
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
    
    .animate-fade-in {
      animation: fadeIn 0.6s ease-in-out;
    }
    
    .animate-slide-up {
      animation: slideUp 0.8s ease-out;
    }
    
    .animate-pulse {
      animation: pulse 2s infinite;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-content {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
      }
      
      .hero-text {
        text-align: center;
      }
      
      .hero-image {
        flex: none;
        width: 250px;
        margin: 0 auto;
      }
      
      .profile-photo {
        height: 300px;
      }
    }
    
    @media (min-width: 640px) {
      .nav-container {
        padding: 0 1.5rem;
      }
      
      .hero-buttons {
        flex-direction: row;
      }
      
      .hero-title {
        font-size: 3.75rem;
      }
      
      .hero-subtitle {
        font-size: 1.5rem;
      }
    }
    
    @media (min-width: 768px) {
      .nav-links {
        display: flex;
        align-items: center;
        gap: 2rem;
      }
      
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .contact-content {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    @media (min-width: 1024px) {
      .nav-container {
        padding: 0 2rem;
      }
      
      .projects-grid {
        grid-template-columns: repeat(3, 1fr);
      }
      
      .skills-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    /* Blog Section */
    .blog {
      background-color: #f8fafc;
      background-image: 
        radial-gradient(circle at 15% 85%, rgba(99, 102, 241, 0.04) 0%, transparent 50%),
        radial-gradient(circle at 85% 15%, rgba(236, 72, 153, 0.04) 0%, transparent 50%);
      position: relative;
    }
    
    .blog::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('data:image/svg+xml,%3Csvg%20width%3D%2770%27%20height%3D%2770%27%20viewBox%3D%270%200%2070%2070%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23000000%27%20fill-opacity%3D%270.015%27%3E%3Cpath%20d%3D%27M35%2035c0-19.33-15.67-35-35-35v35h35z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
      background-size: 70px 70px;
      opacity: 0.4;
      pointer-events: none;
    }
    
    .blog-preview {
      margin-top: 2rem;
    }
    
    .blog-preview-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    
    .blog-preview-card {
      background: white;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      border: 1px solid #e2e8f0;
    }
    
    .blog-preview-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      border-color: #3b82f6;
    }
    
    .blog-preview-image {
      height: 200px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .blog-category-badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: rgba(255, 255, 255, 0.9);
      color: #1e293b;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-size: 0.875rem;
      font-weight: 600;
    }
    
    .blog-preview-content {
      padding: 1.5rem;
    }
    
    .blog-preview-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 0.75rem;
      line-height: 1.4;
    }
    
    .blog-preview-excerpt {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1rem;
      font-size: 0.875rem;
    }
    
    .blog-preview-meta {
      display: flex;
      gap: 1rem;
      font-size: 0.75rem;
      color: #64748b;
    }
    
    .blog-cta {
      text-align: center;
    }
    
    /* Project Dialog Styles */
    .dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      animation: fadeIn 0.3s ease-out;
    }
    
    .dialog-container {
      background: white;
      border-radius: 1rem;
      width: 90%;
      height: 90%;
      max-width: none;
      max-height: none;
      overflow-y: auto;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      animation: slideUp 0.3s ease-out;
    }
    
    .dialog-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 2rem 1rem;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .dialog-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
    }
    
    .dialog-close {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.5rem;
      color: #64748b;
      transition: all 0.2s ease;
    }
    
    .dialog-close:hover {
      background: #f1f5f9;
      color: #1e293b;
    }
    
    .dialog-content {
      padding: 2rem;
    }
    
    .project-info h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e293b;
      margin: 2rem 0 1rem 0;
    }
    
    .project-info h3:first-child {
      margin-top: 0;
    }
    
    .project-meta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    
    .meta-item {
      padding: 1rem;
      background: #f8fafc;
      border-radius: 0.5rem;
      font-size: 0.875rem;
    }
    
    .project-description-full p {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 0;
    }
    
    .tech-tags-full {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .tech-tag-full {
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .tech-tag-blue {
      background: #dbeafe;
      color: #1d4ed8;
    }
    
    .tech-tag-green {
      background: #dcfce7;
      color: #166534;
    }
    
    .tech-tag-purple {
      background: #f3e8ff;
      color: #7c3aed;
    }
    
    .tech-tag-orange {
      background: #fed7aa;
      color: #ea580c;
    }
    
    .project-achievements ul,
    .project-challenges ul,
    .project-results ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .project-achievements li,
    .project-challenges li,
    .project-results li {
      padding: 0.75rem 0;
      border-bottom: 1px solid #f1f5f9;
      color: #64748b;
      position: relative;
      padding-left: 1.5rem;
    }
    
    .project-achievements li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: bold;
    }
    
    .project-challenges li:before {
      content: "⚠";
      position: absolute;
      left: 0;
      color: #f59e0b;
      font-weight: bold;
    }
    
    .project-results li:before {
      content: "📊";
      position: absolute;
      left: 0;
      color: #3b82f6;
      font-weight: bold;
    }
    
    .project-achievements li:last-child,
    .project-challenges li:last-child,
    .project-results li:last-child {
      border-bottom: none;
    }
    
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #a8a8a8;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'portfolio-mayra';
  isScrolled = false;
  selectedProject: Project | null = null;
  showProjectDialog = false;
  projects = PROJECTS;

  ngOnInit() {
    // Smooth scrolling for navigation links
    this.setupSmoothScrolling();
    console.log('Projects loaded:', this.projects);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  private setupSmoothScrolling() {
    // Add smooth scrolling behavior to all anchor links
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        event.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  openProjectDialog(project: Project) {
    console.log('Opening dialog for project:', project);
    this.selectedProject = project;
    this.showProjectDialog = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeProjectDialog() {
    this.selectedProject = null;
    this.showProjectDialog = false;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  onDialogClick(event: Event) {
    event.stopPropagation();
  }
}

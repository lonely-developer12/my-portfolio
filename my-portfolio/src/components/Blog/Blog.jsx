import React, { useState, useEffect } from 'react';
import {
  BlogContainer,
  BlogGrid,
  Card,
  Title,
  Excerpt,
  Meta,
  TypewriterTitle,
} from './Blog.styles';

// Testni podaci za blog postove - zameniti sa pravim podacima
const blogPosts = [
  {
    id: 1,
    title: 'Creating Matrix Effects in Modern Web Development', // Naslov blog posta
    excerpt:
      'Learn how to implement impressive Matrix-style effects using modern CSS techniques and React...', // Kratak opis
    date: '2024-01-15', // Datum objavljivanja
    category: 'CSS & Animation', // Kategorija posta
  },
  {
    id: 2,
    title: 'Advanced React Patterns', // Naslov blog posta
    excerpt:
      'Deep dive into advanced React patterns and performance optimization techniques...', // Kratak opis
    date: '2024-01-20', // Datum objavljivanja
    category: 'React', // Kategorija posta
  },
  {
    id: 3,
    title: 'Building Cyberpunk UI Components', // Naslov blog posta
    excerpt:
      'A comprehensive guide to creating futuristic, cyberpunk-styled UI components...', // Kratak opis
    date: '2024-01-25', // Datum objavljivanja
    category: 'UI Design', // Kategorija posta
  },
];

// Glavna komponenta za blog
const Blog = () => {
  const [title, setTitle] = useState(''); // Stanje za naslov
  const fullTitle = '> blog.exe'; // Puni naslov

  useEffect(() => {
    let index = 0; // Indeks za animaciju
    const timer = setInterval(() => {
      setTitle(fullTitle.slice(0, index)); // Postavljanje naslova
      index++; // Povećanje indeksa
      if (index > fullTitle.length) {
        clearInterval(timer); // Zaustavljanje tajmera
      }
    }, 100); // Interval za animaciju

    return () => clearInterval(timer); // Čišćenje tajmera
  }, []);

  return (
    <BlogContainer>
      <TypewriterTitle>
        {title} {/* Prikaz naslova */}
        <span className="cursor">█</span> {/* Kursor */}
      </TypewriterTitle>
      <BlogGrid>
        {blogPosts.map((post) => ( // Mapa kroz postove
          <Card key={post.id}> {/* Kartica za svaki post */}
            <Title>{post.title}</Title> {/* Naslov posta */}
            <Excerpt>{post.excerpt}</Excerpt> {/* Kratak opis posta */}
            <Meta>
              <span>{post.date}</span> {/* Datum objavljivanja */}
              <span>{post.category}</span> {/* Kategorija posta */}
            </Meta>
          </Card>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog; // Izvoz komponente

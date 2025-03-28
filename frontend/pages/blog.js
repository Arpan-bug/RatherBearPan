import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://127.0.0.1:1337/api/blog-posts?populate=*');
        if (!res.ok) throw new Error(`Strapi responded with ${res.status}`);
        const data = await res.json();
        console.log("Blog data:", data);
        setBlogs(data.data);
      } catch (err) {
        console.error("❌ Error fetching blogs:", err.message);
        setBlogs([]); // fallback so app doesn't crash
      }
    };
  
    fetchBlogs();
  }, []);
  

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-12 text-gray-800 font-sans">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>

          {blogs.length === 0 ? (
            <p>No blog posts found.</p>
          ) : (
            <div className="space-y-8">
              {blogs.map((blog) => {
                const b = blog.attributes || blog;

                return (
                  <div key={blog.id} className="border-b pb-6">
                    <Link
                        href={`/blog/${b.slug}`}
                        className="text-2xl font-semibold text-blue-700 hover:underline"
                    >
                        {b.Title}
                    </Link>

                    <p className="text-sm text-gray-500 mb-2">{b.Date}</p>
                    <p className="text-gray-700 line-clamp-3">
                      {b.Content.slice(0, 200)}...
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

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
      <main className="pt-35 pb-24 min-h-screen bg-white text-gray-800 font-sans px-35 dark:bg-[#1F1B16] dark:text-[#FAF4ED]">
      
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <div className="bear-box bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-6">
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
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 w-full bg-[#FFF8F1] text-[#4B4032] py-6 border-t border-gray-200">
  <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
    
    {/* Left: Branding */}
    <div className="flex items-center gap-2">
      <span className="text-xl">🐻</span>
      <span className="font-semibold">Rather Bear Pan</span>
    </div>

    {/* Center: Navigation */}
    <div className="space-x-4">
      <a href="/" className="hover:underline">Home</a>
      <a href="/projects" className="hover:underline">Projects</a>
      <a href="/blog" className="hover:underline">Blog</a>
      <a href="/reads" className="hover:underline">Reads</a>
    </div>

    {/* Right: Socials */}
    <div className="space-x-3">
      <a href="https://www.linkedin.com/in/ratherbearpan" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
      <a href="https://github.com/Arpan-bug" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
      <a href="https://instagram.com/ratherbearpan" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
      <a href="mailto:arpansaha121@gmail.com" className="hover:underline">Email</a>
    </div>
  </div>
</footer>
    </>
  );
}

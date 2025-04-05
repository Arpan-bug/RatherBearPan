import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/myfooter';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog-posts?populate=tags`);
        if (!res.ok) throw new Error(`Strapi responded with ${res.status}`);
        const data = await res.json();

        // Sort descending by Date
        const sorted = data.data.sort((a, b) => new Date(b.attributes.Date) - new Date(a.attributes.Date));
        setBlogs(sorted);
      } catch (err) {
        console.error("❌ Error fetching blogs:", err.message);
        setBlogs([]); // fallback to empty array
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-35 pb-24 min-h-screen bg-white text-gray-800 font-sans px-4 sm:px-6 md:px-10 dark:bg-[#1F1B16] dark:text-[#FAF4ED]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>

          {blogs.length === 0 ? (
            <p className="text-center text-gray-500 italic mt-6">
              🐾 No blogs yet. Maybe grab a cup of coffee and while I write the first one?
            </p>
          ) : (
            <div className="grid gap-6">
              {blogs.map((b) => {
                const { Title, slug, Date, Content, tags } = b.attributes;

                const formattedDate = new Date(Date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                });

                return (
                  <div
                    key={b.id}
                    className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl p-6 shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02]"
                  >
                    <Link href={`/blog/${slug}`} className="block group">
                      <h2 className="text-2xl font-semibold text-[#4B4032] group-hover:text-[#8B5E3C] transition-colors">
                        {Title}
                      </h2>
                    </Link>

                    <p className="text-sm text-gray-500 mt-1 mb-2">🗓️ {formattedDate}</p>

                    {/* Tags */}
                    {tags?.length > 0 && (
                      <div className="mb-2 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag.id}
                            className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-white text-xs font-medium rounded-full"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                      {Content.slice(0, 200)}...
                    </p>

                    <div className="mt-4">
                      <Link
                        href={`/blog/${slug}`}
                        className="inline-block text-sm text-blue-600 hover:underline"
                      >
                        Read Full Post →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <footer className="mt-12 bg-[#FFF8F1] dark:bg-[#1a1a1a] text-[#4B4032] dark:text-white py-6 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐻</span>
            <span className="font-semibold">Rather Bear Pan</span>
          </div>
          <div className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/projects" className="hover:underline">Projects</a>
            <a href="/blog" className="hover:underline">Blog</a>
            <a href="/reads" className="hover:underline">Reads</a>
          </div>
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

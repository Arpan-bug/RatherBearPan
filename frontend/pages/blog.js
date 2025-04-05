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

        const getDate = (b) => b?.Date || b?.attributes?.Date;

        const filtered = data.data.filter((b) => {
          const date = getDate(b);
          if (!date) {
            console.warn("⚠️ Skipping blog with missing Date:", b);
          }
          return date;
        });

        const sorted = filtered.sort(
          (a, b) => new Date(getDate(b)) - new Date(getDate(a))
        );

        setBlogs(sorted);
      } catch (err) {
        console.error('❌ Error fetching blogs:', err.message);
        setBlogs([]);
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
                const attrs = b.attributes || b; // handles both cases
                const { Title, slug, Content, tags } = attrs;
                const dateStr = attrs.Date;

                const formattedDate = dateStr
                  ? new Date(dateStr).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                  : '🕓 Unknown date';

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
                      {Content?.slice(0, 200)}...
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

      <Footer />
    </>
  );
}

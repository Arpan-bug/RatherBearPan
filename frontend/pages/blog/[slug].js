import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!router.isReady || !slug) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate[Tags]=*`
        );
        const data = await res.json();

        if (data?.data?.length > 0) {
          const blogData = data.data[0];
          setBlog(blogData);

          const currentTagIDs = blogData?.attributes?.Tags?.data?.map((tag) => tag.id) || [];
          const tagSet = new Set(currentTagIDs);

          const allRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog-posts?populate=Tags`);
          const allData = await allRes.json();

          if (allData?.data?.length > 0) {
            const others = allData.data.filter((b) => b.id !== blogData.id);

            const related = others.filter((b) => {
              const otherTagIDs = b?.attributes?.Tags?.data?.map((tag) => tag.id) || [];
              return otherTagIDs.some((id) => tagSet.has(id));
            });

            const fallback = others.sort(() => 0.5 - Math.random());
            const finalList = (related.length > 0 ? related : fallback).slice(0, 3);
            setRelatedBlogs(finalList);
          }
        } else {
          setNotFound(true);
        }
      } catch (err) {
        console.error('❌ Error fetching blog:', err);
        setNotFound(true);
      }
    };

    fetchBlog();
  }, [router.isReady, slug]);

  return (
    <>
      <Navbar />

      {blog && (
        <div className="fixed top-24 left-0 right-0 z-40 px-4 sm:px-6 md:px-10 bg-white/90 dark:bg-[#1F1B16]/90 backdrop-blur-md shadow-md border-b border-[#f9c06b]">
          <div className="max-w-6xl mx-auto py-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#4B4032] dark:text-[#FAF4ED]">
              {blog.attributes.Title}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {new Date(blog.attributes.Date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      )}

      <main className="pt-56 pb-32 min-h-screen bg-white text-gray-800 font-sans px-4 sm:px-6 md:px-10 dark:bg-[#1F1B16] dark:text-[#FAF4ED] transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 pr-0 lg:pr-[22rem]">
          <div className="lg:w-2/3">
            {!router.isReady ? (
              <p className="text-gray-500 dark:text-gray-400">Initializing blog page...</p>
            ) : notFound ? (
              <p className="text-red-500 text-lg">Blog post not found.</p>
            ) : blog ? (
              <>
                <div className="mt-2 mb-8">
                  <Link
                    href="/blog"
                    className="inline-block bg-[#F9C06B] text-[#4B4032] dark:bg-yellow-700 dark:text-white px-5 py-2 rounded-lg font-medium shadow hover:shadow-md transition"
                  >
                    ← Back to Blog
                  </Link>
                </div>

                <div
                  className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: blog.attributes.Content }}
                ></div>

                <div className="text-5xl mt-12 text-center">🐾</div>
              </>
            ) : (
              <p className="text-blue-600 dark:text-blue-300">Loading...</p>
            )}
          </div>
        </div>

        {/* Fixed Related Blogs */}
        <div className="hidden lg:block fixed top-60 right-10 w-80 z-30">
          <div className="bg-[#FEF7EC] dark:bg-[#2C2113] border border-[#F9C06B] dark:border-yellow-700 rounded-xl shadow-lg p-5">
            <h2 className="text-xl font-semibold mb-4 text-[#4B4032] dark:text-white">Related Blogs</h2>
            <div className="space-y-4">
              {relatedBlogs.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.attributes.slug}`}
                  className="block border border-[#F9C06B] bg-white dark:bg-[#1F1B16] text-[#4B4032] dark:text-[#FAF4ED] rounded-lg p-4 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-medium hover:text-[#8B5E3C] dark:hover:text-orange-300">{rel.attributes.Title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {new Date(rel.attributes.Date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 line-clamp-3">
                    {rel.attributes.Content?.slice(0, 120)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 bg-[#FFF8F1] dark:bg-[#1a1a1a] text-[#4B4032] dark:text-white py-6 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
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

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    console.log("router.isReady:", router.isReady);
    console.log("slug from URL:", slug);

    if (!router.isReady || !slug) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:1337/api/blog-posts?filters[slug][$eq]=${slug}`
        );
        const data = await res.json();
        console.log("Fetched blog:", data);

        if (data?.data?.length > 0) {
          console.log("blog object:", data.data[0]);
          setBlog(data.data[0]); // Set blog directly
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
      <main className="pt-35 pb-24 min-h-screen bg-white text-gray-800 font-sans px-45 dark:bg-[#1F1B16] dark:text-[#FAF4ED]">
        <div className="max-w-3xl mx-auto">
          {!router.isReady ? (
            <p className="text-gray-500">Initializing blog page...</p>
          ) : notFound ? (
            <p className="text-red-500 text-lg">Blog post not found.</p>
          ) : blog ? (
            <>
              <h1 className="text-4xl font-bold mb-2">{blog.Title}</h1>
              <p className="text-sm text-gray-500 mb-6">{blog.Date}</p>
              <div
                className="text-base leading-relaxed blog-post-content"
                dangerouslySetInnerHTML={{ __html: blog.Content }}
              ></div>
            </>
          ) : (
            <p className="text-blue-600">Loading...</p>
          )}
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

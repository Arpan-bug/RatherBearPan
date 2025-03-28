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
      <main className="min-h-screen bg-white text-gray-800 px-6 py-12 font-sans">
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
    </>
  );
}

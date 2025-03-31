import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/myfooter';


export default function Reads() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/book-reads?populate=*`)
      .then((res) => res.json())
      .then((data) => setBooks(data.data));
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;

    for (let i = 0; i < full; i++) stars.push('★');
    if (half) stars.push('½');
    while (stars.length < 5) stars.push('☆');

    return stars.join(' ');
  };

  return (
    <>
      <Navbar />
      <main className="pt-35 pb-40 min-h-screen bg-white text-gray-800 font-sans px-4 sm:px-6 md:px-10 dark:bg-[#1F1B16] dark:text-[#FAF4ED]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Books I’ve Read in 2025</h1>

          {books.length === 0 ? (
            <p>No books added yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {books.map((book) => {
                const b = book.attributes || book;
                const coverUrl = b.Cover?.[0]?.formats?.medium?.url || b.Cover?.[0]?.url;

                return (
                  <div key={book.id} className="p-4 border border-[#F9C06B] bg-[#FEF7EC] rounded-xl shadow hover:shadow-lg transition text-center">
                    {coverUrl && (
                      <div className="w-full h-40 overflow-hidden rounded mb-3 bg-white flex items-center justify-center">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL}${coverUrl}`}
                          alt={b.Title}
                          className="h-full object-contain"
                        />
                      </div>
                    )}
                    <h2 className="text-lg font-semibold mb-1">{b.Title}</h2>
                    <p className="text-xs text-gray-500 mb-1 italic">by {b.Author}</p>
                    <p className="text-yellow-500 text-sm mb-2">{renderStars(b.Rating)}</p>
                    {b.Review && <p className="text-sm text-gray-700 line-clamp-4">{b.Review}</p>}
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
      

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

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
      <main className="pt-35 pb-24 min-h-screen bg-white text-gray-800 font-sans px-35 dark:bg-[#1F1B16] dark:text-[#FAF4ED]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Books I’ve Read in 2025</h1>

          {books.length === 0 ? (
            <p>No books added yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {books.map((book) => {
                const b = book.attributes || book;
                const coverUrl = b.Cover?.[0]?.formats?.medium?.url || b.Cover?.[0]?.url;

                return (
                  <div key={book.id} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                    {coverUrl && (
                      <div className="w-full h-64 overflow-hidden rounded mb-4 bg-gray-100 flex items-center justify-center">
                        <img
                          src={`http://localhost:1337${coverUrl}`}
                          alt={b.Title}
                          className="h-full object-contain"
                        />
                      </div>
                    )}
                    <h2 className="text-xl font-semibold">{b.Title}</h2>
                    <p className="text-sm text-gray-500 mb-1">by {b.Author}</p>
                    <p className="text-yellow-500 text-sm mb-2">{renderStars(b.Rating)}</p>
                    {b.Review && <p className="text-gray-700 text-sm">{b.Review}</p>}
                  </div>
                );
              })}
            </div>
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

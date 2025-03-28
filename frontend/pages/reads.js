import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Reads() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/book-reads?populate=*')
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
      <main className="min-h-screen bg-white text-gray-800 px-6 py-12 font-sans">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Books I’ve Read</h1>

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
    </>
  );
}

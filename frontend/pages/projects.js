import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data.data));
  }, []);

  const toggleDescription = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <Navbar />
      <main className="pt-35 pb-24 min-h-screen bg-white text-gray-800 font-sans px-4 sm:px-6 md:px-10 dark:bg-[#1F1B16] dark:text-[#FAF4ED] transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Projects</h1>

          {projects.length === 0 ? (
            <p>No projects to show.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.slice().reverse().map((project) => {
                const p = project.attributes || project;
                const isExpanded = expanded[project.id];

                return (
                  <div
                    key={project.id}
                    className="bg-[#FEF7EC] dark:bg-[#2C2113] border border-[#F9C06B] dark:border-yellow-700 rounded-xl shadow-md hover:shadow-lg transition-all p-5 sm:p-6 flex flex-col justify-between text-gray-800 dark:text-white"
                  >
                    <div>
                      <h2 className="text-xl font-semibold mb-2">{p.Title}</h2>
                      <p className={`text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-2 ${isExpanded ? '' : 'line-clamp-4'}`}>
                        {p.Description}
                      </p>
                      <button
                        onClick={() => toggleDescription(project.id)}
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-3"
                      >
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </button>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="font-medium text-gray-600 dark:text-gray-300">Tools:</span>{' '}
                        {Array.isArray(p.Tools)
                          ? p.Tools.join(', ')
                          : typeof p.Tools === 'string'
                          ? p.Tools
                          : 'N/A'}
                      </p>
                    </div>
                    <div className="flex gap-4 mt-auto">
                      {p.Github && (
                        <a
                          href={p.Github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                      {p.Demo && (
                        <a
                          href={p.Demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-green-600 dark:text-green-400 hover:underline"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://ratherbearpan.onrender.com/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data.data));
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-35 pb-24 min-h-screen bg-white text-gray-800 font-sans px-35 dark:bg-[#1F1B16] dark:text-[#FAF4ED]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Projects</h1>

          {projects.length === 0 ? (
            <p>No projects to show.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => {
                const p = project.attributes || project;
                console.log("Project:", JSON.stringify(p, null, 2));

                return (
                  <div key={project.id} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-2">{p.Title}</h2>
                    <p className="text-gray-700 mb-2">{p.Description}</p>
                    <p className="text-sm text-gray-500 mb-3">
                      Tools:{' '}
                      {Array.isArray(p.Tools)
                        ? p.Tools.join(', ')
                        : typeof p.Tools === 'string'
                        ? p.Tools
                        : 'N/A'}
                    </p>
                    <div className="flex gap-4">
                      {p.Github && (
                        <a
                          href={p.Github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                      {p.Demo && (
                        <a
                          href={p.Demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-green-600 hover:underline"
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

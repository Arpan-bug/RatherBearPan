import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data.data));
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800 px-6 py-10 font-sans">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Projects</h1>

          {projects.length === 0 ? (
            <p>No projects to show.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => {
                const p = project.attributes || project;

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
                      {p.GitHub && (
                        <a
                          href={p.GitHub}
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
    </>
  );
}

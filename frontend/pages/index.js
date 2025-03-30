import Navbar from '../components/Navbar';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-5 min-h-screen bg-white text-gray-800 font-sans px-4 sm:px-6 md:px-10 dark:bg-[#1F1B16] dark:text-[#FAF4ED]">

      <div className="max-w-5xl mx-auto mt-16 sm:mt-20 flex flex-col lg:flex-row items-start gap-8">

          {/* Left: Headshot + Contact Links */}
          <div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-6 w-full lg:w-1/3 mt-6 sm:mt-8">
          <div className="flex-shrink-0 text-center space-y-6">
          <img
  src="/arpan.jpg"
  alt="Arpan"
  className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 object-cover rounded-full shadow-md mx-auto"
/>
            <div className="flex flex-col items-center gap-2 text-gray-600 text-sm">
              <a href="https://www.linkedin.com/in/ratherbearpan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/Arpan-bug" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-800">
                <FaGithub /> GitHub
              </a>
              <a href="https://instagram.com/ratherbearpan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-500">
                <FaInstagram /> Instagram
              </a>
              <a href="mailto:arpansaha121@gmail.com" className="flex items-center gap-2 hover:text-green-600">
                <FaEnvelope /> arpansaha121@gmail.com.com
                
              </a>
            </div>
          </div>
          </div>

          {/* Right: Resume Content */}
          <div className="flex-grow space-y-10 w-full lg:w-2/3">

{/* Name, About, and Education inside one container */}
<div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-6">
  <h1 className="text-4xl font-bold mb-1">Arpan Saha 🐾</h1>
  <p className="text-lg text-gray-600 mb-6">
    Aspiring Consultant | MSIS @ Ivy College of Business, Iowa State University
  </p>

  <div className="mb-6">
    <h2 className="text-2xl font-semibold mb-2">About</h2>
    <p>
      Pursuing an MS in Information Systems at Iowa State University, I blend technical chops in Java, Python, Selenium, and data analytics with a passion for solving real-world problems. From automating workflows to pulling insights from messy data, I’m all about building smart, impactful solutions. And if I don’t know how to build something yet? No worries — with solid prompt engineering skills, I can talk my way to the answer and get things done. Fast learner, team player, and always up for a challenge.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-semibold mb-4">Education</h2>
    <ul className="list-none space-y-6">

      {/* Iowa State University */}
      <li>
  <div className="flex justify-between items-baseline gap-2">
    <div className="w-4/5 sm:w-auto">
      <a
        href="https://www.iastate.edu/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-blue-600 hover:underline"
      >
        Iowa State University
      </a>
      <div className="italic">
        Ivy College of Business<span className="not-italic text-gray-700">, IA, USA</span>
      </div>
    </div>
    <span className="text-sm text-gray-600 whitespace-nowrap">Jan 2025 – Present</span>
  </div>
  <div className="text-sm text-gray-700">
    Master of Science in Information Systems
  </div>
</li>


      {/* SOA University */}
      <li>
  <div className="flex justify-between items-baseline gap-2">
    <div className="w-4/5 sm:w-auto">
      <a
        href="https://www.soa.ac.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-blue-600 hover:underline"
      >
        Siksha ‘O’ Anusandhan
      </a>
      <div className="italic">
        Institute of Technical Education and Research<span className="not-italic text-gray-700">, BBSR, INDIA</span>
      </div>
    </div>
    <span className="text-sm text-gray-600 whitespace-nowrap">Jun 2023</span>
  </div>
  <div className="text-sm text-gray-700">
    Bachelor of Technology in Computer Science Engineering
  </div>
  <div className="text-sm text-gray-600">GPA: 7.92 / 10.00</div>
</li>


    </ul>
  </div>
</div>


<section className="mb-8">
<div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-6">
  <h2 className="text-2xl font-semibold mb-4">Skills</h2>
  
  {/* Technical Skills */}
  <div className="mb-4">
    <h3 className="font-semibold text-lg">🔧 Technical Skills</h3>
    <p className="text-gray-700 text-sm mt-1">
      Python, MySQL, Pandas, NumPy, Matplotlib, Seaborn, Tableau, Selenium, Apache POI, TestNG, Microsoft Office, Prompt Engineering, Data Scraping, Data Security Protocols
    </p>
  </div>

  {/* Analytical & Professional Skills */}
  <div className="mb-4">
    <h3 className="font-semibold text-lg">📊 Analytical & Professional Skills</h3>
    <p className="text-gray-700 text-sm mt-1">
      Data Visualization, Market Trend Analysis, Problem-Solving, Strategic Decision-Making, Communication, Public Speaking, Organizational Skills, Critical Thinking
    </p>
  </div>
  

  {/* Fun Additions */}
  <div>
    <h3 className="font-semibold text-lg">🧸 Bonus Bear Skills</h3>
    <p className="text-gray-700 text-sm mt-1">
      Prompt Engineering Wizardry 🧙‍♂️, Bear-Level Focus 🐻, Meme Communication Pro 😎, Debugging While Hungry 🍜, React-ing Under Pressure ⚡
    </p>
  </div>
  </div>
</section>

<section className="mb-6">
  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
    🛠️ Projects
  </h2>
  <div className="grid gap-6 md:grid-cols-2">

    {/* Project 1 – AI-Powered 10-K Analysis */}
    <div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-5">
      <h3 className="font-semibold text-lg mb-1">📊 AI-Driven 10-K Analysis – Goldman Sachs vs. Morgan Stanley</h3>
      <p className="text-sm text-gray-600 mb-1"><em>2025</em></p>
      <p className="text-sm text-gray-800">
        Used AI to extract financial insights, benchmark performance, and generate investment recommendations from Goldman Sachs' 2024 10-K filing. Compared it with Morgan Stanley for a deep, automated investment analysis.
      </p>
    </div>

    {/* Project 2 – AI-Powered Financial Fraud Detection */}
    <div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-5">
      <h3 className="font-semibold text-lg mb-1">🔎 Unmasking Financial Fraud with AI & Data Analytics</h3>
      <p className="text-sm text-gray-600 mb-1"><em>2025</em></p>
      <p className="text-sm text-gray-800">
        Investigated HealthSouth's financial records using AI techniques like Benford’s Law, anomaly detection, and network analysis to uncover hidden fraud patterns and high-risk transactions across revenue, expense, and journal entries.
      </p>
    </div>

    {/* Project 3 – Portfolio Website */}
    <div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-5">
      <h3 className="font-semibold text-lg mb-1">🐻 Rather Bear Pan – Portfolio Website</h3>
      <p className="text-sm text-gray-600 mb-1"><em>2025</em></p>
      <p className="text-sm text-gray-800">
        A full-stack portfolio + blog site built with Next.js and Strapi CMS. Bear-themed, clean, and designed to reflect both professionalism and personality.
      </p>
    </div>

    {/* Project 4 – Parkinson's Detection */}
    <div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-5">
      <h3 className="font-semibold text-lg mb-1">🧠 Early Detection of Parkinson's Disease</h3>
      <p className="text-sm text-gray-600 mb-1"><em>2023</em></p>
      <p className="text-sm text-gray-800">
        Developed ML models using Decision Tree, KNN, and SVM classifiers on speech data. Applied SMOTE for class balance and MinMaxScaler for feature normalization to improve prediction accuracy.
      </p>
    </div>

  </div>

  {/* Learn More Button */}
  <div className="mt-8 text-center">
    <a
      href="/projects"
      className="inline-block bg-[#8B5E3C] text-white px-6 py-2 rounded-full text-sm font-medium shadow hover:bg-[#73492C] transition"
    >
      See More Projects →
    </a>
  </div>
</section>


<section className="mb-8">
<div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-6">
  <h2 className="text-2xl font-semibold mb-4">Internship</h2>
  <ul className="list-none space-y-4">

    {/* Cognizant Internship */}
    <li>
    <div className="flex justify-between items-baseline gap-2">
  <div className="w-4/5 sm:w-auto">
    <div className="font-bold">Cognizant Technology Solutions</div>
    <div className="text-gray-700">Kolkata, India</div>
  </div>
  <span className="text-sm text-gray-600 whitespace-nowrap">May 2023 – Sept 2023</span>
</div>
      <div className="text-sm text-gray-800 font-medium mb-1">Programmer Analyst Intern</div>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pl-4">
        <li>
          Designed a Selenium automation prototype simulating real-time hotel availability scraping from 
          <span className="italic"> makemytrip.com</span>, mastering dynamic web element handling and data extraction workflows.
        </li>
        <li>
          Built automated test scripts (Selenium/Python) during a hackathon, validating 100% core functionalities 
          of <span className="italic">yatra.com</span>'s travel booking platform.
        </li>
        <li>
          Utilized Apache POI to manipulate Excel-based test data, streamlining workflows and increasing automation accuracy.
        </li>
      </ul>
    </li>

  </ul>
  </div>
</section>




<section className="mb-8">
<div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-6">
  <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
  <ul className="list-none space-y-6">

    {/* Bidhata Suppliers */}
    <li>
    <div className="flex justify-between items-baseline gap-2">
  <div className="w-4/5 sm:w-auto">
    <div className="font-bold">Bidhata Suppliers</div>
    <div className="text-gray-700">Kolkata, India</div>
  </div>
  <span className="text-sm text-gray-600 whitespace-nowrap">Oct 2023 – Dec 2024</span>
</div>

      <div className="text-sm text-gray-800 font-medium mb-1">Logistics Coordinator</div>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pl-4">
        <li>
          Built a Python-based automated inventory system integrated with Tally and barcode scanning — reduced inventory errors by 30% and boosted order fulfillment by 25%.
        </li>
        <li>
          Coordinated with international teams to manage product selection for Bangladesh Police & Army’s horse import logistics.
        </li>
        <li>
          Ensured delivery accuracy using data-backed decision-making, referencing breed and industry specifications.
        </li>
      </ul>
    </li>

    {/* Aarthana.in */}
    <li>
    <div className="flex justify-between items-baseline gap-2">
  <div className="w-4/5 sm:w-auto">
    <a
      href="https://www.aarthana.in"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-blue-600 hover:underline"
    >
      Aarthana.in
    </a>
    <div className="italic">Online Hindu Puja Booking Platform</div>
    <div className="text-gray-700">Kolkata, India</div>
  </div>
  <span className="text-sm text-gray-600 whitespace-nowrap">Jan 2024 – Dec 2024</span>
</div>

      <div className="text-sm text-gray-800 font-medium mb-1">Co-Founder, Project Management</div>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pl-4">
        <li>
          Launched an online platform to book Puja services at Hindu temples; worked with 2 developers on UI design and software selection.
        </li>
        <li>
          Scraped booking data using Python + Selenium to study market trends and competitor behavior; used results to fine-tune marketing strategies.
        </li>
        <li>
          Partnered with Pundits and vendors across 6 major temples; maintained active engagement with 250+ potential users.
        </li>
      </ul>
    </li>

  </ul>
  </div>
</section>

<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
    🐾 Other Fun Experiences
  </h2>
  <div className="grid gap-6 md:grid-cols-2">
    
    {/* Card 1 */}
    <div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-5">
      <h3 className="font-semibold text-lg mb-1">🐻 ISU Dining, Hawthorn Community Center</h3>
      <p className="text-sm text-gray-600 mb-1">Ames, IA — <em>Jan 2025 – Present</em></p>
      <p className="text-sm text-gray-800">
        I can cook great French Fries (crispy & over-seasoned), flip patties like a champ, and while I can't promise Starbucks quality drinks — you probably won’t hate it. Most taste the same anyway.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-5">
      <h3 className="font-semibold text-lg mb-1">🐻 Full-Time Overthinker</h3>
      <p className="text-sm text-gray-600 mb-1"><em>Sept 2023 – Present</em></p>
      <p className="text-sm text-gray-800">
        Constantly thinking about what to build next, what idea might blow up, or which crypto will absolutely not go to the moon 🚀
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-5">
      <h3 className="font-semibold text-lg mb-1">🐻 Valorant Lobby Player @Mumbai Server</h3>
      <p className="text-sm text-gray-600 mb-1"><em>Until Dec 2025</em></p>
      <p className="text-sm text-gray-800">
        Platinum rank. Duelist at heart.Just a lot of clutch rounds, ego peeks, and "they’re not better, they’re just lucky" moments with the squad. Better memories. Let's gooo — Reyna main supremacy 🐍💜
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-5">
      <h3 className="font-semibold text-lg mb-1">🐻 EA FC 2025 Loser @Sagnik’s Place</h3>
      <p className="text-sm text-gray-600 mb-1"><em>Dec 2025</em></p>
      <p className="text-sm text-gray-800">
        Winner of 6 FIFA Nights (even though Sagnik won more than he should’ve). Controller may or may not have been thrown.
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-5">
      <h3 className="font-semibold text-lg mb-1">🐻 Full-stack Analyst of Friend Group Drama</h3>
      <p className="text-sm text-gray-600 mb-1"><em>Ongoing</em></p>
      <p className="text-sm text-gray-800">
        What’s new in life, Bitan? I’m taking notes. Charts coming soon in Excel and emotional PowerPoint.
      </p>
    </div>

    {/* Card 6 - Travel */}
<div className="bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-md p-5">
  <h3 className="font-semibold text-lg mb-1">🐻 Wanderlust Mode: On</h3>
  <p className="text-sm text-gray-600 mb-1"><em>Ongoing</em></p>
  <p className="text-sm text-gray-800">
    I love travelling — already ticked off Bhutan 🇧🇹 (2016), Istanbul 🇹🇷 (2022), Thailand 🇹🇭 (2024), Nepal 🇳🇵 (2024), and more internationally. A bunch of domestic destinations too. Blogs coming soon. And no, I'm not stopping any time soon 🧳✈️
  </p>
</div>


  </div>
</section>

          </div>
        </div>
      </main>
      <footer className="mt-12 bg-[#FFF8F1] text-[#4B4032] py-6 border-t border-gray-200">
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

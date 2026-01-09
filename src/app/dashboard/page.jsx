"use client";

import { useState, useRef } from "react";

const defaultResumeData = {
  name: "MD. PIYAL ISLAM",
  title: "Frontend Developer",
  phone: "+880-1956-475-904",
  email: "piyalsha007@gmail.com",
  linkedin: "LinkedIn",
  linkedinUrl: "https://linkedin.com",
  github: "Github",
  githubUrl: "https://github.com",
  portfolio: "Portfolio",
  portfolioUrl: "https://portfolio.com",

  careerObjective: "Aspiring frontend developer with a strong foundation in HTML, CSS, JavaScript, and React. Eager to learn and contribute by developing modern, user-friendly applications. Focused on building responsive solutions while continuously growing my skills.",

  technicalSkills: {
    language: "JavaScript, TypeScript, PHP, Python",
    frontend: "HTML, CSS, TailwindCSS, ReactJS, React Router, Firebase, Axios, NextJS, Shadcn",
    backend: "ExpressJS, NodeJS",
    database: "MongoDB, Firestore, Supabase, SQLite, RoomDB, Redis, MySQL, PostgreSQL",
    tools: "Git, GitHub, Vercel, Vite, Netlify, VSCode, Cursor, Kiro, Windsurf, Postman",
    problemSolving: "20+ problems solved in",
    problemSolvingLink: "CodeChef",
    problemSolvingUrl: "https://codechef.com",
    softSkills: "Hard working, Collaborative mindset, Communication, Team Player",
  },

  projects: [
    {
      id: 1,
      name: "SportNex",
      tagline: "A Sports Club Management System",
      date: "Jul 8, 2025 - present",
      liveUrl: "https://live.com",
      repoUrl: "https://github.com",
      description: "Developed a frontend website for a Sports Club Management System to help users discover and manage clubs efficiently.",
      bullets: [
        "Court catalog with slot-based booking and availability, including pending/approved/confirmed status tracking.",
        "Role-based, protected dashboards (User/Member/Admin) with personalized navigation and actions.",
        "Stripe-powered checkout with coupon validation and dynamic pricing, plus a payment history UI.",
      ],
      techStack: "React, Vite, React Router, Tailwind CSS, Firebase Authentication, TanStack Query, Axios, Stripe (Elements), Node.js (Express), MongoDB, Firebase Admin, and JSON Web Tokens (JWT).",
    },
    {
      id: 2,
      name: "TradeNest",
      tagline: "A B2B Wholesale Marketplace",
      date: "Jun 9, 2025 - present",
      liveUrl: "https://live.com",
      repoUrl: "https://github.com",
      description: "TradeNest is a global B2B wholesale marketplace connecting bulk suppliers (manufacturers, distributors) with retailers",
      bullets: [
        "Browse products (filter/sort, card/table views), view details with ratings, and buy with quantity controls (min order and stock).",
        "Register/Login and manage your inventory: add new products, update details, or delete them from My Products.",
        "View your cart (purchases) and remove items; cart access is protected for logged-in users.",
      ],
      techStack: "TailwindCSS, ReactJS, React Router, Firebase, ExpressJS, and MongoDB.",
    },
    {
      id: 3,
      name: "HealthCave",
      tagline: "Online Doctor Platform",
      date: "Team Project",
      liveUrl: "https://live.com",
      repoUrl: "https://github.com",
      description: "HealthCave is a comprehensive telemedicine platform connecting patients with healthcare professionals for virtual consultations and medical services.",
      bullets: [
        "Browse doctors by specialty, view profiles, and explore top-rated providers.",
        "Register/Login to book appointments and manage consultations from dashboard.",
        "Protected routes ensure only authenticated users can access booking features.",
      ],
      techStack: "Next.js, React, MongoDB, NextAuth, Tailwind CSS, Stripe, Agora (video calls), Leaflet (maps), and Nodemailer.",
    },
  ],

  certifications: [
    {
      id: 1,
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2024",
      link: "",
    },
    {
      id: 2,
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      link: "",
    },
  ],

  address: "Dhaka, Bangladesh.",

  languages: [
    { id: 1, name: "Bangla", level: "Native" },
    { id: 2, name: "English", level: "Fluent" },
    { id: 3, name: "Hindi", level: "Conversational" },
  ],
};

const defaultStyles = {
  marginTop: 5,
  marginRight: 5,
  marginBottom: 5,
  marginLeft: 5,
  fontSize: 14,
  lineHeight: 1.2,
  accentColor: "#6b7280",
  linkColor: "#2563eb",
  // Header layout
  headerLayout: "two-column", // "center" or "two-column"
  headerContactFontSize: 10,
  // Header border
  showHeaderTopBorder: false,
  showHeaderBottomBorder: true,
  headerBorderWidth: 1,
  headerBorderStyle: "solid",
  // Section title styling
  sectionTitleSize: 14,
  sectionTitleBold: true,
  sectionTitleUppercase: true,
  sectionTitleColor: "#1f2937",
  showSectionTitleDash: true,
  // Section border
  showSectionBorder: true,
  sectionBorderWidth: 1,
  sectionBorderColor: "#d1d5db",
  sectionBorderStyle: "solid",
  // Page border
  showPageBorder: false,
  pageBorderWidth: 1,
  pageBorderColor: "#d1d5db",
  pageBorderStyle: "solid",
  pageBorderRadius: 0,
  showCareerObjective: true,
  showTechnicalSkills: true,
  showProjects: true,
  showCertifications: true,
  showLanguages: true,
  showAddress: true,
};

const marginOptions = [
  { label: "5mm", value: 5 },
  { label: "8mm", value: 8 },
  { label: "10mm", value: 10 },
  { label: "12mm", value: 12 },
  { label: "15mm", value: 15 },
  { label: "20mm", value: 20 },
];

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const [styles, setStyles] = useState(defaultStyles);
  const [activeSection, setActiveSection] = useState("personal");
  const resumeRef = useRef(null);

  const updateField = (field, value) => {
    setResumeData((prev) => ({ ...prev, [field]: value }));
  };

  const updateStyle = (field, value) => {
    setStyles((prev) => ({ ...prev, [field]: value }));
  };

  const updateSkill = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      technicalSkills: { ...prev.technicalSkills, [field]: value },
    }));
  };

  const updateProject = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    }));
  };

  const updateProjectBullet = (projectId, bulletIndex, value) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) =>
        p.id === projectId
          ? { ...p, bullets: p.bullets.map((b, i) => (i === bulletIndex ? value : b)) }
          : p
      ),
    }));
  };

  const addProjectBullet = (projectId) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) =>
        p.id === projectId ? { ...p, bullets: [...p.bullets, ""] } : p
      ),
    }));
  };

  const removeProjectBullet = (projectId, bulletIndex) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) =>
        p.id === projectId ? { ...p, bullets: p.bullets.filter((_, i) => i !== bulletIndex) } : p
      ),
    }));
  };

  const addProject = () => {
    const newId = Math.max(...resumeData.projects.map((p) => p.id), 0) + 1;
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: newId,
          name: "",
          tagline: "",
          date: "",
          liveUrl: "",
          repoUrl: "",
          description: "",
          bullets: [""],
          techStack: "",
        },
      ],
    }));
  };

  const removeProject = (id) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }));
  };

  const updateCertification = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    }));
  };

  const addCertification = () => {
    const newId = Math.max(...resumeData.certifications.map((c) => c.id), 0) + 1;
    setResumeData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, { id: newId, name: "", issuer: "", date: "", link: "" }],
    }));
  };

  const removeCertification = (id) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((c) => c.id !== id),
    }));
  };

  const updateLanguage = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      languages: prev.languages.map((l) => (l.id === id ? { ...l, [field]: value } : l)),
    }));
  };

  const addLanguage = () => {
    const newId = Math.max(...resumeData.languages.map((l) => l.id), 0) + 1;
    setResumeData((prev) => ({
      ...prev,
      languages: [...prev.languages, { id: newId, name: "", level: "" }],
    }));
  };

  const removeLanguage = (id) => {
    setResumeData((prev) => ({
      ...prev,
      languages: prev.languages.filter((l) => l.id !== id),
    }));
  };

  const handlePrint = () => window.print();

  const tabs = ["personal", "objective", "skills", "projects", "certifications", "languages", "styling"];

  return (
    <div className="min-h-screen bg-gray-100">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          body * { visibility: hidden; }
          #resume-preview, #resume-preview * { visibility: visible; }
          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 210mm;
            height: 297mm;
            margin: 0;
            box-shadow: none !important;
            border: none !important;
          }
          @page { size: A4; margin: 0; }
        }
      `,
        }}
      />

      <div className="flex h-screen">
        {/* Editor Panel */}
        <div className="w-1/2 overflow-y-auto bg-white border-r border-gray-200 p-6 print:hidden">
          <div className="max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Resume Builder</h1>

            <div className="mb-4 flex gap-2">
              <button
                onClick={handlePrint}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition font-medium text-sm"
              >
                Download PDF / Print
              </button>
              <button
                onClick={() => {
                  setResumeData(defaultResumeData);
                  setStyles(defaultStyles);
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition text-sm"
              >
                Reset
              </button>
            </div>

            <div className="flex gap-1 mb-4 flex-wrap">
              {tabs.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-2 py-1 rounded text-xs font-medium capitalize transition ${activeSection === section ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Personal Info */}
            {activeSection === "personal" && (
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-700">Personal Information</h3>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={resumeData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <input
                  type="text"
                  placeholder="Job Title"
                  value={resumeData.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Phone"
                    value={resumeData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={resumeData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div className="p-3 bg-gray-50 rounded-lg space-y-2">
                  <span className="text-xs font-medium text-gray-500">LinkedIn</span>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Display Text"
                      value={resumeData.linkedin}
                      onChange={(e) => updateField("linkedin", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <input
                      type="text"
                      placeholder="URL"
                      value={resumeData.linkedinUrl}
                      onChange={(e) => updateField("linkedinUrl", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg space-y-2">
                  <span className="text-xs font-medium text-gray-500">GitHub</span>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Display Text"
                      value={resumeData.github}
                      onChange={(e) => updateField("github", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <input
                      type="text"
                      placeholder="URL"
                      value={resumeData.githubUrl}
                      onChange={(e) => updateField("githubUrl", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg space-y-2">
                  <span className="text-xs font-medium text-gray-500">Portfolio</span>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Display Text"
                      value={resumeData.portfolio}
                      onChange={(e) => updateField("portfolio", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <input
                      type="text"
                      placeholder="URL"
                      value={resumeData.portfolioUrl}
                      onChange={(e) => updateField("portfolioUrl", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Career Objective */}
            {activeSection === "objective" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-700">Career Objective</h3>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={styles.showCareerObjective}
                      onChange={(e) => updateStyle("showCareerObjective", e.target.checked)}
                    />
                    Show
                  </label>
                </div>
                <textarea
                  placeholder="Write your career objective..."
                  value={resumeData.careerObjective}
                  onChange={(e) => updateField("careerObjective", e.target.value)}
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none text-sm"
                />
              </div>
            )}

            {/* Technical Skills */}
            {activeSection === "skills" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-700">Technical Skills</h3>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={styles.showTechnicalSkills}
                      onChange={(e) => updateStyle("showTechnicalSkills", e.target.checked)}
                    />
                    Show
                  </label>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Language</label>
                  <input
                    type="text"
                    placeholder="JavaScript, TypeScript, Python..."
                    value={resumeData.technicalSkills.language}
                    onChange={(e) => updateSkill("language", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Frontend</label>
                  <input
                    type="text"
                    placeholder="HTML, CSS, React..."
                    value={resumeData.technicalSkills.frontend}
                    onChange={(e) => updateSkill("frontend", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Backend</label>
                  <input
                    type="text"
                    placeholder="Node.js, Express..."
                    value={resumeData.technicalSkills.backend}
                    onChange={(e) => updateSkill("backend", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Database</label>
                  <input
                    type="text"
                    placeholder="MongoDB, PostgreSQL..."
                    value={resumeData.technicalSkills.database}
                    onChange={(e) => updateSkill("database", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Tools</label>
                  <input
                    type="text"
                    placeholder="Git, VS Code..."
                    value={resumeData.technicalSkills.tools}
                    onChange={(e) => updateSkill("tools", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div className="p-3 bg-gray-50 rounded-lg space-y-2">
                  <label className="block text-xs text-gray-500">Problem-solving</label>
                  <input
                    type="text"
                    placeholder="20+ problems solved in"
                    value={resumeData.technicalSkills.problemSolving}
                    onChange={(e) => updateSkill("problemSolving", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Link Text (e.g., CodeChef)"
                      value={resumeData.technicalSkills.problemSolvingLink}
                      onChange={(e) => updateSkill("problemSolvingLink", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <input
                      type="text"
                      placeholder="URL"
                      value={resumeData.technicalSkills.problemSolvingUrl}
                      onChange={(e) => updateSkill("problemSolvingUrl", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Soft Skills</label>
                  <input
                    type="text"
                    placeholder="Communication, Team Player..."
                    value={resumeData.technicalSkills.softSkills}
                    onChange={(e) => updateSkill("softSkills", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>
            )}

            {/* Projects */}
            {activeSection === "projects" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-700">Projects</h3>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={styles.showProjects}
                        onChange={(e) => updateStyle("showProjects", e.target.checked)}
                      />
                      Show
                    </label>
                    <button onClick={addProject} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      + Add
                    </button>
                  </div>
                </div>
                {resumeData.projects.map((proj, idx) => (
                  <div key={proj.id} className="p-3 bg-gray-50 rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500">Project {idx + 1}</span>
                      <button onClick={() => removeProject(proj.id)} className="text-red-500 text-xs hover:text-red-600">
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Project Name"
                        value={proj.name}
                        onChange={(e) => updateProject(proj.id, "name", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Tagline"
                        value={proj.tagline}
                        onChange={(e) => updateProject(proj.id, "tagline", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Date (e.g., Jul 8, 2025 - present)"
                      value={proj.date}
                      onChange={(e) => updateProject(proj.id, "date", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Live URL"
                        value={proj.liveUrl}
                        onChange={(e) => updateProject(proj.id, "liveUrl", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Repo URL"
                        value={proj.repoUrl}
                        onChange={(e) => updateProject(proj.id, "repoUrl", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                    <textarea
                      placeholder="Project description"
                      value={proj.description}
                      onChange={(e) => updateProject(proj.id, "description", e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none text-sm"
                    />
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Bullet Points</span>
                        <button
                          onClick={() => addProjectBullet(proj.id)}
                          className="text-xs text-blue-600 hover:text-blue-700"
                        >
                          + Add Bullet
                        </button>
                      </div>
                      {proj.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex gap-2">
                          <input
                            type="text"
                            placeholder={`Bullet ${bIdx + 1}`}
                            value={bullet}
                            onChange={(e) => updateProjectBullet(proj.id, bIdx, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                          />
                          <button
                            onClick={() => removeProjectBullet(proj.id, bIdx)}
                            className="text-red-500 text-xs px-2 hover:text-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                    <textarea
                      placeholder="Built with: React, Node.js..."
                      value={proj.techStack}
                      onChange={(e) => updateProject(proj.id, "techStack", e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none text-sm"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {activeSection === "certifications" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-700">Courses & Certifications</h3>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={styles.showCertifications}
                        onChange={(e) => updateStyle("showCertifications", e.target.checked)}
                      />
                      Show
                    </label>
                    <button onClick={addCertification} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      + Add
                    </button>
                  </div>
                </div>
                {resumeData.certifications.map((cert, idx) => (
                  <div key={cert.id} className="p-3 bg-gray-50 rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500">Certification {idx + 1}</span>
                      <button onClick={() => removeCertification(cert.id)} className="text-red-500 text-xs hover:text-red-600">
                        Remove
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Course/Certification Name"
                      value={cert.name}
                      onChange={(e) => updateCertification(cert.id, "name", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Issuer (e.g., Udemy, Coursera)"
                        value={cert.issuer}
                        onChange={(e) => updateCertification(cert.id, "issuer", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Year"
                        value={cert.date}
                        onChange={(e) => updateCertification(cert.id, "date", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Certificate Link (optional)"
                      value={cert.link}
                      onChange={(e) => updateCertification(cert.id, "link", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Languages */}
            {activeSection === "languages" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-700">Languages</h3>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={styles.showLanguages}
                        onChange={(e) => updateStyle("showLanguages", e.target.checked)}
                      />
                      Show
                    </label>
                    <button onClick={addLanguage} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      + Add
                    </button>
                  </div>
                </div>
                {resumeData.languages.map((lang, idx) => (
                  <div key={lang.id} className="p-3 bg-gray-50 rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500">Language {idx + 1}</span>
                      <button onClick={() => removeLanguage(lang.id)} className="text-red-500 text-xs hover:text-red-600">
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Language (e.g., English)"
                        value={lang.name}
                        onChange={(e) => updateLanguage(lang.id, "name", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Level (e.g., Fluent, Native)"
                        value={lang.level}
                        onChange={(e) => updateLanguage(lang.id, "level", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Styling */}
            {activeSection === "styling" && (
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700">Page Margins</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Top</label>
                    <select
                      value={styles.marginTop}
                      onChange={(e) => updateStyle("marginTop", Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      {marginOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Bottom</label>
                    <select
                      value={styles.marginBottom}
                      onChange={(e) => updateStyle("marginBottom", Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      {marginOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Left</label>
                    <select
                      value={styles.marginLeft}
                      onChange={(e) => updateStyle("marginLeft", Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      {marginOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Right</label>
                    <select
                      value={styles.marginRight}
                      onChange={(e) => updateStyle("marginRight", Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      {marginOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-700 pt-2">Typography</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Font Size</label>
                    <select
                      value={styles.fontSize}
                      onChange={(e) => updateStyle("fontSize", Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      {[8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24].map((size) => (
                        <option key={size} value={size}>
                          {size}px
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Line Height</label>
                    <select
                      value={styles.lineHeight}
                      onChange={(e) => updateStyle("lineHeight", Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      {[1.2, 1.3, 1.4, 1.5, 1.6].map((lh) => (
                        <option key={lh} value={lh}>
                          {lh}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Accent Color</label>
                    <input
                      type="color"
                      value={styles.accentColor}
                      onChange={(e) => updateStyle("accentColor", e.target.value)}
                      className="w-full h-10 rounded border border-gray-300 cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Link Color</label>
                    <input
                      type="color"
                      value={styles.linkColor}
                      onChange={(e) => updateStyle("linkColor", e.target.value)}
                      className="w-full h-10 rounded border border-gray-300 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Header Layout Settings */}
                <h3 className="font-semibold text-gray-700 pt-2">Header Layout</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Layout Style</label>
                    <select
                      value={styles.headerLayout}
                      onChange={(e) => updateStyle("headerLayout", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      <option value="center">Centered</option>
                      <option value="two-column">Two Column</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Contact Font Size</label>
                    <select
                      value={styles.headerContactFontSize}
                      onChange={(e) => updateStyle("headerContactFontSize", Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      {[7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20].map((size) => (
                        <option key={size} value={size}>
                          {size}px
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Header Border Settings */}
                <h3 className="font-semibold text-gray-700 pt-2">Header Border</h3>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={styles.showHeaderTopBorder}
                      onChange={(e) => updateStyle("showHeaderTopBorder", e.target.checked)}
                    />
                    Top Border
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={styles.showHeaderBottomBorder}
                      onChange={(e) => updateStyle("showHeaderBottomBorder", e.target.checked)}
                    />
                    Bottom Border
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Border Width</label>
                    <select
                      value={styles.headerBorderWidth}
                      onChange={(e) => updateStyle("headerBorderWidth", Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      {[1, 2, 3, 4, 5].map((w) => (
                        <option key={w} value={w}>
                          {w}px
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Border Style</label>
                    <select
                      value={styles.headerBorderStyle}
                      onChange={(e) => updateStyle("headerBorderStyle", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      <option value="solid">Solid</option>
                      <option value="dashed">Dashed</option>
                      <option value="dotted">Dotted</option>
                      <option value="double">Double</option>
                    </select>
                  </div>
                </div>

                {/* Section Title Settings */}
                <h3 className="font-semibold text-gray-700 pt-2">Section Titles</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Title Size</label>
                    <select
                      value={styles.sectionTitleSize}
                      onChange={(e) => updateStyle("sectionTitleSize", Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      {[9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24].map((size) => (
                        <option key={size} value={size}>
                          {size}px
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Title Color</label>
                    <input
                      type="color"
                      value={styles.sectionTitleColor}
                      onChange={(e) => updateStyle("sectionTitleColor", e.target.value)}
                      className="w-full h-10 rounded border border-gray-300 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={styles.sectionTitleBold}
                      onChange={(e) => updateStyle("sectionTitleBold", e.target.checked)}
                    />
                    Bold
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={styles.sectionTitleUppercase}
                      onChange={(e) => updateStyle("sectionTitleUppercase", e.target.checked)}
                    />
                    Uppercase
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={styles.showSectionTitleDash}
                      onChange={(e) => updateStyle("showSectionTitleDash", e.target.checked)}
                    />
                    Show Dash (-)
                  </label>
                </div>

                {/* Section Border Settings */}
                <h3 className="font-semibold text-gray-700 pt-2">Section Border</h3>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={styles.showSectionBorder}
                    onChange={(e) => updateStyle("showSectionBorder", e.target.checked)}
                  />
                  Show Section Borders
                </label>
                {styles.showSectionBorder && (
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Width</label>
                      <select
                        value={styles.sectionBorderWidth}
                        onChange={(e) => updateStyle("sectionBorderWidth", Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      >
                        {[1, 2, 3].map((w) => (
                          <option key={w} value={w}>
                            {w}px
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Style</label>
                      <select
                        value={styles.sectionBorderStyle}
                        onChange={(e) => updateStyle("sectionBorderStyle", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      >
                        <option value="solid">Solid</option>
                        <option value="dashed">Dashed</option>
                        <option value="dotted">Dotted</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Color</label>
                      <input
                        type="color"
                        value={styles.sectionBorderColor}
                        onChange={(e) => updateStyle("sectionBorderColor", e.target.value)}
                        className="w-full h-10 rounded border border-gray-300 cursor-pointer"
                      />
                    </div>
                  </div>
                )}

                {/* Page Border Settings */}
                <h3 className="font-semibold text-gray-700 pt-2">Page Border</h3>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={styles.showPageBorder}
                    onChange={(e) => updateStyle("showPageBorder", e.target.checked)}
                  />
                  Show Page Border
                </label>
                {styles.showPageBorder && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Border Width</label>
                        <select
                          value={styles.pageBorderWidth}
                          onChange={(e) => updateStyle("pageBorderWidth", Number(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        >
                          {[1, 2, 3, 4, 5].map((w) => (
                            <option key={w} value={w}>
                              {w}px
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Border Style</label>
                        <select
                          value={styles.pageBorderStyle}
                          onChange={(e) => updateStyle("pageBorderStyle", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        >
                          <option value="solid">Solid</option>
                          <option value="dashed">Dashed</option>
                          <option value="dotted">Dotted</option>
                          <option value="double">Double</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Border Color</label>
                        <input
                          type="color"
                          value={styles.pageBorderColor}
                          onChange={(e) => updateStyle("pageBorderColor", e.target.value)}
                          className="w-full h-10 rounded border border-gray-300 cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Border Radius</label>
                        <select
                          value={styles.pageBorderRadius}
                          onChange={(e) => updateStyle("pageBorderRadius", Number(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        >
                          {[0, 4, 8, 12, 16, 20].map((r) => (
                            <option key={r} value={r}>
                              {r}px
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Preview Panel */}
        <div className="w-1/2 overflow-y-auto bg-gray-200 p-8 flex justify-center print:p-0 print:bg-white">
          <div
            id="resume-preview"
            ref={resumeRef}
            className="bg-white shadow-xl"
            style={{
              width: "210mm",
              minHeight: "297mm",
              paddingTop: `${styles.marginTop}mm`,
              paddingRight: `${styles.marginRight}mm`,
              paddingBottom: `${styles.marginBottom}mm`,
              paddingLeft: `${styles.marginLeft}mm`,
              fontSize: `${styles.fontSize}px`,
              fontFamily: "Arial, sans-serif",
              lineHeight: styles.lineHeight,
              color: "#1f2937",
              boxSizing: "border-box",
              border: styles.showPageBorder
                ? `${styles.pageBorderWidth}px ${styles.pageBorderStyle} ${styles.pageBorderColor}`
                : "none",
              borderRadius: `${styles.pageBorderRadius}px`,
            }}
          >
            {/* Header */}
            <div
              style={{
                borderTop: styles.showHeaderTopBorder
                  ? `${styles.headerBorderWidth}px ${styles.headerBorderStyle} ${styles.accentColor}`
                  : "none",
                borderBottom: styles.showHeaderBottomBorder
                  ? `${styles.headerBorderWidth}px ${styles.headerBorderStyle} ${styles.accentColor}`
                  : "none",
                paddingBottom: "8px",
                marginBottom: "10px",
              }}
            >
              {styles.headerLayout === "center" ? (
                // Centered layout
                <div style={{ textAlign: "center" }}>
                  <h1
                    style={{
                      fontSize: `${styles.fontSize + 8}px`,
                      fontWeight: "bold",
                      color: "#1f2937",
                      margin: 0,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {resumeData.name || "YOUR NAME"}
                  </h1>
                  <p
                    style={{
                      fontSize: `${styles.fontSize + 2}px`,
                      color: "#374151",
                      margin: "4px 0 8px 0",
                      fontWeight: "500",
                    }}
                  >
                    {resumeData.title || "Job Title"}
                  </p>
                  <div
                    style={{
                      fontSize: `${styles.headerContactFontSize}px`,
                      color: "#374151",
                    }}
                  >
                    {resumeData.phone} | {resumeData.email}
                    {resumeData.linkedin && (
                      <>
                        {" | "}
                        <a href={resumeData.linkedinUrl} style={{ color: styles.linkColor, textDecoration: "underline" }}>
                          {resumeData.linkedin}
                        </a>
                      </>
                    )}
                    {resumeData.github && (
                      <>
                        {" | "}
                        <a href={resumeData.githubUrl} style={{ color: styles.linkColor, textDecoration: "underline" }}>
                          {resumeData.github}
                        </a>
                      </>
                    )}
                    {resumeData.portfolio && (
                      <>
                        {" | "}
                        <a href={resumeData.portfolioUrl} style={{ color: styles.linkColor, textDecoration: "underline" }}>
                          {resumeData.portfolio}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                // Two-column layout
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <h1
                      style={{
                        fontSize: `${styles.fontSize + 8}px`,
                        fontWeight: "bold",
                        color: "#1f2937",
                        margin: 0,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {resumeData.name || "YOUR NAME"}
                    </h1>
                    <p
                      style={{
                        fontSize: `${styles.fontSize + 2}px`,
                        color: "#374151",
                        margin: "4px 0 0 0",
                        fontWeight: "500",
                      }}
                    >
                      {resumeData.title || "Job Title"}
                    </p>
                  </div>
                  <div
                    style={{
                      fontSize: `${styles.headerContactFontSize}px`,
                      color: "#374151",
                      textAlign: "left",
                    }}
                  >
                    {resumeData.phone && <div><strong>Phone:</strong> {resumeData.phone}</div>}
                    {resumeData.email && <div><strong>Email:</strong> {resumeData.email}</div>}
                    {resumeData.linkedin && (
                      <div>
                        <strong>LinkedIn:</strong>{" "}
                        <a href={resumeData.linkedinUrl} style={{ color: styles.linkColor, textDecoration: "underline" }}>
                          {resumeData.linkedin}
                        </a>
                      </div>
                    )}
                    {resumeData.github && (
                      <div>
                        <strong>GitHub:</strong>{" "}
                        <a href={resumeData.githubUrl} style={{ color: styles.linkColor, textDecoration: "underline" }}>
                          {resumeData.github}
                        </a>
                      </div>
                    )}
                    {resumeData.portfolio && (
                      <div>
                        <strong>Portfolio:</strong>{" "}
                        <a href={resumeData.portfolioUrl} style={{ color: styles.linkColor, textDecoration: "underline" }}>
                          {resumeData.portfolio}
                        </a>
                      </div>
                    )}
                    {resumeData.address && (
                      <div>
                        <strong>Address:</strong> {resumeData.address}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Career Objective */}
            {styles.showCareerObjective && resumeData.careerObjective && (
              <div style={{
                marginBottom: "12px",
                paddingBottom: styles.showSectionBorder ? "10px" : "0",
                borderBottom: styles.showSectionBorder
                  ? `${styles.sectionBorderWidth}px ${styles.sectionBorderStyle} ${styles.sectionBorderColor}`
                  : "none",
              }}>
                <h2
                  style={{
                    fontSize: `${styles.sectionTitleSize}px`,
                    fontWeight: styles.sectionTitleBold ? "bold" : "normal",
                    textTransform: styles.sectionTitleUppercase ? "uppercase" : "none",
                    color: styles.sectionTitleColor,
                    paddingBottom: "2px",
                    marginBottom: "6px",
                  }}
                >
                  Career Objective{styles.showSectionTitleDash ? " -" : ""}
                </h2>
                <p style={{ color: "#374151", textAlign: "justify" }}>{resumeData.careerObjective}</p>
              </div>
            )}

            {/* Technical Skills */}
            {styles.showTechnicalSkills && (
              <div style={{
                marginBottom: "12px",
                paddingBottom: styles.showSectionBorder ? "10px" : "0",
                borderBottom: styles.showSectionBorder
                  ? `${styles.sectionBorderWidth}px ${styles.sectionBorderStyle} ${styles.sectionBorderColor}`
                  : "none",
              }}>
                <h2
                  style={{
                    fontSize: `${styles.sectionTitleSize}px`,
                    fontWeight: styles.sectionTitleBold ? "bold" : "normal",
                    textTransform: styles.sectionTitleUppercase ? "uppercase" : "none",
                    color: styles.sectionTitleColor,
                    paddingBottom: "2px",
                    marginBottom: "6px",
                  }}
                >
                  Technical Skills{styles.showSectionTitleDash ? " -" : ""}
                </h2>
                <div style={{ color: "#374151" }}>
                  {resumeData.technicalSkills.language && (
                    <p style={{ margin: "2px 0" }}>
                      <strong>Language</strong>: {resumeData.technicalSkills.language}
                    </p>
                  )}
                  {resumeData.technicalSkills.frontend && (
                    <p style={{ margin: "2px 0" }}>
                      <strong>Frontend</strong>: {resumeData.technicalSkills.frontend}
                    </p>
                  )}
                  {resumeData.technicalSkills.backend && (
                    <p style={{ margin: "2px 0" }}>
                      <strong>Backend</strong>: {resumeData.technicalSkills.backend}
                    </p>
                  )}
                  {resumeData.technicalSkills.database && (
                    <p style={{ margin: "2px 0" }}>
                      <strong>Database</strong>: {resumeData.technicalSkills.database}
                    </p>
                  )}
                  {resumeData.technicalSkills.tools && (
                    <p style={{ margin: "2px 0" }}>
                      <strong>Tools</strong>: {resumeData.technicalSkills.tools}
                    </p>
                  )}
                  {resumeData.technicalSkills.problemSolving && (
                    <p style={{ margin: "2px 0" }}>
                      <strong>Problem-solving</strong>: {resumeData.technicalSkills.problemSolving}{" "}
                      {resumeData.technicalSkills.problemSolvingLink && (
                        <a
                          href={resumeData.technicalSkills.problemSolvingUrl}
                          style={{ color: styles.linkColor, textDecoration: "underline" }}
                        >
                          {resumeData.technicalSkills.problemSolvingLink}
                        </a>
                      )}
                    </p>
                  )}
                  {resumeData.technicalSkills.softSkills && (
                    <p style={{ margin: "2px 0" }}>
                      <strong>Soft skills</strong>: {resumeData.technicalSkills.softSkills}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Projects */}
            {styles.showProjects && resumeData.projects.length > 0 && (
              <div style={{
                marginBottom: "12px",
                paddingBottom: styles.showSectionBorder && styles.showCertifications && resumeData.certifications.length > 0 ? "10px" : "0",
                borderBottom: styles.showSectionBorder && styles.showCertifications && resumeData.certifications.length > 0
                  ? `${styles.sectionBorderWidth}px ${styles.sectionBorderStyle} ${styles.sectionBorderColor}`
                  : "none",
              }}>
                <h2
                  style={{
                    fontSize: `${styles.sectionTitleSize}px`,
                    fontWeight: styles.sectionTitleBold ? "bold" : "normal",
                    textTransform: styles.sectionTitleUppercase ? "uppercase" : "none",
                    color: styles.sectionTitleColor,
                    paddingBottom: "2px",
                    marginBottom: "6px",
                  }}
                >
                  Projects{styles.showSectionTitleDash ? " -" : ""}
                </h2>
                {resumeData.projects.map((proj, idx) => (
                  <div key={proj.id} style={{ marginBottom: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <div>
                        <span style={{ fontWeight: "bold" }}>[{String(idx + 1).padStart(2, "0")}] </span>
                        <strong style={{ fontWeight: "bold" }}>{proj.name}</strong>
                        {proj.tagline && (
                          <span>
                            {" "}
                            – <span style={{ fontWeight: "500" }}>{proj.tagline}</span>
                          </span>
                        )}
                        {proj.date && (
                          <span style={{ color: "#6b7280", fontStyle: "italic" }}> ( {proj.date} )</span>
                        )}
                      </div>
                      <div style={{ fontSize: `${styles.fontSize - 1}px` }}>
                        {proj.liveUrl && (
                          <a href={proj.liveUrl} style={{ color: styles.linkColor, textDecoration: "underline" }}>
                            Live
                          </a>
                        )}
                        {proj.liveUrl && proj.repoUrl && " | "}
                        {proj.repoUrl && (
                          <a href={proj.repoUrl} style={{ color: styles.linkColor, textDecoration: "underline" }}>
                            Repo
                          </a>
                        )}
                      </div>
                    </div>
                    {proj.description && <p style={{ color: "#374151", margin: "2px 0" }}>{proj.description}</p>}
                    {proj.bullets.length > 0 && proj.bullets.some((b) => b) && (
                      <ul style={{ margin: "4px 0 4px 0", paddingLeft: "20px", color: "#374151", listStyleType: "disc" }}>
                        {proj.bullets
                          .filter((b) => b)
                          .map((bullet, bIdx) => (
                            <li key={bIdx} style={{ marginBottom: "2px" }}>
                              {bullet}
                            </li>
                          ))}
                      </ul>
                    )}
                    {proj.techStack && (
                      <p style={{ color: "#374151", margin: "2px 0" }}>
                        <strong>Built with</strong>: {proj.techStack}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Courses & Certifications */}
            {styles.showCertifications && resumeData.certifications.length > 0 && (
              <div style={{
                marginBottom: "12px",
                paddingBottom: styles.showSectionBorder ? "10px" : "0",
                borderBottom: styles.showSectionBorder
                  ? `${styles.sectionBorderWidth}px ${styles.sectionBorderStyle} ${styles.sectionBorderColor}`
                  : "none",
              }}>
                <h2
                  style={{
                    fontSize: `${styles.sectionTitleSize}px`,
                    fontWeight: styles.sectionTitleBold ? "bold" : "normal",
                    textTransform: styles.sectionTitleUppercase ? "uppercase" : "none",
                    color: styles.sectionTitleColor,
                    paddingBottom: "2px",
                    marginBottom: "6px",
                  }}
                >
                  Courses & Certifications{styles.showSectionTitleDash ? " -" : ""}
                </h2>
                {resumeData.certifications.map((cert) => (
                  <div key={cert.id} style={{ marginBottom: "4px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <div>
                        <strong>{cert.name}</strong>
                        {cert.issuer && <span style={{ color: "#6b7280" }}> - {cert.issuer}</span>}
                      </div>
                      <span style={{ fontSize: `${styles.fontSize - 1}px`, color: "#6b7280" }}>{cert.date}</span>
                    </div>
                    {cert.link && (
                      <a href={cert.link} style={{ color: styles.linkColor, textDecoration: "underline", fontSize: `${styles.fontSize - 1}px` }}>
                        View Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Languages */}
            {styles.showLanguages && resumeData.languages && resumeData.languages.length > 0 && (
              <div style={{
                marginBottom: "0",
              }}>
                <h2
                  style={{
                    fontSize: `${styles.sectionTitleSize}px`,
                    fontWeight: styles.sectionTitleBold ? "bold" : "normal",
                    textTransform: styles.sectionTitleUppercase ? "uppercase" : "none",
                    color: styles.sectionTitleColor,
                    paddingBottom: "2px",
                    marginBottom: "6px",
                  }}
                >
                  Languages{styles.showSectionTitleDash ? " -" : ""}
                </h2>
                <div style={{ color: "#374151" }}>
                  {resumeData.languages.map((lang, idx) => (
                    <span key={lang.id}>
                      <strong>{lang.name}</strong> ({lang.level}){idx < resumeData.languages.length - 1 ? " | " : ""}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

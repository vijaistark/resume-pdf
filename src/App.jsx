import React from 'react';
import './App.css';
import resume from './data/resume';
import Header from './components/Header';
import Section from './components/Section';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Extras from './components/Extras';

// Choose ONE:
// 1) Native print-to-PDF:
import DownloadButton from './components/DownloadButton';
// 2) Direct PDF download (uncomment next line and install html2pdf.js):
// import DownloadPdfDirect from './components/DownloadPdfDirect';

export default function App() {
  return (
    <main className="container resume-root">
      <Header name={resume.name} summary={resume.summary} />
      <div className="actions">
        <DownloadButton />
        {/* Or use direct download after installing html2pdf.js:
        <DownloadPdfDirect />
        */}
      </div>

      <Section title="Contact">
        <Contact contact={resume.contact} />
      </Section>

      <Section title="Skills">
        <Skills skills={resume.skills} />
      </Section>

      <Section title="Projects">
        <Projects projects={resume.projects} />
      </Section>

      <Section title="Education">
        <Education education={resume.education} />
      </Section>

      <Section title="Additional Information">
        <Extras items={resume.extras} />
      </Section>

      <footer className="footer muted">
        © {new Date().getFullYear()} {resume.name}
      </footer>
    </main>
  );
}

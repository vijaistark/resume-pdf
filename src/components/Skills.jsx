import React from 'react';

export default function Skills({ skills }) {
  const { technical, soft, languages } = skills;
  return (
    <div className="grid grid--2">
      <div>
        <h3>Technical Skills</h3>
        <ul className="list">
          {technical.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
      <div>
        <h3>Soft Skills & Languages</h3>
        <ul className="list">
          {soft.map((s, i) => <li key={`soft-${i}`}>{s}</li>)}
          {languages.map((l, i) => <li key={`lang-${i}`}>{l}</li>)}
        </ul>
      </div>
    </div>
  );
}

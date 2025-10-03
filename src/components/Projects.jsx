import React from 'react';

export default function Projects({ projects }) {
  return (
    <div className="stack">
      {projects.map((p, idx) => (
        <article className="card" key={idx}>
          <div className="card__head">
            <h3 className="card__title">{p.title}</h3>
            <span className="card__meta">{p.dates}</span>
          </div>
          <ul className="list">
            {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}

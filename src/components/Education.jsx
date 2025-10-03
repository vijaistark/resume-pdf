import React from 'react';

export default function Education({ education }) {
  return (
    <div className="stack">
      {education.map((e, idx) => (
        <article className="card" key={idx}>
          <div className="card__head">
            <h3 className="card__title">{e.program}</h3>
            <span className="card__meta">{e.dates}</span>
          </div>
          <p className="muted">{e.institution}</p>
          <ul className="list">
            {e.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}

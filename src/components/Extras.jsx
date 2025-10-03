import React from 'react';

export default function Extras({ items }) {
  return (
    <ul className="list">
      {items.map((x, i) => <li key={i}>{x}</li>)}
    </ul>
  );
}

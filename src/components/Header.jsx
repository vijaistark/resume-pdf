import React from 'react';

export default function Header({ name, summary }) {
  return (
    <header className="header">
      <h1 className="header__name">{name}</h1>
      <p className="header__summary">{summary}</p>
    </header>
  );
}

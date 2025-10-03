import React from 'react';

export default function Contact({ contact }) {
  const { phone, email, linkedin, github } = contact;
  const toLink = (url) => (url.startsWith('http') ? url : `https://${url}`);

  return (
    <ul className="list list--inline contact">
      <li><a href={`tel:${phone}`}>{phone}</a></li>
      <li><a href={`mailto:${email}`}>{email}</a></li>
      <li><a href={toLink(linkedin)} target="_blank" rel="noreferrer">LinkedIn</a></li>
      <li><a href={toLink(github)} target="_blank" rel="noreferrer">GitHub</a></li>
    </ul>
  );
}

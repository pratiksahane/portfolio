import React, { useEffect, useState } from "react";

const Sectionimp = ({ section }) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setLinks(data[section] || []);
      })
      .catch((err) => console.error("Error loading data.json:", err));
  }, [section]);

  return (
    <div className="contain">
      <h2>{section} Projects</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            🔗 <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sectionimp;

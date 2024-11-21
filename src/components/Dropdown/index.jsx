import { useState } from "react";
import "./dropdown.scss";

export default function Dropdown({ title, content }) {
  const isList = Array.isArray(content);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button
        className="dropdown__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <Arrow isOpen={isOpen} />
      </button>

      <div
        className={`dropdown__content dropdown__content--${
          isOpen ? "open" : "closed"
        }`}
      >
        {isList ? (
          <ul>
            {content.map((li, index) => {
              return <li key={index}>{li}</li>;
            })}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

function Arrow({ isOpen }) {
  return (
    <svg
      width="24"
      height="15"
      viewBox="0 0 24 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="dropdown__arrow"
      style={{
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
      }}
    >
      <path
        d="M13.2103 13.8522C12.5409 14.5216 11.4538 14.5216 10.7843 13.8522L0.502064 3.56988C-0.167355 2.90046 -0.167355 1.81332 0.502064 1.1439C1.17148 0.474484 2.25862 0.474484 2.92804 1.1439L12 10.2159L21.072 1.14926C21.7414 0.47984 22.8285 0.47984 23.4979 1.14926C24.1674 1.81868 24.1674 2.90582 23.4979 3.57523L13.2157 13.8575L13.2103 13.8522Z"
        fill="white"
      />
    </svg>
  );
}


import type { PointerEvent } from "react";

export default function AboutSection() {
  function handlePointerMove(e: PointerEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    e.currentTarget.style.setProperty(
      "--dot-x",
      `${e.clientX - rect.left}px`,
    );

    e.currentTarget.style.setProperty(
      "--dot-y",
      `${e.clientY - rect.top}px`,
    );
  }

  return (
    <section
      className="about-section"
      onPointerMove={handlePointerMove}
    >
      <div className="about-content">
        <p className="about-eyebrow">01 — ABOUT</p>
        <h2>Building reliable software, end to end.</h2>

        <div className="about-layout">
          <div className="about-description">
            <p>
              I'm a Java Full-Stack Developer with a strong
              foundation in Java, OOP, Data Structures &
              Algorithms, Operating Systems, and DBMS. My focus
              is on backend engineering and designing scalable
              systems that hold up in real enterprise environments.
            </p>
            <p>
              I build production-grade applications using Spring
              Boot, React.js, REST APIs, and PostgreSQL, with an
              eye for clean architecture, performance, and
              maintainability across the full stack.
            </p>
            <p>
              I enjoy solving hard problems — from designing
              multi-tenant SaaS workflows to tightening API
              security — and I'm driven by a passion for enterprise
              software development done right.
            </p>
          </div>

          <aside className="about-focus">
            <p className="about-focus-title">FOCUS</p>
            <ul>
              <li>Backend engineering</li>
              <li>Scalable system design</li>
              <li>REST API design</li>
              <li>Full-stack delivery</li>
              <li>Enterprise software</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

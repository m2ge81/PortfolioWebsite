import React from 'react';

function Header() {
  return (
    <header className="basic-info">
      <h1 className="head">Michael Ge’s Website</h1>

      <details className="contact">
        <summary id="contact-summary">Contact information</summary>
        <table id="contact-table">
          <colgroup>
            <col span="2" style={{ backgroundColor: 'red' }} />
            <col style={{ backgroundColor: 'yellow' }} />
          </colgroup>
          <thead>
            <tr>
              <th>Email</th>
              <th>Phone number</th>
              <th>Github</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>gexingtian@gmail.com</td>
              <td>9259988722</td>
              <td>m2ge81</td>
            </tr>
          </tbody>
        </table>
      </details>

      <section id="user-info">
        <h2>Summary</h2>
        <p>
          I am currently looking for work in the field of software engineering
          as a full stack developer.
        </p>
        <p>
          Expereienced in Python, React, and Java. 
          I experience working in a multi-cultural team across timezones with CI/CD pipelines.
        </p>
        <p>
          Bachelor's degree holder from <b>UCSD</b>, graduated in Dec, 2020.
          Proficient in Web Design and mobile application.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: Python, C/C++, C#, Java, , React, JavaScript</li>
          <li>Frameworks & Tools: React/React Native, Git, Jira, Docker, Linux, .NET</li>
          <li>Cloud/DevOps: AWS (EC2), Firebase, CI/CD, Test Automation, Microsoft SQL Server</li>
        </ul>
      </section>

      <section id="experience">
        <h2>Work Experience</h2>
        <div class="job">
            <div class="job-header">
                <span class="job-title">
                    Backend Developer <span class="company-note">(Client: Intel Corporation)</span>
                </span>
                <span class="job-date">Feb 2022 – Aug 2023</span>
            </div>
            <ul>
                <li>Engineered Python scripts to transform NVMe JSON telemetry into SEDCLI compliant HDD signals, ensuring smooth and secure data migration.</li>
                <li>Collaborated with 6+ cross‑functional teams; managed 20+ weekly merges in Git/Jira, cutting integration time by <span class="bullet-highlight">67%</span> (from averaging 3 days to 1 single day).</li>
                <li>Designed a Python test automation framework that validated signal generation across 30+ test scenarios, preventing post‑release defects.</li>
                <li>Established coding standards and led peer code reviews, resolving <span class="bullet-highlight">50+ defects per week</span> before they reached QA.</li>
            </ul>
        </div>

        <div class="job">
            <div class="job-header">
                <span class="job-title">Full-stack Software Engineer</span>
                <span class="job-date">Aug 2021 – Jan 2022 | Sep 2023 – Nov 2023</span>
            </div>
            <ul>
                <li>Maintained existing databases using C#/.NET and Microsoft SQL Server, optimizing queries for faster performance.</li>
                <li>Implemented RESTful API endpoints to handle user account data modifications.</li>
                <li>Automated cross-platform testing for Windows and Linux systems.</li>
                <li>Delivered enterprise projects using Agile, DevOps, and security best practices while collaborating with global, cross-functional teams.</li>
            </ul>
        </div>
      </section>
      <section className="resume">
        <h3>Resume</h3>
        <nav>
          <a href={process.env.PUBLIC_URL + '/Michael_Ge_Resume2026.pdf'} download>Download</a> |
        </nav>
        <hr />
      </section>
    </header>
  );
}

export default Header;
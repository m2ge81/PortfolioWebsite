import React, { useState } from 'react';

function Aside() {
  const [descriptions, setDescriptions] = useState(['Discord Music Bot (AWS) : Deployed a bot to automate music playback and chat responses for 5+ servers, achieving 99.9% uptime on Amazon Web Services (AWS) EC2 instance.']);
  const [selectedProject, setSelectedProject] = useState('Discord Music Bot (AWS)');

  const projectDetails = {
    '2048': 'A duplication of the 2048 game made with java swing gui',
    'Multiverse': 'Led Agile development of a cross-platform mobile app using React Native. Implemented user authentication and real-time data sync with Firebase.',
    'Binary Clock': 'Made in C++, a clock that demonstrates the lights of binary digits for time',
    'Discord Music Bot (AWS)': 'Deployed a bot to automate music playback and chat responses for 5+ servers, achieving 99.9% uptime on Amazon Web Services (AWS) EC2 instance.',
    'AI Clothing Classifier': 'Trained CNN from scratch with TensorFlow (embedding layers, softmax); achieved 99.95% accuracy on a 10,000 image dataset (Fashion‑MNIST).',
    'Gomoku': 'A duplication of the Gomoku game made with React.'

  };

  const handleAddDescription = () => {
    const text = projectDetails[selectedProject];
    if (text) {
      setDescriptions([...descriptions, selectedProject+' : '+ text ]);
    }
  };

  return (
    <aside>
      <section className="img2">
        <figure id="library">
          <img
            src={process.env.PUBLIC_URL + '/ucsd.jpg'}
            alt="ucsd"
            style={{ width: 'auto' }}
          />
          <figcaption>Fig.1 - UCSD library.</figcaption>
        </figure>
      </section>

      <section className="achievement" id="achieve">
        <label htmlFor="projects">My past projects </label>
        <select
          id="projects"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <optgroup label="Recent project">
            <option value="Discord Music Bot (AWS)">Discord Music Bot (AWS)</option>
            
          </optgroup>
          <optgroup label="Other project">
            <option value="Multiverse">Multiverse</option>
            <option value="Binary Clock">Binary Clock</option>
            <option value="2048">2048</option>
            <option value="AI Clothing Classifier">AI Clothing Classifier</option>
            <option value="Gomoku">Gomoku</option>
          </optgroup>
        </select>
        <button onClick={handleAddDescription}>submit</button>

        {/* Render all previously added descriptions */}
        {descriptions.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </section>
    </aside>
  );
}

export default Aside;
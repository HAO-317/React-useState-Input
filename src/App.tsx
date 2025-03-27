import React, { useState } from 'react';
import './App.css';

function App() {
  const [vorname, setVorname] = useState<string>('');
  const [nachname, setNachname] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  return (
    <div className="App">
      <div className="form-container">
        <h1>React-useState-Input-Level-1_6</h1>

        <div className="input-section">
          <div className="input-group">
            <label>Vorname</label>
            <input
              type="text"
              value={vorname}
              onChange={(e) => setVorname(e.target.value)}
              placeholder="Deine Vorname"
            />
          </div>

          <div className="input-group">
            <label>Nachname</label>
            <input
              type="text"
              value={nachname}
              onChange={(e) => setNachname(e.target.value)}
              placeholder="Deine Nachname"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine Email"
            />
          </div>
        </div>

        <div className="output-container">
          <h2>Deine Daten</h2>
          <p><strong>Vorname:</strong> {vorname || '???'}</p>
          <p><strong>Nachname:</strong> {nachname || '???'}</p>
          <p><strong>Email:</strong> {email || '???'}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
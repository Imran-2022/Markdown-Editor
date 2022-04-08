import React from 'react';
import Markdown from './pages/Markdown';

function App() {
  return (
    <>
      <div style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;' }}>
        <p style={{ textAlign: 'center', padding: "40px", background: "#140101c7", fontSize: "30px", color: "white", }}>REACT | MARKDOWN 😃</p>
      </div>
      <Markdown />

    </>
  );
}

export default App;

import React from "react";
import Entry from "./Entry"

// 1.Create Entry Component
// 2. Create props to replace hardcoded data
// 3.map through the emojipeadia array and render Entry components



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Entry />
        <Entry />
        <Entry />

      </dl>
    </div>
  );
}

export default App;

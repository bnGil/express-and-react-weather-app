import React, { useState } from "react";
import "./inputSearch.css";

function InputSearch({ onHandleSearch }) {
  const [term, setTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="City..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={() => onHandleSearch(term)}>Search</button>
    </div>
  );
}

export default InputSearch;

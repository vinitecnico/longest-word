import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

const MainForm = () => {
  const [value, setValue] = useState("");
  const [longestWord, setLongestWord] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const longer = (a, b) => {
    return b.length > a.length ? b : a;
  };

  const GetlongestWord = (value) => {
    const words = value.split(" ");
    return words.reduce(longer);
  };

  const handleClick = () => {
    setLongestWord(GetlongestWord(value));
  };

  return (
    <div class="card mt-5">
      <div class="card-body">
        <form>
          <div className="mb-5">
            <label className="form-label">What is the longest word?</label>
            <input
              type="text"
              id="longestWord"
              value={value}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {longestWord && (
            <p className="mt-3">
              The longest word is <strong>{longestWord}</strong>
            </p>
          )}
          <Button
            variant="success"
            size="lg"
            onClick={handleClick}
            className="mt-3"
          >
            Show
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MainForm;

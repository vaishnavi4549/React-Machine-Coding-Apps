import "./styles.css";
import react, { useState, useEffect } from "react";
import usePasswordGenerator from "./use-password-generator";

export default function App() {
  const [checkboxes, setCheckBoxes] = useState({
    upperCase: false,
    lowerCase: false,
    symbols: false,
    numbers: false,
  });
  const [passLength, setPassLength] = useState(4);
  const [passStrength, setPassStreangth] = useState("");
  const [copied, setCopied] = useState(false);
  const { password, generatePassword } = usePasswordGenerator();

  useEffect(() => {
    let streangth = "";
    if (passLength < 8) {
      streangth = "Low";
    } else if (passLength >= 8 && passLength < 14) {
      streangth = "Medium";
    } else {
      streangth = "High";
    }
    setPassStreangth(streangth);
  }, [passLength]);

  const onChangeCheckBoxes = (e) => {
    const { name, checked } = e.target;
    setCheckBoxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className="container">
      <div className="header">
        <span>{password}</span>
        <button disabled={copied} onClick={handleCopy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="section2">
        <span>Character Length</span>
        <span>{passLength}</span>
      </div>
      <input
        min="4"
        max="20"
        type="range"
        className="input-pass"
        value={passLength}
        onChange={(e) => {
          setPassLength(e.target.value);
        }}
      ></input>
      <div className="checkboxes">
        <div>
          <input
            name="upperCase"
            type="checkbox"
            checked={checkboxes.upperCase}
            onChange={onChangeCheckBoxes}
          />
          <label>Include Uppercase Letters</label>
        </div>
        <div>
          <input
            name="lowerCase"
            type="checkbox"
            checked={checkboxes.lowerCase}
            onChange={onChangeCheckBoxes}
          />
          <label>Include Lowercase Letters</label>
        </div>
        <div>
          <input
            name="numbers"
            type="checkbox"
            checked={checkboxes.numbers}
            onChange={onChangeCheckBoxes}
          />
          <label>Include Numbers</label>
        </div>
        <div>
          <input
            name="symbols"
            type="checkbox"
            checked={checkboxes.symbols}
            onChange={onChangeCheckBoxes}
          />
          <label>Include Symbols </label>
        </div>
      </div>
      <div className="section3">
        <span>Password Strength:</span>
        <span>{passStrength}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="generate-button"
          onClick={() => {
            generatePassword(checkboxes, passLength);
          }}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

import "./LightMode.css";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import search from "../assets/icon-search.svg";
import WhiteCard from "./WhiteCard";
import { useState, useEffect } from "react";
import axios from "axios";
import typeScript from './typeScript'

function LightMode() {
  const [isDark, setIsDark] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [submitedValue, setSubmitedValue] = useState("");
  const [mainData, setMainData] = useState<typeScript>();
  const [isVisible, setIsVisible] = useState(false);



  useEffect(() => {
    if (submitedValue) {
      const resp = async () => {
        try {
          const response = await axios.get(
            `https://api.github.com/users/${submitedValue}`
          );
          const data = await response.data;  
          setMainData(data);
          setIsVisible(true);
        } catch (error) {
          console.log(error);
        }
      };

      resp();
    }
  }, [submitedValue]);

  return (
    <div
      className="body1"
      style={{ backgroundColor: isDark ? "#141D2F" : "#F6F8FF" }}
    >
      <div className="main-div1">
        <div
          className="light-header-div"
          style={{ backgroundColor: isDark ? "#141D2F" : "#F6F8FF" }}
        >
          <div
            className="light-header-div1"
            style={{ color: isDark ? "#FEFEFE" : "#222731" }}
          >
            <p>devfinder</p>
          </div>
          <div
            className="light-header-div2"
            style={{ color: isDark ? "#FEFEFE" : "#222731" }}
          >
            <p>{isDark ? "LIGHT" : "DARK"}</p>
            <div className="moon">
              <img
                onClick={() => {
                  setIsDark(!isDark);
                }}
                src={isDark ? sun : moon}
                alt="surati"
              />{" "}
            </div>
          </div>
        </div>
        <div
          className="input-div1"
          style={{ backgroundColor: isDark ? "#1E2A47" : "#FEFEFE" }}
        >
          <input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
            className="input1"
            placeholder="Search GitHub username…"
            style={{
              backgroundColor: isDark ? "#1E2A47" : "#FEFEFE",
              color: isDark ? "#FFFFFF" : "#4B6A9B",
            }}
          />
          <div className="search1">
            <img src={search} alt="search" />
          </div>
          <button
            className="button1"
            onClick={() => {
              if (inputValue) {
                setSubmitedValue(inputValue);
                if (submitedValue) {
                  setInputValue("");
                }
              }
            }}
          >
            Search
          </button>
        </div>
        {isVisible ? <WhiteCard isDark={isDark} mainData={mainData} /> : null}
      </div>
    </div>
  );
}

export default LightMode;

export {};

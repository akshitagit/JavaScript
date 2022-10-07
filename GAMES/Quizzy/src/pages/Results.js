import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getResults } from "../firebase/functions";

const Results = () => {
  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getResults().then((_results) => {
      console.log(_results[0][0]);
      setResults(_results);
    });
  }, []);

  return (
    <div className='results-wrap'>
      <h2>Results</h2>
      <ul>
        {results.map((result) => {
          return (
            <li
              onClick={() =>
                navigate("/result", {
                  state: { result: result[Object.keys(result)[0]] },
                })
              }
            >
              {Object.keys(result)[0]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Results;

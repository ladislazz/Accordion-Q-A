import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [showPar, setShowPar] = useState(false);

  const btnClick = () => {
    setShowPar(!showPar);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={btnClick}>
          {showPar ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showPar && <p>{info}</p>}
    </article>
  );
};

export default Question;

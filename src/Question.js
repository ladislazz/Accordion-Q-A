import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn">
          <AiOutlineMinus />
        </button>
      </header>
      <p>{info}</p>
    </article>
  );
};

export default Question;

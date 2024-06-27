import React, { useState } from "react";
import "./Styels/AskedQuestion.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AskedQuestion = () => {
  const items = [
    {
      question: "How does Osumare measure campaign success ?",
      answer:
        "We believe in measurable results. Our data-driven approach means that every campaigns performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
    },
    {
      question: "How does Osumare measure campaign success ?",
      answer:
        "We believe in measurable results. Our data-driven approach means that every campaigns performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
    },
    {
      question: "How does Osumare measure campaign success ?",
      answer:
        "We believe in measurable results. Our data-driven approach means that every campaigns performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
    },
  ];

  const [openAnswer, setOpenAnswer] = useState([]);

  const toggleAccordion = (index) => {
    if (openAnswer.includes(index)) {
      setOpenAnswer(openAnswer.filter((i) => i !== index));
    } else {
      setOpenAnswer([...openAnswer, index]);
    }
  };

  return (
    <>
      <div className="askedQuestions">
        <h3>Frequently Asked Questions</h3>
        <p>
          Pinpoint your audience with precision, ensuring your marketing efforts
          reach those most likely to engage with your brand.
        </p>
        <div className="questionsAccordion">
          {items.map((item, index) => (
            <div className="questionAnswer" key={index}>
              <div
                className={
                  openAnswer.includes(index) ? "open question" : "question"
                }
                onClick={() => toggleAccordion(index)}
              >
                <h3>
                  {index + 1 + ". "}
                  {item.question}
                </h3>
                <span>
                  {openAnswer.includes(index) ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </div>
              {openAnswer.includes(index) && (
                <div className="answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AskedQuestion;

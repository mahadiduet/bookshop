import { useState } from "react";

const faqData = [
    {
        question: "What is React.js and Explain the concept of 'components' in React.",
        answer: "React.js is a JavaScript library for building user interfaces. The concept of 'components' in React refers to reusable, independent pieces of the UI, which can manage their own state and logic."
    },
    {
        question: "What is JSX in React, and how does it work?",
        answer: "JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML directly within JavaScript, and React uses it to render UI elements."
    },
    {
        question: "What is the Virtual DOM, and how does React use it to optimize performance?",
        answer: "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to track changes, and updates only the necessary parts of the real DOM, improving performance."
    },
    {
        question: "Explain the concept of 'props' in React and how they are used.",
        answer: "Props (short for properties) are inputs to a React component. They are passed from parent to child components and are used to pass data or event handlers."
    },
    {
        question: "What is 'state' in React, and how does it differ from props?",
        answer: "State is a component's local data, managed within the component. Unlike props, which are read-only and passed from parent, state can change over time and is managed within the component."
    },
    {
        question: "Explain the useState hook and provide an example of how it is used.",
        answer: "The useState hook is used to add state to functional components. Example: const [count, setCount] = useState(0); You can now use 'count' and update it using 'setCount'."
    },
    {
        question: "What is the purpose of the useEffect hook in React, and when would you use it?",
        answer: "The useEffect hook allows you to perform side effects in function components, such as data fetching, updating the DOM, or setting up subscriptions."
    }
];
const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                        <button
                            className="w-full text-left flex justify-between items-center py-2 px-4 bg-blue-50 text-blue-900 font-semibold rounded-lg hover:bg-blue-100 focus:outline-none"
                            onClick={() => toggleAnswer(index)}
                        >
                            <span>Q: {faq.question}</span>
                            <span>{activeIndex === index ? '-' : '+'}</span>
                        </button>
                        {activeIndex === index && (
                            <div className="mt-3 px-4 text-gray-700">
                                <p>Answer: {faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
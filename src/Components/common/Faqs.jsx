import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Who are the courses designed for?",
      answer: (
        <ul className="list-disc ml-6">
          <li>K-12 students looking to improve their school performance.</li>
          <li>University students seeking supplemental learning or advanced courses.</li>
          <li>Professionals wanting to upgrade their skills or switch careers.</li>
          <li>Lifelong learners with a passion for new knowledge.</li>
        </ul>
      ),
    },
    {
      question: "How do I sign up for a course?",
      answer:
        "Signing up is easy! Simply visit our Courses page, select the course you're interested in, and click 'Enroll Now.' You'll be prompted to create an account or log in if you're already registered.",
    },
    {
      question: "Are the courses self-paced?",
      answer:
        "Yes, most of our courses are self-paced, allowing you to learn at your convenience. You can access the course materials anytime, anywhere, and complete lessons at your own pace.",
    },
    {
      question: "What types of courses do you offer?",
      answer: (
        <ul className="list-disc ml-6">
          <li>Academic subjects (Math, Science, English, etc.)</li>
          <li>Skill development (coding, data science, digital marketing)</li>
          <li>Certification courses for professional advancement</li>
          <li>Exam prep (SAT, ACT, GRE, etc.)</li>
          <li>Language learning and more</li>
        </ul>
      ),
    },
    {
      question: "Do I get a certificate upon completion?",
      answer:
        "Yes, upon successfully completing a course, you will receive a certificate of completion, which you can showcase to employers, educational institutions, or on your professional profiles like LinkedIn.",
    },
    {
      question: "How can I contact support if I need help?",
      answer:
        "If you have any questions or need assistance, feel free to reach out to our support team via email at support@learnnext.com or visit our Contact Us page. We’re here to help!",
    },
    {
      question: "Can I access LearnNext on my mobile device?",
      answer:
        "Absolutely! LearnNext is fully mobile-optimized, and we also have an app available for both iOS and Android devices so you can learn on the go.",
    },
    {
      question: "What is LearnNext?",
      answer:
        "LearnNext is an online education platform offering a wide range of courses for students, professionals, and lifelong learners. We provide interactive lessons, personalized learning paths, and expert support to help you achieve your academic or career goals.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-black rounded-lg overflow-hidden  transition-all duration-300 ${openFAQ === index ? "bg-white" : "bg-white"
              }`}
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h2>
              <div className="text-gray-500">
                {openFAQ === index ? (
                  <FiChevronUp size={24} />
                ) : (
                  <FiChevronDown size={24} />
                )}
              </div>
            </div>
            {openFAQ === index && (
              <div className="px-4 pb-4 text-gray-700">
                <p className="text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;

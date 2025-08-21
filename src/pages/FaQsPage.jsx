import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Who can use ADBI’s E-Learning website?",
    answer:
      "Anyone who would like to learn more about sustainable development in Asia and the Pacific is encouraged to sign up and complete courses of interest. Users range from government officials and private sector professionals to scholars and students from institutions worldwide.",
  },
  {
    id: 2,
    question: "What kinds of courses are offered?",
    answer:
      "Courses focus on development, policy, economics, environment, and sustainability, tailored for government officials, professionals, and students across the Asia-Pacific region.",
  },
  {
    id: 3,
    question: "How long does it take to complete a course?",
    answer:
      "Course length varies depending on the topic. Some may take a few hours, while others span multiple weeks with self-paced modules.",
  },
  {
    id: 4,
    question: "How do I sign up to take a course?",
    answer:
      "You can sign up by creating a free account on the ADBI E-Learning website, browsing available courses, and enrolling in your preferred program.",
  },
  {
    id: 5,
    question: "Why can’t I log into my account?",
    answer:
      "Please ensure your email and password are correct. If you’ve forgotten your password, use the password reset option. Contact support if issues persist.",
  },
  {
    id: 6,
    question: "When should I expect to receive my certificate after completing a course?",
    answer:
      "Certificates are typically available immediately after successfully completing the final module or assessment of the course.",
  },
  {
    id: 7,
    question:
      "What if the topic I’m interested in isn’t covered in ADBI E-Learning or I have other questions or comments?",
    answer:
      "You can contact ADBI’s support team to suggest new topics or ask additional questions. Feedback helps shape future courses.",
  },
];

const FaQsPage = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border-b pb-4 cursor-pointer"
            onClick={() => toggleFaq(faq.id)}
          >
            <div className="flex justify-between items-center">
              <h3
                className={`font-semibold text-lg ${
                  openId === faq.id ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {faq.question}
              </h3>
              <span className="text-xl">
                {openId === faq.id ? "▲" : "▼"}
              </span>
            </div>
            {openId === faq.id && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaQsPage;

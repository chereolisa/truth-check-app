import React from 'react';
import FAQItem from '../components/FAQItem';

const FAQ: React.FC = () => {
  const faqs = [
    { question: 'What is TruthCheck?', 
        answer: 'TruthCheck is a misinformation verification tool focused on helping users—especially in Nigeria—quickly determine whether a piece of information is true or false.' },

    { question: 'How will the application verify information without internet connectivity?', 
        answer: 'TruthCheck uses advanced offline features like service workers, local storage, and background syncing to ensure you can still use the app even when you are offline.' },

    { question: 'How will the application avoid political bias in fact-checking?', 
        answer: 'TruthCheck ensures that our fact-checking process remains impartial and free from political bias by using a range of reputable, non-partisan sources and applying transparent, evidence-based verification methods.'},
        
    { question: 'What types of misinformation does the application prioritize?', 
        answer: 'TruthCheck prioritizes the verification of misinformation that can have significant consequences on public health, safety, and societal well-being. ' },

    { question: 'How will the application handle verification in multiple languages?', 
        answer: 'TruthCheck is designed to support multiple languages, ensuring that users can access verification services in their preferred language. The application integrates automated language detection to identify the language of the content being verified. For content in Nigerian languages, such as Hausa, Yoruba, and Igbo, the app uses local language models and trusted sources to assess the accuracy of the information. We also collaborate with native speakers and linguistic experts to maintain the quality and accuracy of the verification process in various languages. Additionally, the app’s interface will be available in multiple languages, allowing users to seamlessly switch between languages for an intuitive and inclusive experience. ' },

    { question: 'How does your team approach the balance between automated and human verification?', 
        answer: 'TruthCheck combines automated systems for quick analysis with human expertise for deeper context. Automated tools handle large volumes of data, while trained fact-checkers step in for complex or nuanced cases, ensuring accuracy and reliability.' },


  ];

  return (
    <div className="faq-container">
      <h2>FAQ</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;

import React, { useEffect } from 'react';

const faqs = [
  {
    question: 'What kind of businesses do you work with?',
    answer:
      'I work with growing businesses, organisations, and brands that need stronger audience understanding, clearer positioning, and a more strategic digital approach.',
  },
  {
    question: 'Do you offer strategic consulting or performance marketing support?',
    answer:
      'Yes. My work sits at the intersection of digital strategy, consumer insight, and growth planning, with a strong focus on research-led decisions and practical execution.',
  },
  {
    question: 'Can you help with brand positioning and audience strategy?',
    answer:
      'Absolutely. I support brands in clarifying their message, understanding their audience, and creating strategic direction that aligns research, content, and digital growth goals.',
  },
  {
    question: 'Is this for one-off advice or ongoing consulting?',
    answer:
      'Both are possible depending on the challenge. I offer advisory support that can range from a focused strategy conversation to an ongoing strategic partnership.',
  },
  {
    question: 'How do I book a consultation?',
    answer:
      'You can use the consultation page to request a session, or contact me directly via email or WhatsApp for a quick conversation about your requirement.',
  },
];

const FaqPage = () => {
  useEffect(() => {
    document.title = 'FAQ | Nadee Senanayake';
  }, []);

  return (
    <main className="px-4 py-8 md:px-8 lg:px-16">
      <section className="mx-auto max-w-5xl rounded-[30px] bg-[#f8f8f8] px-6 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:px-10 lg:px-14">
        <div className="mb-8">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#7A1F3D]">FAQ</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#17181d] md:text-5xl">Frequently Asked Questions</h1>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-[#e4e6ea] bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-[#17181d] md:text-xl">{item.question}</h2>
              <p className="mt-3 text-base leading-7 text-[#485264]">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FaqPage;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, ChartNoAxesCombined, MessageSquareText, PhoneCall, Sparkles } from 'lucide-react';

const consultationAreas = [
  { icon: Sparkles, title: 'Brand Strategy & Market Positioning', accent: 'bg-[#fff5f8] text-[#7A1F3D]' },
  { icon: MessageSquareText, title: 'Social Media Research & Gap Analysis', accent: 'bg-[#eef3ff] text-[#2a4ea8]' },
  { icon: ChartNoAxesCombined, title: 'Social Listening, eWOM & Community Management', accent: 'bg-[#f4f0ff] text-[#5a3eb8]' },
  { icon: BadgeCheck, title: 'Online Reputation & Digital Crisis Management', accent: 'bg-[#e9faf6] text-[#0f766e]' },
  { icon: BriefcaseBusiness, title: 'Influencer & Digital Influence Strategy', accent: 'bg-[#f4ecff] text-[#6d4fc4]' },
  { icon: ChartNoAxesCombined, title: 'Paid Media Consulting (Meta Ads & Google Ads - Non Education Industries)', accent: 'bg-[#fff3df] text-[#b76a00]' },
  { icon: Sparkles, title: 'Talent Development & Industry Placement', accent: 'bg-[#eafaf8] text-[#0c5963]' },
  { icon: BadgeCheck, title: 'Digital Marketing Operations & Supply Chain', accent: 'bg-[#fce7f3] text-[#9d1658]' },
];

const steps = [
  {
    number: '01',
    title: 'Ready to discuss your challenge?',
    label: 'Check Availability',
    description: 'Share your business, brand, marketing and growth challenge.',
    dark: true,
  },
  {
    number: '02',
    title: 'Tell Me the Challenge',
    label: 'Challenge Discovery',
    description: 'Assess the situation and identify the most relevant strategic path.',
  },
  {
    number: '03',
    title: 'Leave With Direction',
    label: 'Strategic Consultation',
    description: 'Walk away with practical insight, recommendations and a clear next step.',
  },
];

const workflow = ['Conversations', 'Insights', 'Gaps', 'Strategy', 'Influence'];

const researchHighlights = [
  { label: 'Conversations', text: 'Understand what people are actually saying in your market.' },
  { label: 'Insights', text: 'Translate audience behaviour into clear patterns and opportunities.' },
  { label: 'Gaps', text: 'Identify where messaging, positioning or reach are underperforming.' },
  { label: 'Strategy', text: 'Create a strategic plan built around business priorities and audience needs.' },
];

const ContactPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Book a Consultation | Nadee Senanayake';
  }, []);

  const handleGetStarted = () => {
    const target = document.getElementById('contact');

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    navigate('/#contact');
  };

  return (
    <main className="consultation-page-copy px-4 py-4 md:px-8 lg:px-16">
      <section className="mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-[#f3f2f0] shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
        <div className="px-6 py-8 max-[768px]:px-4 max-[768px]:py-5 md:px-10 lg:px-12 lg:py-12">
          <div className="max-w-full">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8d8d8] bg-white/70 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#7A1F3D] max-[768px]:mb-4 max-[768px]:px-2.5 max-[768px]:py-1 max-[768px]:text-[0.56rem]">
              Strategic digital guidance
            </div>

            <h1 className="max-w-[820px] text-[2.7rem] font-black leading-[0.9] tracking-[-0.08em] text-[#1a1d22] sm:text-5xl max-[768px]:text-[1.8rem] max-[768px]:leading-[1.05] md:text-[5.2rem]">
              Book a <span className="block text-[#7A1F3D]">Consultation</span>
            </h1>

            <p className="mt-6 max-w-[760px] max-[768px]:mt-4">
              One conversation. Clear direction. Smarter digital decisions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 max-[768px]:mt-5">
              <button
                type="button"
                onClick={handleGetStarted}
                className="inline-flex items-center gap-2 rounded-full bg-[#7A1F3D] px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_32px_rgba(122,31,61,0.2)] transition-transform hover:-translate-y-0.5"
              >
                Get Started <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-[1280px] rounded-[30px] bg-[#f7f7f7] px-6 py-8 max-[768px]:mt-4 max-[768px]:px-4 max-[768px]:py-5 md:px-8 lg:px-10">
        <div className="mb-6 flex items-center gap-3 max-[768px]:mb-4">
          <div className="h-[2px] w-8 bg-[#7A1F3D]" />
          <p className="consultation-label text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#7A1F3D]">Consultation areas</p>
        </div>

        <h2 className="text-3xl font-black tracking-[-0.06em] text-[#1b1d21] max-[768px]:text-[1.7rem] md:text-5xl">Choose a consultation area</h2>

        <p className="mt-4 max-w-3xl max-[768px]:mt-3">
          Select the area that best matches your current challenge. Each consultation is tailored to your business goals, strategic priorities and audience context.
        </p>

        <div className="mt-8 grid gap-5 max-[768px]:mt-5 max-[768px]:gap-3 md:grid-cols-2 xl:grid-cols-4">
          {consultationAreas.map(({ icon: Icon, title, accent }, index) => (
            <div key={title} className="rounded-[24px] border border-[#e5e7eb] bg-white p-5 shadow-[0_10px_22px_rgba(15,23,42,0.04)] transition-transform hover:-translate-y-1 max-[768px]:p-4">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full border ${accent} max-[768px]:h-10 max-[768px]:w-10`}>
                <Icon size={20} />
              </div>
              <div className="mb-4 text-2xl font-black tracking-[-0.06em] text-[#7A1F3D] max-[768px]:mb-3 max-[768px]:text-xl">0{index + 1}</div>
              <h3 className="text-lg font-bold leading-6 text-[#17181d] max-[768px]:text-[0.96rem] max-[768px]:leading-5">{title}</h3>
              <div className="mt-5 flex justify-end max-[768px]:mt-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e7d8df] text-[#7A1F3D] max-[768px]:h-7 max-[768px]:w-7">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-[1280px] rounded-[30px] bg-[#f1f1f2] px-6 py-8 max-[768px]:mt-4 max-[768px]:px-4 max-[768px]:py-5 md:px-8 lg:px-10">
        <div className="mb-8 flex items-center gap-3 max-[768px]:mb-5">
          <div className="h-[2px] w-8 bg-[#7A1F3D]" />
          <p className="consultation-label text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#7A1F3D]">How it works</p>
        </div>

        <div className="grid gap-5 max-[768px]:gap-3 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-[24px] border p-6 shadow-[0_12px_28px_rgba(17,24,39,0.04)] max-[768px]:p-4 ${
                step.dark ? 'border-[#17181d] bg-[#17181d] text-white' : 'border-[#e2e5ea] bg-white text-[#1a1d22]'
              }`}
            >
              <div className={`mb-5 text-4xl font-black tracking-[-0.08em] max-[768px]:mb-4 max-[768px]:text-3xl ${step.dark ? 'text-[#dca4b5]' : 'text-[#dca4b5]'}`}>
                {step.number}
              </div>

              {step.dark ? (
                <div className="rounded-[20px] bg-[#1f2330] p-4 ring-1 ring-white/10 max-[768px]:p-3">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#f4d5df]">Ready to discuss your challenge?</p>
                  <div className="mt-6 flex items-center justify-between gap-3 max-[768px]:mt-4">
                    <span className="text-lg font-bold tracking-[-0.05em] text-white max-[768px]:text-base">Check Availability</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f4d5df] text-[#17181d] max-[768px]:h-8 max-[768px]:w-8">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#f2d7e5] bg-[#fff5f8] text-[#7A1F3D] max-[768px]:mb-3 max-[768px]:h-11 max-[768px]:w-11">
                  <PhoneCall size={22} />
                </div>
              )}

              <h3 className={`mt-5 text-2xl font-black tracking-[-0.05em] max-[768px]:mt-4 max-[768px]:text-xl ${step.dark ? 'text-white' : 'text-[#1a1d22]'}`}>
                {step.title}
              </h3>

              <p className={`mt-2 text-xs font-bold uppercase tracking-[0.18em] ${step.dark ? 'text-[#f4d5df]' : 'text-[#7A1F3D]'}`}>
                {step.label}
              </p>

              <p className="mt-4 max-[768px]:mt-3">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-[1280px] rounded-[30px] bg-[#edf1f5] px-6 py-8 max-[768px]:mt-4 max-[768px]:px-4 max-[768px]:py-5 md:px-8 lg:px-10">
        <div className="mb-8 flex items-center gap-3 max-[768px]:mb-5">
          <div className="h-[2px] w-8 bg-[#7A1F3D]" />
          <p className="consultation-label text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#7A1F3D]">Why consult Nadee?</p>
        </div>

        <div className="grid gap-6 max-[768px]:gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[24px] border border-[#e5e7eb] bg-[#f3f2f0] p-5 shadow-[0_12px_28px_rgba(17,24,39,0.04)] max-[768px]:p-4 md:p-6">
            <h3 className="text-[1.8rem] font-black tracking-[-0.06em] text-[#1b1d21] max-[768px]:text-[1.45rem] md:text-[2.4rem]">
              Research before recommendations
            </h3>

            <div className="mt-7 grid gap-4 max-[768px]:mt-5 max-[768px]:gap-3 md:grid-cols-2">
              {researchHighlights.map(({ label, text }) => (
                <div key={label} className="rounded-[22px] border border-[#dfe3e8] bg-[#f8f8f7] p-5 max-[768px]:p-4 md:min-h-[160px]">
                  <p className="consultation-label text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#7A1F3D]">{label}</p>
                  <p className="mt-4 max-[768px]:mt-3">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 max-[768px]:space-y-4">
            <div className="rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(17,24,39,0.04)] max-[768px]:p-4">
              <p className="consultation-label text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#7A1F3D]">Beyond Paid Media</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.06em] text-[#1b1d21] max-[768px]:mt-2 max-[768px]:text-lg">Audience intelligence meets business growth.</h3>
              <p className="mt-3 max-[768px]:mt-2">
                Strategy is not only about ad spend. It is about positioning, clarity, trust, and measurable influence across the full customer journey.
              </p>
            </div>

            <div className="rounded-[24px] bg-[#7A1F3D] p-6 text-white shadow-[0_20px_35px_rgba(122,31,61,0.2)] max-[768px]:p-4">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl max-[768px]:mb-3 max-[768px]:h-10 max-[768px]:w-10 max-[768px]:text-xl">◎</div>
              <h3 className="text-3xl font-black tracking-[-0.06em] max-[768px]:text-[1.5rem]">Strategy Built Around Your Problem</h3>
              <p className="mt-4 max-[768px]:mt-2">
                No one-size-fits-all packages. Each consultation starts with your specific challenge and ends with practical strategic direction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

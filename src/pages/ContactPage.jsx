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
    <main className="px-4 py-6 md:px-8 lg:px-16">
      <section className="mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-[#f3f2f0] shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
        <div className="grid items-center gap-8 px-6 py-8 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8d8d8] bg-white/70 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#7A1F3D]">
              Strategic digital guidance
            </div>

            <h1 className="max-w-[620px] text-[2.7rem] font-black leading-[0.9] tracking-[-0.08em] text-[#1a1d22] sm:text-5xl md:text-[5.2rem]">
              Book a <span className="block text-[#7A1F3D]">Consultation</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#475163] md:text-lg md:leading-8">
              One conversation. Clear direction. Smarter digital decisions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleGetStarted}
                className="inline-flex items-center gap-2 rounded-full bg-[#7A1F3D] px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_32px_rgba(122,31,61,0.2)] transition-transform hover:-translate-y-0.5"
              >
                Get Started <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[420px] w-full overflow-hidden rounded-[30px] border border-[#ece9e5] bg-[#efe9e2] shadow-[0_24px_60px_rgba(17,24,39,0.12)] md:h-[480px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.9),transparent_18%),linear-gradient(135deg,#e9dfd7_0%,#f6f0eb_18%,#d9d1ca_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#d0c5bb] via-[#e4dcd4] to-transparent" />

              <div className="absolute left-[8%] bottom-[18%] h-[36%] w-[58%] rounded-[22px] border border-[#d6c8bf] bg-[#171b22] shadow-[0_28px_40px_rgba(17,24,39,0.15)]">
                <div className="absolute inset-[7%] rounded-[16px] border border-[#b8b0a7] bg-[linear-gradient(135deg,#f6f1ed_0%,#e9e2db_30%,#d7d1cc_100%)]" />
                <div className="absolute left-[16%] right-[16%] top-[18%] h-[18%] rounded-full bg-[#7A1F3D]/80" />
                <div className="absolute left-[14%] right-[14%] bottom-[24%] h-[28%] rounded-[12px] bg-[linear-gradient(135deg,#f7f5f3,#dbd1ca)] opacity-85" />
                <div className="absolute inset-x-[18%] bottom-[10%] h-[12%] rounded-full bg-[#c7b9af]" />
              </div>

              <div className="absolute right-[9%] bottom-[14%] h-[21%] w-[18%] rounded-[18px] border border-[#d7c9bd] bg-[linear-gradient(180deg,#f8f4ef_0%,#e9e0d5_100%)] shadow-[0_18px_30px_rgba(17,24,39,0.12)]">
                <div className="absolute left-[20%] top-[16%] h-[48%] w-[60%] rounded-[12px] border border-[#c4b4a2] bg-[linear-gradient(180deg,#f8f6f4,#ebdfd5)]" />
                <div className="absolute left-[34%] bottom-[16%] h-[18%] w-[32%] rounded-full border-[3px] border-[#c9b8ad] bg-[radial-gradient(circle_at_35%_35%,#fff,#efe8e1_48%,#d8cfc7)]" />
                <div className="absolute right-[16%] bottom-[18%] h-[12%] w-[12%] rounded-full border-[3px] border-[#c9b8ad] bg-[radial-gradient(circle_at_35%_35%,#fff,#efe8e1_48%,#d8cfc7)]" />
              </div>

              <div className="absolute bottom-6 left-6 max-w-[58%] rounded-[18px] border border-white/60 bg-white/30 px-3 py-2 backdrop-blur-[2px]">
                <p className="text-[0.56rem] font-bold uppercase tracking-[0.22em] text-[#5a404b]">Research Strategy Influence Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-[1280px] rounded-[30px] bg-[#f7f7f7] px-6 py-8 md:px-8 lg:px-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-[2px] w-8 bg-[#7A1F3D]" />
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#7A1F3D]">Consultation areas</p>
        </div>

        <h2 className="text-3xl font-black tracking-[-0.06em] text-[#1b1d21] md:text-5xl">Choose a consultation area</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[#4b5467]">
          Select the area that best matches your current challenge. Each consultation is tailored to your business goals, strategic priorities and audience context.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {consultationAreas.map(({ icon: Icon, title, accent }, index) => (
            <div key={title} className="rounded-[24px] border border-[#e5e7eb] bg-white p-5 shadow-[0_10px_22px_rgba(15,23,42,0.04)] transition-transform hover:-translate-y-1">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full border ${accent}`}>
                <Icon size={20} />
              </div>
              <div className="mb-4 text-2xl font-black tracking-[-0.06em] text-[#7A1F3D]">0{index + 1}</div>
              <h3 className="text-lg font-bold leading-6 text-[#17181d]">{title}</h3>
              <div className="mt-5 flex justify-end">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e7d8df] text-[#7A1F3D]">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-[1280px] rounded-[30px] bg-[#f1f1f2] px-6 py-8 md:px-8 lg:px-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-[2px] w-8 bg-[#7A1F3D]" />
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#7A1F3D]">How it works</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-[24px] border p-6 shadow-[0_12px_28px_rgba(17,24,39,0.04)] ${
                step.dark ? 'border-[#17181d] bg-[#17181d] text-white' : 'border-[#e2e5ea] bg-white text-[#1a1d22]'
              }`}
            >
              <div className={`mb-5 text-4xl font-black tracking-[-0.08em] ${step.dark ? 'text-[#dca4b5]' : 'text-[#dca4b5]'}`}>
                {step.number}
              </div>

              {step.dark ? (
                <div className="rounded-[20px] bg-[#1f2330] p-4 ring-1 ring-white/10">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#f4d5df]">Ready to discuss your challenge?</p>
                  <div className="mt-6 flex items-center justify-between gap-3">
                    <span className="text-lg font-bold tracking-[-0.05em] text-white">Check Availability</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f4d5df] text-[#17181d]">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#f2d7e5] bg-[#fff5f8] text-[#7A1F3D]">
                  <PhoneCall size={22} />
                </div>
              )}

              <h3 className={`mt-5 text-2xl font-black tracking-[-0.05em] ${step.dark ? 'text-white' : 'text-[#1a1d22]'}`}>
                {step.title}
              </h3>

              <p className={`mt-2 text-xs font-bold uppercase tracking-[0.18em] ${step.dark ? 'text-[#f4d5df]' : 'text-[#7A1F3D]'}`}>
                {step.label}
              </p>

              <p className={`mt-4 text-base leading-7 ${step.dark ? 'text-[#e5eaf2]' : 'text-[#4b5467]'}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-[1280px] rounded-[30px] bg-[#edf1f5] px-6 py-8 md:px-8 lg:px-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-[2px] w-8 bg-[#7A1F3D]" />
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#7A1F3D]">Why consult Nadee?</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(17,24,39,0.04)]">
            <h3 className="text-3xl font-black tracking-[-0.06em] text-[#1b1d21] md:text-4xl">
              Research before recommendations
            </h3>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {workflow.map((item, index) => (
                <React.Fragment key={item}>
                  <div className="rounded-full border border-[#e2e5ea] bg-[#f5f7fb] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1f2430]">
                    {item}
                  </div>
                  {index < workflow.length - 1 && (
                    <span className="text-[#7A1F3D]">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-8 rounded-[22px] border border-[#e7e8eb] bg-[#fafbfc] p-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[18px] border border-[#ebedf0] bg-white p-4">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#7A1F3D]">Conversations</p>
                  <p className="mt-2 text-sm leading-6 text-[#3d4658]">Understand what people are actually saying in your market.</p>
                </div>
                <div className="rounded-[18px] border border-[#ebedf0] bg-white p-4">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#7A1F3D]">Insights</p>
                  <p className="mt-2 text-sm leading-6 text-[#3d4658]">Translate audience behaviour into clear patterns and opportunities.</p>
                </div>
                <div className="rounded-[18px] border border-[#ebedf0] bg-white p-4">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#7A1F3D]">Gaps</p>
                  <p className="mt-2 text-sm leading-6 text-[#3d4658]">Identify where messaging, positioning or reach are underperforming.</p>
                </div>
                <div className="rounded-[18px] border border-[#ebedf0] bg-white p-4">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#7A1F3D]">Strategy</p>
                  <p className="mt-2 text-sm leading-6 text-[#3d4658]">Create a strategic plan built around business priorities and audience needs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(17,24,39,0.04)]">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#7A1F3D]">Beyond Paid Media</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.06em] text-[#1b1d21]">Audience intelligence meets business growth.</h3>
              <p className="mt-3 text-base leading-7 text-[#4b5467]">
                Strategy is not only about ad spend. It is about positioning, clarity, trust, and measurable influence across the full customer journey.
              </p>
            </div>

            <div className="rounded-[24px] bg-[#7A1F3D] p-6 text-white shadow-[0_20px_35px_rgba(122,31,61,0.2)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl">◎</div>
              <h3 className="text-3xl font-black tracking-[-0.06em]">Strategy Built Around Your Problem</h3>
              <p className="mt-4 text-base leading-7 text-[#ffe7ef]">
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

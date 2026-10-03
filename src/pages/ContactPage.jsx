import React, { useEffect } from 'react';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, ChartNoAxesCombined, MessageSquareText, PhoneCall, Sparkles } from 'lucide-react';

const consultationAreas = [
  { icon: Sparkles, title: 'Brand Strategy & Market Positioning' },
  { icon: MessageSquareText, title: 'Social Media Research & Gap Analysis' },
  { icon: ChartNoAxesCombined, title: 'Social Listening, eWOM & Community Management' },
  { icon: BadgeCheck, title: 'Online Reputation & Digital Crisis Management' },
  { icon: BriefcaseBusiness, title: 'Influencer & Digital Influence Strategy' },
  { icon: ChartNoAxesCombined, title: 'Paid Media Consulting' },
  { icon: Sparkles, title: 'Talent Development & Industry Placement' },
  { icon: BadgeCheck, title: 'Digital Marketing Operations & Supply Chain' },
];

const steps = [
  { number: '01', title: 'Ready to discuss your challenge?', label: 'Strategic Consultation', description: 'Share your business, brand, marketing and growth challenge.' },
  { number: '02', title: 'Tell Me The Challenge', label: 'Challenge Discovery', description: 'Assess the situation and identify the most relevant strategic path.' },
  { number: '03', title: 'Leave With Direction', label: 'Actionable guidance', description: 'Walk away with practical insight, recommendations and a clear next step.' },
];

const reasons = [
  'Research before recommendations',
  'Strategic clarity before execution',
  'Audience insight and market intelligence',
  'Gap analysis and growth opportunity mapping',
];

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Book a Consultation | Nadee Senanayake';
  }, []);

  return (
    <main className="px-4 py-6 md:px-8 lg:px-16">
      <section className="mx-auto max-w-[1200px] overflow-hidden rounded-[30px] bg-[#f3f2f0] shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
        <div className="grid gap-10 px-6 py-8 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8d8d8] bg-white/70 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#7A1F3D]">
              Strategic digital guidance
            </div>

            <h1 className="max-w-[620px] text-5xl font-black leading-[0.9] tracking-[-0.08em] text-[#1a1d22] md:text-[5.2rem]">
              Book a <span className="block text-[#7A1F3D]">Consultation</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#475163]">
              One conversation. Clear direction. Smarter digital decisions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:info@nadeesenanayake.com?subject=Consultation%20Request"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A1F3D] px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_32px_rgba(122,31,61,0.2)] transition-transform hover:-translate-y-0.5"
              >
                Get Started <ArrowRight size={16} />
              </a>
              <a
                href="tel:+94707803698"
                className="inline-flex items-center gap-2 rounded-full border border-[#d5d8dd] bg-white px-5 py-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#202836]"
              >
                <PhoneCall size={15} className="text-[#7A1F3D]" />
                Call now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[30px] bg-[#7A1F3D]/10 blur-3xl" />
            <div className="relative flex h-full min-h-[320px] items-center justify-center rounded-[30px] bg-[#111827] p-6 text-white shadow-[0_24px_60px_rgba(17,24,39,0.18)]">
              <div className="w-full rounded-[24px] bg-white/5 p-5 backdrop-blur-sm ring-1 ring-white/10">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#f4d5df]">Strategy support</p>
                    <h2 className="mt-2 text-2xl font-black tracking-[-0.05em]">Research-driven marketing</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4d5df] text-[#7A1F3D]">
                    <Sparkles size={20} />
                  </div>
                </div>

                <div className="space-y-3 text-sm text-[#e6edf6]">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                    <span className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#f4d5df]">Focus</span>
                    <p className="mt-2 text-base font-semibold text-white">Audience, brand and digital growth</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                    <span className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#f4d5df]">Format</span>
                    <p className="mt-2 text-base font-semibold text-white">1:1 consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-[1200px] rounded-[28px] bg-[#f7f7f7] px-6 py-8 md:px-8 lg:px-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-[2px] w-8 bg-[#7A1F3D]" />
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#7A1F3D]">Consultation areas</p>
        </div>
        <h2 className="text-3xl font-black tracking-[-0.06em] text-[#1b1d21] md:text-5xl">Choose a consultation area</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[#4b5467]">
          Select the area that best matches your current challenge. Each consultation is tailored to your business goals, strategic priorities and audience context.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {consultationAreas.map(({ icon: Icon, title }, index) => (
            <div key={title} className="rounded-[22px] border border-[#dfdfe4] bg-white p-5 shadow-[0_12px_24px_rgba(15,23,42,0.04)] transition-transform hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#f2d7e5] bg-[#fff5f8] text-[#7A1F3D]">
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

      <section className="mx-auto mt-6 max-w-[1200px] rounded-[28px] bg-[#f1f1f2] px-6 py-8 md:px-8 lg:px-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-[2px] w-8 bg-[#7A1F3D]" />
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#7A1F3D]">How it works</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="rounded-[24px] border border-[#e2e5ea] bg-white p-6 shadow-[0_12px_28px_rgba(17,24,39,0.04)]">
              <div className="mb-5 text-4xl font-black tracking-[-0.08em] text-[#dca4b5]">{step.number}</div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#f2d7e5] bg-[#fff5f8] text-[#7A1F3D]">
                <PhoneCall size={22} />
              </div>
              <h3 className="text-2xl font-black tracking-[-0.05em] text-[#1a1d22]">{step.title}</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7A1F3D]">{step.label}</p>
              <p className="mt-4 text-base leading-7 text-[#4b5467]">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-[1200px] rounded-[28px] bg-[#edf1f5] px-6 py-8 md:px-8 lg:px-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-[2px] w-8 bg-[#7A1F3D]" />
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#7A1F3D]">Why consult Nadee?</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[22px] bg-white p-6 shadow-[0_12px_28px_rgba(17,24,39,0.04)]">
            <h3 className="text-3xl font-black tracking-[-0.06em] text-[#1b1d21] md:text-4xl">Research before recommendations</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3 rounded-2xl border border-[#e7e8eb] bg-[#fafbfc] p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4d5df] text-[#7A1F3D]">✓</span>
                  <span className="text-sm font-semibold text-[#1f2430]">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] bg-[#7A1F3D] p-6 text-white shadow-[0_20px_35px_rgba(122,31,61,0.2)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl">◎</div>
            <h3 className="text-3xl font-black tracking-[-0.06em]">Strategy built around your problem</h3>
            <p className="mt-4 text-base leading-7 text-[#ffe7ef]">
              No one-size-fits-all packages. Each consultation starts with your specific challenge and ends with practical strategic direction.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

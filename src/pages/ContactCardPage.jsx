import React, { useEffect } from 'react';
import { ArrowRight, MessageSquareText, PhoneCall, CalendarCheck2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCardPage = () => {
  useEffect(() => {
    document.title = 'Contact | Nadee Senanayake';
  }, []);

  return (
    <main className="px-4 py-8 md:px-8 lg:px-16">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#f4f5f7] shadow-[0_32px_80px_rgba(15,15,25,0.12)]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-[#f4f5f7] px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7A1F3D] text-sm font-black tracking-[0.22em] text-white">
                NS
              </div>
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.32em] text-[#7A1F3D]">Nadee Senanayake</span>
            </div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7d9de] bg-white/80 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#2a2a2a]">
              <CalendarCheck2 size={12} className="text-[#7A1F3D]" />
              Strategic guidance for growth-ready brands
            </div>

            <h1 className="max-w-xl text-[2.3rem] font-black leading-[0.95] tracking-[-0.06em] text-[#17181d] sm:text-4xl md:text-5xl lg:text-6xl">
              Let’s build a smarter digital growth strategy.
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#4d5362] sm:text-base md:text-lg">
              Strategic consultation for businesses, organisations and brands that want better audience insight, sharper positioning, and measurable digital growth.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A1F3D] px-6 py-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(122,31,61,0.28)] transition-transform hover:-translate-y-0.5"
              >
                Book a Consultation
                <ArrowRight size={15} />
              </Link>

              <a
                href="https://wa.me/94707803698"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d3d6dc] bg-white px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#1d2939] transition-colors hover:border-[#7A1F3D] hover:text-[#7A1F3D]"
              >
                <MessageSquareText size={15} />
                WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[#2a2a2a]">
              <a
                href="https://www.linkedin.com/in/nadee-senanayake/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#1f2d3d] underline decoration-[#7A1F3D] underline-offset-4 transition-colors hover:text-[#7A1F3D]"
              >
                5+ Years of industry experience
              </a>
              <a
                href="tel:+94707803698"
                className="inline-flex items-center gap-2 font-semibold text-[#1f2d3d] hover:text-[#7A1F3D]"
              >
                <PhoneCall size={16} className="text-[#7A1F3D]" />
                070 780 36 98
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] bg-[#0f172a] p-6 md:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_25%),linear-gradient(135deg,#111827_0%,#172033_42%,#0f172a_100%)]" />
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-white/20" />
            <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-[#7A1F3D]/30 blur-2xl" />

            <div className="relative z-10 flex h-full items-end">
              <div className="w-full rounded-[28px] bg-white/95 p-5 text-[#17181d] shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.26em] text-[#7A1F3D]">Consultation</p>
                    <h2 className="mt-2 text-2xl font-black tracking-[-0.05em]">Strategy Sprint</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4dfe7] text-[#7A1F3D]">
                    <CalendarCheck2 size={22} />
                  </div>
                </div>

                <div className="space-y-4 text-sm text-[#485264]">
                  <div className="rounded-2xl border border-[#e9edf2] bg-[#f9fafb] p-3">
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-[#7A1F3D]">Focus area</p>
                    <p className="mt-2 text-lg font-semibold text-[#1a1d24]">Brand growth & digital strategy</p>
                  </div>
                  <div className="rounded-2xl border border-[#e9edf2] bg-[#f9fafb] p-3">
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-[#7A1F3D]">Delivery</p>
                    <p className="mt-2 text-base font-medium text-[#1a1d24]">Research-led recommendations for measurable outcomes</p>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-[#e9edf2] bg-[#f9fafb] p-3">
                    <span className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-[#7A1F3D]">Best for</span>
                    <span className="font-semibold text-[#1a1d24]">Businesses & brands</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactCardPage;

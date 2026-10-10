import React from 'react';

const ACCENT = '#c2185b';

const Hero = () => {
  const scrollToContact = (event) => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      event.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // otherwise the real href ("/#contact") navigates normally
  };

  return (
    <section
      id="home"
      className="hero-shell relative my-4 w-full overflow-hidden rounded-[30px] bg-[#07070b] shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
    >
      {/* ---------- Background: glowing burgundy gradients ---------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 40% at 50% 38%, rgba(122,28,62,0.28) 0%, rgba(122,28,62,0) 70%),' +
            'radial-gradient(45% 35% at 0% 12%, rgba(150,30,75,0.55) 0%, rgba(150,30,75,0) 70%),' +
            'radial-gradient(40% 25% at 100% 100%, rgba(150,30,75,0.35) 0%, rgba(150,30,75,0) 70%),' +
            'linear-gradient(180deg, #0b0b10 0%, #07070b 100%)',
        }}
      />

      {/* Large abstract circles / lines */}
      {/* top-left filled burgundy circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-6 h-[260px] w-[260px] rounded-full opacity-90 sm:-left-32 sm:h-[340px] sm:w-[340px] lg:-left-40 lg:h-[460px] lg:w-[460px]"
        style={{ background: 'radial-gradient(circle at 70% 40%, #7d1c47 0%, #3b0f24 55%, rgba(20,6,14,0.2) 100%)' }}
      />
      {/* right outlined circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-[22%] h-[300px] w-[300px] rounded-full border sm:h-[380px] sm:w-[380px] lg:-right-40 lg:h-[520px] lg:w-[520px]"
        style={{ borderColor: 'rgba(194,24,91,0.55)', background: 'radial-gradient(circle at 20% 50%, rgba(122,28,62,0.35), transparent 65%)' }}
      />
      {/* bottom-left filled circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-14 h-[160px] w-[160px] rounded-full sm:h-[200px] sm:w-[200px]"
        style={{ background: 'radial-gradient(circle at 60% 30%, #7d1c47 0%, #3b0f24 70%)' }}
      />
      {/* bottom-right outlined arc */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-16 h-[180px] w-[180px] rounded-full border sm:h-[240px] sm:w-[240px]"
        style={{ borderColor: 'rgba(194,24,91,0.5)' }}
      />
      {/* vertical accent lines with dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-[22%] hidden h-[110px] w-px sm:block"
        style={{ background: 'linear-gradient(180deg, rgba(194,24,91,0.9), rgba(194,24,91,0))' }}
      >
        <span className="absolute -left-[3px] -top-1 h-[7px] w-[7px] rounded-full" style={{ background: ACCENT }} />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[14%] right-[8%] h-[80px] w-px"
        style={{ background: 'linear-gradient(180deg, rgba(194,24,91,0.9), rgba(194,24,91,0))' }}
      >
        <span className="absolute -left-[3px] -top-1 h-[7px] w-[7px] rounded-full" style={{ background: ACCENT }} />
      </div>

      {/* ---------- Content ---------- */}
      <div className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center px-5 pb-10 pt-12 text-center sm:px-10 sm:pb-14 sm:pt-16 lg:pb-16 lg:pt-20">
        {/* Portrait with framing geometry */}
        <div className="relative flex h-[250px] w-[250px] items-center justify-center sm:h-[330px] sm:w-[330px] lg:h-[380px] lg:w-[380px]">
          {/* soft glow */}
          <div
            aria-hidden="true"
            className="absolute inset-[-14%] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(194,24,91,0.35) 0%, rgba(194,24,91,0) 65%)' }}
          />
          {/* orbit arcs + dots */}
          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            className="absolute inset-[-8%] h-[116%] w-[116%] max-w-none"
            fill="none"
          >
            <path d="M 60 200 A 140 140 0 0 1 200 60" stroke="rgba(194,24,91,0.7)" strokeWidth="1.2" />
            <path d="M 200 14 A 186 186 0 0 1 380 160" stroke="rgba(194,24,91,0.75)" strokeWidth="1.2" />
            <circle cx="62" cy="200" r="4" fill={ACCENT} />
            <circle cx="380" cy="160" r="4.5" fill={ACCENT} />
            <circle cx="300" cy="118" r="3.5" fill={ACCENT} />
          </svg>

          {/* circular frame */}
          <div
            className="relative h-full w-full overflow-hidden rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 25%, #ffffff 0%, #f1f1f3 55%, #d9d9de 100%)',
              boxShadow: '0 0 0 2px rgba(194,24,91,0.85), 0 0 40px rgba(194,24,91,0.35)',
            }}
          >
            {/* inner geometry */}
            <div
              aria-hidden="true"
              className="absolute -right-[8%] top-[12%] h-[62%] w-[62%] rounded-full"
              style={{ background: 'radial-gradient(circle at 40% 40%, #8a1c4c 0%, #4a1230 100%)' }}
            />
            <div
              aria-hidden="true"
              className="absolute -left-[6%] bottom-[8%] h-[48%] w-[48%] rounded-full bg-[#d8d8dc]"
            />
            <img
              src="/assets/nadee-portrait.jpeg"
              alt="Nadee Senanayake"
              className="relative h-full w-full rounded-full object-cover"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="mt-8 whitespace-nowrap text-[1.95rem] font-bold leading-[1.1] tracking-[-0.01em] min-[400px]:text-[2.2rem] text-white sm:mt-10 sm:text-[3.4rem] lg:text-[4.4rem]"
          style={{ fontFamily: '"Plus Jakarta Sans", "Segoe UI", sans-serif' }}
        >
          Nadee Senanayake
        </h1>
        <div
          aria-hidden="true"
          className="mt-3 h-px w-[40%] max-w-[220px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(194,24,91,0.9), transparent)' }}
        />

        {/* Tagline */}
        <p className="mt-6 max-w-[430px] text-[1.05rem] font-light italic leading-[1.55] text-[#e6e6ea] sm:max-w-[560px] sm:text-[1.2rem] lg:max-w-[620px] lg:text-[1.35rem]">
          Brand Strategist, Performance Marketer, EWOM Marketing Strategist &amp; Digital Consumer Researcher
        </p>

        {/* Availability header */}
        <div className="mt-9 flex w-full items-center gap-3 sm:mt-10">
          <span
            aria-hidden="true"
            className="h-[12px] w-[12px] shrink-0 rounded-full"
            style={{ background: ACCENT, boxShadow: '0 0 12px 3px rgba(194,24,91,0.65)' }}
          />
          <span className="whitespace-nowrap text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-white min-[400px]:text-[0.68rem] sm:text-[0.85rem] sm:tracking-[0.16em]">
            Open for professional engagements
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-white/40" />
        </div>

        {/* Two-column target market */}
        <div className="mt-5 grid w-full grid-cols-[1fr_auto_1fr] items-center gap-3 text-left sm:mt-6 sm:gap-8">
          <div>
            <p className="text-[0.72rem] leading-snug text-[#e0e0e4] min-[400px]:text-[0.8rem] sm:text-[1rem]">Education Organisations</p>
            <p className="mt-1 whitespace-nowrap text-[0.78rem] font-bold uppercase tracking-[0.05em] min-[400px]:text-[0.85rem] sm:text-[1.05rem]" style={{ color: ACCENT }}>
              Outside Sri Lanka
            </p>
          </div>
          <span aria-hidden="true" className="h-12 w-px bg-white/30" />
          <div>
            <p className="text-[0.72rem] leading-snug text-[#e0e0e4] min-[400px]:text-[0.8rem] sm:text-[1rem]">Non-Education Organisations</p>
            <p className="mt-1 whitespace-nowrap text-[0.78rem] font-bold uppercase tracking-[0.05em] min-[400px]:text-[0.85rem] sm:text-[1.05rem]" style={{ color: ACCENT }}>
              In Sri Lanka
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="/#contact"
          onClick={scrollToContact}
          className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f4f2f4] px-6 py-4 text-[0.95rem] font-semibold uppercase tracking-[0.14em] text-[#1c1c22] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white sm:mt-10 sm:py-5 sm:text-[1.05rem]"
          style={{ boxShadow: '0 0 40px rgba(194,24,91,0.45), 0 10px 30px rgba(0,0,0,0.4)' }}
        >
          Book a Consultation <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;

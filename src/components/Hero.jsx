import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return;
    }

    window.location.href = '/#contact';
  };

  return (
    <section
      id="home"
      className="relative mx-2 my-4 max-w-[97%] overflow-hidden rounded-[30px] bg-[#0b0b0d] shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(148,94,136,0.18),transparent_26%),linear-gradient(90deg,#050507_0%,#090c12_42%,#05070d_100%)]" />

      <div className="relative z-10 flex min-h-[420px] items-center sm:min-h-[480px] lg:min-h-[520px]">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-16">
          <div className="order-2 max-w-[650px] lg:order-1">
            <div className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#d7d7d7] sm:text-[0.82rem]">
              Nadee Senanayake
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7A1F3D] px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_32px_rgba(122,31,61,0.2)] transition-transform hover:-translate-y-0.5 sm:px-6"
            >
              GET STARTED
            </button>
          </div>

          <div className="relative order-1 flex h-[300px] items-center justify-center sm:h-[360px] lg:order-2 lg:h-[500px]">
            <div className="pointer-events-none absolute right-[-18%] top-1/2 hidden h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[#7A1F3D]/95 shadow-[0_0_45px_rgba(122,31,61,0.35)] lg:block" />
            <div className="pointer-events-none absolute right-[6%] top-1/2 hidden h-[240px] w-[240px] -translate-y-1/2 rounded-full bg-[#e7e3e5] opacity-95 lg:block" />
            <div className="pointer-events-none absolute right-[10%] top-[18%] hidden h-[18px] w-[18px] rounded-full bg-[#7A1F3D] lg:block" />
            <div className="pointer-events-none absolute right-[3%] bottom-[18%] hidden h-[18px] w-[18px] rounded-full bg-[#7A1F3D] lg:block" />
            <div className="pointer-events-none absolute right-[12%] top-[50%] hidden h-[190px] w-[190px] -translate-y-1/2 rounded-full border border-[#7A1F3D]/80 lg:block" />

            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[420px]">
              <img
                src="/assets/nadee-portrait.jpeg"
                alt="Nadee Senanayake"
                className="w-full rounded-[22px] object-cover shadow-[0_25px_40px_rgba(0,0,0,0.28)]"
                style={{
                  filter: 'saturate(0.9) contrast(1.04)',
                  aspectRatio: '4 / 5'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
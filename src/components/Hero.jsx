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
      className="relative mx-2 my-4 max-w-[97%] overflow-hidden rounded-[30px] bg-[#05070d] shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
    >
      <div className="hero-network absolute inset-0 opacity-90" />

      <div className="relative z-10 flex min-h-[420px] items-center py-10 sm:min-h-[480px] lg:min-h-[560px] lg:py-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-4 sm:px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-16">
          <div className="order-2 max-w-[650px] text-center lg:order-1 lg:text-left">
            <h1
              className="text-[2.5rem] font-black leading-[0.9] tracking-[-0.06em] text-[#f4f4f4] sm:text-[3.2rem] lg:text-[5.9rem]"
              style={{ fontFamily: '"Plus Jakarta Sans", "Segoe UI", sans-serif', textWrap: 'balance' }}
            >
              <span className="block">Nadee</span>
              <span className="block">Senanayake</span>
            </h1>

            <p className="mt-4 text-[0.9rem] font-light italic text-[#eaeaea] sm:text-[1.05rem] lg:mt-6 lg:text-[1.2rem]">
              Brand Strategiest, Performance Marketer, EWOM Marketing Strategist, Market Researcher - Digital Consumers
            </p>

            <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-[18px] bg-[#2f7ef7] px-6 py-4 text-[1.1rem] font-bold uppercase tracking-[0.04em] text-white shadow-[0_8px_25px_rgba(47,126,247,0.35)] transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Book a consultation <span aria-hidden="true">›</span>
              </button>
            </div>
          </div>

          <div className="order-1 relative flex items-center justify-center lg:order-2">
            <div className="absolute h-[290px] w-[290px] rounded-full bg-[radial-gradient(circle,#59d4ff_0%,rgba(89,212,255,0.8)_18%,rgba(89,212,255,0.08)_30%,transparent_62%)] blur-[10px] lg:h-[360px] lg:w-[360px]" />
            <div className="relative flex h-[270px] w-[270px] items-center justify-center rounded-full border-[4px] border-[#51d9ff] bg-[#f8b6d0] shadow-[0_0_28px_rgba(81,217,255,0.85)] lg:h-[390px] lg:w-[390px]">
              <img
                src="/assets/nadee-portrait.jpeg"
                alt="Nadee Senanayake"
                className="h-full w-full rounded-full object-cover object-top"
                style={{
                  filter: 'saturate(0.9) contrast(1.04)',
                  objectPosition: 'center top'
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
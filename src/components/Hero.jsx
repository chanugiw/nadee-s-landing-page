import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative mx-2 md:mx-4 my-4 max-w-[97%] overflow-hidden rounded-[30px] bg-[#0b0b0d] shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(148,94,136,0.18),transparent_26%),linear-gradient(90deg,#050507_0%,#090c12_42%,#05070d_100%)]" />

      <div className="relative z-10 flex min-h-[520px] items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-16">
          <div className="max-w-[650px]">
            <div className="mb-6 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#b56488]">
              <span className="inline-block h-[1px] w-6 bg-[#b56488]" />
              Where consumer intelligence meets digital business strategy
            </div>

            <h1 className="text-[3.1rem] font-black leading-[0.88] tracking-[-0.07em] text-[#f3f3f3] md:text-[5rem] lg:text-[5.9rem]">
              Transforming
              <span className="block text-[#e8e8e8]">Digital</span>
              <span className="block">Conversations into</span>
              <span className="block">Business Growth</span>
            </h1>

            <p className="mt-6 max-w-[560px] text-base leading-relaxed text-[#d4d4d4] md:text-lg">
              I help businesses uncover consumer insights, strengthen their brands, and develop research-driven digital strategies that combine community intelligence, consumer behaviour research, and data-driven marketing to achieve measurable results.
            </p>
          </div>

          <div className="relative flex h-[420px] items-center justify-center lg:h-[500px]">
            <div className="absolute right-[-14%] top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#7A1F3D]/95 shadow-[0_0_45px_rgba(122,31,61,0.35)]" />
            <div className="absolute right-[10%] top-1/2 h-[330px] w-[330px] -translate-y-1/2 rounded-full bg-[#e7e3e5] opacity-95" />
            <div className="absolute right-[14%] top-[18%] h-[18px] w-[18px] rounded-full bg-[#7A1F3D]" />
            <div className="absolute right-[6%] bottom-[18%] h-[18px] w-[18px] rounded-full bg-[#7A1F3D]" />
            <div className="absolute right-[18%] top-[50%] h-[190px] w-[190px] -translate-y-1/2 rounded-full border border-[#7A1F3D]/80" />

            <div className="relative z-10 w-[86%] max-w-[420px]">
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
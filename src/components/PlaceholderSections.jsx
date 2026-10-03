import React from 'react';

const SectionWrapper = ({ id, title, children }) => (
  <section id={id} className="mx-2 md:mx-4 my-4 py-20 bg-black px-6 lg:px-12 xl:px-24 rounded-3xl shadow-2xl max-w-[97%]">
    <div className="max-w-5xl mx-auto w-full space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
        <div className="lg:col-span-4">
          <h3 className="text-white text-2xl font-bold uppercase tracking-wider">{title}</h3>
        </div>
        <div className="lg:col-span-8 w-full text-[#A0A0A0]">
          {children}
        </div>
      </div>
    </div>
  </section>
);

export const Service = () => (
  <SectionWrapper id="service" title="Services">
    <div className="grid grid-cols-1 gap-6">
      <div className="p-6 border border-[#333] hover:border-[#A0A0A0] transition-colors duration-300 rounded-xl">
        <h4 className="text-white font-semibold text-lg mb-2">Consumer Insight Consulting</h4>
        <p className="text-sm">Comprehensive digital qualitative audit frameworks translating audience interactions into business performance indicators.</p>
      </div>
      <div className="p-6 border border-[#333] hover:border-[#A0A0A0] transition-colors duration-300 rounded-xl">
        <h4 className="text-white font-semibold text-lg mb-2">Digital Business Strategy Architecture</h4>
        <p className="text-sm">Building cohesive brand positioning pathways leveraging organic audience touchpoints and modern digital channels.</p>
      </div>
    </div>
  </SectionWrapper>
);

export const Experience = () => (
  <SectionWrapper id="experience" title="Experience">
    <div className="space-y-8">
      {/* Experience Item 1 */}
      <div className="relative pl-6 border-l border-[#333]">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#FFFFFF]">Present</span>
        <h4 className="text-white font-bold text-lg mt-1">Digital Community & Brand Strategist</h4>
        <p className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-2">Consulting Engagements</p>
        <p className="text-sm">Directing cross-functional research execution strategies linking brand sentiment metrics to corporate business targets.</p>
      </div>
      {/* Experience Item 2 */}
      <div className="relative pl-6 border-l border-[#333]">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#A0A0A0]">Prior Frameworks</span>
        <h4 className="text-white font-bold text-lg mt-1">Digital Strategy & Consumer Research Partner</h4>
        <p className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-2">Consumer Focused Sectors & Education</p>
        <p className="text-sm">Managed multi-channel online reputation infrastructure setups, handling tracking telemetry across community deployments.</p>
      </div>
    </div>
  </SectionWrapper>
);

export const Projects = () => (
  <SectionWrapper id="projects" title="Projects">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="group border border-[#333] p-6 flex flex-col justify-between hover:bg-[#1a1a1a] transition-all duration-300 rounded-xl">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#A0A0A0]">Strategy Framework</span>
          <h4 className="text-white font-bold text-xl mt-2 mb-4">Sentiment Architecture Realignment</h4>
        </div>
        <p className="text-sm text-[#A0A0A0] group-hover:text-white transition-colors">Mapping unstructured conversational telemetry to improve customer retention rates by 22%.</p>
      </div>
      <div className="group border border-[#333] p-6 flex flex-col justify-between hover:bg-[#1a1a1a] transition-all duration-300 rounded-xl">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#A0A0A0]">Research Deployment</span>
          <h4 className="text-white font-bold text-xl mt-2 mb-4">Academic & Enterprise Strategy Engine</h4>
        </div>
        <p className="text-sm text-[#A0A0A0] group-hover:text-white transition-colors">Translating qualitative community behavioral models into practical training models for modern digital teams.</p>
      </div>
    </div>
  </SectionWrapper>
);

export const Research = () => (
  <SectionWrapper id="research" title="Research & Publications">
    <div className="space-y-6">
      <div className="p-6 border border-[#333] rounded-xl">
        <span className="text-xs uppercase tracking-widest bg-[#222] text-[#FFFFFF] px-2 py-1 inline-block mb-3 rounded">MSc & PhD Tracks</span>
        <h4 className="text-white font-bold text-lg mb-2">Emerging Digital Ecosystems & Conversational Analytics Paradigms</h4>
        <p className="text-sm leading-relaxed text-[#A0A0A0]">
          Ongoing investigation looking at the long-term impacts of micro-interactions within structured online communities on consumer decision-making.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export const Contact = () => {
  const [state, setState] = React.useState({
    submitting: false,
    succeeded: false,
    error: '',
  });

  const openMailClient = (payload) => {
    const subject = encodeURIComponent(`Website enquiry from ${payload.name}`);
    const body = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`
    );

    window.location.href = `mailto:info@nadeesenanayake.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setState({ submitting: true, succeeded: false, error: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || `Request failed with status ${response.status}`);
      }

      form.reset();
      setState({ submitting: false, succeeded: true, error: '' });
    } catch (error) {
      console.error('Contact form submission failed:', error);
      openMailClient(payload);
      setState({
        submitting: false,
        succeeded: false,
        error: 'Email delivery is not configured yet. Your email client has been opened so you can send the enquiry directly, or add the SMTP credentials to enable automatic email delivery.',
      });
    }
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="mx-2 md:mx-4 my-4 bg-[#f7f7f7] px-6 py-16 md:px-10 lg:px-14 rounded-[30px] shadow-2xl max-w-[97%]">
        <div className="mx-auto max-w-3xl text-center py-8">
          <h4 className="text-[#17181d] text-3xl font-black tracking-[-0.05em] mb-4">Message Sent Successfully!</h4>
          <p className="text-[#485264]">Thank you for reaching out. I will get back to you as soon as possible.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="mx-2 md:mx-4 my-4 bg-[#f3f2f0] px-6 py-16 md:px-10 lg:px-14 rounded-[30px] shadow-[0_30px_70px_rgba(0,0,0,0.08)] max-w-[97%]">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] bg-[#111827] p-8 text-white shadow-[0_24px_60px_rgba(17,24,39,0.18)]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8d8d8] bg-white/10 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#f4d5df]">
            Strategic digital guidance
          </div>

          <h3 className="text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">Let’s collaborate</h3>

          <p className="mt-5 text-base leading-7 text-[#dfe6ef]">
            Let’s align your audience intelligence processes with your digital growth strategies.
          </p>

          <div className="mt-8 space-y-4 text-sm text-[#eff3f8]">
            <p>
              Email: <a href="mailto:info@nadeesenanayake.com" className="font-semibold underline underline-offset-4">info@nadeesenanayake.com</a>
            </p>
            <p>
              Call: <a href="tel:+94707803698" className="font-semibold underline underline-offset-4">0707803698</a>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="mailto:info@nadeesenanayake.com?subject=Website%20Enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-[#7A1F3D] px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_32px_rgba(122,31,61,0.2)] transition-transform hover:-translate-y-0.5"
            >
              Send via Email
            </a>
            <a
              href="tel:+94707803698"
              className="inline-flex items-center gap-2 rounded-full border border-[#d5d8dd] bg-white px-5 py-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#202836]"
            >
              Call now
            </a>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#e2e5ea] bg-white p-6 md:p-8 shadow-[0_12px_25px_rgba(17,24,39,0.04)]">
          {state.error && (
            <div className="mb-5 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-700">
              {state.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#4b5467]">Name</label>
              <input type="text" name="name" required className="w-full rounded-xl border border-[#dfe3ea] bg-[#f9fafb] p-3 text-[#1a1d22] outline-none transition focus:border-[#7A1F3D]" />
            </div>
            <div>
              <label className="mb-2 block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#4b5467]">Email</label>
              <input type="email" name="email" required className="w-full rounded-xl border border-[#dfe3ea] bg-[#f9fafb] p-3 text-[#1a1d22] outline-none transition focus:border-[#7A1F3D]" />
            </div>
            <div>
              <label className="mb-2 block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#4b5467]">Message</label>
              <textarea rows="5" name="message" required className="w-full rounded-xl border border-[#dfe3ea] bg-[#f9fafb] p-3 text-[#1a1d22] outline-none transition focus:border-[#7A1F3D]"></textarea>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full rounded-full bg-[#17181d] px-5 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#7A1F3D] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
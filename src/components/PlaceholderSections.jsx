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
      <SectionWrapper id="contact" title="Contact">
        <div className="text-center py-12">
          <h4 className="text-white text-2xl font-bold mb-4">Message Sent Successfully!</h4>
          <p className="text-[#A0A0A0]">Thank you for reaching out. I will get back to you as soon as possible.</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="contact" title="Contact">
      <div className="max-w-xl space-y-6">
        <p className="text-base text-[#A0A0A0]">
          Let's collaborate to align your audience intelligence processes with your digital growth strategies.
          <br /><br />
          You can email me at <a href="mailto:info@nadeesenanayake.com" className="text-white underline">info@nadeesenanayake.com</a>
          <br />
          or call <a href="tel:+94707803698" className="text-white underline">0707803698</a>
        </p>

        <a 
          href="mailto:info@nadeesenanayake.com?subject=Website%20Enquiry" 
          className="inline-block bg-[#25D366] text-black uppercase font-bold text-xs tracking-widest py-3 px-6 hover:bg-[#128C7E] hover:text-white transition-all duration-300 rounded-lg"
        >
          Send via Email
        </a>

        {state.error && (
          <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {state.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Name</label>
            <input type="text" name="name" required className="w-full bg-[#111] border border-[#333] p-3 text-white focus:outline-none focus:border-[#FFFFFF] transition-colors rounded-lg" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Email</label>
            <input type="email" name="email" required className="w-full bg-[#111] border border-[#333] p-3 text-white focus:outline-none focus:border-[#FFFFFF] transition-colors rounded-lg" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Message</label>
            <textarea rows="4" name="message" required className="w-full bg-[#111] border border-[#333] p-3 text-white focus:outline-none focus:border-[#FFFFFF] transition-colors rounded-lg"></textarea>
          </div>
          <button 
            type="submit" 
            disabled={state.submitting}
            className="w-full bg-[#FFFFFF] text-[#000000] uppercase font-bold text-xs tracking-widest py-4 hover:bg-[#333] hover:text-[#FFFFFF] transition-all duration-300 rounded-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};
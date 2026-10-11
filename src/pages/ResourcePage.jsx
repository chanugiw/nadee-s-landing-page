import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { resourcePages, resourcePath } from '../resources';

// Hub page (/resources) lists every resource category; /resources/:slug shows one category.
const ResourcePage = ({ slug: slugProp }) => {
  const params = useParams();
  const slug = slugProp ?? params.slug;
  const page = resourcePages.find((p) => p.slug === slug);

  if (slug && !page) return <Navigate to="/resources" replace />;

  return (
    <main className="px-4 py-8 md:px-8 lg:px-16">
      <section className="mx-auto max-w-5xl rounded-[30px] bg-[#f8f8f8] px-6 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:px-10 lg:px-14">
        <nav aria-label="Breadcrumb" className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#7A1F3D]">
          <Link to="/resources" className="hover:underline">Resources</Link>
          {page && <span> / {page.name}</span>}
        </nav>

        <h1 className="text-[2.25rem] font-black tracking-[-0.05em] text-[#17181d] sm:text-4xl md:text-5xl">
          {page ? page.name : 'Resources'}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#485264]">
          {page ? page.blurb : 'Insights, writing, research and case studies on brand strategy and digital marketing.'}
        </p>

        {page ? (
          <div className="mt-8 rounded-2xl border border-dashed border-[#d5d8dd] bg-white p-8 text-center">
            <span className="inline-flex rounded-full border border-[#7A1C3E]/40 bg-[#7A1C3E]/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#7A1F3D]">
              Coming Soon
            </span>
            <p className="mt-4 text-base text-[#485264]">New {page.name.toLowerCase()} will be published here shortly.</p>
          </div>
        ) : null}

        <div className="mt-10">
          {page && (
            <h2 className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#4b5467]">More resources</h2>
          )}
          <ul className="grid gap-4 sm:grid-cols-2">
            {resourcePages
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    to={resourcePath(p.slug)}
                    className="block h-full rounded-2xl border border-[#e4e6ea] bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    <h3 className="text-lg font-bold text-[#17181d]">{p.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#485264]">{p.blurb}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ResourcePage;

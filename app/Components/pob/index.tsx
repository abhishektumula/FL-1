import React from "react";

const ProcessOfBuying: React.FC = () => {
  return (
    <section className="w-full py-24">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT — Title */}
        <div className="flex flex-col justify-center">
          <h1 className="text-[48px] font-semibold leading-tight tracking-tight text-[var(--foreground)]">
            PROCESS
            <br />
            OF BUYING
          </h1>
          <div className="mt-20 h-2 w-16 bg-[var(--foreground)]"></div>
        </div>

        {/* RIGHT — Steps */}
        <div className="space-y-20">
          {/* STEP 1 */}
          <div className="flex gap-10 items-start">
            <span className="text-[120px] leading-none font-bold text-[var(--foreground)]">
              1
            </span>
            <div>
              <h2 className="text-lg font-semibold tracking-wide text-[var(--foreground)]">
                HOUSE VIEWING
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                We are here to help you the perfect interior design for your
                family. Depending on your needs, we’ll suggest properties to
                view and book you in for your viewing.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex gap-10 items-start">
            <span className="text-[120px] leading-none font-bold text-[var(--foreground)]">
              2
            </span>
            <div>
              <h2 className="text-lg font-semibold tracking-wide text-[var(--foreground)]">
                NEGOTIATING TERMS
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                Once you’ve found the perfect design of your dreams and are
                ready to place an offer, we will contact the seller and
                negotiate the best terms to suit your budget and needs.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex gap-10 items-start">
            <span className="text-[120px] leading-none font-bold text-[var(--foreground)]">
              3
            </span>
            <div>
              <h2 className="text-lg font-semibold tracking-wide text-[var(--foreground)]">
                CLOSE CARE-FREE
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                We don’t play around — that means that our bold and confident
                approach to closing results in you walking away with the keys to
                your new dream property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOfBuying;

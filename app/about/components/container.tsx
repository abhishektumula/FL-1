"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "40+", label: "Design Experts" },
  { value: "15+", label: "Years Experience" },
  { value: "2", label: "National Awards" },
];

const values = [
  {
    title: "End-to-End Execution",
    copy: "From first concept sketches to final handover, one team owns quality and timelines.",
  },
  {
    title: "Design With Purpose",
    copy: "Every material, layout, and light choice is mapped to daily use, not just aesthetics.",
  },
  {
    title: "Transparent Delivery",
    copy: "Clear estimates, milestone reviews, and predictable communication through the project.",
  },
];

const testimonials = [
  {
    name: "Isabella Rodriguez",
    role: "Home Interior Client",
    img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1200&auto=format&fit=crop",
    review:
      "Their ability to understand our vision and transform it into a classy interior was outstanding.",
  },
  {
    name: "Gabrielle Williams",
    role: "Modular Kitchen Client",
    img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1200&auto=format&fit=crop",
    review:
      "Creative designers who pay attention to detail. Delivered our dream kitchen on time.",
  },
  {
    name: "John Peter",
    role: "Renovation Client",
    img: "https://images.unsplash.com/photo-1639747279286-c07eecb47a0b?q=80&w=1200&auto=format&fit=crop",
    review:
      "Very professional team. From concept to final execution, everything was smooth and hassle-free.",
  },
  {
    name: "Victoria Thompson",
    role: "Interior Styling Client",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    review:
      "A refreshing experience. Highly skilled designers who turned my ideas into reality beautifully.",
  },
];

export function Container() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 pb-10 pt-6">
      <section className="w-full overflow-hidden">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="kicker">About Sreeja Interiors</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Designing thoughtful interiors in Hyderabad since 2009.
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)] md:text-lg">
              Sreeja Interiors is a multidisciplinary team of architects,
              interior designers, and project managers focused on creating
              homes and commercial spaces that feel premium, practical, and
              deeply personal.
            </p>
          </div>

          <Image
            src="/909353_4032.jpg"
            width={520}
            height={520}
            alt="Sreeja Interiors anniversary"
            className="h-[320px] w-full rounded-2xl object-cover md:h-[420px]"
          />
        </div>
      </section>

      <section className="grid gap-4 border-t border-[var(--line)] pt-8 md:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="py-2">
            <p className="text-3xl font-semibold text-[var(--foreground)]">{item.value}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.label}</p>
          </article>
        ))}
      </section>

      <section className="border-t border-[var(--line)] pt-8">
        <p className="kicker">Why Clients Choose Us</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title}>
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                {value.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] pt-8">
        <p className="kicker">Recognition</p>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <article className="space-y-4">
            <Image
              src="/Gemini_Generated_Image_gnzr1cgnzr1cgnzr.png"
              width={620}
              height={400}
              alt="Eldrok India K-12 Summit"
              className="h-[250px] w-full rounded-2xl object-cover"
            />
            <h3 className="text-2xl font-semibold">Eldrok India K-12 Summit</h3>
            <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">
              Recognized among top design and architecture firms for consistency,
              innovation, and execution quality.
            </p>
          </article>

          <article className="space-y-4">
            <Image
              src="/Gemini_Generated_Image_cl2nlecl2nlecl2n.png"
              width={620}
              height={400}
              alt="Architect's WOW Award"
              className="h-[250px] w-full rounded-2xl object-cover"
            />
            <h3 className="text-2xl font-semibold">Architect&apos;s WOW Award 2023</h3>
            <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">
              Honored for delivering functional and elegant residential and
              commercial interiors with strong client outcomes.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-[var(--line)] pt-8">
        <h2 className="mb-8 text-center text-3xl font-semibold">Client Feedback</h2>
        <Marquee speed={35} pauseOnHover gradient={false}>
          <div className="flex gap-8 px-4">
            {testimonials.map((item) => (
              <article key={item.name} className="w-80 p-1">
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  &ldquo;{item.review}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src={item.img}
                    width={46}
                    height={46}
                    alt={item.name}
                    className="h-[46px] w-[46px] rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                    <p className="text-xs text-[var(--muted)]">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Marquee>
      </section>
    </div>
  );
}

"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { NavBar } from "@/app/Components/navbar/NavBar";

export function Container() {
  // ⭐ Testimonial Data (You will add more later)
  const testimonials = [
    {
      name: "Isabella Rodriguez",
      role: "Home Interior Client",
      img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Their ability to understand our vision and transform it into a classy interior was outstanding.",
    },
    {
      name: "Gabrielle Williams",
      role: "Modular Kitchen Client",
      img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Creative designers who pay attention to detail. Delivered our dream kitchen on time!",
    },
    {
      name: "John Peter",
      role: "Renovation Client",
      img: "https://images.unsplash.com/photo-1639747279286-c07eecb47a0b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Very professional team. From concept to final execution, everything was smooth and hassle-free.",
    },
    {
      name: "Victoria Thompson",
      role: "Interior Styling Client",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "A refreshing experience! Highly skilled designers who turned my ideas into reality beautifully.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center max-w-6xl mx-auto bg-white">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <Image
            src="/909353_4032.jpg"
            width={250}
            height={250}
            alt="15 Years Anniversary"
            className="rounded-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Best Interior Designers
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#D7A546] mt-2">
              IN HYDERABAD
            </h2>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="py-16 px-6 max-w-6xl mx-auto leading-relaxed text-gray-800">
        <p className="text-lg">
          Established in 2009 in Hyderabad, Telangana, Sreeja Interiors is a
          leading interior design company founded by a skilled team of
          architects, designers, and decorators. We specialize in diverse
          interior solutions for homes and commercial spaces. Renowned as
          Hyderabad's leading interior designing firm, Sreeja Interiors excels
          in providing comprehensive interior design and decoration services.
          Our team's expertise ensures the delivery of top-notch designs within
          committed timelines and at affordable prices. Sreeja Interiors, a
          prominent name in Hyderabad's interior design industry since 2009,
          offers unparalleled expertise in home interiors, commercial designs,
          and architectural projects. Founded by a team of skilled architects,
          interior designers, and decorators, we specialize in a wide range of
          interior solutions. Our turnkey approach guarantees a seamless
          interior design experience, delivering superior results tailored to
          meet diverse client needs.
        </p>
      </section>

      {/* ----------- AWARD SECTION (STACKED) ----------- */}
      <section className="w-full px-6 py-20 flex flex-col gap-20">
        {/* BLOCK 1 */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* <div className="p-5 rounded-xl w-full"> */}
          <Image
            src="/Gemini_Generated_Image_gnzr1cgnzr1cgnzr.png"
            width={600}
            height={450}
            alt="Award"
            className="rounded-xl w-full"
          />
          {/* </div> */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Eldrok India K-12 Summit</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Eldrok India K-12 Summit serves as a premier gathering for school
              owners, entrepreneurs in the education sector, esteemed
              educationists, and influential thought leaders. It provides a
              unique opportunity to network with corporate executives,
              government officials, consultants, and policy makers, fostering
              insightful discussions and collaborations under a single roof. In
              recognition of excellence, we are honored to have received an
              award from Top 100 Designers and Architects firms, affirming our
              commitment to innovation and quality in the field of design and
              architecture.
            </p>
            <button className="bg-[#D7A546] text-white px-6 py-3 w-fit rounded-full font-medium hover:bg-[#b78b3a] transition">
              Explore →
            </button>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* <div className="p-5 rounded-xl  w-full"> */}
          <Image
            src="/Gemini_Generated_Image_cl2nlecl2nlecl2n.png"
            width={500}
            height={350}
            alt="Award"
            className="rounded-xl w-full"
          />
          {/* </div> */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Architect's Wow Award</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Sreeja Interiors has been honored with the prestigious Architect's
              WOW Award 2023. This coveted award recognizes excellence in
              interior design, and Vaishnavi Interiors has proven its mastery in
              both residential and commercial spaces. Presented by MARCHit, the
              award was bestowed upon the firm for their exceptional work in
              creating stunning and functional interiors. The award ceremony, a
              glittering affair sponsored by ARMAANS, took place on 17th
              February 2023 at the ITC Kohenur in Hyderabad. This recognition is
              a testament to Vaishnavi Interiors' dedication to design
              innovation..
            </p>
            <button className="bg-[#D7A546] text-white px-6 py-3 w-fit rounded-full font-medium hover:bg-[#b78b3a] transition">
              Explore →
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- STATISTICS SECTION ---------------- */}
      <section className="py-20 bg-white text-center w-full">
        <h2 className="text-3xl font-bold mb-8">
          An affordable interior partner
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-10">
          From concept to hand-over, rely on us for a personalized experience.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center font-bold text-3xl">
          <div>
            <h3>250</h3>
            <p className="text-sm text-gray-500">PROJECTS FINISHED</p>
          </div>
          <div>
            <h3>40+</h3>
            <p className="text-sm text-gray-500">OUR TEAM</p>
          </div>
          <div>
            <h3>218</h3>
            <p className="text-sm text-gray-500">HAPPY CUSTOMERS</p>
          </div>
          <div>
            <h3>2</h3>
            <p className="text-sm text-gray-500">AWARDS</p>
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIAL MARQUEE WITH AVATARS ---------------- */}
      <section className="bg-white py-20 w-full">
        <h2 className="text-center text-3xl font-bold mb-10">
          What Our Clients Say
        </h2>

        <Marquee
          speed={40}
          pauseOnHover
          gradient={true}
          gradientWidth={150}
          direction="left"
        >
          <div className="flex gap-10 px-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-xl w-80 border border-gray-200 flex flex-col gap-4"
              >
                <span className="text-5xl text-[#6A4DFF]">“</span>
                <p className="text-gray-700">{item.review}</p>

                <div className="flex items-center gap-4 mt-4">
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt={item.name}
                    className="rounded-full object-cover h-[50px] w-[50px]"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </div>
  );
}

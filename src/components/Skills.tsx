import Image from "next/image";

export default function Skills() {
  const skillList = [
    {
      name: "Figma",
      type: "image",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMD8nhWWew9CPLC005wxAbYn-mMTQlHajaUSc-bRP8JKynKXDSL3_dL0LyuHdcQZQqiAQMMjsnjsfCb4sWA6ia7RYHtoCy23nVUpQkfu-dEtc59iAGRn9k61zHxy9jncdiLF_dFTGrJTSL0tI83sv1kuENj7tJJ-N7vONgby6KDiPTnMFah9EIj2WSNJy9jwrA6z2sEQRCc0n1GiBAfqkYTvfHAYYOW5gnpUmPtQPcZCTKn3ggyG9pZ5sM096AH_DVaHtW_rZU_Vo",
      detail: "UI/UX Design & Prototyping",
      level: "Expert",
      badgeColor: "bg-[#A259FF]/10 text-[#A259FF]",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(162,89,255,0.15)]",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(162,89,255,0.5)]",
      delay: "100ms",
      floatDelay: "0s",
    },
    {
      name: "Laravel",
      type: "image",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTiqHL5zJuGhFoKgG3EhwJ_9n5IIlnGCvEiJ5OJUcg96YZRJeqZChEmHImzl-qUU9cF6IEyvufdxtvtHPrH-ATlQMBjN-Doyraqvv_DglNl_E-PAF0swTtAMgEEZr4wUT40lIQqT3CZb5hFFZpk-l2tvOsKUZ7dnV-n7J4bNJvkJK3ntK3wlG-Bb5yU92NL398iQeGTgM0ON634i02b16r73sWis061GlyqcmGrwDuunK4QDLsJy1bvG8dw9sT1crcWZQiZXcGN68",
      detail: "PHP Web Frameworks",
      level: "Advanced",
      badgeColor: "bg-[#FF2D20]/10 text-[#FF2D20]",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(255,45,32,0.15)]",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(255,45,32,0.5)]",
      delay: "200ms",
      floatDelay: "0.2s",
    },
    {
      name: "Web Fundamentals",
      type: "multi-image",
      sources: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBS8O0-4yIapImpY_jVdYKkqj3fuevwj4uHAyj-TEIdtWz1vhqpUFZgr57yRV5HXkAlzW23XNBVwt18jErbRCCxwdsGNvLA88JioDYACCOzGSV0GQD-Wl5-jhT57nG-OJICziOhW-Cfp_R-w39yU37vXNZHyr-RZU2QJT8TnawmX1RVuNP5e6cbH3rf9-ayh-Lc3_piYUowl5ux2xE1ohk2SZJgHyx5CNr2WCnAmosrUK5-QjkLT1d_wZ_yVG8K8ZNs2QjBrVTQ8tA",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBYmPel83KzqjxfoiDuST-OwoQyo-GEKIaQTAdCVv6tt5qsAvmntPRolN_YwR1w29fhEbhL__b-298ZoQCyO7e8E1iVV-LdZ_RKnVxVPlKPx77sX3R5v3f8hoW6iYSCDr64obbFweRr7KeHStDzzBcQ0rpnoXXePIeoPgHUfjBlqLqIKd8MyPaXT1Pt2i38ZZviUQZ7POokA_HjReKTMU-UkCxLkmsy2rCkgYpT9o6GzWZ6sg1gv0l1EZmXu-px8SmSw-iWnvh2Kg4",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCt9tFkQEaQrz1kTca0HGzCxReeB4UteE4tma1zSkup30UsV8yqFJ31_VcyI0BrzROidoJhNDKOtifV1p4_tdfLdqWP-LXkepbgEDyEH2YyYMAR1M9IvH_gohGhCRcPA6MR6uUeAzg8zgBmzABJLHPoxmDz3gehjTDXNKuRR3S12FUycR89jvwypIOLFJDAUmFbn-zngYd-a_iANMyjXGt2HPUDRIzZv4q_l0q1_5tRf5C9caVPygHL1or8mFCPSlR3YxyD-o4P2jY",
      ],
      detail: "HTML5, CSS3, JavaScript",
      level: "Advanced",
      badgeColor: "bg-rose-pink/10 text-rose-pink",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(255,143,177,0.15)]",
      delay: "300ms",
    },
    {
      name: "Canva",
      type: "image",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_WrjINL-QBPjdFq81OLJ2ILCv7vinm1TW-kF1-LTInng_Vyzyz63rISRTyVFg0A-IUXgIpwz2yByPmYm-UTtbJqrbonn_dM_g7Dg0Ihfg3-c80uGMt4-U27VJZ5R_BxTVElEre7hzCA3Jpyz3CDxxVLnAm3XnTGRuPw4dSRa5arh9Ppq1zqznHALMzzhyke75aPewo2eKM7ukwORlszI0EVy7sP6Q0MUn0bv7L2ftmXUQvZpQ5PRG76Hrdm1Dq_TGK_xDN-g2tbE",
      detail: "Visual Content Creation",
      level: "Expert",
      badgeColor: "bg-[#00C4C9]/10 text-[#00C4C9]",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(0,196,201,0.15)]",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(0,196,201,0.5)]",
      delay: "400ms",
      floatDelay: "1s",
    },
    {
      name: "MS Office",
      type: "icon",
      icon: "work_outline",
      detail: "Business Strategy & Analysis",
      level: "Expert",
      badgeColor: "bg-outline/10 text-outline",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(116,120,120,0.15)]",
      delay: "500ms",
      floatDelay: "1.2s",
    },
    {
      name: "Management",
      type: "icon",
      icon: "groups",
      detail: "Leadership & Public Speaking",
      level: "Fluent",
      badgeColor: "bg-rose-pink/10 text-rose-pink",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(255,143,177,0.15)]",
      delay: "600ms",
      floatDelay: "1.4s",
    },
  ];

  return (
    <section className="py-stack-lg bg-surface-container-low" id="keahlian">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-stack-lg reveal">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            Keahlian
          </h2>
          <p className="text-on-surface-variant">Continuous learning and professional skill refinement.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter max-w-5xl mx-auto perspective-1000">
          {skillList.map((skill) => (
            <div
              key={skill.name}
              className={`reveal tilt-card bg-white p-8 rounded-2xl soft-shadow group transition-all duration-500 ${skill.hoverShadow}`}
              style={{ transitionDelay: skill.delay }}
            >
              <div className="mb-6 flex justify-center">
                {skill.type === "image" && (
                  <div
                    className="w-16 h-16 flex items-center justify-center animate-floating relative"
                    style={skill.floatDelay ? { animationDelay: skill.floatDelay } : undefined}
                  >
                    <Image
                      alt={skill.name}
                      width={64}
                      height={64}
                      className={`object-contain transition-all ${skill.glow || ""}`}
                      src={skill.src || ""}
                    />
                  </div>
                )}

                {skill.type === "multi-image" && (
                  <div className="mb-6 flex justify-center gap-2">
                    {skill.sources?.map((src, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 flex items-center justify-center animate-floating relative"
                        style={{ animationDelay: `${0.4 + i * 0.2}s` }}
                      >
                        <Image
                          alt={`Stack Logo ${i}`}
                          width={40}
                          height={40}
                          className="object-contain"
                          src={src}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {skill.type === "icon" && (
                  <div
                    className="w-16 h-16 flex items-center justify-center animate-floating"
                    style={skill.floatDelay ? { animationDelay: skill.floatDelay } : undefined}
                  >
                    <span
                      className={`material-symbols-outlined text-5xl transition-colors ${
                        skill.name === "MS Office"
                          ? "text-outline group-hover:text-rose-pink"
                          : "text-rose-pink"
                      }`}
                    >
                      {skill.icon}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="font-headline-sm text-[20px] text-center mb-2 font-bold">{skill.name}</h3>
              <p className="text-center text-on-surface-variant text-sm">{skill.detail}</p>
              <div className="mt-4 flex justify-center">
                <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${skill.badgeColor}`}>
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";

const Footer = () => (
  <footer className="bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#73dab7] text-white py-15 relative font-[Montserrat] overflow-hidden">
    {/* SVG top wave */}
    <div className="absolute top-0 left-0 w-full h-[100px] z-[1] pointer-events-none">
      <svg viewBox="0 0 1440 100" width="100%" height="100%">
        <path
          fill="#ffffff"
          fillOpacity="0.15"
          d="M0,64L60,58.7C120,53,240,43,360,58.7C480,75,600,117,720,117.3C840,117,960,75,1080,69.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </div>

    {/* Footer content */}
    <div className="relative z-[2] max-w-[1200px] mx-auto px-6 flex flex-wrap justify-between gap-8">
      {/* Brand */}
      <div className="flex-1 min-w-[220px]">
        <h2 className="text-3xl font-bold text-[#ffd200] mb-4 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.4)]">
          DholeraGujarat.in
        </h2>
        <p className="leading-relaxed opacity-90">
          Discover future-ready investment opportunities in{" "}
          <span className="text-[#ffd200] font-semibold">
            Dholera Smart City
          </span>
          . At{" "}
          <span className="text-[#ffd200] font-semibold">
            DholeraGujarat.in
          </span>
          , we bring verified projects, expert guidance, and smart real estate
          solutions for tomorrow’s growth hub. <br />
          <span className="text-[#ffd200] font-semibold">
            Build your future with us.
          </span>
        </p>
      </div>

      {/* Links */}
      <div className="flex-1 min-w-[200px]">
        <h4 className="font-semibold text-xl mb-3 border-b border-white/30 pb-1">
          Quick Links
        </h4>
        {["Home", "About", "Projects", "Contact","Blog","Gallery"].map((text) => (
          <a
            key={text}
            href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
            className="block text-white opacity-90 hover:text-[#ffd200] transition-colors duration-200 mb-2"
          >
            {text}
          </a>
        ))}
      </div>

      {/* Contact */}
      <div className="flex-1 min-w-[220px]">
        <h4 className="font-semibold text-xl mb-3 border-b border-white/30 pb-1">
          Contact
        </h4>
        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:info@dholeracitygujrat.com"
            className="hover:text-[#ffd200]"
          >
            info@dholeracitygujrat.com
          </a>
        </p>
        <p className="mb-2">
          Phone:{" "}
          <a href="tel:+919540561820" className="hover:text-[#ffd200]">
            +91 9540561820
          </a>
        </p>
        <p>Address: 119 H-Block, First Floor, Noida Sector 63, 201301</p>
      </div>

      {/* Socials */}
      <div className="flex-1 min-w-[220px]">
        <h4 className="font-semibold text-xl mb-3 border-b border-white/30 pb-1">
          Follow Us
        </h4>
        <div className="flex flex-wrap gap-3">
          {[
            {
              icon: "fa-twitter",
              label: "Twitter",
              link: "https://twitter.com/",
            },
            {
              icon: "fa-facebook",
              label: "Facebook",
              link: "https://facebook.com/",
            },
            {
              icon: "fa-instagram",
              label: "Instagram",
              link: "https://instagram.com/",
            },
            {
              icon: "fa-linkedin",
              label: "LinkedIn",
              link: "https://linkedin.com/",
            },
          ].map(({ icon, label, link }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-[#ffd200] transition duration-200 text-[1.1rem]"
            >
              <i className={`fab ${icon} text-[1.4rem]`}></i> {label}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Divider and Copyright */}
    <div className="relative z-[2] mt-12 border-t border-white/20 pt-6 text-center text-white text-sm opacity-70">
      dholeragujarat.in &copy; {new Date().getFullYear()} . All rights reserved.
    </div>

    {/* Font Awesome CDN */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
  </footer>
);

export default Footer;

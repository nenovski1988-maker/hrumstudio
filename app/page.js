import Image from "next/image";

const work = [
  {
    index: "01 — KZM",
    title: "Corporate site for hoof health management.",
    description:
      "A bilingual Bulgarian/English business website — services, process, media gallery and contact — built for a company specialising in cattle hoof health management.",
    tags: ["Bilingual BG/EN", "Corporate site"],
    status: "SHIPPED",
    visual: "fill-kzm",
    href: "/work/kzm",
  },
  {
    index: "02 — MUSEMATICS",
    title: "A cinematic story site, built with a collaborator.",
    description:
      "A narrative website for musematics.com, built together with another developer — a tilting 3D logo, a scroll-driven book-reading page, an embedded audio player and automatic BG/EN language detection.",
    tags: ["Built with a collaborator", "Bilingual BG/EN"],
    status: "SHIPPED",
    visual: "fill-muse",
    href: "https://musematics.com",
    external: true,
  },
  {
    index: "03 — SHOPARTIV",
    title: "E-commerce, currently in the making.",
    description:
      "A full e-commerce platform for handmade wooden and ceramic products — storefront, admin panel and order management, built end to end. Launching soon.",
    tags: ["E-commerce", "Coming soon"],
    status: "IN DEVELOPMENT",
    visual: "fill-artiv",
    pending: true,
    href: "https://shopartiv.online",
    external: true,
  },
];

const products = [
  {
    index: "01 — SHOTFACTORY",
    title: "Product photography, automated.",
    description:
      "A Windows desktop app that automates product image processing — AI background removal, cropping, centering and export — turning a manual studio workflow into a batch process. Currently running my own photo studio; not sold as a product right now.",
    tags: ["Windows desktop", "AI background removal", "C#"],
    status: "PERSONAL TOOL",
    visual: "fill-shot",
    pending: true,
    href: "/products/shotfactory",
  },
  {
    index: "02 — DOM-IQ",
    title: "Building management, without the group chat chaos.",
    description:
      "A SaaS platform for managing Bulgarian residential buildings (етажна собственост) — role-based access for managers, treasurers and residents, finances, announcements, votes and an AI legal assistant.",
    tags: ["SaaS", "Role-based access", "AI legal assistant"],
    status: "LIVE",
    visual: "fill-domiq",
  },
  {
    index: "03 — FAMILY RHYTHM",
    title: "Newborn care, tracked in one place.",
    description:
      "A PWA for tracking a newborn's sleep, feeding, medications and growth, with real-time sync between parents. Built for my own family, now moving toward a wider beta.",
    tags: ["PWA", "Real-time sync"],
    status: "BETA",
    visual: "fill-family",
    pending: true,
  },
];

function CaseItem({ item }) {
  return (
    <div className="case">
      {item.href ? (
  <a
    href={item.href}
    className={`case-visual ${item.visual} ${
      item.pending ? "pending" : ""
    }`}
    {...(item.external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {})}
  >
    <span className="tag-corner">{item.status}</span>
  </a>
) : (
  <div
    className={`case-visual ${item.visual} ${
      item.pending ? "pending" : ""
    }`}
  >
    <span className="tag-corner">{item.status}</span>
  </div>
)}

      <div>
        <span className="case-index">{item.index}</span>

        <h3>{item.title}</h3>

        <p>{item.description}</p>

        <div className="case-tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.hrumstudio.online/#person",
      name: "Мирослав Неновски",
      jobTitle: "Software Developer & Product Builder",
      url: "https://www.hrumstudio.online",
      image: "https://www.hrumstudio.online/logo.png",
      worksFor: { "@id": "https://www.hrumstudio.online/#organization" },
      sameAs: ["https://github.com/nenovski1988-maker"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gabrovo",
        addressCountry: "BG",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.hrumstudio.online/#organization",
      name: "HRUM STUDIO",
      url: "https://www.hrumstudio.online",
      logo: "https://www.hrumstudio.online/logo.png",
      founder: { "@id": "https://www.hrumstudio.online/#person" },
      email: "hello@hrumstudio.online",
      description:
        "Independent software developer and product builder based in Bulgaria. Custom software, websites and digital products.",
      sameAs: ["https://github.com/nenovski1988-maker"],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* =====================================================
          NAV
      ===================================================== */}

      <nav>
        <div className="wrap">
          <a className="logo" href="#">
            <Image
              src="/logo.png"
              alt="HRUM STUDIO"
              width={1130}
              height={437}
              priority
            />
          </a>

          <div className="nav-links">
            <a href="#work">WORK</a>
            <a href="#products">PRODUCTS</a>
            <a href="#about">ABOUT</a>
          </div>

          <a className="nav-cta" href="#contact">
            Start a project
          </a>
        </div>
      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">
        <div className="hero-mark" aria-hidden="true">
          <Image
            src="/hero-mark.png"
            alt=""
            width={746}
            height={549}
            priority
          />
        </div>

        <div className="wrap hero-inner">
          <h1>
            Ideas worth
            <br />
            building.
          </h1>

          <p className="hero-lede">
            I design and build custom software, websites and digital products that
turn ideas into working solutions — from first sketch to shipped
product.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#work">
              See what I&apos;ve built
            </a>

            <a className="btn btn-secondary" href="#contact">
              Start a project
            </a>
          </div>
        </div>

        <div className="hero-meta">
          <div>
            <span className="mono">BASED</span>
            <span className="val">Sofia, Bulgaria</span>
          </div>

          <div>
            <span className="mono">FOCUS</span>
            <span className="val">Web · Software · Products</span>
          </div>

          <div>
            <span className="mono">STATUS</span>
            <span className="val">Available for new projects</span>
          </div>
        </div>
      </section>


      {/* =====================================================
          SELECTED WORK
      ===================================================== */}

      <section className="work" id="work">
        <div className="wrap">
          <div className="work-head">
            <h2>Things I&apos;ve built.</h2>

            <p>
              Selected client work and shipped software — not a gallery of
              mockups.
            </p>
          </div>

          {work.map((item) => (
            <CaseItem key={item.index} item={item} />
          ))}
        </div>
      </section>


      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section className="work" id="products">
        <div className="wrap">
          <div className="work-head">
            <h2>Software of my own.</h2>

            <p>
              Products I design and build outside client work — some shipping,
              some still just for me.
            </p>
          </div>

          {products.map((item) => (
            <CaseItem key={item.index} item={item} />
          ))}
        </div>
      </section>


      {/* =====================================================
          HOW I BUILD
      ===================================================== */}

      <section className="ai-note" id="about">
        <div className="wrap">
          <div className="ai-note-grid">

            {/* Portrait */}

            <div className="ai-note-portrait">
              <Image
                src="/miro.png"
                alt="Мирослав Неновски — founder of HRUM STUDIO"
                width={941}
                height={1672}
                className="portrait-photo"
              />
            </div>


            {/* Text */}

            <div className="ai-note-content">
              <p className="eyebrow">
                A note on the tools I use
              </p>

              <blockquote>
                “The fact that you aren’t familiar with that technology
                doesn’t make it non-technology.”
                <cite>— Buckminster Fuller</cite>
              </blockquote>

              <div className="ai-note-copy">
                <p className="ai-note-lead">
                  <strong>I use AI in my work.</strong>
                </p>

                <p>
                  Not because I want to pretend one person can do the work of
                  a 30-person software company. Quite the opposite — I want to
                  be transparent about how I actually build things.
                </p>

                <p>
                  We live in a sea of technology. AI is simply one of the
                  tools that exists in that sea, and I don&apos;t see much
                  sense in deliberately leaving useful tools on the shore just
                  to make the process look more traditional.
                </p>

                <p>
                  I use AI to explore ideas, write and review code, prototype,
                  research, debug and move faster. But the responsibility for
                  what gets built remains mine — the decisions, the
                  architecture, the testing, the result and, ultimately, the
                  solution you receive.
                </p>

                <p className="ai-note-final">
                  <strong>
                    You are not hiring a team of 30 developers. You are
                    working with me — with AI as one of the tools I use to
                    build.
                  </strong>
                </p>

                <p>
                  I think you deserve to know that.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="contact-inner">
            <p className="mono">HAVE AN IDEA?</p>

            <h2>Let&apos;s build it.</h2>

            <a
              className="contact-link"
              href="mailto:hello@hrumstudio.online"
            >
              hello@hrumstudio.online
            </a>
          </div>
        </div>
      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <div className="wrap footer-inner">
          <span>HRUM STUDIO</span>

          <span>Software · Websites · Digital Products</span>

          <span>hrumstudio.online</span>
        </div>
      </footer>
    </>
  );
}
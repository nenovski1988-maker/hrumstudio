import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "KZM — Corporate Website for Hoof Health Management",
  description:
    "A bilingual Bulgarian/English corporate website built for KZM, a company specialising in cattle hoof health management — services, process, media gallery and contact — redesigned in 2026 with a full English version, before/after comparison and cookie consent.",
  alternates: {
    canonical: "https://www.hrumstudio.online/work/kzm",
  },
  openGraph: {
    title: "KZM — Corporate Website for Hoof Health Management",
    description:
      "A bilingual Bulgarian/English business website — services, process, media gallery and contact — built for a hoof health management company, redesigned in 2026 with a full English version, before/after comparison and cookie consent.",
    url: "https://www.hrumstudio.online/work/kzm",
    siteName: "HRUM STUDIO",
    type: "website",
  },
};

export default function KzmPage() {
  return (
    <main className="product-page">
      <div className="wrap">
        <Link href="/" className="back-link">
          ← HRUM STUDIO
        </Link>

        <header className="product-hero">
          <span className="case-index">01 — KZM</span>

          <h1>Corporate site for hoof health management.</h1>

          <p className="product-lede">
            A bilingual Bulgarian/English business website for a company
            specialising in cattle hoof health management — services,
            process, a before/after comparison, field gallery and contact.
            Redesigned in November 2026.
          </p>

          <div className="case-tags">
            <span>Bilingual BG/EN</span>
            <span>Corporate site</span>
            <span>Redesign 2026</span>
          </div>
        </header>

        <section className="product-section">
          <div className="product-section-label">
            <span className="mono">THE PROBLEM</span>
          </div>

          <div>
            <h2>A specialised business with no real online presence.</h2>

            <p>
              KZM works with hoof trimmers and cattle farms, but had no
              website to explain what the company does, show its process, or
              let prospective clients get in touch.
            </p>

            <p>
              The site needed to work for two audiences at once — Bulgarian
              and English speaking clients — without feeling like two
              separate websites bolted together.
            </p>
          </div>
        </section>

        <section className="product-section">
          <div className="product-section-label">
            <span className="mono">WHAT IT DOES</span>
          </div>

          <div className="product-features">
            <div className="product-feature">
              <span className="feature-number">01</span>
              <h3>Bilingual BG/EN toggle</h3>
              <p>
                The full site is available in Bulgarian and English, with a
                simple language switch that remembers the visitor&apos;s
                choice.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">02</span>
              <h3>Services &amp; process</h3>
              <p>
                Clear pages explaining what KZM offers and how the process
                works, from first contact to on-site work.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">03</span>
              <h3>Media gallery</h3>
              <p>
                A gallery of real photos from the field that open in a
                full-screen lightbox, plus project videos that only load from
                YouTube when clicked.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">04</span>
              <h3>AI chat assistant</h3>
              <p>
                A chat widget that can answer visitor questions directly on
                the site, in Bulgarian or English.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">05</span>
              <h3>Before/after comparison</h3>
              <p>
                A draggable before/after slider showing a hoof before and
                after treatment, usable with the mouse, touch or keyboard
                arrows.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">06</span>
              <h3>Cookie consent</h3>
              <p>
                A clear cookie banner in both languages — Google Analytics
                loads only after the visitor clicks Accept, and the choice can
                be changed any time from the footer.
              </p>
            </div>
          </div>
        </section>

        <section className="product-section product-status">
          <div className="product-section-label">
            <span className="mono">STATUS</span>
          </div>

          <div>
            <h2>Live and in use — redesigned in November 2026.</h2>

            <p>
              The site has been live since launch and is used by KZM to
              present the business and receive consultation requests. On 7
              November 2026 it moved to a new design, with a full English
              version, a link to the upcoming shop at shop.kzm.bg, and
              git-based deploys so updates go live without manual uploads.
            </p>
          </div>
        </section>

        <section className="product-section product-screens-section">
          <div className="product-section-label">
            <span className="mono">SCREENSHOTS</span>
          </div>

          <div className="product-screens">
            <figure>
              <Image
                src="/kzm-hero.png"
                alt="KZM homepage hero with a hoof trimmer at work and the headline “Здравото стадо започва от копитото”"
                width={1920}
                height={672}
              />
              <figcaption>Homepage hero</figcaption>
            </figure>

            <figure>
              <Image
                src="/kzm-about.png"
                alt="KZM about section with company background, key points and partner logos"
                width={1920}
                height={703}
              />
              <figcaption>About</figcaption>
            </figure>

            <figure>
              <Image
                src="/kzm-gallery.png"
                alt="KZM “От терена” gallery with photos of the team at work on farms"
                width={1920}
                height={731}
              />
              <figcaption>Field gallery</figcaption>
            </figure>

            <figure className="product-screens-narrow">
              <Image
                src="/kzm-before-after.png"
                alt="Before/after hoof comparison slider with the divider at the midpoint"
                width={720}
                height={1001}
              />
              <figcaption>Before / after</figcaption>
            </figure>
          </div>
        </section>

        <section className="product-cta">
          <span className="mono">KZM</span>

          <h2>See the site.</h2>

          <div className="product-cta-actions">
            <a
              href="https://kzm.bg"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit KZM →
            </a>

            <Link href="/#contact" className="btn btn-secondary">
              Start a project
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
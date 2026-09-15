import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "KZM — Corporate Website for Hoof Health Management",
  description:
    "A bilingual Bulgarian/English corporate website built for KZM, a company specialising in cattle hoof health management — services, process, media gallery and contact.",
  alternates: {
    canonical: "https://www.hrumstudio.online/work/kzm",
  },
  openGraph: {
    title: "KZM — Corporate Website for Hoof Health Management",
    description:
      "A bilingual Bulgarian/English business website — services, process, media gallery and contact — built for a hoof health management company.",
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
            A bilingual Bulgarian/English business website built for a
            company specialising in cattle hoof health management —
            services, process, media gallery and contact, all in one place.
          </p>

          <div className="case-tags">
            <span>Bilingual BG/EN</span>
            <span>Corporate site</span>
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
                Every page is available in both Bulgarian and English, with a
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
                A gallery of real photos and videos showing the work in
                practice, rather than generic stock imagery.
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
          </div>
        </section>

        <section className="product-section product-status">
          <div className="product-section-label">
            <span className="mono">STATUS</span>
          </div>

          <div>
            <h2>Live and in use.</h2>

            <p>
              The site has been live since launch and is actively used by
              KZM to present the business and take enquiries from both
              Bulgarian and international clients.
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
                alt="KZM homepage hero section"
                width={3803}
                height={1330}
              />
              <figcaption>Homepage hero</figcaption>
            </figure>

            <figure>
              <Image
                src="/kzm-about.png"
                alt="KZM about section describing hoof health services"
                width={3785}
                height={1386}
              />
              <figcaption>About / services overview</figcaption>
            </figure>

            <figure>
              <Image
                src="/kzm-gallery.png"
                alt="KZM media gallery with field photos"
                width={3806}
                height={1448}
              />
              <figcaption>Media gallery</figcaption>
            </figure>

            <figure className="product-screens-narrow">
              <Image
                src="/kzm-chat.png"
                alt="KZM AI chat assistant widget"
                width={716}
                height={992}
              />
              <figcaption>AI chat assistant</figcaption>
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
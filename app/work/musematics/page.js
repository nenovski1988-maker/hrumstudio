import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Musematics — A Cinematic Story Site",
  description:
    "A narrative website for musematics.com, built together with another developer — a tilting 3D logo, a scroll-driven book-reading page, an embedded audio player and automatic BG/EN language detection.",
  alternates: {
    canonical: "https://www.hrumstudio.online/work/musematics",
  },
  openGraph: {
    title: "Musematics — A Cinematic Story Site",
    description:
      "A tilting 3D logo, a scroll-driven book-reading page, an embedded audio player and automatic BG/EN language detection.",
    url: "https://www.hrumstudio.online/work/musematics",
    siteName: "HRUM STUDIO",
    type: "website",
  },
};

export default function MusematicsPage() {
  return (
    <main className="product-page">
      <div className="wrap">
        <Link href="/" className="back-link">
          ← HRUM STUDIO
        </Link>

        <header className="product-hero">
          <span className="case-index">02 — MUSEMATICS</span>

          <h1>A cinematic story site, built with a collaborator.</h1>

          <p className="product-lede">
            A narrative website for musematics.com, built together with
            another developer — designed to feel less like a business site
            and more like stepping into a story.
          </p>

          <div className="case-tags">
            <span>Built with a collaborator</span>
            <span>Bilingual BG/EN</span>
          </div>
        </header>

        <section className="product-section">
          <div className="product-section-label">
            <span className="mono">THE PROBLEM</span>
          </div>

          <div>
            <h2>A story-driven brand needed a site that felt like one.</h2>

            <p>
              Musematics is built around stories and audio, not products or
              services — a standard template-driven website would have
              flattened that into just another set of pages.
            </p>

            <p>
              The site needed to carry an atmosphere: cinematic, immersive,
              closer to a book or an album than a typical business page.
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
              <h3>3D parallax logo</h3>
              <p>
                The logo tilts in response to the visitor, adding a small
                layer of depth right from the first screen.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">02</span>
              <h3>Book-style reading page</h3>
              <p>
                A fixed background with a scrollable text overlay, built to
                feel like turning pages rather than scrolling a webpage.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">03</span>
              <h3>Embedded audio player</h3>
              <p>
                A custom player for the site&apos;s original tracks, each
                available to stream or download directly.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">04</span>
              <h3>Automatic BG/EN detection</h3>
              <p>
                The site detects the visitor&apos;s likely language and
                serves the right version without an extra click.
              </p>
            </div>
          </div>
        </section>

        <section className="product-section product-status">
          <div className="product-section-label">
            <span className="mono">STATUS</span>
          </div>

          <div>
            <h2>Live, and built as a two-person collaboration.</h2>

            <p>
              Musematics has been live since launch. It was developed
              together with another developer — a rare project where the
              atmosphere mattered as much as the functionality.
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
                src="/musematics-hero.png"
                alt="Musematics homepage hero"
                width={1625}
                height={759}
              />
              <figcaption>Homepage hero</figcaption>
            </figure>

            <figure>
              <Image
                src="/musematics-studio.png"
                alt="Musematics studio page with audio player"
                width={1386}
                height={668}
              />
              <figcaption>Studio page &amp; audio player</figcaption>
            </figure>

            <figure>
              <Image
                src="/musematics-book.png"
                alt="Musematics book-style reading page"
                width={940}
                height={816}
              />
              <figcaption>Book-style reading page</figcaption>
            </figure>

            <figure>
              <Image
                src="/musematics-contact.png"
                alt="Musematics contact page"
                width={1344}
                height={728}
              />
              <figcaption>Contact page</figcaption>
            </figure>
          </div>
        </section>

        <section className="product-cta">
          <span className="mono">MUSEMATICS</span>

          <h2>See the site.</h2>

          <div className="product-cta-actions">
            <a
              href="https://musematics.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Musematics →
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
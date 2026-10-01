import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Family Rhythm — Newborn Care Tracking PWA",
  description:
    "Family Rhythm is a progressive web app for tracking a newborn's sleep, feeding, medications and growth, with real-time sync between parents.",
  alternates: {
    canonical: "https://www.hrumstudio.online/products/family-rhythm",
  },
  openGraph: {
    title: "Family Rhythm — Newborn Care Tracking PWA",
    description:
      "A progressive web app for tracking a newborn's sleep, feeding, medications and growth, with real-time sync between parents.",
    url: "https://www.hrumstudio.online/products/family-rhythm",
    siteName: "HRUM STUDIO",
    type: "website",
  },
};

export default function FamilyRhythmPage() {
  return (
    <main className="product-page">
      <div className="wrap">
        <Link href="/" className="back-link">
          ← HRUM STUDIO
        </Link>

        <header className="product-hero">
          <span className="case-index">03 — FAMILY RHYTHM</span>

          <h1>Newborn care, tracked in one place.</h1>

          <p className="product-lede">
            Family Rhythm is a progressive web app for tracking a newborn&apos;s
            sleep, feeding, diapers, medications and growth — with real-time
            sync so both parents always see the same picture.
          </p>

          <div className="case-tags">
            <span>PWA</span>
            <span>Real-time sync</span>
            <span>Next.js</span>
          </div>
        </header>

        <section className="product-section">
          <div className="product-section-label">
            <span className="mono">THE PROBLEM</span>
          </div>

          <div>
            <h2>The first months run on memory, not data.</h2>

            <p>
              Feeding times, nappy changes, sleep stretches, medication —
              newborn care generates a constant stream of small facts that
              are easy to lose track of, especially when care is split
              between two parents working different shifts.
            </p>

            <p>
              Family Rhythm was built to log that stream as it happens and
              turn it into something both parents can check at a glance,
              from either phone.
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
              <h3>One-tap logging</h3>
              <p>
                Feeding, diapers, sleep, medication and bath time logged in a
                couple of taps, with a running history of recent entries.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">02</span>
              <h3>Real-time sync between parents</h3>
              <p>
                Both parents log into the same child&apos;s data and see each
                other&apos;s entries update live — no group chat needed to
                stay on the same page.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">03</span>
              <h3>Stats and trends</h3>
              <p>
                Sleep, feeding volume and diaper counts charted over the
                last 7 days, so patterns and changes are easy to spot.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">04</span>
              <h3>AI-assisted forecasts</h3>
              <p>
                An AI forecast feature that looks at recent patterns to
                help anticipate the next feeding or sleep window.
              </p>
            </div>
          </div>
        </section>

        <section className="product-section product-status">
          <div className="product-section-label">
            <span className="mono">STATUS</span>
          </div>

          <div>
            <h2>Built for my own family, moving toward a beta.</h2>

            <p>
              Family Rhythm started as a tool for tracking my own newborn
              and is currently used daily within my family. It is not
              publicly available yet, but it&apos;s heading toward a wider
              beta.
            </p>

            <p>
              It&apos;s another example of the kind of software I build at
              HRUM STUDIO: practical tools shaped by a real, everyday
              problem rather than a generic feature list.
            </p>
          </div>
        </section>

        <section className="product-section product-screens-section">
          <div className="product-section-label">
            <span className="mono">SCREENSHOTS</span>
          </div>

          <div className="product-screens">
            <figure className="product-screens-narrow">
              <Image
                src="/family-rhythm-dashboard.png"
                alt="Family Rhythm daily dashboard"
                width={828}
                height={1882}
              />
              <figcaption>
                Daily dashboard — today&apos;s actions, consumption and recent entries
              </figcaption>
            </figure>

            <figure className="product-screens-narrow">
              <Image
                src="/family-rhythm-stats.png"
                alt="Family Rhythm 7-day statistics"
                width={884}
                height={1335}
              />
              <figcaption>
                7-day statistics — sleep, diapers and feeding trends
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="product-cta">
          <span className="mono">FAMILY RHYTHM</span>

          <h2>Want something built around your own routine?</h2>

          <div className="product-cta-actions">
            <Link href="/#contact" className="btn btn-primary">
              Start a project
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
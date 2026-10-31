import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Inbox Radar — AI Email Assistant Setup",
  description:
    "Inbox Radar is an AI assistant set up for your Gmail: a morning brief of the emails that matter, tasks from email, drafted replies and automatic cleanup of ads and spam.",
  alternates: {
    canonical: "https://www.hrumstudio.online/products/inbox-radar",
  },
  openGraph: {
    title: "Inbox Radar — AI Email Assistant Setup",
    description:
      "Your inbox, sorted before your first coffee. A personal AI email assistant, set up and tuned to your senders, bank and subscriptions.",
    url: "https://www.hrumstudio.online/products/inbox-radar",
    siteName: "HRUM STUDIO",
    type: "website",
  },
};

export default function InboxRadarPage() {
  return (
    <main className="product-page">
      <div className="wrap">
        <Link href="/" className="back-link">
          ← HRUM STUDIO
        </Link>

        <header className="product-hero">
          <span className="case-index">04 — INBOX RADAR</span>

          <h1>Your inbox, sorted before your first coffee.</h1>

          <p className="product-lede">
            Every morning, an AI assistant reads your new email, keeps what
            matters and clears the rest. You open one page and see exactly
            what needs your attention today.
          </p>

          <div className="case-tags">
            <span>AI assistant</span>
            <span>Gmail</span>
            <span>Setup service</span>
          </div>
        </header>

        <section className="product-section">
          <div className="product-section-label">
            <span className="mono">THE PROBLEM</span>
          </div>

          <div>
            <h2>The important emails get buried.</h2>

            <p>
              Newsletters, promotions and automated notifications pile up
              faster than anyone can read them. The messages that actually
              need an answer, an invoice from a client or a security alert,
              end up lost somewhere in the middle.
            </p>

            <p>
              Inbox Radar does the first pass for you every morning, so your
              day starts with a short list instead of a full inbox.
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
              <h3>Morning brief</h3>
              <p>
                A short summary of the emails that actually matter, ready on
                your phone when you wake up.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">02</span>
              <h3>Tasks from email</h3>
              <p>
                Anything that needs action becomes a task, with deadlines and
                priorities. Tick it off and it leaves the brief.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">03</span>
              <h3>Replies, drafted</h3>
              <p>
                Suggested answers to real people, ready to review and send
                with one tap. Nothing is ever sent without you.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">04</span>
              <h3>Noise, gone</h3>
              <p>
                Ads, newsletters and spam move to trash automatically. Banks,
                invoices and security alerts are never touched.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">05</span>
              <h3>Your rules</h3>
              <p>
                Tuned to your senders, your bank and the subscriptions you
                want to keep.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">06</span>
              <h3>Check now</h3>
              <p>
                Run a fresh check anytime and watch it work through each
                step in real time.
              </p>
            </div>
          </div>
        </section>

        <section className="product-section product-screens-section">
          <div className="product-section-label">
            <span className="mono">SCREENSHOTS</span>
          </div>

          <div className="product-screens">
            <figure>
              <Image
                src="/inbox-radar-hero.png"
                alt="Inbox Radar morning brief with the completed check"
                width={1920}
                height={1440}
              />
              <figcaption>
                Morning brief — the check runs step by step, then lists what matters
              </figcaption>
            </figure>

            <figure className="product-screens-narrow">
              <Image
                src="/inbox-radar-phone.png"
                alt="Inbox Radar on a phone"
                width={1170}
                height={2532}
              />
              <figcaption>
                On your phone — opened from a home-screen icon
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="product-section">
          <div className="product-section-label">
            <span className="mono">HOW IT WORKS</span>
          </div>

          <div className="product-features">
            <div className="product-feature">
              <span className="feature-number">01</span>
              <h3>Short call</h3>
              <p>
                We go through who matters, which subscriptions you keep and
                what counts as noise.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">02</span>
              <h3>Setup</h3>
              <p>
                I configure the assistant in your own Claude account,
                connected to your Gmail.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">03</span>
              <h3>Clean slate</h3>
              <p>
                A one-time cleanup of the clutter already sitting in your
                inbox.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">04</span>
              <h3>Fine-tuning</h3>
              <p>
                A week of adjustments until the morning brief feels right.
              </p>
            </div>
          </div>
        </section>

        <section className="product-section">
          <div className="product-section-label">
            <span className="mono">PACKAGES</span>
          </div>

          <div className="product-features">
            <div className="product-feature">
              <span className="feature-number">SETUP</span>
              <h3>€49 one-time</h3>
              <p>
                Full setup, the initial cleanup of your inbox and one week of
                fine-tuning.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">SETUP + CARE</span>
              <h3>€49 + €7 / month</h3>
              <p>
                Everything in Setup, plus ongoing rule changes, new senders
                and priority support.
              </p>
            </div>
          </div>
        </section>

        <section className="product-section product-status">
          <div className="product-section-label">
            <span className="mono">PRIVACY</span>
          </div>

          <div>
            <h2>Your email stays yours.</h2>

            <p>
              Everything runs in your own Claude and Gmail accounts. I never
              copy or store your messages, and my access ends when the setup
              is done.
            </p>

            <p>
              Requires a paid Claude plan and a Gmail account.
            </p>
          </div>
        </section>

        <section className="product-cta">
          <span className="mono">INBOX RADAR</span>

          <h2>Start your mornings with a short list.</h2>

          <div className="product-cta-actions">
            <Link href="/#contact" className="btn btn-primary">
              Book a setup →
            </Link>

            <a href="mailto:hello@hrumstudio.online" className="btn btn-secondary">
              hello@hrumstudio.online
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
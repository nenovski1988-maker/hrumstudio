import Link from "next/link";

export const metadata = {
  title: "ShotFactory — Product Photography Automation Software",
  description:
    "ShotFactory is a Windows desktop application for automating product image processing — AI background removal, cropping, centering and export.",
  alternates: {
    canonical: "https://www.hrumstudio.online/products/shotfactory",
  },
  openGraph: {
    title: "ShotFactory — Product Photography Automation Software",
    description:
      "A Windows desktop application that automates product image processing, from AI background removal to cropping, centering and export.",
    url: "https://www.hrumstudio.online/products/shotfactory",
    siteName: "HRUM STUDIO",
    type: "website",
  },
};

export default function ShotFactoryPage() {
  return (
    <main className="product-page">
      <div className="wrap">
        <Link href="/" className="back-link">
          ← HRUM STUDIO
        </Link>

        <header className="product-hero">
          <span className="case-index">01 — SHOTFACTORY</span>

          <h1>Product photography, automated.</h1>

          <p className="product-lede">
            ShotFactory is a Windows desktop application that automates
            product image processing — turning a manual studio workflow into
            a batch process.
          </p>

          <div className="case-tags">
            <span>Windows desktop</span>
            <span>AI background removal</span>
            <span>C#</span>
          </div>
        </header>

        <section className="product-section">
          <div className="product-section-label">
            <span className="mono">THE PROBLEM</span>
          </div>

          <div>
            <h2>Product photography involves a lot of repetition.</h2>

            <p>
              Processing product photographs can mean repeating the same
              operations over and over — removing backgrounds, cropping
              images, centering products and preparing files for export.
            </p>

            <p>
              ShotFactory was built to automate that part of the workflow and
              make large batches of product images easier to process
              consistently.
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
              <h3>AI background removal</h3>
              <p>
                Automatically separates the product from its background as
                part of the image-processing workflow.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">02</span>
              <h3>Automatic cropping</h3>
              <p>
                Processes images and prepares the framing without requiring
                every photograph to be handled manually.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">03</span>
              <h3>Product centering</h3>
              <p>
                Keeps products consistently positioned across processed
                images.
              </p>
            </div>

            <div className="product-feature">
              <span className="feature-number">04</span>
              <h3>Batch export</h3>
              <p>
                Turns a repetitive manual workflow into a process that can
                handle batches of product images.
              </p>
            </div>
          </div>
        </section>

        <section className="product-section product-status">
          <div className="product-section-label">
            <span className="mono">STATUS</span>
          </div>

          <div>
            <h2>A tool built for my own workflow.</h2>

            <p>
              ShotFactory is currently used in my own product photography
              workflow. It is not being sold as a standalone product right
              now.
            </p>

            <p>
              It is an example of the kind of software I build at HRUM STUDIO:
              practical tools designed around real workflows and real
              problems.
            </p>
          </div>
        </section>

        <section className="product-cta">
          <span className="mono">HAVE A REPETITIVE WORKFLOW?</span>
          <h2>Maybe it should be software.</h2>

          <Link href="/#contact" className="btn btn-primary">
            Start a project
          </Link>
        </section>
      </div>
    </main>
  );
}
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid py-12">
        <div className="space-y-3">
          <Link href="/" className="font-display text-lg font-semibold text-ink-900">
            Tiles Gallery
          </Link>
          <p className="text-sm text-ink-600">
            Curated surfaces, tactile finishes, and timeless tile stories for
            modern interiors.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-base text-ink-900">Contact Us</h3>
          <p className="text-sm text-ink-600">studio@tilesgallery.com</p>
          <p className="text-sm text-ink-600">+1 (555) 017-4021</p>
          <p className="text-sm text-ink-600">102 Terra Lane, Portland</p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-base text-ink-900">Social</h3>
          <div className="flex flex-wrap gap-3 text-sm text-ink-600">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Pinterest
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Built for the Tiles Gallery assignment. All visuals are for demo use.
      </div>
    </footer>
  );
}

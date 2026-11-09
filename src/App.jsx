import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowDownRight, ArrowLeft, ArrowUpRight, Facebook, MessageCircle, Phone, Sparkles } from 'lucide-react';

const socialLinks = {
  whatsapp: 'https://chat.whatsapp.com/HTTth5a2Bzk50HajawjBoN?mode=gi_t',
  facebook: 'https://www.facebook.com/Melaity.em?mibextid=LQQJ4d',
};

function BrandMark({ compact = false }) {
  return (
    <Link className={`brand-mark${compact ? ' brand-mark--compact' : ''}`} to="/" aria-label="Gen Alpha home">
      <span className="brand-monogram" aria-hidden="true">G</span>
      <span className="brand-wordmark">GEN<span>ALPHA</span></span>
    </Link>
  );
}

function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isLinksPage = pathname === '/links';
    const title = isLinksPage
      ? 'Discover Our World — Gen Alpha'
      : pathname === '/'
        ? 'Gen Alpha — Something Stylish Is Coming'
        : 'Page Not Found — Gen Alpha';
    const description = isLinksPage
      ? 'Connect with Gen Alpha. Join our WhatsApp group and follow our Facebook page.'
      : pathname === '/'
        ? 'Fresh styles, bold looks, and everyday fashion for the next generation. Gen Alpha is coming soon.'
        : 'The page you are looking for could not be found.';

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <main className="home-page">
      <div className="home-grain" aria-hidden="true" />
      <header className="site-header">
        <BrandMark />
        <span className="header-note"><span className="status-dot" /> A NEW GENERATION OF STYLE</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span /> THE NEXT CHAPTER STARTS HERE</div>
          <h1 id="hero-title">Something<br /><em>Stylish</em> Is Coming<span className="gold-period">.</span></h1>
          <p className="hero-description">
            Fresh styles, bold looks, and everyday fashion for the next generation.
          </p>
          <div className="launch-label"><span className="launch-star">✳</span> COMING SOON <span className="launch-rule" /></div>
          <Link className="connect-button" to="/links">
            Stay Connected <ArrowUpRight size={18} strokeWidth={1.8} />
          </Link>
          <p className="micro-copy">Good things are always worth the wait.</p>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit visual-orbit--one" aria-hidden="true" />
          <div className="visual-orbit visual-orbit--two" aria-hidden="true" />
          <div className="artwork-frame">
            <img
              src="/gen-alpha-artwork.jpg"
              alt="Gen Alpha fashion logo with three kids in colorful streetwear"
              fetchPriority="high"
            />
            <span className="frame-index">GA / 026</span>
          </div>
          <div className="floating-tag"><Sparkles size={14} /> MADE FOR WHAT'S NEXT</div>
          <span className="visual-spark visual-spark--top" aria-hidden="true">✳</span>
          <span className="visual-spark visual-spark--bottom" aria-hidden="true">✦</span>
        </div>

        <div className="hero-bottom">
          <span>STYLE HAS NO AGE</span>
          <span className="scroll-cue">SCROLL TO EXPLORE <ArrowDownRight size={15} /></span>
          <span>EST. 2026</span>
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 Gen Alpha. All Rights Reserved.</span>
        <span className="footer-tagline">DRESS LIKE YOU MEAN IT.</span>
      </footer>
    </main>
  );
}

function LinksPage() {
  return (
    <main className="links-page">
      <div className="links-glow links-glow--pink" aria-hidden="true" />
      <div className="links-glow links-glow--blue" aria-hidden="true" />
      <header className="links-header">
        <BrandMark compact />
        <Link className="back-link" to="/"><ArrowLeft size={16} /> Back to home</Link>
      </header>

      <section className="links-content" aria-labelledby="links-title">
        <div className="links-card">
          <div className="links-image-wrap">
            <img src="/gen-alpha-artwork.jpg" alt="" className="links-image" />
            <span className="image-badge">THE FUTURE FITS YOU</span>
          </div>
          <div className="links-intro">
            <span className="eyebrow"><span /> COME BE PART OF IT</span>
            <h1 id="links-title">Discover<br /><em>Our World.</em></h1>
            <p>New looks. Good energy. Your people.<br />Find us where the conversation is.</p>
          </div>
          <nav className="social-list" aria-label="Gen Alpha social media">
            <a className="social-button social-button--whatsapp" href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
              <span className="social-icon social-icon--whatsapp" aria-hidden="true">
                <MessageCircle size={21} strokeWidth={2.2} />
                <Phone className="phone-glyph" size={10} strokeWidth={2.5} />
              </span>
              <span className="social-button-copy"><strong>Join Our WhatsApp Group</strong><small>Get the latest, straight to your phone</small></span>
              <ArrowUpRight className="social-arrow" size={19} aria-hidden="true" />
            </a>
            <a className="social-button social-button--facebook" href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <span className="social-icon"><Facebook size={20} aria-hidden="true" /></span>
              <span className="social-button-copy"><strong>Follow Us on Facebook</strong><small>See what's new from Gen Alpha</small></span>
              <ArrowUpRight className="social-arrow" size={19} aria-hidden="true" />
            </a>
          </nav>
          <div className="links-bottom"><span>GEN ALPHA</span><span className="bottom-star">✳</span><span>STYLE HAS NO AGE</span></div>
        </div>
        <p className="links-footer">© 2026 Gen Alpha. All Rights Reserved.</p>
      </section>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <BrandMark />
      <span className="not-found-number">404</span>
      <h1>This page missed<br />the dress code.</h1>
      <p>Looks like this page isn't in our collection.</p>
      <Link to="/" className="connect-button">Back to home <ArrowUpRight size={18} /></Link>
    </main>
  );
}

export default function App() {
  return (
    <>
      <PageMetadata />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

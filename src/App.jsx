import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Smartphone, Zap, Shield, Sparkles, Download, ArrowRight } from 'lucide-react';
import iconPath from './assets/icon.png';
import './index.css';

const EXPO_URL = "https://expo.dev/accounts/ijosh/projects/mobile/builds/75c391f2-6ef6-4966-b05e-0ae1090ec567";
const APK_URL = "https://expo.dev/artifacts/eas/fxrgxKR4MtLSB2AY35ukrR.apk";

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Auto-trigger download if accessed via the QR code URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('download') === 'true') {
      // Small timeout ensures the UI has a moment to render before the download blocks the thread
      setTimeout(() => {
        window.location.href = APK_URL;
      }, 500);
    }
  }, []);

  // Generate the current URL with the download parameter for the QR code
  const qrUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${window.location.pathname}?download=true` 
    : APK_URL;

  return (
    <div className={`app-wrapper ${mounted ? 'mounted' : ''}`}>

      {/* Navigation */}
      <nav className="container flex justify-between items-center" style={{ padding: '2rem' }}>
        <div className="logo flex items-center gap-4 fade-in-up delay-1">
          <img src={iconPath} alt="Vantage Logo" width="48" height="48" style={{ borderRadius: '12px' }} />
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>Vantage</h2>
        </div>
        <div className="fade-in-up delay-1">
          <a href={APK_URL} download className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '1rem' }}>
            Get App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container" style={{ minHeight: 'calc(100vh - 100px)', display: 'flex', alignItems: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="grid grid-cols-2 gap-16 items-center">

          {/* Left Column: Copy */}
          <div className="flex flex-col gap-8 fade-in-up delay-2">
            <div>
              <div style={{ display: 'inline-block', padding: '0.3rem 1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '2px', border: '1px solid rgba(10, 5, 5, 0.1)', marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                ✨ Now Available on Mobile
              </div>
              <h1>
                Experience <br />
                <span className="text-gradient">Vantage</span> Anywhere.
              </h1>
            </div>

            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '500px' }}>
              Your ultimate platform, now in the palm of your hand. Scan the QR code to instantly download the latest mobile App and elevate your workflow.
            </p>

            <div className="flex gap-4">
              <a href={APK_URL} download className="btn btn-primary">
                Download Now <ArrowRight size={20} />
              </a>
              <a href="#app-details" target="_blank" rel="noreferrer" className="btn card" style={{ background: 'var(--surface)', color: 'white' }}>
                View App Details <Zap size={20} />
              </a>
            </div>

            <div className="features grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              <div className="flex items-center gap-4">
                <div style={{ background: 'rgba(150, 60, 255, 0.1)', padding: '0.8rem', borderRadius: '12px', color: 'var(--primary)' }}>
                  <Zap size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', margin: 0 }}>Lightning Fast</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Native performance layer</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div style={{ background: 'rgba(150, 60, 255, 0.1)', padding: '0.8rem', borderRadius: '12px', color: 'var(--primary)' }}>
                  <Shield size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', margin: 0 }}>Secure access</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>End-to-end encryption</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: QR Code Showcase */}
          <div className="flex justify-center fade-in-up delay-3" id="download">
            <div className="card" style={{ padding: '3rem', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', maxWidth: '400px', width: '100%' }}>

              {/* Decorative floating elements */}
              <div style={{ position: 'absolute', top: '-15px', right: '-15px', background: 'var(--accent)', color: 'white', padding: '0.5rem', borderRadius: '50%', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                <Smartphone size={24} />
              </div>

              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Scan to Install</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Point your camera at the QR code below to download the Vantage App.</p>
              </div>

              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)', position: 'relative' }}>
                <QRCodeSVG
                  value={qrUrl}
                  size={220}
                  bgColor={"#ffffff"}
                  fgColor={"#0f172a"}
                  level={"H"}
                  includeMargin={false}
                />
              </div>

              <div className="flex items-center gap-4" style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '0.8rem 1.2rem', borderRadius: '12px', width: '100%' }}>
                <Download color="var(--primary)" size={20} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  vantage-mobile-build
                </span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;

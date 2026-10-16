import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import confetti from 'canvas-confetti';
import { ArrowDown, ArrowRight, CalendarDays, Check, Heart, MapPin, MessageCircle, Music2, Sparkles, X } from 'lucide-react';
import './style.css';

// CUSTOMISE THESE DETAILS BEFORE DEPLOYING
const EVENT = {
  date: 'SATURDAY, 17 OCTOBER 2026',
  time: '2:00 PM',
  location: 'Our Residence, 83 Marine Road, Apapa',
  hostWhatsApp: '447957742366', // Jenn's WhatsApp number in international format, digits only.
};

function App() {
  const [screen, setScreen] = useState('intro');
  const [noCount, setNoCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const celebrate = () => {
    confetti({ particleCount: 120, spread: 75, origin: { y: 0.65 }, colors: ['#8da17a', '#e5c66a', '#e7b8a5', '#ffffff', '#c5d4b8'] });
    setScreen('reveal');
  };

  const whatsapp = (attending) => {
    const answer = attending ? "I'll be attending Betty's surprise baby shower! 🎉" : "I'm sorry, I won't be able to attend Betty's surprise baby shower. Sending love! 🤍";
    const message = `Hi! ${answer}`;
    window.open(`https://wa.me/${EVENT.hostWhatsApp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const sayNo = () => {
    setNoCount((n) => n + 1);
    setScreen('nope');
  };

  return (
    <main className="page-shell">
      <div className="grain" aria-hidden="true" />
      <nav className="topbar"><span>A LITTLE FAMILY SURPRISE</span></nav>

      {screen === 'intro' && <section className="hero screen-in" aria-live="polite">
        <div className="eyebrow"><Sparkles size={15} /> YOU'RE ON THE LIST <Sparkles size={15} /></div>
        <div className="sticker sticker-left" aria-hidden="true">shhh! 🤫</div>
        <div className="sticker sticker-right" aria-hidden="true">little secret<br/>mission…</div>
        <p className="pretitle">Okay, quick question…</p>
        <h1>Are you free<br/><em>on Saturday?</em></h1>
        <p className="intro-copy">Because we have a tiny little secret, and we'd really love you to be part of it.</p>
        <div className="question-card">
          <span className="card-number">01 / THE VERY IMPORTANT QUESTION</span>
          <div className="button-row">
            <button className="btn btn-primary" onClick={celebrate}>I'm free! </button>
            <button className={`btn btn-secondary ${noCount > 0 ? 'wiggle' : ''}`} onClick={sayNo}>Can't make it <X size={17}/></button>
          </div>
          <p className="microcopy">Be honest… but choose wisely 👀</p>
        </div>
    
        <div className="floating-heart heart-one">♡</div><div className="floating-heart heart-two">♡</div>
      </section>}

      {screen === 'nope' && <section className="response screen-in">
        <div className="big-emoji">😭</div>
        <p className="eyebrow">WAIT A MINUTE</p>
        <h1>But we wanted<br/><em>you there!</em></h1>
        <p className="intro-copy">The tiny-event committee was really hoping you'd say yes. 🥹 We'll miss you, but no pressure at all. Want to check that answer one more time?</p>
        <div className="button-row centered">
          <button className="btn btn-primary" onClick={celebrate}>Okay, I'm in! <Heart size={17}/></button>
          <button className="btn btn-secondary" onClick={() => whatsapp(false)}>Still can't make it <MessageCircle size={17}/></button>
        </div>
        <button className="text-button" onClick={() => setScreen('intro')}>← Back to the question</button>
      </section>}

      {screen === 'reveal' && <section className="reveal screen-in" aria-live="polite">
        <div className="eyebrow"><Sparkles size={15}/> YOU PASSED THE VIBE CHECK <Sparkles size={15}/></div>
        <div className="reveal-art"><span className="sunburst">♡</span><span className="baby-icon">🧸</span><span className="little-star star-a">✦</span><span className="little-star star-b">✧</span></div>
      
        <h1>It's a baby<br/><em>shower!</em></h1>
        <div className="secret-pill"><span className="live-dot"/> THIS IS A SURPRISE. KEEP IT QUIET 🤫</div>
        <button className="btn btn-primary reveal-cta" onClick={() => { setScreen('details'); confetti({ particleCount: 70, spread: 55, origin: { y: 0.8 }, colors: ['#8da17a', '#e5c66a', '#e7b8a5'] }); }}>Okay, tell me everything <ArrowRight size={18}/></button>
      </section>}

      {screen === 'details' && <section className="details screen-in">
        <div className="eyebrow"><Heart size={14}/> THE DETAILS <Heart size={14}/></div>
        <p className="pretitle">A little gathering for</p>
        <h1>Betty's Baby Shower <span className="amp"></span></h1>
        
        <div className="detail-grid">
          <article className="detail-card"><div className="detail-icon"><CalendarDays size={21}/></div><span className="detail-label">SAVE THE DATE</span><strong>{EVENT.date}</strong><span>{EVENT.time}</span></article>
          <article className="detail-card"><div className="detail-icon"><MapPin size={21}/></div><span className="detail-label">WHERE TO GO</span><strong>{EVENT.location}</strong><span>We can't wait to see you there!</span></article>
        </div>
        <div className="love-note"><span className="note-spark">♡</span><p>Being invited means you're someone we hold in very high esteem. This will be an intimate gathering, full of love, laughter, and a little celebrating. Thank you for being part of their village. 🤍</p></div>
        <div className="rsvp-block"><p className="card-number">02 / NOW, THE RSVP</p><h2>Can we count you in?</h2><p className="rsvp-copy">Tap your answer and WhatsApp will open with a message ready for you to send.</p>
          <button className="btn btn-primary full" onClick={() => whatsapp(true)}>I'll be there! <MessageCircle size={18}/></button>
          <button className="btn btn-secondary full" onClick={() => whatsapp(false)}>I can't make it <MessageCircle size={18}/></button>
          <p className="microcopy">Please remember to press send in WhatsApp so we receive your RSVP.</p>
        </div>
        <div className="closing">With love, <span>the family</span> <div className="closing-doodle">♡</div></div>
      </section>}

      <footer className="footer"><span>BABY SHOWER</span></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

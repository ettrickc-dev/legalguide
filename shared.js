/* shared.js — EasyLegalFiling legal guides */

/* FAQ accordion */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* Scroll reveal */
try {
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
  });
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
} catch(e) {
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '1'; el.style.transform = 'none';
  });
}

/* Social proof toasts */
const toasts = [
  "🚨 Someone just stopped a NYC tax warrant — StopMyTaxWarrant.com",
  "🚖 A TLC driver just protected their license — FightMyTLCTicket.com",
  "⚖️ Someone just fought their OATH ticket for $19.99 — FightMyOATH.com",
  "📄 A client just started their divorce documents — saved $3,000+",
  "🏦 A New Yorker just filed a debt lawsuit answer — for FREE",
  "📋 Someone just created their NY Power of Attorney — $14.99",
  "🛡️ A New Yorker avoided a $5,000 court guardianship with a $14.99 POA",
  "🔥 Someone just built their FDNY violation defense — $19.99",
  "🏗️ A landlord just fought a DOB violation — defense ready in 3 minutes",
  "🚗 A DoorDash driver just got reinstated — appeal letter in minutes",
  "🛡️ A client just filed a motion to reopen their immigration case",
  "🚨 A New Yorker just stopped wage garnishment — StopMyTaxWarrant.com",
  "🚖 A TLC driver just saved their livelihood — FightMyTLCTicket.com",
  "💍 Someone just ran the free prenup risk check — protected their assets",
  "⚖️ A restaurant owner just fought a Health Dept OATH ticket",
];
function showToast() {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = toasts[Math.floor(Math.random() * toasts.length)];
  el.classList.add('visible');
  setTimeout(() => el.classList.remove('visible'), 4500);
}
setTimeout(showToast, 7000);
setInterval(showToast, 16000);

/* Copy link */
function copyLink(url) {
  navigator.clipboard ? navigator.clipboard.writeText(url) : (()=>{
    const t = document.createElement('textarea');
    t.value = url; document.body.appendChild(t);
    t.select(); document.execCommand('copy'); document.body.removeChild(t);
  })();
  const el = document.getElementById('toast');
  if (el) { el.textContent = '✅ Link copied!'; el.classList.add('visible'); setTimeout(()=>el.classList.remove('visible'),3000); }
}

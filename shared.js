/* shared.js — EasyLegalFiling SEO site */

// Scroll reveal
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Social proof toasts
const toasts = [
  "✅ Someone in Queens just started their divorce",
  "📄 A client just filed a small estate in Brooklyn",
  "⚖️ Someone just checked their NY inheritance rights",
  "💍 A couple just ran the free prenup risk check",
  "🏛️ Someone just started an estate case in Westchester"
];
function showToast() {
  let el = document.getElementById('toast');
  if (!el) return;
  el.textContent = toasts[Math.floor(Math.random() * toasts.length)];
  el.style.display = 'block';
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = '';
  setTimeout(() => { el.style.display = 'none'; }, 4500);
}
if (document.getElementById('toast')) {
  setTimeout(showToast, 7000);
  setInterval(showToast, 16000);
}

(() => {
  const config = window.SECONDLEND_CONFIG || {};
  const telegramUrl = config.telegramUrl || "https://t.me/+NQiPcYQBdbk0MGIy";
  const contactEmail = config.contactEmail || "hello@secondlend.uz";
  document.querySelectorAll(".telegram-link").forEach(a => {
    a.href = telegramUrl;
    a.addEventListener("click", () => {
      if (localStorage.getItem("secondlend_cookie_consent") === "accepted") {
        if (typeof window.fbq === "function") window.fbq("track", "Lead");
      }
    });
  });
  document.querySelectorAll(".contact-link").forEach(a => a.href = "mailto:" + contactEmail);
  document.getElementById("year").textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  menuButton.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(opened));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false");
  }));

  // Marketing trackers are loaded only after explicit consent.
  const banner = document.getElementById("cookieBanner");
  const consent = localStorage.getItem("secondlend_cookie_consent");
  if (!consent) banner.hidden = false;
  function loadPixel() {
    const id = config.metaPixelId;
    if (!id || id === "0000000000000000" || window.fbq) return;
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
    }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', id); window.fbq('track', 'PageView');
  }
  document.getElementById("cookieAccept").addEventListener("click", () => {
    localStorage.setItem("secondlend_cookie_consent", "accepted");
    banner.hidden = true; loadPixel();
  });
  document.getElementById("cookieReject").addEventListener("click", () => {
    localStorage.setItem("secondlend_cookie_consent", "rejected"); banner.hidden = true;
  });
  if (consent === "accepted") loadPixel();

  // Review image lightbox.
  const cards = [...document.querySelectorAll(".review-card")];
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  let active = 0;
  function showReview(index) {
    active = (index + cards.length) % cards.length;
    const img = cards[active].querySelector("img");
    lightboxImage.src = img.src; lightboxImage.alt = img.alt;
  }
  cards.forEach((card, index) => card.addEventListener("click", () => {
    showReview(index); lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }));
  function closeLightbox() {
    lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".lightbox-prev").addEventListener("click", () => showReview(active - 1));
  lightbox.querySelector(".lightbox-next").addEventListener("click", () => showReview(active + 1));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showReview(active - 1);
    if (e.key === "ArrowRight") showReview(active + 1);
  });
})();

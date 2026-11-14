// Одна ссылка используется всеми кнопками перехода в Telegram.
const TELEGRAM_URL = "https://t.me/+p5Xw3fURT_MxN2My";
document.querySelectorAll("[data-telegram]").forEach((link) => {
  link.href = TELEGRAM_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

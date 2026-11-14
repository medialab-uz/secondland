/* ВАЖНО: вставь сюда публичную ссылку своего Telegram-канала.
   Например: https://t.me/+p5Xw3fURT_MxN2My
*/
const TELEGRAM_URL = "https://t.me/+p5Xw3fURT_MxN2My";

document.querySelectorAll("[data-telegram]").forEach((link) => {
  link.href = TELEGRAM_URL;
});

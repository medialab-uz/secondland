# SecondLend — GitHub Pages

Готовый адаптивный лендинг в бордово-кремовом стиле.

## Файлы
- `index.html` — главная страница.
- `privacy.html` — шаблон политики конфиденциальности.
- `assets/` — папка для скриншотов отзывов.

## Перед публикацией
1. В `index.html` замените `https://t.me/SECONDLEND_CHANNEL` в переменной `TELEGRAM_URL` на реальную ссылку канала.
2. Добавьте настоящие скриншоты отзывов в `assets/` под именами `review-1.jpg`, `review-2.jpg`, `review-3.jpg`.
3. Заполните владельца и контакт в `privacy.html`.
4. Проверьте Meta Pixel ID `1701137841542210`. Pixel запускается только после согласия на cookies. Событие `Lead` означает клик по Telegram-ссылке, а не подтверждённую подписку.

## Как загрузить на GitHub
1. Создайте новый репозиторий, например `secondlend-landing`.
2. Распакуйте ZIP на компьютере.
3. Загрузите содержимое папки `SecondLend-GitHub` в корень репозитория: `index.html`, `privacy.html`, `README.md`, `assets/`.
4. Нажмите **Commit changes**.
5. Откройте **Settings → Pages**.
6. В **Build and deployment** выберите **Deploy from a branch**.
7. Выберите ветку `main`, папку `/(root)`, нажмите **Save**.
8. Адрес сайта появится в разделе Pages. Обычно это `https://ВАШ-ЛОГИН.github.io/secondlend-landing/`.

Сборка не нужна: сайт работает на HTML, CSS и JavaScript.

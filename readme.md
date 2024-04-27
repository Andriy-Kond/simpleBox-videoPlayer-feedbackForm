# Проект зібраний за допомогою parcel-project-template

(https://github.com/goitacademy/parcel-project-template)
UPD: збірка вже працює не коректно:

- не розставляє шляхи в HTML-файлах
- не розпізнає знає про handlebars
- не переробляє відносні шляхи при import/export бібліотек

# Стартові файли:

https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Fjavascript-homework%2Ftree%2Fmain%2Fv2%2F08%2Fsrc

## Task 1 - бібліотека SimpleLightbox

Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm.

#### Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

// Описаний в документації:
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів:
import "simplelightbox/dist/simple-lightbox.min.css";

## Task 2 - відеоплеєр

HTML містить < iframe > з відео для Vimeo плеєра.
Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.

    <iframe
      id="vimeo-player"
      src="https://player.vimeo.com/video/236203659"
      width="640"
      height="360"
      frameborder="0"
      allowfullscreen
      allow="autoplay; encrypted-media"
    ></iframe>

Ознайомся з документацією бібліотеки Vimeo плеєра.

Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player.
Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

## Task 3 - форма зворотного зв'язку

HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

    <form class="feedback-form" autocomplete="off">
      <label>
        Email
        <input type="email" name="email" autofocus />
      </label>
      <label>
        Message
        <textarea name="message" rows="8"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>

Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

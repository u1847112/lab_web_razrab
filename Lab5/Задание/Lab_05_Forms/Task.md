# Элементы формы. События в JS, обработчики событий. 

## Задание 1. Разработать форму создания публикации блога

1. На отделньой странице post-add.html разработайте html-форму, отправляющую POST-запрос с этой страницы на саму себя (даже в случае изменения адреса страницы, форма должна продолжить отправлять запросы на себя). Форма должна содержать:
   * Заголовок - однострочное обязательное поле, длиной не более 255 символов, любого содержания.
   * Категории - выпадающий список, с дефолтным значением "без категории" и несколькими категориями на Ваш выбор.
   * Изображение - загрузка файла расширения JPEG, PNG или WEBP, один не обязательный файл.
   * Текст публикации - многострочное обязательное текстовое поле не имеющее ограничений.
   * Опубликовать - кнопка отправки формы.

[Макет страницы](https://github.com/RSTU-Citg-Space/web_lab/blob/frontend/AVB/Lab_05_Forms/Publication_Form_1200px.png)

[Макет в Figma](https://www.figma.com/file/v6sazZfEzITN3Fv0t6ozoZ/Blog?node-id=49%3A0&t=6ZxMkfpLtowOOlrb-1)

2. Реализовать браузерную валидацию полей ввода формы, имеющих условия валидности.
3. Не обязательная задача. Реализовать адаптацию данной страницы под экраны смартфонов в соответствии с [макетом](https://github.com/RSTU-Citg-Space/web_lab/blob/frontend/AVB/Lab_05_Forms/Publication_Form_320px.png)


## Задание 2. Разработать форму регистрации

1. На отдельной странице reg.html разработайте html-форму, отправляющую POST-запрос на страницу user-add.html. Форма должна содержать однострочные поля:
   * Имя
   * Фамилия
   * Логин
   * E-mail
   * Пароль
   * Повторите пароль

[Макет страницы](https://github.com/RSTU-Citg-Space/web_lab/blob/frontend/AVB/Lab_05_Forms/Registration_1200px.png)

2. Внизу формы расположите чек-бокс "Даю согласие на обработку персональных данных", а ещё ниже кнопку "Зарегистрироваться". По-умолчанию чек-бокс должен быть активен. Если чек-бокс активен, то и кнопка доступна, но в случае отключения чекбокса, кнопка должна становиться недоступна для нажатия (disabled).
3. Задайте браузерные условия валидации полей ввода:
   * Имя - не менее 2-х символов, достуаны кириллица, латиница, пробелы и дефисы. Другие символы недопустимы. Не обязательное поле (может остаться пустым).
   * Фамилия - не менее 2-х символов, достуаны кириллица, латиница, пробелы и дефисы. Другие символы недопустимы. Не обязательное поле.
   * Логин - обязательное, от 5 до 150 символов, доступны буквы, цифры и символы \@\.\+\-\_. Другие символы недопустимы.
   * E-mail - валидный адрес электронной почты, не обязательное поле.
   * Пароль - обязательное, не менее 8 символов, не должен совпадать с логином, минимум один не цифровой символ.
   * Повторите пароль - обзяательное, должен совпадать с полем "Пароль"
4. Валидность полей ввода подсвечивать цветом рамки прямо в процессе ввода значения в поле ввода.
5. У полей ввода "Логин", "Пароль" и "Повторить пароль" в процессе ввода выводить параметры по которым введённое значение не соответствует правилам ввода. Например если пользователь ввёл только 4 символа в поле "Логин", то под полем ввода должно вывестись сообщение "Длина логина должна быть не менее 5 символов".
6. Не обязательная задача. Реализовать адаптацию данной страницы под экраны смартфонов в соответствии с [макетом](https://github.com/RSTU-Citg-Space/web_lab/blob/frontend/AVB/Lab_05_Forms/Registration_320px.png)

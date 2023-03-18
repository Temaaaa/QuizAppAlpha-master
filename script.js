let questionArr = [
  //JS
  //JS easy
{
  question: "JavaScript имеет следующий тип комментариев?",
  answers: {
    answer_a: 'Однострочные комментарии', 
    answer_b: 'Многострочные комментарии', 
    answer_c: 'Все вышеперечисленное', 
    answer_d: 'Ни один из вышеперечисленных'
  },
  correct_answer: "answer_c",
  difficulty: "Easy",
  category: "JavaScript"
},
{
  question: "Что из перечисленного считается концом однострочного комментария?",
  answers: {
    answer_a: 'Конец строки', 
    answer_b: 'Конец инструкции', 
    answer_c: 'Точка с запятой', 
    answer_d: 'Ни один из вышеперечисленных'
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "JavaScript"
},
{
  question: "Что из перечисленного не является оператором составного присваивания?",
  answers: {
    answer_a: '===', 
    answer_b: '&lt&lt=', 
    answer_c: '+=', 
    answer_d: '&gt&gt='
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "JavaScript"
},
{
  question: "Во время сложения двух чисел предположим, что одно из чисел - NaN, какой будет результат?",
  answers: {
    answer_a: 'Infinite', 
    answer_b: 'NaN', 
    answer_c: 'Zero', 
    answer_d: 'Null'
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "JavaScript"
},
{
  question: "Переменная может одновременно содержать _____ значений",
  answers: {
    answer_a: 'Одно', 
    answer_b: 'Два', 
    answer_c: 'Несколько', 
    answer_d: 'Ни один из вышеперечисленных'
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "JavaScript"
},
{
  question: "Чем задается поле ввода на форме?",
  answers: {
    answer_a: 'посредством одинарного тега &ltINPUT TYPE="text"&gt', 
    answer_b: 'посредством одинарного тега &ltINPUT TYPE="button"&gt', 
    answer_c: 'посредством одинарного тега &ltINPUT TYPE="reset"&gt', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "JavaScript"
},
{
  question: "Код JavaScript написан внутри файла с расширением",
  answers: {
    answer_a: '.jvs', 
    answer_b: '.jsc', 
    answer_c: '.js', 
    answer_d: '.javascript'
  },
  correct_answer: "answer_c",
  difficulty: "Easy",
  category: "JavaScript"
},
{
  question: "Операторы JavaScript выполняются",
  answers: {
    answer_a: 'JVM', 
    answer_b: 'Компилятором', 
    answer_c: 'Сервером', 
    answer_d: 'Браузером'
  },
  correct_answer: "answer_d",
  difficulty: "Easy",
  category: "JavaScript"
},
{
  question: "Код JavaScript содержит",
  answers: {
    answer_a: 'Исполняемые инструкции', 
    answer_b: 'Вызов методов', 
    answer_c: 'HTML-теги', 
    answer_d: 'Все вышеперечисленное'
  },
  correct_answer: "answer_d",
  difficulty: "Easy",
  category: "JavaScript"
},
{
  question: "Оператор += может работать со следующими значениями данных.",
  answers: {
    answer_a: 'String', 
    answer_b: 'Float', 
    answer_c: 'Все вышеперечисленное', 
    answer_d: 'Ничего из вышеперечисленного'
  },
  correct_answer: "answer_c",
  difficulty: "Easy",
  category: "JavaScript"
},
//JS medium
{
  question: "Можно ли использовать один объект XmlHttpRequest для множества разных запросов:",
  answers: {
    answer_a: 'можно', 
    answer_b: 'нет, только один запрос на один объект', 
    answer_c: 'да, но перед каждым новым запросом надо вызывать abort()', 
  },
  correct_answer: "answer_a",
  difficulty: "Medium",
  category: "JavaScript"
},
{
  question: "Какая функция позволяет очищать конечную анимацию:",
  answers: {
    answer_a: 'setInterval', 
    answer_b: 'clearTimeout', 
    answer_c: 'setTimeout', 
  },
  correct_answer: "answer_b",
  difficulty: "Medium",
  category: "JavaScript"
},
{
  question: "Что, из ниже перечисленного, относится к событию:",
  answers: {
    answer_a: 'начало загрузки web-страницы', 
    answer_b: 'сохранение кодировки пользователем', 
    answer_c: 'завершение загрузки web-страницы', 
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "JavaScript"
},
{
  question: "Какая арифметическая операция приводит к ошибке в javascript:",
  answers: {
    answer_a: 'корень из отрицательного числа', 
    answer_b: 'деление на ноль', 
    answer_c: 'нет верного ответа', 
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "JavaScript"
},
{
  question: "Какой оператор служит для создания нового экземпляра из класса однотипных объектов:",
  answers: {
    answer_a: 'this', 
    answer_b: 'new', 
    answer_c: 'prototype', 
  },
  correct_answer: "answer_b",
  difficulty: "Medium",
  category: "JavaScript"
},
{
  question: "Какой AJAX-транспорт позволит отправить файл на сервер без перезагрузки страницы:",
  answers: {
    answer_a: 'только использование фреймов(IFrame)', 
    answer_b: 'XmlHttpRequest справится', 
    answer_c: 'невозможно ввиду ограничений безопасности javascript', 
  },
  correct_answer: "answer_a",
  difficulty: "Medium",
  category: "JavaScript"
},
{
  question: "В какой строке создастся новый объект Array:",
  answers: {
    answer_a: 'var pattern = /s&/;', 
    answer_b: 'var pattern = new Array[a,b,c];', 
    answer_c: 'var pattern = [a,b,c];', 
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "JavaScript"
},
{
  question: "Какой метод позволяет изменять порядок элементов массива на противоположный:",
  answers: {
    answer_a: 'reverse()', 
    answer_b: 'join()', 
    answer_c: 'sort()', 
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "JavaScript"
},
{
  question: "Объекты, отвечающие за то, что содержится на Web-странице в окне браузера, называются:",
  answers: {
    answer_a: 'пользовательскими', 
    answer_b: 'клиентскими', 
    answer_c: 'встроенными', 
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "JavaScript"
},

{
  question: "Какие конструкции для циклов есть в javascript:",
  answers: {
    answer_a: 'только одна: for', 
    answer_b: 'три: for, while и do…while', 
    answer_c: 'только две: for и while', 
  },
  correct_answer: "answer_b",
  difficulty: "Medium",
  category: "JavaScript"
},
//JS hard
{
  question: "Вызов setTimeout(func, 0) вызовет func…",
  answers: {
    answer_a: 'Сразу после setTimeout, до следующей строки кода.', 
    answer_b: 'Сразу после текущего скрипта, когда браузер сможет выполнить JavaScript.', 
    answer_c: 'Ровно через 4 миллисекунды.', 
    answer_d: 'Через 4 миллисекунды или больше, в зависимости от пожеланий браузера.'
  },
  correct_answer: "answer_d",
  difficulty: "Hard",
  category: "JavaScript"
},
{
  question: "Вызов setInterval(func, 100) вызовет func…",
  answers: {
    answer_a: 'Ровно каждые 100мс.', 
    answer_b: 'Примерно каждые 100мс.', 
    answer_c: 'Обычно каждые 100мс, но возможно, что вызовы будут происходить гораздо реже.', 
    answer_d: null
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "JavaScript"
},
{
  question: "Можно ли инициировать DOM-событие из javascript? Например, сэмулировать клик мышкой на элементе, чтобы javascript-код кликнул за пользователя, и сработали соответствующие обработчики.",
  answers: {
    answer_a: 'Да, можно.', 
    answer_b: 'Нет, нельзя.', 
    answer_c: null, 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "JavaScript"
},
{
  question: "Браузер вызывает setInterval и setTimeout гораздо реже, чем обычно, если…",
  answers: {
    answer_a: 'Вкладка, в которой работает JavaScript, не видна и находится в фоновом режиме.', 
    answer_b: 'Посетитель зашёл с ноутбука, с питанием от батареи.', 
    answer_c: 'В обоих этих случаях.', 
    answer_d: null
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "JavaScript"
},
{
  question: "Результат elem.getBoundingClientRect() содержит отрицательное значение top: -10. Что это означает? ",
  answers: {
    answer_a: 'Что верх элемента вылезает за верхнюю границу документа.', 
    answer_b: 'Что верх элемента вылезает за верхнюю границу окна.', 
    answer_c: 'Что содержимое элемента прокручено на 10px.', 
    answer_d: 'Ничего не означает, браузер чудит.'
  },
  correct_answer: "answer_b",
  difficulty: "Hard",
  category: "JavaScript"
},
{
  question: "Когда у элемента гарантированно совпадают offsetHeight и clientHeight?",
  answers: {
    answer_a: 'Когда у элемента нет border.', 
    answer_b: 'Когда у элемента нет border и padding.', 
    answer_c: 'Когда у элемента нет border, padding и margin.', 
    answer_d: 'Когда у элемента нет прокрутки.'
  },
  correct_answer: "answer_b",
  difficulty: "Hard",
  category: "JavaScript"
},
{
  question: "Можно ли скриптом перевести посетителя на другую страницу сайта?",
  answers: {
    answer_a: 'Да, куда угодно.', 
    answer_b: 'Да, но только в рамках текущего сайта.', 
    answer_c: 'Нет, нельзя.', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "JavaScript"
},
{
  question: "Что будет, если вызвать document.write(str) после загрузки страницы?",
  answers: {
    answer_a: 'Строка str допишется в конец документа.', 
    answer_b: 'Содержимое документа будет полностью заменено на строку str.', 
    answer_c: 'Будет ошибка.', 
    answer_d: null
  },
  correct_answer: "answer_b",
  difficulty: "Hard",
  category: "JavaScript"
},
{
  question: "Для чего используются знаки &lt!-- и --&gt внутри тэгов &ltscript&gt и &lt/script&gt?",
  answers: {
    answer_a: 'для замены команды OnLoad', 
    answer_b: 'для вставки кодов HTML внутрь сценария', 
    answer_c: 'ля скрытия скрипта от браузеров, не поддерживающих JavaScript', 
    answer_d: null
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "JavaScript"
},
{
  question: "Что называется конструктором?",
  answers: {
    answer_a: 'код родительской функции', 
    answer_b: 'объект, порожденный от родительского', 
    answer_c: 'родительский объект', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "JavaScript"
},
//HTML
// html easy
{
  question: "Где верно записан DOCTYPE для HTML5 версии?",
  answers: {
    answer_a: '&lt!DOCTYPE html5&gt', 
    answer_b: '&ltDOCTYPE html&gt', 
    answer_c: '&ltDOCTYPE html5&gt', 
    answer_d: '&lt!DOCTYPE html&gt'
  },
  correct_answer: "answer_d",
  difficulty: "Easy",
  category: "HTML"
},
{
  question: "Какой тег не используется при работе с таблицами?",
  answers: {
    answer_a: 'Tr', 
    answer_b: 'Tt', 
    answer_c: 'Th', 
    answer_d: 'Td'
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "HTML"
},

{
  question: "Какой тег делает текст курсивом?",
  answers: {
    answer_a: 'strong', 
    answer_b: 'span', 
    answer_c: 'em', 
    answer_d: 'font'
  },
  correct_answer: "answer_c",
  difficulty: "Easy",
  category: "HTML"
},

{
  question: "Какой тег создает пронумерованный список?",
  answers: {
    answer_a: 'ul', 
    answer_b: 'ol'
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "HTML"
},

{
  question: "Все input теги стоит записывать в теге...",
  answers: {
    answer_a: 'fields', 
    answer_b: 'table', 
    answer_c: 'section', 
    answer_d: 'form'
  },
  correct_answer: "answer_d",
  difficulty: "Easy",
  category: "HTML"
},

{
  question: "Какой из тегов не является тегом для работы с текстом?",
  answers: {
    answer_a: 'p', 
    answer_b: 'sup', 
    answer_c: 'canvas', 
    answer_d: 'strike'
  },
  correct_answer: "answer_c",
  difficulty: "Easy",
  category: "HTML"
},

{
  question: "Для чего используется тег pre?",
  answers: {
    answer_a: 'Используется для вывода программного кода', 
    answer_b: 'Используется для вывода текста', 
    answer_c: 'Используется для вывода аббревиатуры', 
    answer_d: 'Используется для вывода адреса'
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "HTML"
},

{
  question: "Какого поля input не существует?",
  answers: {
    answer_a: 'input type="color"', 
    answer_b: 'input type="name"', 
    answer_c: 'input type="date"', 
    answer_d: 'input type="reset"'
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "HTML"
},

{
  question: "Какой минимальный набор языков для веб разработки?",
  answers: {
    answer_a: 'HTML, CSS, JavaScript, C#', 
    answer_b: 'HTML, CSS, JavaScript, Python', 
    answer_c: 'HTML, CSS, JavaScript',
    answer_d: 'HTML, CSS'
  },
  correct_answer: "answer_d",
  difficulty: "Easy",
  category: "HTML"
},

{
  question: "Для чего используют тег div?",
  answers: {
    answer_a: 'Для блочной верстки сайта', 
    answer_b: 'Для работы с текстом', 
    answer_c: 'Для табличной верстки сайта', 
    answer_d: 'Для работы с видео'
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "HTML"
},

//html medium
{
  question: "Какие единицы измерения могут использоваться для атрибута ширины?",
  answers: {
    answer_a: 'Пиксели и %', 
    answer_b: 'Миллиметры и сантиметры', 
    answer_c: 'Пиксели и миллиметры', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Medium",
  category: "HTML"
},
{
  question: "Использование тэга … позволяет добавлять одну строку текста без начала нового абзаца",
  answers: {
    answer_a: '&ltline/&gt', 
    answer_b: '&ltbr/&gt', 
    answer_c: '&lttd/&gt', 
    answer_d: null
  },
  correct_answer: "answer_b",
  difficulty: "Medium",
  category: "HTML"
},
{
  question: "Что содержит в себе атрибут href?",
  answers: {
    answer_a: 'Указание на то, где будет открываться новая страница: в том же или новом окне', 
    answer_b: 'Имя страницы, на которую произойдет перенаправление', 
    answer_c: 'URL страницы, на которую произойдет перенаправление', 
    answer_d: null
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "HTML"
},
{
  question: "Какие из перечисленных тэгов относятся к созданию таблицы?",
  answers: {
    answer_a: '&ltheader&gt &ltbody&gt &ltfooter&gt', 
    answer_b: '&lttable&gt &lttr&gt &lttd&gt', 
    answer_c: '&ltul&gt &ltli&gt &lttr&gt &lttd&gt', 
    answer_d: null
  },
  correct_answer: "answer_b",
  difficulty: "Medium",
  category: "HTML"
},
{
  question: "Какое значение следует задать атрибуту type, чтобы оно превращало входной тэг в форму отправки?",
  answers: {
    answer_a: 'Submit', 
    answer_b: 'Checkbox', 
    answer_c: 'Radiobutton', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Medium",
  category: "HTML"
},
{
  question: "Для задания размеров тэгу &ltframeset&gt требуются следующие атрибуты:",
  answers: {
    answer_a: 'Высока и ширина', 
    answer_b: 'Площадь и толщина границ', 
    answer_c: 'Строки и столбцы', 
    answer_d: null
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "HTML"
},
{
  question: "Перечислите основные модули контента, существующие в HTML 5.",
  answers: {
    answer_a: 'Image, Media, Metadata, Link, Heading, Color, Input Value', 
    answer_b: 'Metadata, Embedded, Interactive, Heading, Phrasing, Flow, Sectioning', 
    answer_c: 'Flow, Static, Link, Header, Body, Footer, Processing, Chase', 
    answer_d: null
  },
  correct_answer: "answer_b",
  difficulty: "Medium",
  category: "HTML"
},
{
  question: "Укажите, какой элемент HTML 5 отвечает за воспроизведение видео:",
  answers: {
    answer_a: '&ltvideo&gt', 
    answer_b: '&ltmedia&gt', 
    answer_c: '&ltmovie&gt', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Medium",
  category: "HTML"
},
{
  question: "SessionStorage – это клиентское решение в HTML 5, которое позволяет:",
  answers: {
    answer_a: 'Извлекать и использовать данные предыдущих сессий при условии того, что не были очищены cash и cookie', 
    answer_b: 'Создавать базу данных решений пользователей в памяти браузера', 
    answer_c: 'Извлекать и использовать данные только текущей сессии', 
    answer_d: null
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "HTML"
},
{
  question: "Какой атрибут позволяет объединить ячейки таблицы по вертикали?",
  answers: {
    answer_a: 'Union', 
    answer_b: 'Colspan', 
    answer_c: 'Rowspan', 
    answer_d: null
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "HTML"
},

//html hard
{
  question: "В HTML 5, onblur и onfocus – это: ",
  answers: {
    answer_a: 'Атрибуты событий', 
    answer_b: 'Атрибуты стиля', 
    answer_c: 'Атрибуты подключения базы данных', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "HTML"
},
{
  question: "Какие бывают значения у свойства position?",
  answers: {
    answer_a: 'position: absolute | fixed | relative | static | sticky', 
    answer_b: 'position: block | fix | flex', 
    answer_c: 'position: inline | inline -fix | inline flex', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "HTML"
},
{
  question: "Что такое clearfix? Из чего он состоит и для чего он?",
  answers: {
    answer_a: 'в css нет такого понятия', 
    answer_b: 'тоже самое что и position: fixed', 
    answer_c: 'это способ борьбы с проблемой контейнера нулевой высоты для плавающих элементов', 
    answer_d: null
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "HTML"
},
{
  question: "Как верстать html письма?",
  answers: {
    answer_a: 'Таблицами', 
    answer_b: 'как и обычный html документ', 
    answer_c: 'блоками', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "HTML"
},
{
  question: "Из чего строится размер элемента? Если не учитывать box-sizing",
  answers: {
    answer_a: 'width и height задают ширину. включают в себя значения padding и border', 
    answer_b: 'width и height задают ширину. не включают в себя значения margin, padding и border', 
    answer_c: 'width и height задают ширину. включают в себя значения margin, padding и border', 
    answer_d: null
  },
  correct_answer: "answer_b",
  difficulty: "Hard",
  category: "HTML"
},
{
  question: "Как ведут себя margin у двух элементов по соседству по вертикали?",
  answers: {
    answer_a: 'У блочных элементов расположенных рядом друг с другом по вертикали наблюдается эффект схлопывания ', 
    answer_b: 'margin суммируются', 
    answer_c: 'Странный вопрос', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "HTML"
},
{
  question: "Есть ли у тегов предопределённые стили?",
  answers: {
    answer_a: 'нет', 
    answer_b: 'не знаю', 
    answer_c: 'да', 
    answer_d: null
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "HTML"
},
{
  question: "Как браузер «читает» css?",
  answers: {
    answer_a: 'сверху вниз', 
    answer_b: 'снизу вверх', 
    answer_c: 'браузер css не читает', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "HTML"
},
{
  question: "Какие свойства браузеру отрисовать тяжелее всего?",
  answers: {
    answer_a: 'position: absolute | fixed', 
    answer_b: 'box-shadow, border-radius', 
    answer_c: 'все одинаково тяжело', 
    answer_d: null
  },
  correct_answer: "answer_b",
  difficulty: "Hard",
  category: "HTML"
},
{
  question: "При изменении каких свойств браузер затратит больше всего ресурсов?",
  answers: {
    answer_a: 'border-radius', 
    answer_b: 'width и height', 
    answer_c: 'left/top/right/bottom', 
    answer_d: null
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "HTML"
},

//PHP
// php easy
{
  question: "Что будет в переменной $result после выполнения кода $i = 5; $result = ++$i;?",
  answers: {
    answer_a: '6', 
    answer_b: '7', 
    answer_c: '4', 
    answer_d: '5'
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "PHP"
},
{
  question: "Какой знак нужно использовать чтобы проинициализировать переменную?",
  answers: {
    answer_a: '$', 
    answer_b: '!', 
    answer_c: '%', 
    answer_d: '#'
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "PHP"
},
{
  question: "С помощью какого запроса можно создать таблицу (СУБД MySQL)?",
  answers: {
    answer_a: 'Нет правильных вариантов', 
    answer_b: 'TABLE CREATE test (blob_col BLOB, INDEX(blob_col(10)));', 
    answer_c: 'MAKE TABLE test (blob_col BLOB, INDEX(blob_col(10)));', 
    answer_d: 'CREATE TABLE test (blob_col BLOB, INDEX(blob_col(10)));'
  },
  correct_answer: "answer_d",
  difficulty: "Easy",
  category: "PHP"
},
{
  question: "Как создать соокіе на час?",
  answers: {
    answer_a: 'Нет правильных вариантов', 
    answer_b: 'setcookie("TestCookie", $value, time()+3600);', 
    answer_c: 'setcookie ("TestCookie", $value, 1);', 
    answer_d: 'setcookie("TestCookie", $value, Cookie: :HOUR);'
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "PHP"
},
{
  question: "Что сделает оператор ++ в выражении $a++; ?",
  answers: {
    answer_a: 'Увеличит значение переменной на единицу', 
    answer_b: 'Перенесёт переменную в следующий файл', 
    answer_c: 'Переменная добавиться в стек вызова', 
    answer_d: 'Возведёт переменную во вторую степень'
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "PHP"
},
{
  question: "Какой метод используют для загрузки файлов на сервер?",
  answers: {
    answer_a: 'POST', 
    answer_b: 'HEAD', 
    answer_c: 'GET', 
    answer_d: 'FILE'
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "PHP"
},
{
  question: "Где хранится информация о файлах, которые передаются на сервер?",
  answers: {
    answer_a: '$_FILES', 
    answer_b: '$_FILE_DATA', 
    answer_c: '$_POST', 
    answer_d: '$ _GET'
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "PHP"
},
{
  question: "Каково основное назначение РНР?",
  answers: {
    answer_a: 'Серверная разработка общего назначения', 
    answer_b: 'Шаблонизация интерфейсов веб-сайтов', 
    answer_c: 'Системы искусственного интеллекта', 
    answer_d: 'Разработка игровых интерфейсов'
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "PHP"
},
{
  question: "Какую информацию выводит print_r()?",
  answers: {
    answer_a: 'Выводит данные о пользователе', 
    answer_b: 'Выводит данные о работе скрипта', 
    answer_c: 'Выводит удобочитаемую информацию о переменной', 
    answer_d: 'Ничего не выводит'
  },
  correct_answer: "answer_c",
  difficulty: "Easy",
  category: "PHP"
},
{
  question: "Какой функцией можно перемешать элементы массива в случайном порядке?",
  answers: {
    answer_a: 'array_random sort()', 
    answer_b: 'shuffle()', 
    answer_c: 'rand arr sort(', 
    answer_d: 'Правильных вариантов нет'
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "PHP"
},


//php medium
{
  question: "С помощью какого оператора SQL можно сделать выборку из таблицы?",
  answers: {
    answer_a: 'WHERE', 
    answer_b: 'UNION', 
    answer_c: 'SELECT', 
    answer_d: 'UPDATE'
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "PHP"
},
{
  question: "Какое ключевое слово в РНР используется для наследования?",
  answers: {
    answer_a: 'implements', 
    answer_b: ':', 
    answer_c: 'extends', 
    answer_d: 'instance'
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "PHP"
},

{
  question: "Можем ли мы обращаться к функции в любом месте кода?",
  answers: {
    answer_a: 'Да', 
    answer_b: 'Нет', 
    answer_c: 'В зависимости от того как и где определена функция', 
    answer_d: 'Можем если функция была определена до её вызова'
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "PHP"
},

{
  question: "Каким образом возможно расширить интерфейс другим интерфейсом?",
  answers: {
    answer_a: 'interface Foo extends Bar{}', 
    answer_b: 'Это невозможно', 
    answer_c: 'interface Foo implements Bar{}', 
    answer_d: 'interface Foo, Bar{}'
  },
  correct_answer: "answer_b",
  difficulty: "Medium",
  category: "PHP"
},

{
  question: "Что возвращает функция fopen?",
  answers: {
    answer_a: 'Данная функция ничего не возвращает', 
    answer_b: 'Возвращает данные из файла или false', 
    answer_c: 'Возвращает объект File для доступа к данному файлу или null', 
    answer_d: 'Возвращает ресурс, указывающий на файл, или false'
  },
  correct_answer: "answer_d",
  difficulty: "Medium",
  category: "PHP"
},

{
  question: "Какой код выполнит несколько запросов к базе?",
  answers: {
    answer_a: 'mysqli_query $mysqli, "SELECT name FROM tbl1; SELECT name FROM tbl2");', 
    answer_b: 'mysqli_multi_query($mysqli, "SELECT name FROM tbl1; SELECT name FROM tbl2");', 
    answer_c: 'mysqli_real_query($mysqli, "SELECT name FROM tbl1; SELECT name FROM tbl2");', 
    answer_d: 'Это сделать невозможно.'
  },
  correct_answer: "answer_b",
  difficulty: "Medium",
  category: "PHP"
},

{
  question: "Отличается ли сравнение строк через функцию stremp и оператор ===",
  answers: {
    answer_a: 'Да', 
    answer_b: 'Нет', 
    answer_c: null, 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Medium",
  category: "PHP"
},

{
  question: "Каким образом в php разделяются инструкции?",
  answers: {
    answer_a: 'Инструкции разделяются переходом на новую строку', 
    answer_b: 'Инструкции разделяются пробелом', 
    answer_c: 'В конце инструкции ставится «;»', 
    answer_d: 'В конце инструкции ставится ".”'
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "PHP"
},

{
  question: "Существует ли в РНР перегрузка методов?",
  answers: {
    answer_a: 'Да', 
    answer_b: 'Нет', 
    answer_c: null, 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Medium",
  category: "PHP"
},

{
  question: "Какой код перенаправит пользователя на другую страницу?",
  answers: {
    answer_a: 'header ( "Location: {$url)")', 
    answer_b: 'redirect( surl);', 
    answer_c: 'header( "GoTo{$url]");', 
    answer_d: 'header( "Redirect: {surl)" );'
  },
  correct_answer: "answer_a",
  difficulty: "Medium",
  category: "PHP"
},


//php hard
{
  question: "Что такое абстрактный класс?",
  answers: {
    answer_a: 'Класс, который может содержать только публичные свойства', 
    answer_b: 'Класс, который не предполагает создания экземпляров, но может содержать реализации и свойства', 
    answer_c: 'Класс, который не предполагает создания экземпляров и не может содержать реализации и свойства', 
    answer_d: 'Класс, который может содержать только приватные свойства'
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "PHP"
},
{
  question: "Какой тип связи нехарактерен для реляционных БД?",
  answers: {
    answer_a: 'Один-к-одному', 
    answer_b: 'Многие-к-одному', 
    answer_c: 'Многие-ко-многим', 
    answer_d: 'Один-ко-многим'
  },
  correct_answer: "answer_b",
  difficulty: "Hard",
  category: "PHP"
},

{
  question: "Какой из принципов не является основополагающим в ООП",
  answers: {
    answer_a: 'Наследование', 
    answer_b: 'Инкапсуляция', 
    answer_c: 'Принцип единой ответственности', 
    answer_d: 'Полиморфизм'
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "PHP"
},

{
  question: "Что делает ключевое слово final?",
  answers: {
    answer_a: 'Прекращает выполнение работы скрипта', 
    answer_b: 'РНР не имеет ключевого слова final', 
    answer_c: 'Задаёт постоянное значение свойства класса', 
    answer_d: 'Запрещает переопределение методов в дочерних классах'
  },
  correct_answer: "answer_d",
  difficulty: "Hard",
  category: "PHP"
},

{
  question: "Какая функция в РНР позволяет обеспечивать наиболее надёжное хэширование пользовательских данных?",
  answers: {
    answer_a: 'crypt()', 
    answer_b: 'sha()', 
    answer_c: 'blowfish()', 
    answer_d: 'md5()'
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "PHP"
},

{
  question: "Как создать экземпляр класса?",
  answers: {
    answer_a: 'Model model = new Model ();', 
    answer_b: '$model = new Model ();', 
    answer_c: '$model = Model();', 
    answer_d: 'Model $model = Model();'
  },
  correct_answer: "answer_b",
  difficulty: "Hard",
  category: "PHP"
},

{
  question: "Что такое трейт (trait)",
  answers: {
    answer_a: 'Механизм для уменьшения ограничений единого наследования', 
    answer_b: 'Код, подверженный SQL-иньекции', 
    answer_c: 'Класс, не имеющий реализаций и содержащий только публичные методы', 
    answer_d: 'Механизм обеспечения позднего статического связывания'
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "PHP"
},

{
  question: "Как вызвать статическое свойство внутри статического метода объекта?",
  answers: {
    answer_a: 'self::prop;', 
    answer_b: 'Нет правильных вариантов', 
    answer_c: '$this::prop;', 
    answer_d: 'Никак'
  },
  correct_answer: "answer_b",
  difficulty: "Hard",
  category: "PHP"
},

{
  question: "Что отличает третью нормальную форму от первой и второй?",
  answers: {
    answer_a: 'Отсутствие таблиц с повторяющимися столбцами, содержащими одинаковые по смыслу значения', 
    answer_b: 'Отсутствие избыточности данных в столбцах', 
    answer_c: 'Наличие первичных ключей', 
    answer_d: 'Отсутствие данных, которые не зависят от первичного ключа, но зависят от других значений'
  },
  correct_answer: "answer_d",
  difficulty: "Hard",
  category: "PHP"
},

{
  question: "Как создать метод, параметры в который будут передаваться по ссылке?",
  answers: {
    answer_a: 'public function method(&$param) {}', 
    answer_b: 'public function method(%$param) {}', 
    answer_c: 'public function method(^$param) {}', 
    answer_d: 'public function method($$param) {}'
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "PHP"
},



//C#
//C# easy
{
  question: "Обращение к конструктору StreamWriter('t. txt', true) означает, что файл t.txt открывается...",
  answers: {
    answer_a: 'для перезаписи', 
    answer_b: 'для дозаписи', 
    answer_c: null, 
    answer_d: null
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "C#"
},
{
  question: "Для того, чтобы в Visual Studio запустить консольное приложение в режиме ожидания нажатия клавиши для закрытия окна, потребутся нажать:",
  answers: {
    answer_a: 'CTRL+F5', 
    answer_b: 'F5', 
    answer_c: null, 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "C#"
},
{
  question: "Какое из следующих высказываний справедливо?",
  answers: {
    answer_a: 'Свойство обязательно определяет поведение двух операций get и set', 
    answer_b: 'Ни одно из этих высказываний', 
    answer_c: 'Свойство всегда должно быть публичным', 
    answer_d: 'Свойство должно иметь то же имя, что и поле'
  },
  correct_answer: "answer_c",
  difficulty: "Easy",
  category: "C#"
},
{
  question: "Точкой входа в программу С# является:",
  answers: {
    answer_a: 'любая первая функция, объявленная в программе', 
    answer_b: 'функция с именем Main', 
    answer_c: null, 
    answer_d: null
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "C#"
},
{
  question: "Для работы с обобщенными коллекциями требуется подключить пространство имен...",
  answers: {
    answer_a: 'System. Collections;', 
    answer_b: 'System. Generic', 
    answer_c: 'Подключать ничего не требуется', 
    answer_d: 'System. Collections. Generic;'
  },
  correct_answer: "answer_d",
  difficulty: "Easy",
  category: "C#"
},
{
  question: "Какая конструкция правильно создает массив в С#?",
  answers: {
    answer_a: 'int [] a=new int [10];', 
    answer_b: 'int a=new int[10];', 
    answer_c: 'int a l10]', 
    answer_d: 'int [10] a;'
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "C#"
},
{
  question: "Только перечисленные языки: С#, VB. NET, Managed C++, JScript NET, PascalABC.NET ориентированы на разработку приложений в среде CLR?",
  answers: {
    answer_a: 'Нет', 
    answer_b: 'Да', 
    answer_c: null, 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "C#"
},
{
  question: "Когда для записи файла следует использовать объект FileStream вместо объекта StreamWriter?",
  answers: {
    answer_a: 'Когда нужен произвольный доступ к данным или нет возможности работать с файлом как с текстом', 
    answer_b: 'Нет никакой необходимости диспользовать FileStream. Всегда можно обойтись StreamWriter', 
    answer_c: 'Когда нужно работать с файлом, как с набором текстовых строк', 
    answer_d: 'Когда нет возможности получить прямой доступ к файлу'
  },
  correct_answer: "answer_c",
  difficulty: "Easy",
  category: "C#"
},
{
  question: "Для работы с не обобщенными коллекциями требуется подключить пространство имен...",
  answers: {
    answer_a: 'System. Collections.Generic;', 
    answer_b: 'System. Collections;', 
    answer_c: 'System.Generic', 
    answer_d: 'Подключать ничего не требуется'
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "C#"
},
{
  question: "Для того чтобы некоторый язык программирования мог использовать возможности FCL (библиотеки классов платформы) необходимо, чтобы он:",
  answers: {
    answer_a: 'являлся высокоуровневым языком программирования', 
    answer_b: 'удовлетворял спецификации CLS (общая языковая спецификация)', 
    answer_c: null, 
    answer_d: null
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "C#"
},

//C# medium
{
  question: "Свойство показывающее размерность массива",
  answers: {
    answer_a: 'GetLongLength ()', 
    answer_b: 'Rank', 
    answer_c: 'GetLength ()', 
    answer_d: 'Length'
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "C#"
},
{
  question: "Для создания объектов и вызова конструктора используется оператор",
  answers: {
    answer_a: 'await', 
    answer_b: 'create', 
    answer_c: 'new', 
    answer_d: 'static'
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "C#"
},
{
  question: "Вызов виртуального метода из конструктора:",
  answers: {
    answer_a: 'Возможен в классе-потомке с обязательным перекрытием метода базового класса', 
    answer_b: 'Возможен', 
    answer_c: 'Не возможен', 
    answer_d: 'Возможен только в классе-потомке'
  },
  correct_answer: "answer_a",
  difficulty: "Medium",
  category: "C#"
},
{
  question: "Наиболее подходящий метод для быстрой рассортировки двумерного массива",
  answers: {
    answer_a: 'Array.Sort()', 
    answer_b: 'Array. BinarySearch();', 
    answer_c: 'Array. Reverse ();', 
    answer_d: 'B С# нет встроенных методов сортировки двумерных массивов'
  },
  correct_answer: "answer_d",
  difficulty: "Medium",
  category: "C#"
},
{
  question: "Для записи информации в файл отвечает класс:",
  answers: {
    answer_a: 'StreamWriter', 
    answer_b: 'Directory', 
    answer_c: 'StringReader', 
    answer_d: 'DirectoryInfo'
  },
  correct_answer: "answer_a",
  difficulty: "Medium",
  category: "C#"
},
{
  question: "Добавление элемента в конец очереди осуществляется методом",
  answers: {
    answer_a: 'Pop()', 
    answer_b: 'Peek()', 
    answer_c: 'Add()', 
    answer_d: 'Enqueue()'
  },
  correct_answer: "answer_d",
  difficulty: "Medium",
  category: "C#"
},
{
  question: "Генерирование исключения возможно при помощи:",
  answers: {
    answer_a: 'GC. Collect;', 
    answer_b: 'throw', 
    answer_c: 'Thread', 
    answer_d: 'Exception'
  },
  correct_answer: "answer_b",
  difficulty: "Medium",
  category: "C#"
},
{
  question: "Конкатенация строк - это",
  answers: {
    answer_a: '«Склеивание» строк', 
    answer_b: 'Разбиение строки на слова', 
    answer_c: 'Удаление одинаковых символов строк', 
    answer_d: 'Удаление лишних пробелов в строке'
  },
  correct_answer: "answer_a",
  difficulty: "Medium",
  category: "C#"
},
{
  question: "Для принудительного выхода из выполняемого метода следует использовать оператор",
  answers: {
    answer_a: 'break', 
    answer_b: 'stop()', 
    answer_c: 'default', 
    answer_d: 'return'
  },
  correct_answer: "answer_d",
  difficulty: "Medium",
  category: "C#"
},
{
  question: "Какой из операторов досрочно прерывает ближайший к нему цикл",
  answers: {
    answer_a: 'break', 
    answer_b: 'stop', 
    answer_c: 'await', 
    answer_d: 'yield return'
  },
  correct_answer: "answer_a",
  difficulty: "Medium",
  category: "C#"
},

//C# hard
{
  question: "Где выделяется память для ссылочных типов:",
  answers: {
    answer_a: 'На стеке или в управляемой куче, в зависимости от реализации платформы', 
    answer_b: 'Всегда в управляемой куче', 
    answer_c: 'На стеке или в управляемой куче, на усмотрение компилятора', 
    answer_d: 'На стеке или в управляемой куче, зависит от места обьявления и боксинга'
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "C#"
},
{
  question: "Какой тип данных наиболее подходящий для организации массива бит:",
  answers: {
    answer_a: 'BitVector32', 
    answer_b: 'bool[]', 
    answer_c: 'int', 
    answer_d: 'BitArray'
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "C#"
},
{
  question: "Какой тип данных занимает больше всего места в памяти?",
  answers: {
    answer_a: 'bool', 
    answer_b: 'decimal', 
    answer_c: 'char', 
    answer_d: 'int'
  },
  correct_answer: "answer_b",
  difficulty: "Hard",
  category: "C#"
},
{
  question: "Какое значение по умолчанию у ссылочного типа?",
  answers: {
    answer_a: 'null', 
    answer_b: '0', 
    answer_c: 'такого значения нет, это понятие можно отнести только к значимым типам', 
    answer_d: 'это пустая ссылка, но специального обозначения такая ссылка не имеет'
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "C#"
},
{
  question: "Какое утверждение верно?",
  answers: {
    answer_a: 'Константой может быть тип string', 
    answer_b: 'Константой не может быть тип char', 
    answer_c: 'Константой не может быть null', 
    answer_d: 'Значение константы можно менять в конструкторе'
  },
  correct_answer: "answer_d",
  difficulty: "Hard",
  category: "C#"
},
{
  question: "От какого класса наследуются все типы в С#?",
  answers: {
    answer_a: 'От класса object', 
    answer_b: 'От null', 
    answer_c: 'Oт string', 
    answer_d: 'В С# нет типа, который являлся бы базовым для всех'
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "C#"
},
{
  question: "Укажите верное утверждение о перечислении",
  answers: {
    answer_a: 'У перечисления может быть тип значения string', 
    answer_b: 'По умолчанию типом значений для enum является тип float', 
    answer_c: 'По умолчанию типом значений для enum является тип int', 
    answer_d: 'У перечисления могут быть методы и конструкторы'
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "C#"
},
{
  question: "Дан участок кода: int i = 5;* '¡ += 2; Чему будет равно значение переменной і?",
  answers: {
    answer_a: '7', 
    answer_b: '2', 
    answer_c: '5', 
    answer_d: '9'
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "C#"
},
{
  question: "Какое из утверждений верно?",
  answers: {
    answer_a: 'Необязательные параметры могут быть только типа int', 
    answer_b: 'Необязательный параметр имеет значение по умолчанию', 
    answer_c: 'Необязательных параметров может быть не больше двух', 
    answer_d: 'Необязательные параметры обязательно надо указывать перед обязательными'
  },
  correct_answer: "answer_b",
  difficulty: "Hard",
  category: "C#"
},
{
  question: "Что такое Куча",
  answers: {
    answer_a: 'Область динамической памяти', 
    answer_b: 'Именованная область памяти', 
    answer_c: 'Куча переменных', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "C#"
},

//C++
//C++ easy
{
  question: "Как реализуется механизм виртуальных функций в языке С++?",
  answers: {
    answer_a: 'С помошью информации о типе во время выполнения программ', 
    answer_b: 'С помощью специальных таблиц компилятора', 
    answer_c: 'Каждый объект, имеющий виртуальныйфункции, содержит указатель на таблицу виртуальных функций, относящуюся к данному объекту', 
    answer_d: 'Каждый объект содержит указатель на таблицу виртуальных функций'
  },
  correct_answer: "answer_c",
  difficulty: "Easy",
  category: "C++"
},
{
  question: "Как проверить, что 4-й бит целочисленной переменной X равен 1?",
  answers: {
    answer_a: 'if ( XI (1&lt&lt4) )', 
    answer_b: 'if ( X^ (1&lt&lt4) )', 
    answer_c: 'if ( X&(1&lt&lt4) )', 
    answer_d: null
  },
  correct_answer: "answer_c",
  difficulty: "Easy",
  category: "C++"
},
{
  question: "Можно ли перегружать арифметические операции для классов?",
  answers: {
    answer_a: 'Можно', 
    answer_b: 'Можно, но только некоторые из них', 
    answer_c: 'Нельзя', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Easy",
  category: "C++"
},
{
  question: "Скомпилируется ли такой фрагмент кода? 'class A {A0; } B;' ",
  answers: {
    answer_a: 'Да, всё в порядке', 
    answer_b: 'Нет, потому что тело конструктора не определено', 
    answer_c: 'Нет, потому что нельзя объявить переменную класса сразу после его объявления', 
    answer_d: 'Нет, потому что конструктор получился приватный и его нельзя использовать вне класса'
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "C++"
},
{
  question: "Что такое бесконечный цикл?",
  answers: {
    answer_a: 'Цикл, при выполнении которого программа зависает', 
    answer_b: 'Цикл, условие выполнения которого всегда истинно', 
    answer_c: 'Цикл, который будет выполняться всё время, пока программа работает', 
    answer_d: null
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "C++"
},
{
  question: "Какой цикл выполняется, если количество итераций заранее известно?",
  answers: {
    answer_a: 'while', 
    answer_b: 'do-while', 
    answer_c: 'if', 
    answer_d: 'for'
  },
  correct_answer: "answer_d",
  difficulty: "Easy",
  category: "C++"
},
{
  question: "Как объявить массив из 5 элементов типа int?",
  answers: {
    answer_a: 'array[5];', 
    answer_b: 'int[5] array;', 
    answer_c: 'int array[5];', 
    answer_d: 'array&ltint&gt(5);'
  },
  correct_answer: "answer_c",
  difficulty: "Easy",
  category: "C++"
},
{
  question: "Как добавить элемент в конец вектора?",
  answers: {
    answer_a: 'v.add(element);', 
    answer_b: 'v.insert(element);', 
    answer_c: 'v.append(element);', 
    answer_d: 'v.push_back(element);'
  },
  correct_answer: "answer_d",
  difficulty: "Easy",
  category: "C++"
},
{
  question: "Как объявить указатель на тип int с именем 'ptr'?",
  answers: {
    answer_a: 'ptr = int*;', 
    answer_b: 'int ptr;', 
    answer_c: 'int* ptr;', 
    answer_d: 'ptr = int'
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "C++"
},
{
  question: "Какой оператор используется для вывода на экран?",
  answers: {
    answer_a: '&gt&gt', 
    answer_b: '&lt&lt', 
    answer_c: '/', 
    answer_d: '*'
  },
  correct_answer: "answer_b",
  difficulty: "Easy",
  category: "C++"
},

//C++ medium
{
  question: "Класс, находящийся в основе иерархии, называется",
  answers: {
    answer_a: 'Шаблонным', 
    answer_b: 'Статическим', 
    answer_c: 'Виртуальным', 
    answer_d: 'Базовым'
  },
  correct_answer: "answer_d",
  difficulty: "Medium",
  category: "C++"
},
{
  question: "Сколько раз выполнится следующий цикл? for (int i = 7; i &gt 1; i -= 2)",
  answers: {
    answer_a: 'Это бесконечный цикл', 
    answer_b: '2', 
    answer_c: '3', 
    answer_d: '4'
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "C++"
},
{
  question: "Сколько раз выполнится следующий цикл? for (int i = 3; i &lt 10; i++)",
  answers: {
    answer_a: 'Это бесконечный цикл', 
    answer_b: '7', 
    answer_c: '6', 
    answer_d: '8'
  },
  correct_answer: "answer_b",
  difficulty: "Medium",
  category: "C++"
},
{
  question: "С помощью какого оператора можно обратиться к элементу массива по его индексу?",
  answers: {
    answer_a: '.', 
    answer_b: ':', 
    answer_c: '-&gt', 
    answer_d: '[]'
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "C++"
},
{
  question: "Класс, имеющий абстрактные методы, называется",
  answers: {
    answer_a: 'Абстрактным', 
    answer_b: 'Неполным', 
    answer_c: 'Статическим', 
    answer_d: 'Виртуальным'
  },
  correct_answer: "answer_a",
  difficulty: "Medium",
  category: "C++"
},
{
  question: "Определение шаблона для конкретного типа параметра называется",
  answers: {
    answer_a: 'Специализация', 
    answer_b: 'Параметризация', 
    answer_c: 'Инстанциирование', 
    answer_d: 'Перегрузка'
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "C++"
},
{
  question: "Создателем языка С++ является",
  answers: {
    answer_a: 'Ларри Пейдж', 
    answer_b: 'Джефф Безос', 
    answer_c: 'Бьёрн Страуструп', 
    answer_d: 'Ларри Эллисон'
  },
  correct_answer: "answer_c",
  difficulty: "Medium",
  category: "C++"
},
{
  question: "Ссылка на переменную это:",
  answers: {
    answer_a: 'Строка, содержащая имя переменной и ее значение', 
    answer_b: 'Защитный механизм для предотвращения переполнения типа', 
    answer_c: 'Внутреннее название переменной, используемое компилятором', 
    answer_d: 'Альтернативный идентификатор этой переменной'
  },
  correct_answer: "answer_d",
  difficulty: "Medium",
  category: "C++"
},
{
  question: "Каким образом можно преобразовать указатель на переменную полиморфного класса А в указатель на переменную полиморфного класса В с проверкой корректности во время выполнения программы?",
  answers: {
    answer_a: 'static_cast', 
    answer_b: 'dynamic_cast', 
    answer_c: 'reinterpret_cast', 
    answer_d: 'const_cast'
  },
  correct_answer: "answer_b",
  difficulty: "Medium",
  category: "C++"
},
{
  question: "Какие преобразования, кроме C-style cast, могут быть использованы для преобразования указателя в целое число (int)?",
  answers: {
    answer_a: 'const_cast', 
    answer_b: 'static_cast', 
    answer_c: 'dynamic_cast', 
    answer_d: 'reinterpret_cast'
  },
  correct_answer: "answer_d",
  difficulty: "Medium",
  category: "C++"
},

//C++ hard
{
  question: "Какой уровень доступа по умолчанию применяется для полей класса?",
  answers: {
    answer_a: 'volatile', 
    answer_b: 'protected', 
    answer_c: 'private', 
    answer_d: 'public'
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "C++"
},
{
  question: "Какая из этих операций вернет признак нечетности беззнакового целого числа х?",
  answers: {
    answer_a: 'X &gt&gt 1', 
    answer_b: 'X || 3', 
    answer_c: 'x&&1', 
    answer_d: 'x&1'
  },
  correct_answer: "answer_d",
  difficulty: "Hard",
  category: "C++"
},
{
  question: "Сколько классов может быть описано в одном заголовочном файле?",
  answers: {
    answer_a: 'сколько угодно', 
    answer_b: 'один', 
    answer_c: 'зависит от программы, в которой используется этот заголовочный файл', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "C++"
},
{
  question: "Каким ключевым словом нужно воспользоваться, чтобы создать внутри функции локальную переменную, не теряющую значение между вызовами этой функции?",
  answers: {
    answer_a: 'abstract', 
    answer_b: 'static', 
    answer_c: 'extern', 
    answer_d: 'volatile'
  },
  correct_answer: "answer_b",
  difficulty: "Hard",
  category: "C++"
},
{
  question: "Какое из этих средств С++ предназначено для поддержки полиморфизма?",
  answers: {
    answer_a: 'виртуальные функции', 
    answer_b: 'спецификаторы доступа', 
    answer_c: 'friend-классы', 
    answer_d: null
  },
  correct_answer: "answer_a",
  difficulty: "Hard",
  category: "C++"
},
{
  question: "Какое ключевое слово используется для генерации исключений?",
  answers: {
    answer_a: 'catch', 
    answer_b: 'throw', 
    answer_c: 'exception', 
    answer_d: 'try'
  },
  correct_answer: "answer_b",
  difficulty: "Hard",
  category: "C++"
},
{
  question: "Поток ввода/вывода в C++",
  answers: {
    answer_a: 'является стандартным средством для работы с файлами', 
    answer_b: 'нужно обязательно закрывать после использования', 
    answer_c: 'это переменная базового типа разных "поток" ', 
    answer_d: 'это объект одного из специальных библиотечных классов'
  },
  correct_answer: "answer_d",
  difficulty: "Hard",
  category: "C++"
},
{
  question: "Как размещается в памяти строка, заданная через литерал 'abcdefg'?",
  answers: {
    answer_a: 'семь unicode-кодов символов, организованные в виде бинарного дерева', 
    answer_b: 'семь байтов кодов символов и затем код 0', 
    answer_c: 'семь байтов с кодами символов a,b,c,d,e,f,g', 
    answer_d: 'семь байтов с кодами символов и затем два байта с длиной строки'
  },
  correct_answer: "answer_b",
  difficulty: "Hard",
  category: "C++"
},
{
  question: "Чем структура (struct) отличается от класса (class)?",
  answers: {
    answer_a: 'она поддерживает только public-наследование', 
    answer_b: 'у нее нет конструктора и деструктора', 
    answer_c: 'ее поля по умолчанию имеют доступ public', 
    answer_d: 'она подходит для работы с двоичными данными'
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "C++"
},
{
  question: "Некий класс поддерживает операции инкремента и декремента, какие из этих операций в большинстве случаев будут выполняться быстрее, префиксные или постфиксные?",
  answers: {
    answer_a: 'постфиксные', 
    answer_b: 'одинаково', 
    answer_c: 'префиксные', 
    answer_d: null
  },
  correct_answer: "answer_c",
  difficulty: "Hard",
  category: "C++"
},
]


console.log(questionArr);



const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");



const progress = (value) => {
    const percentage = (value / time) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.innerHTML = `${value}`;
};

let questions = [],
    time = 30,
    score = 0,
    currentQuestion,
    timer;


const startBtn = document.querySelector(".start"),
    numQuestions = document.querySelector('#num-questions'),
    category = document.querySelector('#category'),
    difficulty = document.querySelector('#difficulty'),
    timePerQuestion = document.querySelector('#time'),
    quiz = document.querySelector('.quiz'),
    startscreen = document.querySelector('.start-screen');

const startQuiz = () => {
    const num = numQuestions.value;
    cat = category.value;
    diff = difficulty.value;
    loadingAnimation();
    //api url

    

    
    let i = 0;
    questionArr.forEach(item => {
      if (item.category == cat && item.difficulty == diff  && i < num ) {
        questions.push(item);
        i++;
      }
    });
    questions.sort(() => Math.random() - 0.5);
    console.log(questions)
    setTimeout(() => {
      startscreen.classList.add("hide");
      quiz.classList.remove("hide");
      currentQuestion = 1;
      showQuestion(questions[0]);
    }, 1000);

    
    // const YOUR_API_KEY = 'UcIUK3bGAsgs1XlsxJODNWWKVPGos3ouL6740zg6'; 
    // const url = `https://quizapi.io/api/v1/questions?apiKey=${YOUR_API_KEY}&category=code&difficulty=${diff}&limit=${num}&tags=${cat}`;
    // fetch(url)
    //     .then((res) => res.json())
    //     .then((results) => {
    //         questions = results;
    //         console.log(questions);
    //         setTimeout(() => {
    //           startscreen.classList.add("hide");
    //           quiz.classList.remove("hide");
    //           currentQuestion = 1;
    //           showQuestion(questions[0]);
    //         }, 1000);
    //     });

    
  
};

startBtn.addEventListener('click', startQuiz);

const showQuestion = (question) => {
    const questionText = document.querySelector(".question");
    answersWrapper = document.querySelector(".answer-wrapper"),
    questionNumber = document.querySelector(".number");
    questionText.innerHTML = question.question;

  let answers = [];
  // console.log(question.answers);
   for (var key in question.answers){
    if (question.answers[key] != null) {
      answers.push(question.answers[key]);
    }
   };
   console.log(answers);
    // const answers = [question.answers.answer_a,
    //      question.answers.answer_b,
    //     question.answers.answer_c,
    //     question.answers.answer_d];

  

    answers.sort(() => Math.random() - 0.5);
    answersWrapper.innerHTML = " ";
    answers.forEach((answer) => {
        answersWrapper.innerHTML += `
        <div class="answer">
        <span><p class="text">${answer}</p></span>
            <span class="checkbox">
                <span class="icon">✓</span>
            </span>
            </div>              
    `;
    });

    questionNumber.innerHTML = `
    Question <span class = "current"> ${
        questions.indexOf(question) + 1
    }</span><span class = "total">/${questions.length}</span>
    `;

const answersDiv = document.querySelectorAll(".answer");
answersDiv.forEach((answer) => {
    answer.addEventListener("click", () => {
        if (!answer.classList.contains("checked")) {
            answersDiv.forEach((answer) => {
                answer.classList.remove("selected");
            }); 
            answer.classList.add("selected");
            submitBtn.disabled = false; 
        }
    });
});

    time = timePerQuestion.value;
    startTimer (time);
};
const startTimer = (time) => {
    timer = setInterval(() => {
      if (time >= 0) {
        progress(time);
        time--;
      } else {
        checkAnswer();
      }
    }, 1000);
  };
  
  const loadingAnimation = () => {
    startBtn.innerHTML = "Загрузка...";
    const loadingInterval = setInterval(() => {
      if (startBtn.innerHTML.length === 10) {
        startBtn.innerHTML = "Загрузка...";
      } else {
        startBtn.innerHTML += ".";
      }
    }, 500);
  };
  const submitBtn = document.querySelector(".submit"),
    nextBtn = document.querySelector(".next");
  submitBtn.addEventListener("click", () => {
    checkAnswer();
  });
  
  
  nextBtn.addEventListener("click", () => {
    nextQuestion();
    submitBtn.style.display = "block";
    nextBtn.style.display = "none";
  });
  
  const checkAnswer = () => {
    clearInterval(timer);
    const selectedAnswer = document.querySelector(".answer.selected");
    if (selectedAnswer) {
      
      const answer = selectedAnswer.querySelector(".text").innerHTML;
      console.log(currentQuestion);
      console.log("Выбранный ответ: " + answer);
      
      //В этой функции идет поиск правильного ответа и обьекта correct_answers где значения в виде булевого типа и потом сравнение с ответами 
      // const searchCorrectAnswer = (questionArray) => {
      //   let numberCorAns = 0;
      //   let numberSelAns = 0;
      //   for (var item in questionArray.correct_answers){
          
      //     if (questionArray.correct_answers[item] === "true"){
      //       console.log("Правильный ответ: " + item + " под помером: " + numberCorAns);
      //       break;
      //       // return numberCorAns; 
      //     }
      //     else {
      //       numberCorAns++;
      //     }
      //   }
      //   for (var item in questionArray.answers){
          
      //     if(numberCorAns == numberSelAns){
            
      //       console.log("Правильный ответ на вопрос: " + questionArray.answers[item]);
      //       return questionArray.answers[item]; 
      //     }
      //     else{
      //       numberSelAns++
      //     }
          
      //   }
      // }
      // searchCorrectAnswer(questions[currentQuestion - 1]);
      // console.log(searchCorrectAnswer(questions[currentQuestion - 1]));
      // if (answer === searchCorrectAnswer(questions[currentQuestion - 1])) {

      if (answer === questions[currentQuestion - 1].answers[questions[currentQuestion - 1].correct_answer]) {

        score++;
        selectedAnswer.classList.add("correct");
      } else {
        selectedAnswer.classList.add("wrong");
        const correctAnswer = document.querySelectorAll(".answer")
          .forEach((answer) => {
            if (
              answer.querySelector(".text").innerHTML ===
              questions[currentQuestion - 1].correct_answers) {
              answers.classList.add("correct");
            }
          });
      }
    } else {
      const correctAnswer = document.querySelectorAll(".answer").forEach((answer) => {
          if (
            answer.querySelector(".text").innerHTML ===
            searchCorrectAnswer(questions[currentQuestion - 1])
          ) {
            answers.classList.add("correct");
          }
        });
    }
    const answersDiv = document.querySelectorAll(".answer");
    answersDiv.forEach((answer) => {
      answer.classList.add("checked");
    });
  
    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
  };
  
  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      currentQuestion++;
      showQuestion(questions[currentQuestion - 1]);
    } else {
      showScore();
    }
  };
  
  const endScreen = document.querySelector(".end-screen"),
    finalScore = document.querySelector(".final-score"),
    totalScore = document.querySelector(".total-score");
  const showScore = () => {
    endScreen.classList.remove("hide");
    quiz.classList.add("hide");
    finalScore.innerHTML = score;
    totalScore.innerHTML = `/ ${questions.length}`;
  };
  
  const restartBtn = document.querySelector(".restart");
  restartBtn.addEventListener("click", () => {
    window.location.reload();
  });

  
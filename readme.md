# rui

<ins>R</ins>eact <ins>UI</ins>

## Что это?

rui — минималистичный ui-kit для React, использующий [`styled-components`](https://styled-components.com/).

## Без гарантий

Делаю для себя, в свободное от работы время. Никаких гарантий.

## Что есть/планируется?

### Сетка

- [X] Wrapper
- [X] Row
- [ ] Column
- [ ] Grid

### Форма

- [X] Button
- [X] TextField

### Хелперы

- [ ] TransitionWrapper

### Прочее

- [ ] Table

## Особенности

### data-semantics

Для улучшения DX, в сгенерированной разметке корневым элементам добавляется атрибут `data-semantics` с именем компонента.

```html
<div data-semantics="Wrapper" class="sc-bdvvtL kERQPB sc-gKclnd eKXkat">
  <div data-semantics="TextField" class="sc-gsDKAQ dFzOKQ sc-iCfMLu emiMzE">
    <label for="2581fde8-7424-42de-8519-07669d2b8de6" class="sc-dkPtRN dQQzmy">
      Электронная почта
    </label>
    <input id="2581fde8-7424-42de-8519-07669d2b8de6" class="sc-hKwDye lbVboK" value=""></div>
  <button data-semantics="Button" class="sc-jRQBWg kcflkU" type="button">Отправить</button>
</div>
```

### formatCSSUnit

Мне нравятся единицы `rem`. Считаю с ними удобно масштабировать интерфейс.
Поэтому, если передавать в значения числа, по-умолчанию это будут `rem`-единицы.

При работе с макетами могут понадобиться `px`, но хочется сохранить способности `rem`-единиц.
Достаточно необходимое кол-во `px` разделить на размер шрифта документа. 
Чтобы делать это более удобно, можно передавать строку в формате `24/16`,
например в данном случаи результатом будет `1.5rem`.

Другие единицы необходимо передавать явно строкой.

### Стилизация дочерних компонентов средствами `styled-components`

Для многосоставных компонентов, помимо самого корневого компонента, экспортируются все его составные части,
что позволяет напрямую переопределять их стили средствами `styled-components`.

Например, компонент `TextField` состоит из `TextFieldLabel`, `TextFieldInput`, `TextFieldError` и `TextFieldRoot`.
TextFieldRoot не экспортируется, так как это корневой элемент и на него стилизация и так попадёт через `className`.

```jsx
import React from 'react';
// Импортируем TextField, и его составную часть TextFieldInput (<input>)
import TextField, { TextFieldInput } from '@/components/ui/TextField';

// Стилизация корневого элемента TextField
const EmailTextField = styled(TextField)`
  margin-bottom: 32px;

  /* Стилизация TextFieldInput в компоненте TextField */
  ${TextFieldInput} {
    color: 'yellow';
  }
`;

function App() {
  return (
    <div>
      <EmailTextField label="Электронная почта" />
      <Button>Отправить</Button>
    </div>
  );
}
```

### Компоненты

## Todo

Опубликовать на `npm` как будут готовы базовые компоненты

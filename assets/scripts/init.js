import buttons from './buttons.js';

function init() {
  let keyboardButton;
  const keyboardWrap = document.createElement('div');
  keyboardWrap.className = 'keyboard__wrap';
  const keyboardRowWrap0 = document.createElement('div');
  keyboardRowWrap0.className = 'keyboard-row';
  const keyboardRowWrap = document.createElement('div');
  keyboardRowWrap.className = 'keyboard-row';
  const keyboardRowWrap2 = document.createElement('div');
  keyboardRowWrap2.className = 'keyboard-row';
  const keyboardRowWrap3 = document.createElement('div');
  keyboardRowWrap3.className = 'keyboard-row';
  const keyboardRowWrap5 = document.createElement('div');
  keyboardRowWrap5.className = 'keyboard-row';
  Object.values(buttons).forEach(obj => {
    if (obj.row === 1) {
      keyboardButton = document.createElement('div');
      keyboardButton.className = 'keyboard__button';
      keyboardButton.innerText = obj.name;
      keyboardButton.style.width = obj.width;
      keyboardButton.setAttribute('value', obj.name);
      keyboardRowWrap0.append(keyboardButton);
    }
    if (obj.row === 2) {
      keyboardButton = document.createElement('div');
      keyboardButton.className = 'keyboard__button';
      keyboardButton.innerText = obj.name;
      keyboardButton.style.width = obj.width;
      keyboardButton.setAttribute('value', obj.name);
      keyboardRowWrap.append(keyboardButton);
    }
    if (obj.row === 3) {
      keyboardButton = document.createElement('div');
      keyboardButton.className = 'keyboard__button';
      keyboardButton.innerText = obj.name;
      keyboardButton.style.width = obj.width;
      keyboardButton.setAttribute('value', obj.name);
      keyboardRowWrap2.append(keyboardButton);
    }
    if (obj.row === 4) {
      keyboardButton = document.createElement('div');
      keyboardButton.className = 'keyboard__button';
      keyboardButton.innerText = obj.name;
      keyboardButton.style.width = obj.width;
      keyboardButton.setAttribute('value', obj.name);
      keyboardRowWrap3.append(keyboardButton);
    }
    if (obj.row === 5) {
      keyboardButton = document.createElement('div');
      keyboardButton.className = 'keyboard__button';
      keyboardButton.innerText = obj.name;
      keyboardButton.style.width = obj.width;
      keyboardButton.setAttribute('value', obj.name);
      keyboardRowWrap5.append(keyboardButton);
    }
  });
  const textEditor = document.createElement('textarea');
  textEditor.className = 'text__editor';
  textEditor.placeholder = 'Клавиатура создана в операционной системе Windows\nДля переключения языка комбинация: shift + alt';
  textEditor.autofocus = true;
  //stextEditor.value = '';
  const title = document.createElement('h1');
  title.className = 'title';
  title.innerHTML = 'Virtual keyboard';
  keyboardWrap.append(title);
  keyboardWrap.append(textEditor);
  keyboardWrap.append(keyboardRowWrap0);
  keyboardWrap.append(keyboardRowWrap);
  keyboardWrap.append(keyboardRowWrap2);
  keyboardWrap.append(keyboardRowWrap3);
  keyboardWrap.append(keyboardRowWrap5);
  document.body.append(keyboardWrap);
}

export default init;

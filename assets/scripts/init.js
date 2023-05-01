import buttons from './buttons.js';

function init() {
  console.log('test');
  console.log('button' + buttons.length);
  alert('Если есть возможность проверить в четверг, то попрошу проверить в четверг, хочу успеть что-то сделать. Спасибо');
  let keyboardButton;
  const keyboardWrap = document.createElement('div');
  keyboardWrap.className = 'keyboard__wrap';
  const keyboardRowWrap = document.createElement('div');
  keyboardRowWrap.className = 'keyboard-row';
  const keyboardRowWrap2 = document.createElement('div');
  keyboardRowWrap2.className = 'keyboard-row';
  const keyboardRowWrap3 = document.createElement('div');
  keyboardRowWrap3.className = 'keyboard-row';
  Object.values(buttons).forEach(obj => {
    console.log('name: ' + obj.name);
    if (obj.row === 1) {
      keyboardButton = document.createElement('div');
      keyboardButton.className = 'keyboard__button';
      keyboardButton.innerText = obj.name;
      keyboardRowWrap.append(keyboardButton);
    }
    if (obj.row === 2) {
      keyboardButton = document.createElement('div');
      keyboardButton.className = 'keyboard__button';
      keyboardButton.innerText = obj.name;
      keyboardRowWrap2.append(keyboardButton);
    }
    if (obj.row === 3) {
      keyboardButton = document.createElement('div');
      keyboardButton.className = 'keyboard__button';
      keyboardButton.innerText = obj.name;
      keyboardRowWrap3.append(keyboardButton);
    }
  });
  keyboardWrap.append(keyboardRowWrap);
  keyboardWrap.append(keyboardRowWrap2);
  keyboardWrap.append(keyboardRowWrap3);
  document.body.append(keyboardWrap);
}

export default init;

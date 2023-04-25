function buttons() {
  const firstRow = ['Tab', 'Q', 'W','E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'];
  const secondRow = ['Tab', 'Q', 'W','E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'];
  let keyboardButton;
  const keyboardWrap = document.createElement('div');
  keyboardWrap.className = 'keyboard__wrap';
  const keyboardRowWrap = document.createElement('div');
  keyboardRowWrap.className = 'keyboard-row';
  const keyboardRowWrap2 = document.createElement('div');
  keyboardRowWrap2.className = 'keyboard-row';
  for (let i = 0; i < firstRow.length; i++) {
    keyboardButton = document.createElement('div');
    keyboardButton.className = 'keyboard__button';
    keyboardButton.innerText = firstRow[i];
    keyboardRowWrap.append(keyboardButton);
  }
  for (let i = 0; i < secondRow.length; i++) {
    keyboardButton = document.createElement('div');
    keyboardButton.className = 'keyboard__button';
    keyboardButton.innerText = secondRow[i];
    keyboardRowWrap2.append(keyboardButton);
  }
  keyboardWrap.append(keyboardRowWrap);
  keyboardWrap.append(keyboardRowWrap2);
  document.body.append(keyboardWrap);
}

export default buttons;

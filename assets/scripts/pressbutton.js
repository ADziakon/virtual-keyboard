function pressbutton() {
  console.log('test-pressbutton');
  const pressButton = document.querySelector('.keyboard__wrap');
  const textEditor = document.getElementById('textarea');

  pressButton.addEventListener('click', (event) => {
    const valueButton = event.target.getAttribute('value');
    console.log(valueButton);
    if (!valueButton) return;
    const char = valueButton;
    console.log('key: ' + char);
    textEditor.value += char;
    textEditor.focus();
  });
}
export default pressbutton;

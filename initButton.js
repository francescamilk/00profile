const button = document.querySelector('.button');
const text = document.querySelector('.text');

button.addEventListener('click', () => {
  if (text.innerHTML === "<h1>Hi, my name is Francesca! <br> I'm a fullstack developer and...<br></h1><p>(1/2)</p>") {
    text.innerHTML = "<h1>now I know JavaScript and have to complete the text. Ouch!<br></h1><p>(2/2)</p>";
  } else {
    text.innerHTML = "<h1>Hi, my name is Francesca! <br> I'm a fullstack developer and...<br></h1><p>(1/2)</p>";
  }
});

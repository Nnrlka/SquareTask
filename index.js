let btn = document.createElement('button');
btn.textContent = 'Открытть квадрат';
document.body.appendChild(btn);

let box = document.createElement('div');
box.className = 'square';
box.style.backgroundColor = 'red';
let isRed = true;

btn.onclick = () => {
  box.style.display = 'block';
  document.body.appendChild(box);
};

box.onclick = () => {
  if (isRed) {
    box.style.backgroundColor = 'blue';
    isRed = false;
  } else {
    box.style.backgroundColor = 'red';
    isRed = true;
  }
};

const header = document.querySelector("h3");
const number = header.textContent.length;
const buttons = document.querySelectorAll('.ripple')

header.style.setProperty("--animation-style", `steps(${number})`);
buttons.forEach(button => {
  button.addEventListener('click', function(e){
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const positionTop = y - buttonTop;
    const positionLeft = x - buttonLeft;

    circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = positionTop + 'px';
    circle.style.left = positionLeft + 'px';
    e.target.appendChild(circle)

    setTimeout(() => circle.remove(), 500);

  })
})

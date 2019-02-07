const triggers = document.querySelectorAll('.navbar__menu-linksCont > li');
const background  = document.querySelector('.dropdownBackground');

const card  = document.querySelector('.dropdownBackground__card');
const arrow = document.querySelector('.dropdownBackground__arrow');
const nav  = document.querySelector('.navbar');


 function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 200);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top:dropdown.offsetTop ,
      left: dropdown.offsetLeft
    };



    card.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('width', `${coords.width}px`);
    card.style.setProperty('height', `${coords.height}px`);

    background.style.setProperty('left', `${coords.left}px`)

    card.classList.add('active');
    arrow.classList.add('active');

    //background.style.setProperty('transform', `translate(-5px, ${coords.top}px)`);




    //background.style.setProperty('clip-path', `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`)
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');

  setTimeout(()=>{
    card.classList.remove('active');
  	arrow.classList.remove('active');
  },1000);

    //card.style.setProperty('clip-path', `polygon(0% 0%, 100% 0%, 95% 95%, 5% 95%)`);

  }


triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

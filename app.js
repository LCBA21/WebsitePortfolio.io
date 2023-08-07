const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const nav=document.querySelectorAll('nav ul li a');
const paragraph=document.querySelectorAll('p')
const innertext=document.querySelectorAll('div ul li')
// const nav1=document.getElementById('nav-dark ul li');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';

        nav.forEach((a) => {
            a.classList.add('list-item')
        })

        paragraph.forEach((p) => {
            p.classList.add('list-item')
        })

        innertext.forEach((li) => {
            li.classList.add('list-item')
        })
        
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }


});
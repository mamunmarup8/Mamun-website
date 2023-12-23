//toggle class active
const navbarNav = document.querySelector('.navbar-nav');
const dorpdowns = document.querySelectorAll('.dropdown');

//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = ( ) => {
    navbarNav.classList.toggle('active');
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

//ulangi ke semua elemen dropdown
dorpdowns.forEach(dropdown => {
    
    //get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected= dropdown.querySelector('.selected');

    //add a click event to the select element
    select.addEventListener('click', () => {
        //add the clicked select styles to the select element
        select.classList.toggle('select-clicked');
        //add the rotate styles to caret element
        caret.classList.toggle('caret-rotate');
        //add the open styles to the menu element
        menu.classList.toggle('menu-open');
    });

    //loop through all option element
    options.forEach(option => {
        //add click event to the option element
        option.addEventListener('click', () => {
            //change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            //add the clicked select styles to the select element
            select.classList.remove('select-clicked');
            //add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            //add the open styles to the menu element
            menu.classList.remove('menu-open');
            //remove active class from all option elements
            option.forEach(option => {
                option.classList.remove('active');
            });
            //add active class to clicked option element
            option.classList.add('active');
        });
    });
});
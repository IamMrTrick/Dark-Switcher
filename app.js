// Dark mode varibales 
const d_Swticher = document.querySelector('.tr-dark-switcher');
const d_Body = document.querySelector('body');

if (localStorage.getItem('darkStatus') == null) {
    
    // this is dark first option you can change it to the "light"
    localStorage.setItem('darkStatus','dark');
    d_Swticher.classList.add('activated');
    d_Body.setAttribute('darkmode', 'dark');
    

} else {
    if (localStorage.getItem('darkStatus') == 'dark') {

        d_Swticher.classList.add('activated');
        d_Body.setAttribute('darkmode', 'dark');

    } else {

        d_Swticher.classList.remove('activated');
        d_Body.setAttribute('darkmode', 'light');

    }
}

//Darkmode function
d_Swticher.addEventListener('click', function(){

    console.log('I clicked!');

    if (localStorage.getItem('darkStatus') == 'dark') {

        console.log('first if runned');
        localStorage.setItem('darkStatus','light');
        d_Swticher.classList.remove('activated');
        d_Body.setAttribute('darkmode', 'light');

    } else {
        
        console.log('sec if runned');
        localStorage.setItem('darkStatus','dark');
        d_Swticher.classList.add('activated');
        d_Body.setAttribute('darkmode', 'dark');

    }
})


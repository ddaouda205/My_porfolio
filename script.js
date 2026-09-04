
let button = document.querySelector('#mode');
span = document.getElementByID('#theme')


if (localStorage.getItem('theme')){
    if(localStorage.getItem('theme') === 'sombre'){
        modeSombre();
    }
}


button.addEventListener('click', () => {
    if(document.body.classList.contains('dark')) {
        document.body.classList='';
        span.textContent = 'Thème sombre'
        let theme = localStorage.setItem('theme', 'clair');
    }else{
        modeSombre();
    }
})

function modeSombre(){
    document.body.classList.add('dark');
    span.textContent = 'Thème clair';
    let theme = localStorage.setItem('theme', 'sombre');
}


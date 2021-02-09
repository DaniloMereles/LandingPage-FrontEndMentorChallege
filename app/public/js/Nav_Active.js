const navActive = ()=>{
    let hamburger = document.getElementById('hamburger')
    let navPages = document.getElementById('navPages')

    hamburger.addEventListener('click', ()=>{
        navPages.classList.toggle('active')

        if(navPages.className == 'navbar__pages active'){
            hamburger.innerHTML = `
                <img src="./app/public/img/icon-close.svg"/>
            `
        }else{
            hamburger.innerHTML = `
                <img src="./app/public/img/icon-hamburger.svg"/>
            `
        }
    })
}

navActive()
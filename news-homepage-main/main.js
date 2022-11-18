const navbar = document.getElementById('navBar');
const navBarUl = document.getElementById('navBarUl');
const navbarClose = document.getElementById('navBarClose');
const containerOverflow = document.getElementById('containerOverflow');

navbar.addEventListener("click", () => {
    document.getElementById("navBarUl").style.display = 'block'
})


navbarClose.addEventListener("click", () => {
    document.getElementById("navBarUl").style.display = 'none'
    
})











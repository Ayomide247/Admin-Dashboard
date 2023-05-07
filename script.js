const menuBtn = document.getElementById('menu-btn')
const sideBar = document.querySelector('.sidemenu')
const sideBarOverlay = document.querySelector('.sidebar-overlay')



// -----------Menu Button-----------------//
const toggleSideNav = () => sideBar.classList.toggle('-translate-x-96')

menuBtn.addEventListener('click', () => toggleSideNav())
sideBarOverlay.addEventListener('click', () => toggleSideNav())










// const profile = document.getElementById('profile')
// const check = document.getElementById('check')

// profile.addEventListener('mouseover', () => {
//     // console.log(check)
//     if (profile === 'mouseover') {
        
//         check.classList.add('hidden')
//     }
// })
const navBtn = document.getElementById('nav-btn');
const navigation = document.getElementById('navigation');
const navTitle = document.getElementsByClassName('title'); // [dom, dom, dom, dom]
let switchNav = false; // false -> 代表小尺寸; true -> 代表大尺寸;
navBtn.onclick = () => {
    if (switchNav) {
        navigation.className = 'nav-size-small';
        for(let i = 0; i < navTitle.length; i++) {
            navTitle[i].style.opacity = '0';
        }
    } else {
        navigation.className = 'navigation-box';
        for(let i = 0; i < navTitle.length; i++) {
            navTitle[i].style.opacity = '1';
        }
    }
    switchNav = !switchNav;
}
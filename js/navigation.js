const navBtn = document.getElementById('nav-btn');
const Ts1 = document.getElementById('hotel');
const Tips1 = document.getElementById('tips-1');
const Tips = document.getElementsByClassName('tips');
const navigation = document.getElementById('navigation');
const navTitle = document.getElementsByClassName('title'); // [dom, dom, dom, dom]
let switchNav = false; // false -> 代表小尺寸; true -> 代表大尺寸;
for(let i = 0; i < Tips.length; i++) {
    Tips[i].style.opacity = '0';
}
Ts1.onmousemove= () =>{
    Tips1.style.opacity="1";
}
Ts1.onmouseleave = () =>{
    
    Tips1.style.opacity="0";
}
navBtn.onclick = () => {
    if (switchNav) {
        navigation.className = 'nav-size-small';
        for(let i = 0; i < navTitle.length; i++) {
            navTitle[i].style.opacity = '0';
        }
        navigation.onmouseleave = () =>{
            navigation.className = 'nav-size-small';
            for(let i = 0; i < navTitle.length; i++) {
                navTitle[i].style.opacity = '0';
            }
        }
        navigation.onmouseover = () =>{
        navigation.className = 'navigation-box';
        for(let i = 0; i < navTitle.length; i++) {
            navTitle[i].style.opacity = '1';
        }   
        }
    } else {
        navigation.className = 'navigation-box';
        for(let i = 0; i < navTitle.length; i++) {
            navTitle[i].style.opacity = '1';
        }
        navigation.onmouseleave = () =>{
            navigation.className = 'navigation-box';
            
        }
        navigation.onmouseover = () =>{
        navigation.className = 'navigation-box';
                
        }
    }
    switchNav = !switchNav;
}
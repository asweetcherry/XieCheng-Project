const navBtn = document.getElementById('nav-btn');
const Ts1 = document.getElementById('hotel');
const Ts2 = document.getElementById('plane');
const Ts3 = document.getElementById('train');
const Ts4 = document.getElementById('travel');
const Ts5 = document.getElementById('boat');
const Ts6 = document.getElementById('car');
const Ts7 = document.getElementById('ball');
const Ts8 = document.getElementById('card');
const Tips1 = document.getElementById('tips-1');
const Tips2 = document.getElementById('tips-2');
const Tips3 = document.getElementById('tips-3');
const Tips4 = document.getElementById('tips-4');
const Tips5 = document.getElementById('tips-5');
const Tips6= document.getElementById('tips-6');
const Tips7= document.getElementById('tips-7');
const Tips8 = document.getElementById('tips-8');
const Tips = document.getElementsByClassName('tips');
const navigation = document.getElementById('navigation');
const navTitle = document.getElementsByClassName('title'); // [dom, dom, dom, dom]
let switchNav = false; // false -> 代表小尺寸; true -> 代表大尺寸;
const AllTs = [Ts1,Ts2,Ts3,Ts4,Ts5,Ts6,Ts7,Ts8];
const AllTips =[Tips1,Tips2,Tips3,Tips4,Tips5,Tips6,Tips7,Tips8];
for(let i = 0; i < Tips.length; i++) {
    Tips[i].style.opacity = '0';
}
for(let i=0; i<AllTs.length;i++){
        AllTs[i].onmousemove= () =>{
            AllTips[i].style.opacity="1";}
}
for(let i=0; i<AllTs.length;i++){
        AllTs[i].onmouseleave= () =>{
            AllTips[i].style.opacity="0";}
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
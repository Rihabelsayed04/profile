let menuIcon= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
}



//scroll sections 
// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header');
// window.onscroll= ()=>{
//     sections.forEach(sec =>{
//         let top =window.scrollY;
//         let offset = sec.offsetTop -100;
//         let height = sec.offsetHeight;
//         let id =sec.getAttribute('id');
//         if (top >=offset && top <offset + height){
//           //  active navbar links
//           navlinks.forEach(links =>{
//             links.classList.remove('active');
//             document.querySelector('header nav a[href*='+ id+ ']').classList.add('active');

//           })
//         }
//     })
// }
// window.onscroll= () =>{
//     //sticky Header
//     let Header =document.querySelector('');
//     Header.classList.toggle('sticky',window.scrollY > 100);
// }
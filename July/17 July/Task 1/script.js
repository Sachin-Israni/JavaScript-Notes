// let alink = document.getElementsByTagName('a')
let alink = document.querySelectorAll('a')

// function bgc() {
//     if (ele.style.backgroundColor != 'red') {
//         ele.style.backgroundColor = 'red'
//     }
//     else {
//         ele.style.backgroundColor = 'white'
//     }
//     // ele.style.color='red'
// }
// console.log(alink);
// for (i = 0; i <= alink.length; i++ ) {

//     alink[i].style.color = 'red'
// }
// alink.forEach(ele => {
//     ele.addEventListener('click', function bgc() {
//     if (ele.style.backgroundColor != 'red') {
//         ele.style.backgroundColor = 'red'
//     }
//     else {
//         ele.style.backgroundColor = 'white'
//     }
//     // ele.style.backgroundColor='white'
// })
// })

//---------- nav-list color change

alink.forEach(ele =>{
    ele.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active');
        ele.classList.add('active')
    });
});
function fa() {
    document.body.style.backgroundColor='red'
    let logo=document.getElementsByClassName('logo')
    logo[0].style.visibility='hidden'

    let faa=document.getElementById('fa')
    if(faa.innerHTML!='<i class="fa fa-close">'){
        faa.innerHTML='<i class="fa fa-close" onclick="fas()">'
    }
}
function fas() {
    document.body.style.backgroundColor='white'
}
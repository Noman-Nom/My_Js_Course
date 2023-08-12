// method 1
// function msg(){

//     alert('Hy')
// }

// method 2
// const btn = document.getElementById('btn');


// btn.addEventListener('click', function(){

//     alert('Clicked')
// },false)

// method 3

// function msg(){
//     alert("clicked")
// }

// const btn = document.getElementById('btn');

// // koi bhi event par function ko use karwata he addEventListener
// btn.addEventListener('click', msg,true)

// method 4 for react 

// document.getElementById('btn').addEventListener('click',function(){
//         alert("clicked")

// },false)

// multiple evenets in one element

// document.getElementById('btn').addEventListener('click',function(){
//         alert("clicked")

// },false)
// document.getElementById('btn').addEventListener('mouseover',function(){
//      console.log("mouse aya");

// },false)
// document.getElementById('btn').addEventListener('mouseout',function(){
//      console.log("mouse gya");

// },false)

//  detail of "e" perameter

const home = document.getElementById('ulist').addEventListener('click',function(e){

     // console.log(e);   // e = event is se detail milti he k x se or y se kia d/s he etc

          // console.log(e.target.parentNode)
          console.log(e.target.parentNode.parentNode)

})
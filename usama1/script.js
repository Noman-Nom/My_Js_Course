// // ______________________________Method 1__________________________________________________
// function func(){ alert("Clicked")}
// const btn = document.getElementById('btn')
// btn.addEventListener('click',func,false)
// ______________________________Method 2__________________________________________________
// function func(){ alert("Clicked")}
// const btn = document.getElementById('btn')
// btn.addEventListener('click',function(){alert("Clciked")},false)
// ______________________________Method 3__________________________________________________

// function mesg(){alert("Pressed")}
// const btn = document.getElementById('btn')
// btn.addEventListener('click',mesg,false)
// ______________________________Method 4__________________________________________________

// function mesg(){alert("Pressed")}
document.getElementById('btn').addEventListener('click',function(){
    alert("Pushed")
},false)

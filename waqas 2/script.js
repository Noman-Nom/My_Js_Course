// function msg(){

//     alert("clicked")
// }

// project js
function calculate() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const operation = document.getElementById("operation").value;

  //  console.log('clicked')
  // console.log(input1)
  // console.log(input2)
  // console.log(operation)

  if (operation === "+") {
    var result = parseInt(input1) + parseInt(input2);
  }


  else if (operation === "-") {
    var result = parseInt(input1) - parseInt(input2);
  }
   else if (operation === "*") {
    var result = parseInt(input1) * parseInt(input2);
  }
  else if (operation === "/") {
    var result = parseInt(input1) / parseInt(input2);
}

document.getElementById("result1").value= result

}

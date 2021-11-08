import React from 'react'

// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function() {
//     document.getElementById("demo").innerHTML = this.responseText;
//     }
//   xhttp.open("GET", "../data/tester.json", true);
//   xhttp.send();
// }

var Adder = "patrick";

const info = () => {

  localStorage.setItem("name" , Adder);

}

const getter = (e) => {
 return(localStorage.getItem(e))
}



function RouteIf() {

  return(
    <div>
        <h1 ></h1>
    </div>
  );

}
export default RouteIf;
let data;
let service;
$(() => {
  $(".dropdown-menu a").on("click", (event) => {
    service = "";
    for(let i = 0; i < event.target.innerText.length; i++) {
      if(event.target.innerText.charAt(i) === "%")
        break;
      service += event.target.innerText.charAt(i);
    }
    service = parseInt(service) / 100;
    alert("Your tip is " + event.target.innerHTML);
  });
});

window.onload = () => {
  data = fetch("https://theme-api5.herokuapp.com/")
    .then((result) => result.json());
};

function Calculate() {
  let bill = parseInt(document.getElementById("bill").value);
  let people = parseInt(document.getElementById("people").value);

  if (!bill && !service) {
    alert("Please enter value");
    return;
  }

  if (!people) {
    people = 1;

    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  let total = (bill * service) / people;
  // console.log("Bill", bill);
  // console.log("Service", service);
  // console.log("People", people);
  // console.log("Total Tip", total);

  total = Math.round(total * 100) / 100;

  document.getElementById("totaltip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("btnClick").onclick = function () {
  Calculate();
};


const updateCalculator = () => {
    

}



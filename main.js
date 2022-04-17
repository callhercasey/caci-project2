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

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
		'X-RapidAPI-Key': '9c1b8bbd41mshfd023a24cc25282p1933d8jsn51bb237be6a6'
	}
};




fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
  .then(response => response.json())
  .then(response => {
      console.log("Chuck Norris API object:");
      console.log(response);
     
      document.getElementById('joke').innerHTML = response.value;
    
  })
  .catch(err => {
      console.log(err);
  });



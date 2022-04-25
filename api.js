async function getJoke()

await fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', {

	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 
	}
})
  .then(response => response.json())
	.then(response => {
    console.log("Chuck Norris API object");
    console.log(response);
    console.log("\n");

    document.getElementById('joke').innerHTML = response.value;
    document.getElementsByClassName('jokeTitle')[0].href = response.url;
    document.getElementById('jokeIcon').src = response.icon_url;
  })
	.catch(err => console.error(err));


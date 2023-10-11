let joke = document.getElementById('joke');
let button = document.querySelector('button');

let requestUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let GenerateJoke = (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let data = JSON.parse(xhr.responseText);
        console.log(data)
        joke.innerText = data.joke;
    }
};
xhr.send();
}

button.addEventListener('click', GenerateJoke);
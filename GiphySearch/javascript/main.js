
let btn = document.querySelector('button');


btn.addEventListener('click', function(){
    let input = document.querySelector("input").value;
    let div = document.querySelector('.js-container');
    div.innerHTML = "";
    let url = `https://api.giphy.com/v1/gifs/search?api_key=27TVNGfluDKjlqKxvqU6yZDBDRgEflmo&q=${input}`;
    pushToDOM(url);
});

let textBox = document.querySelector('input');
textBox.addEventListener('keyup', function(e){
    let input = document.querySelector("input").value;
    let div = document.querySelector('.js-container');
    div.innerHTML = "";
    if (e.which===13){
    	let url = `https://api.giphy.com/v1/gifs/search?api_key=27TVNGfluDKjlqKxvqU6yZDBDRgEflmo&q=${input}`;;
         pushToDOM(url);    }
    
    
});


function pushToDOM(url){
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();


	GiphyAJAXCall.addEventListener('load', function(e) {

	// your callback events go here 
	let data = e.target.response;
	let response = JSON.parse(data);
	let imges = response.data;

	imges.forEach( function(img) {
		src = img.images.fixed_height.url;
		
		let div = document.querySelector('.js-container');
	    div.innerHTML += `<img src = ${src} class = 'container-image'>`;


	});



	});


};


// import Project from './project';
// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function doThing () {
  const userInput = 'sloth';

  return fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${process.env.API_KEY}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    })
    .then(function (response) {      
      for (let i=0; i < response.data.length; i++){
        console.log(response.data[i].images.original.url);
      }

      console.log(response);
    })
    .catch(function(error) {
      return error;
    });
}

doThing();
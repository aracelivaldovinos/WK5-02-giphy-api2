// import Project from './project';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("#gifSearch").click(function() {
  const userInput = $("#gif").val();

  const url = `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${process.env.API_KEY}&limit=15`;

  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    })
    .then(function (response) {
      for (let item of response.data) {
        const { url } = item.images.original;
        
        console.log(url);
        $('.image-dump').append(`<img src="${url}">`)
      }

    })
    .catch(function(error) {
      return error;
    });
});
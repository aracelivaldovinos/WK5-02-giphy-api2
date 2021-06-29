// import Project from './project';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function doThing () {
  $("#gifSearch").click(function(){
    const userInput = $("#gif").val();
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
      let i = response.data[0].images.original.url
      $("#image1").text(i)
      $("a").attr("href",i)
      $("img").attr("src",i)
      console.log(response);
    })
    .catch(function(error) {
      return error;
    });
    
  })
}



doThing();
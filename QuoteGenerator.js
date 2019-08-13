//Global variable to hold JSON data from ajax call
var result;

//Globals for accessing DOM
var qt = document.getElementById("qtTxt");
var auth = document.getElementById("qtAuth");

function callApi() {
  $.ajax({
    jsonp: "jsonp",
    dataType: "jsonp",
    url: "https://api.forismatic.com/api/1.0/",
    contentType: "application/jsonp",
    data: {
      lang: "en",
      method: "getQuote",
      format: "jsonp"
    },
    success: function(data) {
      console.log(data);
      qt.innerHTML = data["quoteText"];
      auth.innerHTML = data["quoteAuthor"];
    },
    error: function(data) {
      console.log(data);
    }
  });
}

$(document).ready(function() {
  // callApi();
});

/*
**Worked through most of the bugs. 
Moved into styling.
Playing with animation. See CSS for more details.

***End notes. Things to fix;
1 -> Api call storage. I could store the quotes locally, and move back through the quotes as needed.
2 -> a tweet me button.
3 -> most of the fixes will be CSS
*/

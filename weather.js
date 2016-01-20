$(function() {
  var handleWeatherResponse = function(data) {
    // "data" is an object that holds all the information you need. Here, we
    // write it out to the console for easy viewing.
    console.log(data);

    // We also set a window-level variable so we can use it in the console,
    // by typing data
    window.data = data;
    
    // Put your code here. Don't change any other code in this file. You will be sad.

    var markup = 
      "<p><strong>Currently: </strong>" + data.currently.summary + ".<br>" +
      "It feels like <strong>" + data.currently.apparentTemperature + "</strong> Fahrenheit.<br><br>" +

      "<strong>Tomorrow: </strong>" + data.daily.data[1].summary + "<br>" +
      "With a mininumum of " + data.daily.data[1].temperatureMin + " and a maximum of " + data.daily.data[1].temperatureMax + " Fahrenheit.<br><br>" +

      "<strong>The day after tomorrow: </strong>" + data.daily.data[2].summary + "<br>" +
      "With a mininumum of " + data.daily.data[2].temperatureMin + " and a maximum of " + data.daily.data[2].temperatureMax + " Fahrenheit.<br><br>" +

      "<strong>The day after the day after tomorrow: </strong>" + data.daily.data[3].summary + "<br>" +
      "With a mininumum of " + data.daily.data[3].temperatureMin + " and a maximum of " + data.daily.data[3].temperatureMax + " Fahrenheit.</p>";
    
    //var markup = "<p>The weather report... " + "will be here when I finish my homework.</p>";
    // End of your code. No, really. Don't change anything below this, or above line 11.

    // Takes the contents of the "markup" variable (which should contain HTML) 
    // and write it out to the page.
    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
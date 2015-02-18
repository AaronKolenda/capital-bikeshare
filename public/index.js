/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an object containing the data about
    the station at 23rd and Crystal Drive (which is ID "31011")
*/
var localStation = function(callback) {
    $.ajax({

    // URL to retrieve
    url: "/stations",

    // HTTP verb to use
    method: "GET",

    // Function to execute when complete (the callback parameter)
    success: function(data) {

      var station = _.find(data, function(station) {
        if (station.id === "31011") {
          console.log(data.id, data.name);
          return true;
        }
      
      });

      callback(station);
    }

  });

  }


/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an object containing the data about 
    the northernmost station in the Capital Bikeshare system.
  (For simplicity's sake, the northernmost station is the one
    with the highest latitude.)
*/
var northernmostStation = function(callback) {

  $.ajax({

    // URL to retrieve
    url: "/stations",

    // HTTP verb to use
    method: "GET",

    // Function to execute when complete (the callback parameter)
    success: function(data) {

      var station = _.max(data, function(station){ return station.latitude; });
      //return station;

      callback(station);

      }

    });

}

/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an object containing the data about 
    a single, random station in the Capital Bikeshare system.
*/
var randomStation = function(callback) {

    $.ajax({

    // URL to retrieve
    url: "/stations",

    // HTTP verb to use
    method: "GET",

    // Function to execute when complete (the callback parameter)
    success: function(data) {

      var station = _.sample(data);
      //return station;

      callback(station);

      }

    });

  
}


/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an array containing the data about
    any stations in the Capital Bikeshare system that currently have 0 bikes.
*/
var emptyStations = function(callback) {

  $.ajax({

    // URL to retrieve
    url: "/stations",

    // HTTP verb to use
    method: "GET",

    // Function to execute when complete (the callback parameter)
    success: function(data) {

      var station = _.filter(data, function(station){
          if (station.bikes === 0) {
            return true;
          }
      });

      callback(station);

      }

    });
  
}

/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an array containing the data about
    any stations in the Capital Bikeshare system that have been updated
    in the last 15 minutes.
*/
var recentStations = function(callback) {

    $.ajax({

    // URL to retrieve
    url: "/stations",

    // HTTP verb to use
    method: "GET",

    // Function to execute when complete (the callback parameter)
    success: function(data) {

      var station = _.filter(data, function(station){
          if (station.lastUpdate > 1424225700000) {
            return true;
          }
      });

      callback(station);

      }

    });

  
}

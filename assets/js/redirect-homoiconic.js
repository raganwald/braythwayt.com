;(function () {
  
  var location_str = document.location.toString(),
      match_data = location_str.match(/^.*braythwayt.com(.*\.html)/),
      new_location = match_data
                     ? 'http://raganwald.com' + match_data[1]
                     : void(0);
      
  if (new_location) {
    alert("Sorry, this essay has moved to " + new_location + '. I\'m sorry this server can\'t issue a permanent redirect');
    document.location = new_location;
  }
  
})();
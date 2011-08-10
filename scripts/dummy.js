var dummy = (function(){
  var pub = {};
  var categories = ["css","html","javascript","coffeescript","nodejs","ruby","rails","sinatra","haml","sass"];
  var link_text_options = [
      "Something about %replace%",
      "A little more on %replace%",
      "You know, %replace% is cool.",
      "I find that %replace% suites my needs",
      "%replace% is ruining the internet",
      "%replace% is the second coming of the internet",
      "%replace% is at the forefront of Web 3.0",
      "I can't believe people still use %replace%"
  ];

  pub.create = function(){
    var len = categories.length;
    var i=0;
    for(;i<len;i++){
      // need a ul for the category
      var $ul = $("<ul></ul>");
      var num_links = Math.floor(Math.random()*link_text_options.length);
      if(num_links == 0){num_links=1;}
      $ul.attr("data-tag",categories[i]);
      $ul.append("<li class='tag-header'><h4>"+categories[i]+"</h4></li>");
      
      var j =0;
      for(;j<num_links;j++){
          var random_link_index = Math.floor(Math.random()*link_text_options.length);
          $ul.append("<li><a href='#'>"+link_text_options[random_link_index].replace(/%replace%/,categories[i])+"</a></li>");
      }

      // append $ul to a column

      var random_column = Math.floor(Math.random()*4);
      $(".column").eq(random_column).append($ul); 
    }
  }

  return pub;
})();

var dummy = (function(){
  var pub = {};
  var tags = ["css","html","javascript","coffeescript","nodejs","ruby","rails","sinatra","haml","sass"];
  var link_text_options = [
      "Something about %replace%",
      "A little more on %replace%",
      "You know, %replace% is cool.",
      "I find that %replace% suites my needs",
      "%replace% is ruining the internet",
      "%replace% is the second coming of the internet",
      "%replace% is at the forefront of Web 3.0",
      "I can't believe people still use %replace%",
      "Top 10 reasons to use %replace%",
      "Top 11 reasons not to use %replace%",
      "%replace%, what the heck is it?"
  ];

  pub.create = function(){
    var len = tags.length;
    var i=0;
    for(;i<len;i++){
      // need a ul for each tag in the list
      var $ul = $("<ul></ul>");
      // for each tag, let's create a random number of dummy links
      var num_links = Math.floor(Math.random()*link_text_options.length);
      // We want a minimum of 1 link per tag
      if(num_links == 0){num_links=1;}
      $ul.attr("data-tag",tags[i]);
      $ul.append("<li class='tag-header'><h4>"+tags[i]+"</h4></li>");

      // Let's output some links into this tag's link list
      var j =0;
      for(;j<num_links;j++){
        // Let's pull a random link text from our list
        var random_link_index = Math.floor(Math.random()*link_text_options.length);
        var link_text = link_text_options[random_link_index].replace(/%replace%/,tags[i]);
        $ul.append("<li><a href='#'>"+link_text+"</a></li>");
      }

      // append $ul to a column
      var random_column = Math.floor(Math.random()*4);
      $(".column").eq(random_column).append($ul); 
    }
  }

  return pub;
})();

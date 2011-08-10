var linkpage = (function($){
  var pub = {}
  var private = {};

  var $results = $("#results");

  // Quick-fix to make contains case-insensitive: http://stackoverflow.com/questions/187537/is-there-a-case-insensitive-jquery-contains-selector
  $.expr[':'].contains = function(a,i,m){
    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };

  // Main filter function.
  // Takes one or more tags, comma-delimited, and looks up 
  // link contents, or tag names. It will return just the
  // links that meet the filter specs.
  // "css,html" will return links that either contain the words "css" or "html" OR
  // it will return any tag/category that are named "css" or "html"
  private.filter = function(tags){
    var tag_array = tags.split(",");
    var base_selector_text = "";
    var len = tag_array.length;
    var i=0;

    // Create the selector that will be used to show the filtered links
    for(;i<len;i++){
      base_selector_text += '.column ul[data-tag*="'+tag_array[i]+'"] a, .column a:contains('+tag_array[i]+'),';
    }

    // On a filter, hide the normal page data, and show just the filtered links
    $(".column").hide();
    $results.empty().show(); // lots of DOM thrashing here
    $(base_selector_text).parents("li").clone().appendTo($results);
    
  };

  pub.attach_keyup = function($selector){
    $selector.keyup(function(e){
      var $this = $(this);
      if($this.val() !== ""){
        private.filter($selector.val()); 
      }
      else{
        $results.empty().hide();
        $(".column").show();
      }
    });
  };
  return pub;
})(jQuery);

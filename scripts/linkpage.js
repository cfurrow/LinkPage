var linkpage = (function($){
  var pub = {}
  var private = {};

  var $results = $("#results");

  // Quick-fix to make contains case-insensitive: http://stackoverflow.com/questions/187537/is-there-a-case-insensitive-jquery-contains-selector
  $.expr[':'].contains = function(a,i,m){
    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };

  private.filter = function(tags){
    var tag_array = tags.split(",");
    var base_selector_text = "";
    var len = tag_array.length;
    var i=0;

    for(;i<len;i++){
      base_selector_text += '.column ul[data-tag*="'+tag_array[i]+'"] a, .column a:contains('+tag_array[i]+'),';
    }

    $(".column").hide();
    $results.empty().show();
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

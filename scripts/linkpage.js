var linkpage = (function($){
  var pub = {}
  var private = {};

  private.filter = function(tags){
    var tag_array = tags.split(",");
    var base_selector_text = "";
    var len = tag_array.length;
    var i=0;

    for(;i<len;i++){
      base_selector_text += '.column ul[data-tag*="'+tag_array[i]+'"] a, .column a:contains('+tag_array[i]+'),';
    }

    $(base_selector_text).css("border","1px solid #f00");
  };

  pub.attach_keyup = function($selector){
    $selector.keyup(function(e){
      var $this = $(this);
      $(".column a").css("border","0");
      if($this.val() !== ""){
        private.filter($selector.val()); 
      }
    });
  };
  return pub;
})(jQuery);

(function( $ ) {
  $.fn.fillText = function( adjustment ) {
    
    var $adjust = 1;
    
    if(adjustment){
      $adjust = adjustment;
    }
    
    
    return this.each(function(){
      var $el = $(this);
      
      $(window).ready(function(){
        resizeText();
      });
      
      $(window).resize(function(){
        resizeText();
      });
      
      function resizeText(){
        var $length = $el.text().length;
        var $width = $el.width();
        var $cw = $width/$length;
        var $ch = ($cw/0.5) * 0.9;
       
        
        var $px = Math.round($ch/0.72) + 'px';
        $el.css('font-size', $px);
        
        var $height = $el.height();
        var $check = $height * 1.75;
        
        while ($height < $check){
          var $font = parseInt($el.css('font-size').replace('px', ''));
          $font ++
          $el.css('font-size', $font);
          $height = $el.height();
        }
        $font = ($font - 1) * $adjust;
        $el.css('font-size', $font);
      }
      
    });

  };
})( jQuery );
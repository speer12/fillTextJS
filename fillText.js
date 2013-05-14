(function( $ ) {
  $.fn.fillText = function( adjustment ) {
    
    $adjust = 1;
    
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
        $length = $el.text().length;
        $width = $el.width();
        $cw = $width/$length;
        $ch = ($cw/0.5) * 0.9;
       
        
        $px = Math.round($ch/0.72) + 'px';
        $el.css('font-size', $px);
        
        $height = $el.height();
        $check = $height * 1.75;
        
        while ($height < $check){
          $font = parseInt($el.css('font-size').replace('px', ''));
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
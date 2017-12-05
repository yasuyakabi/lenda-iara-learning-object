
(function($) {
    
       // Variables
       var arrow1 =$("#Arrow"); // exemplo
       var arrow2 =$(".arrow-1")
       var arrow3 =$(".arrow3");

   
       $( "#click" ).click(function() {TweenLite.to(arrow1, 3, {autoAlpha:1, drawSVG:"100%"});
       TweenLite.to("#ela_1", 1, {fill:"#4022ff"});
      });

      $( "#animar-2" ).click(function() {TweenMax.staggerTo(arrow2, 3, {autoAlpha:1, drawSVG:"100%"},-2);
      TweenLite.to("#ela_1", 1, {fill:"#4022ff"});
     });

     $( "#animar-3" ).click(function() {TweenMax.staggerTo(arrow3, 3, {autoAlpha:1, drawSVG:"100%"},-2);
     TweenLite.to("#ela_1", 1, {fill:"#4022ff"});
    });

    })(jQuery);
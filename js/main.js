
(function($) {
    
       
  

// blablalba

var paddingX = 3;
var paddingY = 4;

var svg = document.querySelector("#svg");
var arrowPath = document.querySelector(".arrow-path");
var circlePath = document.querySelector(".circle-path");

var split = new SplitText(".text-block", { type: "words" });
var allWords = split.words;
var numWords = allWords.length;

var circleBox = circlePath.getBBox();

var animation = new TimelineMax();

var srcWord = null;
var tgtWord = null;
var requestId = null;

window.addEventListener("resize", resize);

TweenLite.set([arrowPath, circlePath], {
  autoAlpha: 1,
  drawSVG: 0
});

selectWords();

function selectWords() {
  
  cancelAnimationFrame(requestId);
  
  var index1 = 14;
  var index2 = 3;
  
  if (index1 === index2) {
    return selectWords();
  }
  
  srcWord = allWords[index1];
  tgtWord = allWords[index2];
  
  animation.seek(0);
  
  
}
Animation();


function Animation() {
  
  // Save animation progress
  var progress = animation.progress();
  
  // Clear animation
  animation.seek(0).clear();
  
  var svgBounds = getBounds(svg, 0, 0);
  var srcBounds = getBounds(srcWord, paddingX, paddingY);
  var tgtBounds = getBounds(tgtWord, 0, 0);
    
  var x1 = (srcBounds.left - svgBounds.left) + srcBounds.width / 2;
  var y1 = (srcBounds.top - svgBounds.top) + paddingY;
  
  var x2 = (tgtBounds.left - svgBounds.left) + tgtBounds.width / 2;
  var y2 = (tgtBounds.top - svgBounds.top) + paddingY;
    
  var dx = x1 - x2;
  var dy = y1 - y2;
  
  var rx = Math.abs(dx * 0.6);
  var ry = Math.max(Math.abs(dy * 1.35), 100);
  
  var sweepFlag = dx < 0 ? 1 : 0;
  
  var data = "M" + x1 + " " + y1 + " A " + rx + " " + ry + " 0 0 " + sweepFlag + " " + x2 + " " + y2;
  
  arrowPath.setAttribute("d", data);
  
  TweenLite.set(circlePath, {
    scaleX: srcBounds.width / circleBox.width,
    scaleY: srcBounds.height / circleBox.height,
    x: (srcBounds.left - svgBounds.left),
    y: (srcBounds.top - svgBounds.top)
  });
  
  // Rebuild animation
  animation
    .to(circlePath, 1, { drawSVG: true })
    .to(arrowPath, 0.5, { drawSVG: true })
    .to(tgtWord,0.1,{color:'red',repeat:3})
    .progress(progress || 0)
  
  requestId = null;
}

function getBounds(element, paddingX, paddingY) {
  
  paddingX = paddingX || 0;
  paddingY = paddingY || 0; 
  
  var rect = element.getBoundingClientRect();
  
  return {
    left: rect.left - paddingX,
    top: rect.top - paddingY,
    width: rect.width + paddingX*2,
    height: rect.height + paddingY*2 ,
  };
}

function resize() {
  if (!requestId) {
    requestId = requestAnimationFrame(Animation);
  }
};

function randomize() {
  selectWords();
}

function Animation() {
  
  // Save animation progress
  var progress = animation.progress();
  
  // Clear animation
  animation.seek(0).clear();
  
  var svgBounds = getBounds(svg, 0, 0);
  var srcBounds = getBounds(srcWord, paddingX, paddingY);
  var tgtBounds = getBounds(tgtWord, 0, 0);
    
  var x1 = (srcBounds.left - svgBounds.left) + srcBounds.width / 2;
  var y1 = (srcBounds.top - svgBounds.top) + paddingY;
  
  var x2 = (tgtBounds.left - svgBounds.left) + tgtBounds.width / 2;
  var y2 = (tgtBounds.top - svgBounds.top) + paddingY;
    
  var dx = x1 - x2;
  var dy = y1 - y2;
  
  var rx = Math.abs(dx * 0.6);
  var ry = Math.max(Math.abs(dy * 1.35), 100);
  
  var sweepFlag = dx < 0 ? 1 : 0;
  
  var data = "M" + x1 + " " + y1 + " A " + rx + " " + ry + " 0 0 " + sweepFlag + " " + x2 + " " + y2;
  
  arrowPath.setAttribute("d", data);
  
  TweenLite.set(circlePath, {
    scaleX: srcBounds.width / circleBox.width,
    scaleY: srcBounds.height / circleBox.height,
    x: (srcBounds.left - svgBounds.left),
    y: (srcBounds.top - svgBounds.top)
  });
  
  // Rebuild animation
  animation
    .to(circlePath, 1, { drawSVG: true })
    .to(arrowPath, 0.5, { drawSVG: true })
    .to(tgtWord,0.1,{color:'red',repeat:3})
    .progress(progress || 0)
  
  requestId = null;
}

function getBounds(element, paddingX, paddingY) {
  
  paddingX = paddingX || 0;
  paddingY = paddingY || 0; 
  
  var rect = element.getBoundingClientRect();
  
  return {
    left: rect.left - paddingX,
    top: rect.top - paddingY,
    width: rect.width + paddingX*2,
    height: rect.height + paddingY*2 ,
  };
}

function resize() {
  if (!requestId) {
    requestId = requestAnimationFrame(Animation);
  }
};

function randomize() {
  selectWords();
}
 

function blabla(){

    selectWords();
    
    function selectWords() {
      
    
      
      var index1 = 19;
      var index2 = 8;
      
      if (index1 === index2) {
        return selectWords();
      }
      
      srcWord = allWords[index1];
      tgtWord = allWords[index2];
      
      animation.seek(0);
      
      
    }
    Animation();
    
    
    function Animation() {
      
      // Save animation progress
      var progress = animation.progress();
      
      // Clear animation
      animation.seek(0).clear();
      
      var svgBounds = getBounds(svg, 0, 0);
      var srcBounds = getBounds(srcWord, paddingX, paddingY);
      var tgtBounds = getBounds(tgtWord, 0, 0);
        
      var x1 = (srcBounds.left - svgBounds.left) + srcBounds.width / 2;
      var y1 = (srcBounds.top - svgBounds.top) + paddingY;
      
      var x2 = (tgtBounds.left - svgBounds.left) + tgtBounds.width / 2;
      var y2 = (tgtBounds.top - svgBounds.top) + paddingY;
        
      var dx = x1 - x2;
      var dy = y1 - y2;
      
      var rx = Math.abs(dx * 0.6);
      var ry = Math.max(Math.abs(dy * 1.35), 100);
      
      var sweepFlag = dx < 0 ? 1 : 0;
      
      var data = "M" + x1 + " " + y1 + " A " + rx + " " + ry + " 0 0 " + sweepFlag + " " + x2 + " " + y2;
      
      arrowPath.setAttribute("d", data);
      
      TweenLite.set(circlePath, {
        scaleX: srcBounds.width / circleBox.width,
        scaleY: srcBounds.height / circleBox.height,
        x: (srcBounds.left - svgBounds.left),
        y: (srcBounds.top - svgBounds.top)
      });
      
      // Rebuild animation
      animation
        .to(circlePath, 1, { drawSVG: true })
        .to(arrowPath, 0.5, { drawSVG: true })
        .to(tgtWord,0.1,{color:'red',repeat:3})
        .progress(progress || 0)
      
      requestId = null;
    }
    
    function getBounds(element, paddingX, paddingY) {
      
      paddingX = paddingX || 0;
      paddingY = paddingY || 0; 
      
      var rect = element.getBoundingClientRect();
      
      return {
        left: rect.left - paddingX,
        top: rect.top - paddingY,
        width: rect.width + paddingX*2,
        height: rect.height + paddingY*2 ,
      };
    }
    
    function resize() {
      if (!requestId) {
        requestId = requestAnimationFrame(Animation);
      }
    };
    
    function randomize() {
      selectWords();
    }
    
    function Animation() {
      
      // Save animation progress
      var progress = animation.progress();
      
      // Clear animation
      animation.seek(0).clear();
      
      var svgBounds = getBounds(svg, 0, 0);
      var srcBounds = getBounds(srcWord, paddingX, paddingY);
      var tgtBounds = getBounds(tgtWord, 0, 0);
        
      var x1 = (srcBounds.left - svgBounds.left) + srcBounds.width / 2;
      var y1 = (srcBounds.top - svgBounds.top) + paddingY;
      
      var x2 = (tgtBounds.left - svgBounds.left) + tgtBounds.width / 2;
      var y2 = (tgtBounds.top - svgBounds.top) + paddingY;
        
      var dx = x1 - x2;
      var dy = y1 - y2;
      
      var rx = Math.abs(dx * 0.6);
      var ry = Math.max(Math.abs(dy * 1.35), 100);
      
      var sweepFlag = dx < 0 ? 1 : 0;
      
      var data = "M" + x1 + " " + y1 + " A " + rx + " " + ry + " 0 0 " + sweepFlag + " " + x2 + " " + y2;
      
      arrowPath.setAttribute("d", data);
      
      TweenLite.set(circlePath, {
        scaleX: srcBounds.width / circleBox.width,
        scaleY: srcBounds.height / circleBox.height,
        x: (srcBounds.left - svgBounds.left),
        y: (srcBounds.top - svgBounds.top)
      });
      
      // Rebuild animation
      animation
        .to(circlePath, 1, { drawSVG: true })
        .to(arrowPath, 0.5, { drawSVG: true })
        .to(tgtWord,0.1,{color:'red',repeat:3})
        .progress(progress || 0)
      
      requestId = null;
    }
    
    function getBounds(element, paddingX, paddingY) {
      
      paddingX = paddingX || 0;
      paddingY = paddingY || 0; 
      
      var rect = element.getBoundingClientRect();
      
      return {
        left: rect.left - paddingX,
        top: rect.top - paddingY,
        width: rect.width + paddingX*2,
        height: rect.height + paddingY*2 ,
      };
    }
    
    function resize() {
      if (!requestId) {
        requestId = requestAnimationFrame(Animation);
      }
    };
    
    function randomize() {
      selectWords();
    }
}

// $("#flip-page").turn({
// 		width: 400,
// 		height: 300,
// 		autoCenter: true
// 	});
 
           
    
   })(jQuery);
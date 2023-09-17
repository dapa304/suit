var sentences = [];
var currentText;
$(document).ready(function(){

  $('.type-input p').each(function(){
    var text = $(this).text();
    sentences.push(text);
  });
  currentText = sentences.shift();
  typeWord(currentText);
});

/////////////// Functions //////////////////


jQuery.fn.extend({
  appendChars: function(char){
    $(this).text(char);
  }
});

function spliter(string){
  return string.trim().split("");
}

function appendTextLine(){
  if($('.type-append-body').has('span')){
    $('.type-append-body').append('<br/>');
  }
  
  return $('<span class="text-line"></span>').appendTo('.type-append-body');
}


function appendBreakLine(){
  $('.type-append-body').append('<br/>');
}

function typeWord(text){
  if(!text){
    return;
  }

  var charArray = [];
  for(i = 0; i < text.length; i++){
      var char = text.slice(0,i);
      charArray.push(char);
    }
  var textLine = appendTextLine();
  $('.cursor').removeClass('cursor');
  textLine.addClass('cursor');
  
  
  var interval = setInterval(function(){
    firstChar = charArray.shift();
   
    $(textLine).appendChars(firstChar);
    
    if(charArray.length === 0){
      currentText = sentences.shift();
      typeWord(currentText);
      clearInterval(interval);
    }
  },200);
  
}


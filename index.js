function btn (click){
    var obj = document.getElementById('input');
    obj.value += click;
  
}

function cal(){
  var obj = document.getElementById('input');
  var input = obj.value;
  obj.value = eval(input);
}

function onMouseOver(btn){
  document.getElementById(btn).style.color="#0099cc";
  document.getElementById(btn).style.backgroundColor="#002233";
}

function onMouseOut(btn){
  document.getElementById(btn).style.color="Black";
  document.getElementById(btn).style.backgroundColor="#0099cc";
}
  
 
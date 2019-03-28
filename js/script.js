var a=0;
form.card_number.onkeypress=function(){
    if(a==4){
        a=0;
        form.card_number.value+=" ";
    }
    a++;
}

function refreshPage(){
    window.location.reload();
}

document.getElementById('card_number').addEventListener("input", function(){
  var val = this.value[0];
 
  var card_name = document.querySelector('card_name')
  switch (val) {
  case "4":
   return card_name.innerHTML = 'VISA';
  case "5":
   return card_name.innerHTML = "MASTERCARD";
  case "6":
   return card_name.innerHTML = "MAESTRO";
  default:
   return card_name.innerHTML = " ";
  }
});



function fillData()
{
    document.getElementById("popUpBody2").style.display ="block";
    document.getElementById("popUpBody1").style.display ="none";
    document.getElementById("popUpBody1").innerHTML = "";
   var modal = document.getElementById("customPopup");
   modal.style.display = "block";
   var span = document.getElementsByClassName("close")[0];
   span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

const form  = document.getElementsByTagName('form')[0];
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let flag = false;
  let name = form.elements['name'];
  let email = form.elements['email'];
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var focusCss = {
    "outline":"none!important",
    "box-shadow": "2px 2px 3px #ccc",
    "border":"1px solid red"
  };
  var unfocusCss = {
    "border":"1px solid black",
    "box-shadow": "none",
  };

  if (name.value == ""  ) {
    Object.assign(name.style, focusCss); 
    return flag;
  }
  else if (email.value == "") 
  {
    Object.assign(email.style, focusCss); 
    return flag;
  }
  else if(!email.value.match(mailformat))
  {
    Object.assign(email.style, focusCss); 
    return flag;
  }
  else{
  
    Object.assign(email.style, unfocusCss); 
    Object.assign(name.style, unfocusCss); 
    flag = true;
  }

  if(flag)
  {
    document.getElementById("popUpBody2").style.display ="none";
    document.getElementById("popUpBody1").style.display = "block";
    document.getElementById("popUpBody1").innerHTML = "<div class='content'> <img src='images/tick.gif'/> <br> Successfully submitted</div>";
    setTimeout(() => {
        var modal = document.getElementById("customPopup");
        modal.style.display = "none";
        name.value ="";
        email.value ="";
      }, 3000);
  }

  
});


const form  = document.getElementsByTagName('form')[0];
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let flag = false;
  let name = form.elements['name'];
  let email = form.elements['email'];
  let message = form.elements['comments'];
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
    document.getElementsByClassName("modalBtnClick")[0].style.display = "inline-block";
    document.getElementsByClassName("modalBtnClick")[1].style.display = "inline-block";
    var modal = document.getElementById("customPopup");
    var span = document.getElementsByClassName("close")[0];
    document.getElementById("popUpBody").innerHTML = `Name: ${name.value}<br>Email: ${email.value}<br>Comment: ${message.value}`
    modal.style.display = "block";
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  
});

function modalPopupOk()
  {
    document.getElementById("popUpBody").innerHTML = "<div class='content'> <img src='images/tick.gif'/> <br> Successfully submitted</div>";
    document.getElementsByClassName("modalBtnClick")[0].style.display = "none";
    document.getElementsByClassName("modalBtnClick")[1].style.display = "none";
    form.elements['name'].value = "";
    form.elements['email'].value = "";
    form.elements['comments'].value = "";
    setTimeout(() => {
      var modal = document.getElementById("customPopup");
      modal.style.display = "none";
    }, 3000);
  }

  function modalPopupCnl()
  {
    document.getElementById("popUpBody").innerHTML = "<div class='content'> <img src='images/cancelled.gif'/> <br> Cancelled</div>";
    document.getElementsByClassName("modalBtnClick")[0].style.display = "none";
    document.getElementsByClassName("modalBtnClick")[1].style.display = "none";
    setTimeout(() => {
      var modal = document.getElementById("customPopup");
      modal.style.display = "none";
    }, 3000);
  }
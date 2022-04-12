  var scheduler = function(value){
    
    switch(value)
    {
      case "mon":
        document.getElementById("mon").style.display = "block",
        document.getElementById("tue").style.display = "none";
        document.getElementById("wed").style.display = "none";
        document.getElementById("thu").style.display = "none";
        document.getElementById("fri").style.display = "none";
        document.getElementById("sat").style.display = "none";
        break;
      case "tue":
        document.getElementById("mon").style.display = "none";
        document.getElementById("tue").style.display = "block";
        document.getElementById("wed").style.display = "none";
        document.getElementById("thu").style.display = "none";
        document.getElementById("fri").style.display = "none";
        document.getElementById("sat").style.display = "none";
        break;
      case "wed":
        document.getElementById("mon").style.display = "none";
        document.getElementById("tue").style.display = "none";
        document.getElementById("wed").style.display = "block";
        document.getElementById("thu").style.display = "none";
        document.getElementById("fri").style.display = "none";
        document.getElementById("sat").style.display = "none";
        break;
      case "thu":
        document.getElementById("mon").style.display = "none";
        document.getElementById("tue").style.display = "none";
        document.getElementById("wed").style.display = "none";
        document.getElementById("thu").style.display = "block";
        document.getElementById("fri").style.display = "none";
        document.getElementById("sat").style.display = "none";
        break;
      case "fri":
        document.getElementById("mon").style.display = "none";
        document.getElementById("tue").style.display = "none";
        document.getElementById("wed").style.display = "none";
        document.getElementById("thu").style.display = "none";
        document.getElementById("fri").style.display = "block";
        document.getElementById("sat").style.display = "none";
        break;
      case "sat":
        document.getElementById("mon").style.display = "none";
        document.getElementById("tue").style.display = "none";
        document.getElementById("wed").style.display = "none";
        document.getElementById("thu").style.display = "none";
        document.getElementById("fri").style.display = "none";
        document.getElementById("sat").style.display = "block";
        break;
        default:
          break;
    }

  }

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
  
  window.onscroll = function() {scrollFunc()};
  function scrollFunc(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      document.getElementById("upperheader").style.background = "#000"
    }
    else{
      document.getElementById("upperheader").style.background = "none"
    }
  }


//smooth scroll
const links = document.querySelectorAll(".upperheader nav a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 100;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


let prev;
setInterval(() => {
  if(prev != undefined){
    prev.style.display="none";
  }
let rand = Math.floor(Math.random()*3);

let id = "sec"+ rand;
let secId = document.getElementById(id);
prev = secId;
secId.style.display="inline-block";

}, 1000);



//hamburger menu
function togglenav(){
  let nav = document.getElementById("nav");
  if(nav.style.visibility === "hidden"){
  nav.style.visibility="visible";
  nav.style.left = "0";
  }
  else{
    nav.style.visibility = "hidden";
    nav.style.left = "-100%";
  
  }
}



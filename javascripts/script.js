// Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.036 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: uluru,
//       map: map,
//     });
//   }
  
  var scheduler = function(value){
    
    switch(value)
    {
      case "mon":
        document.getElementById("mon").style.display = "block";
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
    document.getElementById("popUpBody").innerHTML = "Successfully submitted";
    document.getElementsByClassName("modalBtnClick")[0].style.display = "none";
    document.getElementsByClassName("modalBtnClick")[1].style.display = "none";
    form.elements['name'].value = "";
    form.elements['email'].value = "";
    form.elements['comments'].value = "";
    setTimeout(() => {
      var modal = document.getElementById("customPopup");
      modal.style.display = "none";
    }, 1000);
  }

  function modalPopupCnl()
  {
    document.getElementById("popUpBody").innerHTML = "Cancelled. !!";
    document.getElementsByClassName("modalBtnClick")[0].style.display = "none";
    document.getElementsByClassName("modalBtnClick")[1].style.display = "none";
    setTimeout(() => {
      var modal = document.getElementById("customPopup");
      modal.style.display = "none";
    }, 1000);
  }
  
  window.onscroll = function() {scrollFunc()};
  function scrollFunc(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      document.getElementById("upperheader").style.background = "#000",
      document.getElementById("upperheader").style.boxShadow = "0 1px 5px rgba(0, 0, 0, 0.25)"
    }
    else{
      document.getElementById("upperheader").style.background = "none",
      document.getElementById("upperheader").style.boxShadow = "none"
    }
  }

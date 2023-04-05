let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// ==================================================================

function validation()
{
var uid = form1.userid;
var uid_len = uid.value.length;

var pwd = form1.pwd;
var pwd_len = pwd.value.length;

var user = form1.user;
var user_len = user.value.length;
var letters = /^[A-Za-z]+$/;

var email = form1.email;
var email_len = email.value.length;
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

var country = form1.Country;
var country_value = country.value;


var umsex=form1.sex;
var ufsex=form1.sex;
x = 0 ;

var valid = false;

if (uid_len ==0||uid_len <5 || uid_len > 12){
alert("User Id should not be empty / length should be between 5 to 12");
return false;
}

else{
  if (pwd_len ==0||pwd_len <6 || pwd_len > 12){
    alert("Password should not be empty / length should be between 6 to 12");
    return false;
    }

    else{
      if (user_len ==0){
        alert("Name should not be empty / please enter alphebetic value only");
        return false;
        }

      else if(!user.value.match(letters)){
         alert("In the User Name section please enter alphebetic value only");
         return false;
      }

      else{
        if (email_len ==0){
          alert("Email should not be empty / Please enter correct format");
          return false;
          }
  
        else if(!email.value.match(reg)){
           alert("Please Enter correct format using{******@gmail.com}");
           return false;
        }
  
        else{
          if(country_value == "default"){
             alert("Please enter country field");
             return false;
          }

          else{
            if(umsex[0].checked){
                  x++;
                         }
           else if(umsex[1].checked){
                      x++;
                    }
           else if(x==0){
            alert("Please check")
            return false;
             }
          }

        if(document.getElementById("english").checked){
           valid = true;
        }

        else if(document.getElementById("non-english").checked){
           valid = true;
        }

       if(valid){
          alert("Your logging is successfull");
       }

       else{
        alert("Please fill the check box atleast one");
        return false;
       }
        
          
        }

 
      }

    }
}
}
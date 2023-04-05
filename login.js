// ==================================================================


function validation()
{

var pwd = form1.pwd;
var pwd_len = pwd.value.length;

var user = form1.user;
var user_len = user.value.length;
var letters = /^[A-Za-z]+$/;

var type = form1.Type;
var type_value = type.value;

      if (user_len == 0){
        
        alert("Name should not be empty / please enter alphebetic value only");
        return false;
        }

      else if(!user.value.match(letters)){
         alert("In the User Name section please enter alphebetic value only");
         return false;
      }

      else{
        if (pwd_len ==0||pwd_len <6 || pwd_len > 12){
          alert("Password should not be empty / length should be between 6 to 12");
          return false;
          }

        else{
          alert("Logging successfull")
        }
       }
      }

      




  
//------------------------------------Contact function--------------------------------------

function validate(){

  var name = document.getElementById("nom").value;
  var mail = document.getElementById("mail").value;
  var message = document.getElementById("message").value;
  var error = document.getElementById("error");
  var errorA = document.getElementById("error1");
  var errorB = document.getElementById("error2");


    var text;
    if(name.length < 4){
      text = "Verifiez votre Nom !";
      error.style.padding = "2px";
      error.innerHTML = text;

      return false;
    }
    if(mail.indexOf("@") == -1 || mail.length < 6){
      text = "Verifiez votre E-mail !";
      errorA.style.padding = "2px";
      errorA.innerHTML = text;
      return false
    }
    if (message.length < 20 ) {
      text = "Le message doit contenir minimum 20 caractères"; // message à changer
      errorB.style.padding = "2px";
      errorB.innerHTML = text;
      return false;
    }
    confirm("Êtes vous sure de vouloir valider ce formulaire de contact ?");
    alert("Message envoyé !")
    return true;
  }


  

  //---------------------------------------------------------------------------------------------------------------------------

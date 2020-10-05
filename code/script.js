//------------------------------------Contact function--------------------------------------

function validate(){

  var name = document.getElementById("nom").value;
  var mail = document.getElementById("mail").value;
  var message = document.getElementById("message").value;
  var error = document.getElementById("error");
  
  error.style.padding = "10px";

    var text;
    if(name.length < 4){
      text = "Verifiez votre Nom !";
      error.innerHTML = text;
      return false;
    }
    if(mail.indexOf("@") == -1 || mail.length < 6){
      text = "Verifiez votre E-mail !";
      error.innerHTML = text;
      return false
    }
    if (message.length < 50) {
      text = "S'il vous plaît inscrivez plus que 50 caractères pour le message"; // message à changer
      error.innerHTML = text;
      return false;
    }
    confirm("Êtes vous sure de vouloir valider ce formulaire de contact ?");
    alert("Message envoyé !")
    return true;
  }

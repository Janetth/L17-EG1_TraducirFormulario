var title = document.getElementById("form-signin-heading");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var remember = document.getElementsByTagName("span")[0];
var button = document.getElementsByClassName("btn")[0];
var mostrar=document.getElementById("mostrar");
function translate(){
    title.innerHTML = "Por favor inicia sesión";
    email.placeholder = "Correo Electrónico";
    password.placeholder = "Contraseña";
    remember.innerHTML = "Recordar datos";
    button.innerHTML = "Iniciar Sesión";
}
translate();
button1.addEventListener("click", function(event){
  event.preventDefault();

  mostrar.innerHTML = "<h3>Datos de Formulario</h3><br>"
                       + "El correo electrónico ingresado es:<br>" + email.value
                       + "<br>La clave ingresada es:<br>" + password.value;
});

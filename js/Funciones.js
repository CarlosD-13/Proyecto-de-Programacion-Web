var username;
var email;
var password; 
var nombre; 
var contra;
var mensaje = "Ingrese el valor Correcto"; 

function atrapar(){
	
	username = document.getElementById("username").value;
	email = document.getElementById("email").value;
	password = document.getElementById("password").value;

	console.log(username);
	console.log(email);
	console.log(password);
}

function comparar(){

	username = document.getElementById("username").value;
	password = document.getElementById("password").value;
	nombre = document.getElementById("nombre").value;
	contra = document.getElementById("contra").value;

	if(nombre != username)
	{
		console.log(mensaje);
	}else{

	}
}
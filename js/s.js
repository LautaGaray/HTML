
$(document).ready(function(){

	//Slider
	if(window.location.href.indexOf('proyecto') > -1){
	 $('.galery').bxSlider({
	
    mode: 'fade',
    captions: true,
    slideWidth: 1200
  });

	}

//selector de tema
var theme= $("#theme");

$("#to-green").click(function() {
	theme.attr("href", "css/green.css")
});
$("#to-red").click(function() {
	theme.attr("href", "css/red.css")
});
$("#to-blue").click(function() {
	theme.attr("href", "css/blue.css")
});


//scroll arriba
$('.subir').click(function (e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop:0
	}, 500);

	return false;
});
// Login Falso

$("#login form").submit(function() {
	var form_name = $("#form_name").val();
	localStorage.setItem("form_name", form_name);

});

var form_name = localStorage.getItem("form_name");
if(form_name != null && form_name != "undefined") {
	var about_parrafo = $("#about p");

	about_parrafo.html("<strong>Bienvenido, " +form_name+ "</strong>");
	about_parrafo.append(" <a href= '#' id= 'logout'>Cerrar sesión</a> ");

$("#login").hide();

$('#logout').click(function(){
localStorage.clear();
location.reload();
});

}
//Acordeon

if(window.location.href.indexOf('about') > -1){
	$("#acordeon").accordion();
}

//Reloj
if(window.location.href.indexOf('reloj') > -1){
	setInterval(function () {
				var reloj= moment(). format("h:mm:ss");
				$("#reloj").html(reloj);
	}, 100);
	

}




	});
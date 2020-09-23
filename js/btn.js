var iconoImpresion = document.getElementById("iconoImpresion");
	iconoCarteleria = document.getElementById("iconoCarteleria");
	iconoHerreria = document.getElementById("iconoHerreria");
	iconoCorporeo = document.getElementById("iconoCorporeo");
	iconoPloter = document.getElementById("iconoPloter");

var btnImpresion = document.getElementById("btnImpresion");
	btnCarteleria = document.getElementById("btnCarteleria");
	btnHerreria = document.getElementById("btnHerreria");
	btnCorporeo = document.getElementById("btnCorporeo");
	btnPloter = document.getElementById("btnPloter");

var tituloImpresion = document.getElementById("tituloImpresion");
	tituloCarteleria = document.getElementById("tituloCarteleria");
	tituloHerreria = document.getElementById("tituloHerreria");
	tituloCorporeo = document.getElementById("tituloCorporeo");
	tituloPloter = document.getElementById("tituloPloter");

var contenidoImpresion = document.getElementById("contenidoImpresion");
	contenidoCarteleria = document.getElementById("contenidoCarteleria");
	contenidoHerreria = document.getElementById("contenidoHerreria");
	contenidoCorporeo = document.getElementById("contenidoCorporeo");
	contenidoPloter = document.getElementById("contenidoPloter");

var contCar = 0;
	contHer = 0;
	contCor = 0;
	contPlo = 0;

function impresionBtn(){
	if (btnImpresion.className=="botonInAct"){
		
		btnImpresion.className="botonAct"
		btnCarteleria.className="botonInAct"
		btnHerreria.className="botonInAct"
		btnCorporeo.className="botonInAct"
		btnPloter.className="botonInAct"

		tituloImpresion.className="tituloAct"
		tituloCarteleria.className="tituloInAct"
		tituloHerreria.className="tituloInAct"
		tituloCorporeo.className="tituloInAct"
		tituloPloter.className="tituloInAct"

		iconoImpresion.className="iconoAct"
		iconoCarteleria.className="iconoInAct"
		iconoHerreria.className="iconoInAct"
		iconoCorporeo.className="iconoInAct"
		iconoPloter.className="iconoInAct"

		contenidoImpresion.className="contenidoAct"
		contenidoCarteleria.className="contenidoInAct"
		contenidoHerreria.className="contenidoInAct"
		contenidoCorporeo.className="contenidoInAct"
		contenidoPloter.className="contenidoInAct"

	}
}
function carteleriaBtn(){
	if (btnCarteleria.className=="botonInAct" || btnCarteleria.className=="btnCarteleriaU"){
		
		btnImpresion.className="botonInAct"
		btnCarteleria.className="botonAct"
		btnHerreria.className="botonInAct"
		btnCorporeo.className="botonInAct"
		btnPloter.className="botonInAct"

		tituloImpresion.className="tituloInAct"
		tituloCarteleria.className="tituloAct"
		tituloHerreria.className="tituloInAct"
		tituloCorporeo.className="tituloInAct"
		tituloPloter.className="tituloInAct"

		iconoImpresion.className="iconoInAct"
		iconoCarteleria.className="iconoAct"
		iconoHerreria.className="iconoInAct"
		iconoCorporeo.className="iconoInAct"
		iconoPloter.className="iconoInAct"

		contenidoImpresion.className="contenidoInAct"
		contenidoCarteleria.className="contenidoAct"
		contenidoHerreria.className="contenidoInAct"
		contenidoCorporeo.className="contenidoInAct"
		contenidoPloter.className="contenidoInAct"

		if (contCar == 0) {
			iniciarCar.iniciarMaquina()
			contCar++			
		}
	}	
}
function herreriaBtn(){
	if (btnHerreria.className=="botonInAct" || btnHerreria.className=="btnHerreriaU"){
		
		btnImpresion.className="botonInAct"
		btnCarteleria.className="botonInAct"
		btnHerreria.className="botonAct"
		btnCorporeo.className="botonInAct"
		btnPloter.className="botonInAct"

		tituloImpresion.className="tituloInAct"
		tituloCarteleria.className="tituloInAct"
		tituloHerreria.className="tituloAct"
		tituloCorporeo.className="tituloInAct"
		tituloPloter.className="tituloInAct"

		iconoImpresion.className="iconoInAct"
		iconoCarteleria.className="iconoInAct"
		iconoHerreria.className="iconoAct"
		iconoCorporeo.className="iconoInAct"
		iconoPloter.className="iconoInAct"

		contenidoImpresion.className="contenidoInAct"
		contenidoCarteleria.className="contenidoInAct"
		contenidoHerreria.className="contenidoAct"
		contenidoCorporeo.className="contenidoInAct"
		contenidoPloter.className="contenidoInAct"

		if (contHer == 0) {
			iniciarHer.iniciarMaquina()
			contHer++			
		}
	}	
}
function corporeoBtn(){
	if (btnCorporeo.className=="botonInAct" || btnCorporeo.className=="btnCorporeoU"){
		
		btnImpresion.className="botonInAct"
		btnCarteleria.className="botonInAct"
		btnHerreria.className="botonInAct"
		btnCorporeo.className="botonAct"
		btnPloter.className="botonInAct"

		tituloImpresion.className="tituloInAct"
		tituloCarteleria.className="tituloInAct"
		tituloHerreria.className="tituloInAct"
		tituloCorporeo.className="tituloAct"
		tituloPloter.className="tituloInAct"

		iconoImpresion.className="iconoInAct"
		iconoCarteleria.className="iconoInAct"
		iconoHerreria.className="iconoInAct"
		iconoCorporeo.className="iconoAct"
		iconoPloter.className="iconoInAct"

		contenidoImpresion.className="contenidoInAct"
		contenidoCarteleria.className="contenidoInAct"
		contenidoHerreria.className="contenidoInAct"
		contenidoCorporeo.className="contenidoAct"
		contenidoPloter.className="contenidoInAct"

		if (contCor == 0) {
			iniciarCor.iniciarMaquina()
			contCor++			
		}
	}
}
function ploterBtn(){
	if (btnPloter.className=="botonInAct" || btnPloter.className=="btnPloterU"){
		
		btnImpresion.className="botonInAct"
		btnCarteleria.className="botonInAct"
		btnHerreria.className="botonInAct"
		btnCorporeo.className="botonInAct"
		btnPloter.className="botonAct"

		tituloImpresion.className="tituloInAct"
		tituloCarteleria.className="tituloInAct"
		tituloHerreria.className="tituloInAct"
		tituloCorporeo.className="tituloInAct"
		tituloPloter.className="tituloAct"

		iconoImpresion.className="iconoInAct"
		iconoCarteleria.className="iconoInAct"
		iconoHerreria.className="iconoInAct"
		iconoCorporeo.className="iconoInAct"
		iconoPloter.className="iconoAct"

		contenidoImpresion.className="contenidoInAct"
		contenidoCarteleria.className="contenidoInAct"
		contenidoHerreria.className="contenidoInAct"
		contenidoCorporeo.className="contenidoInAct"
		contenidoPloter.className="contenidoAct"
		
		if (contPlo == 0) {
			iniciarPlo.iniciarMaquina()
			contPlo++
		}
	}
}
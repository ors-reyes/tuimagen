var toldoClick = 0;

function toldoBtn(){
	if (toldoClick == 0){
		document.getElementById("toldoHt").style.display = "block"
		document.getElementById("toldoTXT").classList.add("btnTiempo")
		document.getElementById("serviciosTXT").classList.add("servicios")
		document.getElementById("disenoTXT").classList.remove("btnTiempo")
		document.getElementById("rollUpTXT").classList.remove("btnTiempo")
		

		document.getElementById("disenoHt").style.display = "none"
		document.getElementById("rollUpHt").style.display = "none"

		document.getElementById("btnDisenoIcon").classList.remove("btnTresActD")
		document.getElementById("btnToldoIcon").classList.add("btnTresActH")
		document.getElementById("btnRollUpIcon").classList.remove("btnTresActR")

		

		setTimeout(function(){			
			document.getElementById("toldoHt").style.display = "none"
		}, 3000);
		
		disenoClick = 0
		toldoClick = 1
		rollUpClick = 0		
	}else{
		document.getElementById("serviciosTXT").classList.remove("servicios")
		document.getElementById("disenoTXT").classList.remove("btnTiempo")
		document.getElementById("toldoTXT").classList.remove("btnTiempo")
		document.getElementById("rollUpTXT").classList.remove("btnTiempo")

		document.getElementById("disenoHt").style.display = "none"
		document.getElementById("toldoHt").style.display = "none"
		document.getElementById("rollUpHt").style.display = "none"

		document.getElementById("btnDisenoIcon").classList.remove("btnTresActD")
		document.getElementById("btnToldoIcon").classList.remove("btnTresActH")
		document.getElementById("btnRollUpIcon").classList.remove("btnTresActR")

		
		toldoClick = 0
	}
}
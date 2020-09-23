var rollUpClick = 0;

function rollUpBtn(){
	if (rollUpClick == 0){
		document.getElementById("rollUpHt").style.display = "block"
		document.getElementById("rollUpTXT").classList.add("btnTiempo")
		document.getElementById("serviciosTXT").classList.add("servicios")
		document.getElementById("disenoTXT").classList.remove("btnTiempo")
		document.getElementById("toldoTXT").classList.remove("btnTiempo")

		document.getElementById("toldoHt").style.display = "none"
		document.getElementById("toldoHt").style.display = "none"

		document.getElementById("btnDisenoIcon").classList.remove("btnTresActD")
		document.getElementById("btnToldoIcon").classList.remove("btnTresActH")
		document.getElementById("btnRollUpIcon").classList.add("btnTresActR")

		

		setTimeout(function(){			
			document.getElementById("rollUpHt").style.display = "none"
		}, 3000);

		disenoClick = 0
		toldoClick = 0
		rollUpClick = 1
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

		
		rollUpClick = 0
	}
}
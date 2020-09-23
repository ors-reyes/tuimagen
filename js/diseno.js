var disenoClick = 0;

function disenoBtn(){
	if (disenoClick == 0){		
		document.getElementById("disenoHt").style.display = "block"
		document.getElementById("disenoTXT").classList.add("btnTiempo")
		document.getElementById("serviciosTXT").classList.add("servicios")
		document.getElementById("toldoTXT").classList.remove("btnTiempo")
		document.getElementById("rollUpTXT").classList.remove("btnTiempo")

		document.getElementById("toldoHt").style.display = "none"
		document.getElementById("rollUpHt").style.display = "none"

		document.getElementById("btnDisenoIcon").classList.add("btnTresActD")
		document.getElementById("btnToldoIcon").classList.remove("btnTresActH")
		document.getElementById("btnRollUpIcon").classList.remove("btnTresActR")
		

		setTimeout(function(){			
			document.getElementById("disenoHt").style.display = "none"			
			
		}, 3000);		
		
		disenoClick = 1
		toldoClick = 0
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
		
		
		disenoClick = 0
	}
}
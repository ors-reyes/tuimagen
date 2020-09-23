var ubicacionPrincipal  = window.pageYOffset;
    contTxt = 0;
window.onscroll = function() {	
	
    var contenidoDos = document.getElementById("contenidoDos").offsetTop;
        contenidoTres = document.getElementById("contenidoTres").offsetTop
        
    
	
    // Menu Nav
    var DesplazamientoActual = window.pageYOffset;
        ubicacionPrincipal = DesplazamientoActual;
    if(ubicacionPrincipal > contenidoDos-150){
        document.getElementById('tituloTextosFont').className="tituloTextosFont"        
        /*document.getElementById('presDonSVGtu2').style.display = "none"*/
        if (contTxt == 0) {
            setTimeout("iniciarTxtSomos.iniciarMaquina()",1000);
            contTxt++
        }
    }
    if(ubicacionPrincipal > contenidoDos-10){
        document.getElementById('presDonSVGsombra1').classList.add("sombra")
        document.getElementById('presDonSVGtu1').classList.add("tu")
        document.getElementById('presDonSVGtu2').classList.add("tu")
        document.getElementById('presDonSVGtu3').classList.add("tu")
        document.getElementById('presDonSVGimagen1').classList.add("imagen")
        document.getElementById('presDonSVGimagen2').classList.add("imagen")
        document.getElementById('presDonSVGimagen3').classList.add("imagen")
        document.getElementById('presDonSVGimagen4').classList.add("imagen")
        document.getElementById('presDonSVGimagen5').classList.add("imagen")
        document.getElementById('presDonSVGimagen6').classList.add("imagen")
    }else{
        document.getElementById('presDonSVGsombra1').classList.remove("sombra")
        document.getElementById('presDonSVGtu1').classList.remove("tu")
        document.getElementById('presDonSVGtu2').classList.remove("tu")
        document.getElementById('presDonSVGtu3').classList.remove("tu")
        document.getElementById('presDonSVGimagen1').classList.remove("imagen")
        document.getElementById('presDonSVGimagen2').classList.remove("imagen")
        document.getElementById('presDonSVGimagen3').classList.remove("imagen")
        document.getElementById('presDonSVGimagen4').classList.remove("imagen")
        document.getElementById('presDonSVGimagen5').classList.remove("imagen")
        document.getElementById('presDonSVGimagen6').classList.remove("imagen")
    }
    if(ubicacionPrincipal > contenidoTres-10){
        document.getElementById('presDonSVGsombra1').classList.remove("sombra")
        document.getElementById('presDonSVGtu1').classList.remove("tu")
        document.getElementById('presDonSVGtu2').classList.remove("tu")
        document.getElementById('presDonSVGtu3').classList.remove("tu")
        document.getElementById('presDonSVGimagen1').classList.remove("imagen")
        document.getElementById('presDonSVGimagen2').classList.remove("imagen")
        document.getElementById('presDonSVGimagen3').classList.remove("imagen")
        document.getElementById('presDonSVGimagen4').classList.remove("imagen")
        document.getElementById('presDonSVGimagen5').classList.remove("imagen")
        document.getElementById('presDonSVGimagen6').classList.remove("imagen")
        
        
    }
    if(ubicacionPrincipal > contenidoTres-250){
          
    }
}




var actual = 0;
			function puntos(n){
				var ptn = document.getElementsByClassName("punto");
				for(i = 0; i<ptn.length; i++){
					if(ptn[i].className.includes("activo")){
						ptn[i].className = ptn[i].className.replace("activo", "")
						break;
					}
				}
				ptn[n].className += " activo";
			}
			function mostrar(n){
				var img = document.getElementsByClassName("imagenGal");
				for(i = 0; i< img.length; i++){
					if(img[i].className.includes("actual")){
						img[i].className = img[i].className.replace("actual", "")
						break;
					}
				}
				actual = n;
				img[n].className += " actual"
				puntos(n);
			}
			
			function siguiente(){
				actual++;
				if(actual > 3){
					actual = 0;
				}
				mostrar(actual);
			}
			function anterior(){
				actual--;
				if(actual < 0){
					actual = 3;
				}
				mostrar(actual);
			}
			
			var velocidad = 15000;
			var play = setInterval("siguiente()", velocidad)
			
			function playpause(){
				var boton = document.getElementById("btn")
				if(play == null){
					boton.src = "img/pause.png"
					play = setInterval("siguiente()", velocidad)
				} else {
					clearInterval(play);
					play = null;
					boton.src = "img/play.png"
				}
			}
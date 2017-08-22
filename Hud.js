function sethud(){
			
			document.getElementById('HUD').style.left ='0';
			document.getElementById('HUD').style.top ='0';
			
			document.getElementById('Crosshair').style.left = window.innerWidth / 2 - 25 + "px";
			document.getElementById('Crosshair').style.top = window.innerHeight / 2 - 25 + "px";
			document.getElementById('Crosshair').style.height = 50 + 'px';
			document.getElementById('Crosshair').style.width = 50 + 'px';
			document.getElementById('Crosshair').style.zIndex = 10;
			
			
			
			document.getElementById('Play').style.left = window.innerWidth / 2 - 100 + 'px';
		    document.getElementById('Play').style.top = window.innerHeight / 4 + 'px';
		    document.getElementById('Play').style.height = 100 + 'px';
		    document.getElementById('Play').style.width = 200 + 'px';
			
			document.getElementById('Controls').style.left = 0 + 'px';
		    document.getElementById('Controls').style.top = 0 + 'px';
		    document.getElementById('Controls').style.zIndex = "10";
			
				
			document.getElementById('dialog').style.zIndex = "4";
			document.getElementById('HUD').style.zIndex = "10";
			
			
			document.getElementById('instructions').style.zIndex = "8";
		
			document.getElementById('Play').style.zIndex = "8";
			
			
			
			
			
			document.getElementById('dialog').style.left = document.getElementById('dialogBg').style.left + 80 + "px";
			document.getElementById('dialog').style.top = window.innerHeight - 118 + "px";
			document.getElementById('dialog').style.zIndex = "3";
			
			
			document.getElementById('WB').style.left = parseInt(document.getElementById('Controls').style.left, 10) + 160+ "px";
			document.getElementById('WB').style.top = parseInt(document.getElementById('Controls').style.top, 10) + 133+ "px";
			document.getElementById('WB').style.zIndex = "15";
			
			document.getElementById('AB').style.left = parseInt(document.getElementById('Controls').style.left, 10) + 160 + "px";
			document.getElementById('AB').style.top = parseInt(document.getElementById('Controls').style.top, 10) + 173 + "px";
			document.getElementById('AB').style.zIndex = "15";
			
			document.getElementById('SB').style.left = parseInt(document.getElementById('Controls').style.left, 10) + 160 + "px";
			document.getElementById('SB').style.top = parseInt(document.getElementById('Controls').style.top, 10) + 253 + "px";
			document.getElementById('SB').style.zIndex = "15";
			
			document.getElementById('DB').style.left = parseInt(document.getElementById('Controls').style.left, 10) + 160 + "px";
			document.getElementById('DB').style.top = parseInt(document.getElementById('Controls').style.top, 10) + 215 + "px";
			document.getElementById('DB').style.zIndex = "15";
			
			document.getElementById('EB').style.left = parseInt(document.getElementById('Controls').style.left, 10) + 160 + "px";
			document.getElementById('EB').style.top = parseInt(document.getElementById('Controls').style.top, 10) + 305 + "px";
			document.getElementById('EB').style.zIndex = "15";
			
			document.getElementById('SPB').style.left = parseInt(document.getElementById('Controls').style.left, 10) + 160 + "px";
			document.getElementById('SPB').style.top = parseInt(document.getElementById('Controls').style.top, 10) + 345 + "px";
			document.getElementById('SPB').style.zIndex = "15";
			
			document.getElementById('JB').style.left = parseInt(document.getElementById('Controls').style.left, 10) + 160 + "px";
			document.getElementById('JB').style.top = parseInt(document.getElementById('Controls').style.top, 10) + 385 + "px";
			
			document.getElementById('JB').style.zIndex = "15";
			
			document.getElementById('sensr').style.left = parseInt(document.getElementById('Controls').style.left, 10) + 170 + "px";
			document.getElementById('sensr').style.top = parseInt(document.getElementById('Controls').style.top, 10) + 475 + "px";
			document.getElementById('sensr').style.zIndex = "15";
			
			document.getElementById('sensv').style.left = parseInt(document.getElementById('sensr').style.left, 10) + 160 + "px";
			document.getElementById('sensv').style.top = parseInt(document.getElementById('sensr').style.top, 10) + "px";
			document.getElementById('sensv').style.zIndex = "15";
			
			document.getElementById('sfxr').style.left = parseInt(document.getElementById('Controls').style.left, 10) + 170 + "px";
			document.getElementById('sfxr').style.top = parseInt(document.getElementById('Controls').style.top, 10) + 525 + "px";
			document.getElementById('sfxr').style.zIndex = "15";
			
			document.getElementById('sfxv').style.left = parseInt(document.getElementById('sfxr').style.left, 10) + 160 + "px";
			document.getElementById('sfxv').style.top = parseInt(document.getElementById('sfxr').style.top, 10) + "px";
			document.getElementById('sfxv').style.zIndex = "15";
			
			document.getElementById('backr').style.left = parseInt(document.getElementById('Controls').style.left, 10) + 260 + "px";
			document.getElementById('backr').style.top = parseInt(document.getElementById('Controls').style.top, 10) + 570 + "px";
			document.getElementById('backr').style.zIndex = "15";
			
			document.getElementById('backv').style.left = parseInt(document.getElementById('backr').style.left, 10) + "px";
			document.getElementById('backv').style.top = parseInt(document.getElementById('backr').style.top, 10) + 20 + "px";
			document.getElementById('backv').style.zIndex = "15";

			
			document.getElementById('dialogBg').style.zIndex = "2";
			document.getElementById('dialogBg').style.left = 0 + "px";
			document.getElementById('dialogBg').style.top = window.innerHeight - 130 + "px";
			
			document.getElementById('Status').style.zIndex = "2";
			document.getElementById('Status').style.left = screen.width - 365 + "px";
			document.getElementById('Status').style.top = window.innerHeight - 130 + "px";
			
			document.getElementById('health').style.left = screen.width - 310 + "px";
			document.getElementById('health').style.top = window.innerHeight - 45 + "px";	
			document.getElementById('health').style.zIndex = "3";
			
			document.getElementById('ammo').style.left = screen.width - 100 + "px";
			document.getElementById('ammo').style.top = window.innerHeight - 45 + "px";	
			document.getElementById('ammo').style.zIndex = "3";
			
			
			
			}
			
			sethud();
			

			var HUD = setInterval(function(){
			
			if (app.program){
			hp = app.program.playerhealth;
			}
			
		    document.getElementById('health').innerHTML = hp;
			if (magazineamount != 'undefined'){
			magazineamount = app.program.magazineamount;
			magazinesize = app.program.magazinesize;
			ammotxt = magazineamount + "/" + magazinesize;	
			document.getElementById('ammo').innerHTML = ammotxt;
			}
			
			
			if (hp < 30){ document.getElementById('health').style.color = "red"; }
			else if (hp < 70){ document.getElementById('health').style.color = "yellow"; }
			else if (hp > 70){ document.getElementById('health').style.color = "green"; }
			
			sethud();
					
			}, 250);
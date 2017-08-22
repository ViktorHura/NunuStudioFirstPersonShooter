function sethud(){
			
			document.getElementById('HUD').style.left ='0';
			document.getElementById('HUD').style.top ='0';
			
			document.getElementById('Crosshair').style.left = window.innerWidth / 2 - 25 + "px";
			document.getElementById('Crosshair').style.top = window.innerHeight / 2 - 25 + "px";
			document.getElementById('Crosshair').style.height = 50 + 'px';
			document.getElementById('Crosshair').style.width = 50 + 'px';
			document.getElementById('Crosshair').style.zIndex = 10;
			
			
			/*
			document.getElementById('Play').style.left = window.innerWidth / 2 - 100;
		    document.getElementById('Play').style.top = window.innerHeight / 4;
		    document.getElementById('Play').style.height = 100 + 'px';
		    document.getElementById('Play').style.width = 200 + 'px';
			*/
				
			document.getElementById('dialog').style.zIndex = "4";
			document.getElementById('HUD').style.zIndex = "10";
			
			/*
			document.getElementById('instructions').style.zIndex = "5";
		
			document.getElementById('Play').style.zIndex = "8";
			document.getElementById('Exit').style.zIndex = "8"
			
			document.getElementById('Exit').style.left = document.getElementById('Play').style.left;
		    document.getElementById('Exit').style.top = window.innerHeight / 4 + 150;
		    document.getElementById('Exit').style.height = 100 + 'px';
		    document.getElementById('Exit').style.width = 200 + 'px';
			*/
			
			document.getElementById('dialog').style.left = document.getElementById('dialogBg').style.left + 80 + "px";
			document.getElementById('dialog').style.top = window.innerHeight - 118 + "px";
			document.getElementById('dialog').style.zIndex = "3";
			
			/*
			document.getElementById('WB').style.left = document.getElementById('Controls').style.left - 160;
			document.getElementById('WB').style.top = document.getElementById('Controls').style.top + 133;
			document.getElementById('WB').style.zIndex = "3";
			
			
			
			if (document.cookie.replace(/(?:(?:^|.*;\s*)W_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 32){
		    document.getElementById('WB').innerHTML = 'Space';
			}
			else if (document.cookie.replace(/(?:(?:^|.*;\s*)W_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 16){
		    document.getElementById('WB').innerHTML = 'Shift';
		    }
		    else{
		    document.getElementById('WB').innerHTML = String.fromCharCode(document.cookie.replace(/(?:(?:^|.*;\s*)W_key\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
		    }
			
			if (document.cookie.replace(/(?:(?:^|.*;\s*)A_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 32){
		    document.getElementById('AB').innerHTML = 'Space';
			}
			else if (document.cookie.replace(/(?:(?:^|.*;\s*)A_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 16){
		    document.getElementById('AB').innerHTML = 'Shift';
		    }
		    else{
		    document.getElementById('AB').innerHTML = String.fromCharCode(document.cookie.replace(/(?:(?:^|.*;\s*)A_key\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
		    }
		
		
		if (document.cookie.replace(/(?:(?:^|.*;\s*)S_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 32){
		    document.getElementById('SB').innerHTML = 'Space';
			}
			else if (document.cookie.replace(/(?:(?:^|.*;\s*)S_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 16){
		    document.getElementById('SB').innerHTML = 'Shift';
		    }
		    else{
		    document.getElementById('SB').innerHTML = String.fromCharCode(document.cookie.replace(/(?:(?:^|.*;\s*)S_key\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
		    }
		
		
		if (document.cookie.replace(/(?:(?:^|.*;\s*)D_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 32){
		    document.getElementById('DB').innerHTML = 'Space';
			}
			else if (document.cookie.replace(/(?:(?:^|.*;\s*)D_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 16){
		    document.getElementById('DB').innerHTML = 'Shift';
		    }
		    else{
		    document.getElementById('DB').innerHTML = String.fromCharCode(document.cookie.replace(/(?:(?:^|.*;\s*)D_key\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
		    }
		
		if (document.cookie.replace(/(?:(?:^|.*;\s*)E_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 32){
		    document.getElementById('EB').innerHTML = 'Space';
			}
			else if (document.cookie.replace(/(?:(?:^|.*;\s*)E_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 16){
		    document.getElementById('EB').innerHTML = 'Shift';
		    }
		    else{
		    document.getElementById('EB').innerHTML = String.fromCharCode(document.cookie.replace(/(?:(?:^|.*;\s*)E_key\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
		    }
		
		if (document.cookie.replace(/(?:(?:^|.*;\s*)Shift_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 32){
		    document.getElementById('SPB').innerHTML = 'Space';
			}
			else if (document.cookie.replace(/(?:(?:^|.*;\s*)Shift_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 16){
		    document.getElementById('SPB').innerHTML = 'Shift';
		    }
		    else{
		    document.getElementById('SPB').innerHTML = String.fromCharCode(document.cookie.replace(/(?:(?:^|.*;\s*)Shift_key\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
		    }
		
		if (document.cookie.replace(/(?:(?:^|.*;\s*)Space_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 32){
		    document.getElementById('JB').innerHTML = 'Space';
			}
			else if (document.cookie.replace(/(?:(?:^|.*;\s*)Space_key\s*\=\s*([^;]*).*$)|^.*$/, "$1") == 16){
		    document.getElementById('JB').innerHTML = 'Shift';
		    }
		    else{
		    document.getElementById('JB').innerHTML = String.fromCharCode(document.cookie.replace(/(?:(?:^|.*;\s*)Space_key\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
		    }
		
		
			
			document.getElementById('AB').style.left = document.getElementById('Controls').style.left - 160;
			document.getElementById('AB').style.top = document.getElementById('Controls').style.top + 173;
			document.getElementById('AB').style.zIndex = "3";
			
			document.getElementById('SB').style.left = document.getElementById('Controls').style.left - 160;
			document.getElementById('SB').style.top = document.getElementById('Controls').style.top + 253;
			document.getElementById('SB').style.zIndex = "3";
			
			document.getElementById('DB').style.left = document.getElementById('Controls').style.left - 160;
			document.getElementById('DB').style.top = document.getElementById('Controls').style.top + 215;
			document.getElementById('DB').style.zIndex = "3";
			
			document.getElementById('EB').style.left = document.getElementById('Controls').style.left - 160;
			document.getElementById('EB').style.top = document.getElementById('Controls').style.top + 305;
			document.getElementById('EB').style.zIndex = "3";
			
			document.getElementById('SPB').style.left = document.getElementById('Controls').style.left - 160;
			document.getElementById('SPB').style.top = document.getElementById('Controls').style.top + 345;
			document.getElementById('SPB').style.zIndex = "3";
			
			document.getElementById('JB').style.left = document.getElementById('Controls').style.left - 160;
			document.getElementById('JB').style.top = document.getElementById('Controls').style.top + 385;
			document.getElementById('JB').style.zIndex = "3";
			
			if (document.getElementById('Volume')){
				
			document.getElementById('Volume').style.left = window.innerWidth - 50;	
				
				
				
			}
			
			
			*/
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
			
			hp = app.program.playerhealth;
			
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
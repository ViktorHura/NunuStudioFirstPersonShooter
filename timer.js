var missionstate = 0;

var madepopup = false;
var startmbara = false;


var MbarImg;
var MbarD;

var MissionsLoop = setInterval(function(){
	
if (madepopup == false && missionstate != 0){
	madepopup = true;
	
MbarImg=document.createElement("img");
MbarImg.src = "images/MBar.png"
MbarImg.style.position = "absolute";
MbarImg.style.left = window.innerWidth / 2 - 150 + 'px';
MbarImg.style.top = 0 - 104 + 'px';
document.getElementById('HUD').appendChild(MbarImg);
	
MbarD = document.createElement('span');
MbarD.innerHTML = '';
MbarD.style.position = 'absolute';
MbarD.style.fontSize = 150 + '%';
MbarD.style.width = '235px';
MbarD.style.height = '80px';
MbarD.style.color = 'brown';

MbarD.style.left = window.innerWidth / 2 - 120 + 'px';
MbarD.style.top = 0 + 'px';

document.getElementById('HUD').appendChild(MbarD);	
	
setTimeout(function(){ startmbara = true; }, 1000);	
	
}
	
/////Update///			
if (MbarD){
MbarD.style.top = Number(MbarImg.style.top.replace('px','')) + 5 + 'px';
MbarD.style.left = Number(MbarImg.style.left.replace('px','')) + 45 + 'px';
MbarImg.style.left = window.innerWidth / 2 - 150 + 'px';
}

if (Number(MbarImg.style.top.replace('px','')) < 0 && startmbara == true){
	
	MbarImg.style.top = Number(MbarImg.style.top.replace('px','')) + 0.4 + 'px';
	
}	


if (missionstate == 1){
	
	if (app.program.timegame != 'undefined'){
	MbarD.innerHTML = 'Time: ' + app.program.timegame + ' seconds';
	}
	else{
	MbarD.innerHTML = 'Time: waiting to start...' ;	
	}
	
}



			
			
}, 1);
/* Time */
var canvas = document.getElementById("time");
		var ctx = canvas.getContext("2d");
		var circlecolor = '#00ffff'; //Circle color
		var fontcolor = '#00ffff'; //Font color
		var backgroundcolor = '#03303a'; //Background shadow color

		ctx.strokeStyle = circlecolor;
		ctx.lineWidth = 17;
		ctx.shadowBlur= 15;
		ctx.shadowColor = circlecolor;

		function degToRad(degree){
			var factor = Math.PI/180;
			return degree*factor;
		}

		function renderTime(){
  			var now = new Date();
			var today = now.toDateString();
			var circlehrs = now.getHours();
			var hrs = now.getHours();
			var min = now.getMinutes();
			var sec = now.getSeconds();
			var mil = now.getMilliseconds();
			var smoothsec = sec+(mil/1000);
			var smoothmin = min+(smoothsec/60);
			var timeOfDay = ( hrs < 12 ) ? "AM" : "PM";
			hrs = ( hrs > 12 ) ? hrs - 12 : hrs;
			hrs = ( hrs == 0 ) ? 12 : hrs;
			min = ( min < 10 ? "0" : "" ) + min;
			sec = ( sec < 10 ? "0" : "" ) + sec;

			//Background
			gradient = ctx.createRadialGradient(200, 200, 5, 250, 250, 300);
			gradient.addColorStop(0, backgroundcolor);
			gradient.addColorStop(0.5, "#000000");
			gradient.addColorStop(1, "#000000");
			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, 400, 400);
			//Hours
			ctx.beginPath();
			ctx.arc(200,200,180, degToRad(270), degToRad((circlehrs*15)-90));
			ctx.stroke();
			//Minutes
			ctx.beginPath();
			ctx.arc(200,200,150, degToRad(270), degToRad((smoothmin*6)-90));
			ctx.stroke();
			//Seconds
			ctx.beginPath();
			ctx.arc(200,200,120, degToRad(270), degToRad((smoothsec*6)-90));
			ctx.stroke();
			//Date
			ctx.font = "25px Helvetica";
			ctx.fillStyle = fontcolor;
			ctx.fillText(today, 110, 200);
			//Time
			ctx.font = "25px Helvetica Bold";
			ctx.fillStyle = fontcolor;
			ctx.fillText(timeOfDay + " " + hrs+":"+min+":"+sec, 110, 230);

		}
		setInterval(renderTime, 50);
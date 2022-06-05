
function draw(){

  if (done == true){

    function funct(num){
      return eval(final.replace(/t/g, num))
    }

      // CURVE

    ctx.lineWidth= 1;
    ctx.strokeStyle='red';

    ctx.beginPath();

    ctx.moveTo(0,originy-scale*funct(-originx));

    for (let x = -originx/scale; x <= (canvas.width-(originx))/scale; x++) {
      ctx.lineTo(scale*x+originx,originy-scale*funct(x));
    }

    ctx.stroke();

  }


function draw_axes(){

// X-AXIS

 xax = ctx.createImageData(2, canvas.height);

for (let i = 0; i < xax.data.length; i += 4) {
  xax.data[i+0] = 0; //Red
  xax.data[i+1] = 0; //Green
  xax.data[i+2] = 0; //Blue
  xax.data[i+3] = 255; //Opacity
}

// Y-AXIS

 yax = ctx.createImageData(canvas.width, 2);

for (let i = 0; i < yax.data.length; i += 4) {
  yax.data[i+0] = 0; //Red
  yax.data[i+1] = 0; //Green
  yax.data[i+2] = 0; //Blue
  yax.data[i+3] = 255; //Opacity
}

           ctx.putImageData(xax, originx-1, 0);
           ctx.putImageData(yax, 0, originy-1);
}


function draw_point(x, y, prec=3) {
	 ctx.lineWidth = 5;
	 ctx.strokeStyle = 'blue'; 
   ctx.beginPath();
   ctx.arc(scale*x+originx, originy-scale*y, 2, 0, 2 * Math.PI);
   ctx.stroke();

   ctx.font = "20px Arial";
   let j = 10**prec;
   var pt = `(${Math.round(x*j)/j}, ${Math.round(y*j)/j})`;
   ctx.fillText(pt,scale*x+originx+10,originy-scale*y+20);

}


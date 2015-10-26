speed(0);

lineWidth(2)

function easyLineColor(r,g,b) {
  lineColor("rgb(" + r + "," + g + "," + b + ")");

}

function triangle(size) {
 forward(size);
 rotate(190);
 forward(size*10);
 rotate(260);
 forward(size*10);
 rotate(90);
 
 

 
}

function flower(size) {
for(var x = 0; x < 100; x++) {
    triangle(x);
    rotate(90);
    
}
}

flower();
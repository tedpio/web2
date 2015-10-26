speed(0);

lineWidth(2)

function easyLineColor(r,g,b) {
  lineColor("rgb(" + r + "," + g + "," + b + ")");

}

function triangle(size) {
 forward(size);
 rotate(90);
 forward(size*10);
 rotate(90);
 forward(size*10);
 rotate(90);
 forward(size*10);
 rotate(90);
 forward(size*10);
 rotate(90);
 forward(size*10);
 

 
}

function flower(size) {
for(var x = 0; x < 1000; x++) {
    easyLineColor((x * 10) % 400, (x * 24) % 300 ,40);
    triangle(x);
    rotate(90);
    
}
}

flower();
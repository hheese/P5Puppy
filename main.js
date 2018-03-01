function setup(){
    createCanvas(640*2, 480*2);
}

function draw(){
    var x = width/2 - 160;
    var y = height/2;
    var x2 = width/2 + 160;
    /*
    var y = mouseY;
    var x = mouseX - 160
    var x2 = mouseX + 160;
    */
    noStroke();
    fill('#52C5DC');
    ellipse(x, y, 200, 200);
    
    //nose
    fill('#EFB8D2');
    ellipse(x, y+30, 64, 64);
    
    //eyeLeft
    fill('#FFFFFF');
    ellipse(x+42, y-26, 64, 64);
    
    //pupilLeft
    fill('#bc0707');
    ellipse(x+42, y-26, 40, 40);
    
    //eyeRight
    fill('#FFFFFF');
    ellipse(x-42, y-26, 64, 64);
    
    //pupilRight
    fill('#bc0707');
    ellipse(x-42, y-26, 40, 40);
    
    //earLeft
    fill('#52C5DC');
    push();
    translate(x-100,y-80);
    rotate(Math.PI / 4);
    ellipse(0, 0, 52, 92);
    pop();
    
    //earRight
    fill('#52C5DC');
    push();
    translate(x+100,y-80);
    rotate(Math.PI / -4);
    ellipse(0, 0, 52, 92);
    pop();
    
    //tongue
    fill('#EE3E36')
    arc(x-20, y+80, 40, 70, 0, PI+QUARTER_PI, CHORD);
    
///////////////////////////////////////////////////////////
    
    fill('#ffaa00')
    ellipse(x2, y, 200, 200);
    
    
    

    if(mouseX > x2-110&&mouseX<x2+110&&mouseY<y+110&&mouseY>y-110){
    //eyeLeft
    fill('#ffaa00');
    ellipse(x2+42, y-26, 64, 64);
    //eyeRight
    fill('#ffaa00');
    ellipse(x2-42, y-26, 64, 64);
    fill('#314f35');
    rect(x2-80,y-35,60, 20)
    rect(x2+20,y-35,60, 20)
    
    

    } else {//eyeLeft
    createCanvas(640 * 2, 480 * 2)
    fill('#ffaa00')
    ellipse(x2, y, 200, 200);
    fill('#FFFFFF');
    ellipse(x2+42, y-26, 64, 64);
    //eyeRight
    fill('#FFFFFF');
    ellipse(x2-42, y-26, 64, 64);
        
    //pupilLeft
    fill('#314f35');
    push();
    translate(x2+42,y-26);
    rotate(Math.PI );
    ellipse(0, 0, 20, 45);
    pop();
    //pupilRight
    fill('#314f35');
    push();
    translate(x2-42,y-26);
    rotate(Math.PI );
    ellipse(0, 0, 20, 45);
    pop();
    
    } 
    
    //earLeft
    fill('#ffde3d')
    triangle(x2+60, y-80, x2+110, y-110, x2+100, y-20)
    
    //earRight
    fill('#ffde3d')
    triangle(x2-60, y-80, x2-110, y-110, x2-100, y-20)
    
    //mouth
    fill('#ffde3d')

    arc(x2, y+70, 120, 40, 0, PI, CHORD);
    
    fill('#ffaa00')
    arc(x2, y+60, 100, 40, 0, PI, CHORD);
    fill('#ffde3d')
    ellipse(x2, y+40,60, 50)
    rect(x2-8,y+30,16,50);


}










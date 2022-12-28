var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec()
var result
function preload(){
    song = loadSound("Remix Chicken Ringtones BGM ringtone attitude ringtones shorts bgmringtones ringtones")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#fff3b0")
  angleMode(DEGREES)

music_btn = createButton("音樂跳舞")
music_btn.position(100,windowHeight/4-50)
music_btn.size(350, 100);
music_btn.style('background-color', '#fb8500');
music_btn.style('font-size', '44px');
music_btn.style('color', '#ffd60a');
music_btn.mousePressed(music_btn_pressed)

mouse_btn = createButton("滑鼠跳動")
mouse_btn.position(100,windowHeight*1/2-50)
mouse_btn.size(350, 100);
mouse_btn.style('background-color', '#ffd60a');
mouse_btn.style('font-size', '44px');
mouse_btn.style('color', '#fb8500');
mouse_btn.mousePressed(mouse_btn_pressed)

Speech_btn = createButton("語音辨識(跳舞/不要跳)")
Speech_btn.position(100,windowHeight*3/4-50)
Speech_btn.size(350, 100);
Speech_btn.style('background-color', '#fb8500');
Speech_btn.style('font-size', '32px');
Speech_btn.style('color', '#ffd60a');
Speech_btn.mousePressed(Speech_btn_pressed)
}

function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  mosueIsplay = false
  amp=new p5.Amplitude()  
}

function mouse_btn_pressed(){
  song.pause()
  mouseIsplay = true
  songIsplay = false

}

function Speech_btn_pressed(){
  myRec.onResult = showResult;
  myRec.start();  

}



function draw(clr) {
  push()
    background("#fff3b0")

    fill("#ffd60a")
    stroke(0)
    strokeWeight(5)
    ellipse(windowWidth*2/3-160,windowHeight/2+30,100,180)//left hand

    fill("#ffd60a")
    stroke(0)
    ellipse(windowWidth*2/3+160,windowHeight/2+30,100,180)//right hand

    fill("#ffd60a")
    stroke(0)
    ellipse(windowWidth*2/3,windowHeight/2,350,380)//body
    
    fill(0)
    stroke(0)
    ellipse(windowWidth*2/3-70+(mouseX-windowWidth/2)/20,windowHeight/2-50+(mouseY-windowHeight/2)/20,35)//left eye
    
    fill(0)
    stroke(0)
    ellipse(windowWidth*2/3+70+(mouseX-windowWidth/2)/20,windowHeight/2-50+(mouseY-windowHeight/2)/20,35)//right eye
    
    fill("#fb8500")
    stroke(0)
    arc(windowWidth*2/3,windowHeight/2+28,70,40,355,185)//down mouth

    fill("#fb8500")
    stroke(0)
    ellipse(windowWidth*2/3,windowHeight/2,100,60)//up mouth
    
    fill(0)
    stroke(0)
    ellipse(windowWidth*2/3-20,windowHeight/2,10,10)//left nose hole

    fill(0)
    stroke(0)
    ellipse(windowWidth*2/3+20,windowHeight/2,10,10)//right nose hole

    line(windowWidth*2/3-50,windowHeight/2+185,windowWidth*2/3-50,windowHeight/2+200)//left leg
    line(windowWidth*2/3-50,windowHeight/2+200,windowWidth*2/3-70,windowHeight/2+210)//lf1
    line(windowWidth*2/3-50,windowHeight/2+200,windowWidth*2/3-60,windowHeight/2+220)//lf2
    line(windowWidth*2/3-50,windowHeight/2+200,windowWidth*2/3-45,windowHeight/2+225)//lf3

    line(windowWidth*2/3+50,windowHeight/2+185,windowWidth*2/3+50,windowHeight/2+200)//right leg
    line(windowWidth*2/3+50,windowHeight/2+200,windowWidth*2/3+70,windowHeight/2+210)//rf1
    line(windowWidth*2/3+50,windowHeight/2+200,windowWidth*2/3+60,windowHeight/2+220)//rf2
    line(windowWidth*2/3+50,windowHeight/2+200,windowWidth*2/3+45,windowHeight/2+225)//rf3
  pop()

}
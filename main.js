var song_h="";
var song_p="";
function preload(){
song_h=loadSound("music.mp3");
song_p=loadSound("music2.mp3");
}
function setup(){
canvas=createCanvas(600, 400);
canvas.position(425, 200);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video, 0, 0, 600, 400);
}

var song_h="";
var song_p="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
song_h=loadSound("music.mp3");
song_p=loadSound("music2.mp3");
}
function setup(){
canvas=createCanvas(600, 400);
canvas.position(425, 200);
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)}
function draw(){
image(video, 0, 0, 600, 400);
}
function modelLoaded(){
console.log('Model is Loaded');
}
function play(){
song_h.play();
}
function gotPoses(){
if (results.length>0) {
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);
console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
}
}

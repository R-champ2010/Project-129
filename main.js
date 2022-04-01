sunflower="";
bel="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scorerightWrist=0;
song1_status="";
song2_status="";

function preload(){
    sunflower=loadSound("Post Malone Swae Lee  Sunflower SpiderMan Into the SpiderVerse.mp3");
    bel=loadSound("Imagine Dragons - Believer.mp3");
}

function setup(){
    canvas=createCanvas(700,600);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 700, 600);
    fill("#FF0000");
    stroke("#FF0000");
    circle(leftWristX,leftWristY,20);

    song1_status=sunflower.isPlaying();
    song2_status=bel.isPlaying();
    
}


function modelLoaded(){
    console.log('Posenet is initialised');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
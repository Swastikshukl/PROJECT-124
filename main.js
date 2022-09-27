function setup(){
    canvas=createCanvas(550, 550);
    canvas.position(560, 150);

    video=createCapture(VIDEO);
    video.size(550, 550);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes);
}
function modelLoaded(){
    console.log('posenet is inizialised');

}
function draw(){
    background('#FFC0CB');
}
function gotposes(results){
if(results.leangth>0){
    console.log(results);
}
}

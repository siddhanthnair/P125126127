
nose_x="";
nose_y="";
Leftwrist_x="";
difference="";
Rightwrist_x="";

function setup(){
    canvas=createCanvas(500, 500);
    canvas.position(750, 130);

    video= createCapture(VIDEO);
    video.size(500, 500);
    video.position(100, 150);
    poseNet=ml5.poseNet(video, Model_Loaded);
    poseNet.on("pose",GotPoses);
}

function Model_Loaded(){
console.log("Posenet  is initialised");
}
function GotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x= results[0].pose.nose.x;
        nose_y= results[0].pose.nose.y;
        Leftwrist_x= results[0].pose.leftWrist.x;
        Rightwrist_x= results[0].pose.rightWrist.x;
        console.log(nose_x, nose_y, Leftwrist_x, Rightwrist_x);
        difference= floor(Leftwrist_x - Rightwrist_x);
        }
}
function draw(){
background("blue");
fill("green");
stroke("white");
textSize(difference)
text("Siddhanth", nose_x, nose_y);    
document.getElementById("text_size").innerHTML= "Size of the text is "+ difference;
}

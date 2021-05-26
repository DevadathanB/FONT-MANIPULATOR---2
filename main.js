function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);
    canvas = createCanvas(400, 400);
    canvas.position(460, 150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPose);
}

function modelLoaded() {
    console.log('Model Losded!');
}

function gotPose(results) {
    if (results.length > 0) {

    }
}
Webcam.set({
    width: 350, 
    height: 300,
    image_format:"png",
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img style'width='350' height='300' id='captured_image' src='"+data_uri+"'/>";
        
    });
}
console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_4I4YPIpV/model.json', ModelLoaded);
function ModelLoaded(){
    console.log('model loaded');
}
function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_face_name").innerHTML = results[0].label;
    }
}
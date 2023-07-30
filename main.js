Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);

classifier=ml5.imageClassiffier('https://teachablemachine.withgoogle.com/models/oHOYZ9cWK/model.json',modelLoaded);

function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);

}
function gotResult(error, results) {
    if (error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("result_hand gesture_name").innerHTML=results[0].label;
        document.getElementById("result_hand gesture_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
if(results[0].label == "victory")
{
 document.getElementById("update_hand gesture").innerHTML="&#9996;";
 }
if(results[0].label == "best")
{
    document.getElementById("update_hand gesture").innerHTML="&#128077;";
}
if(result[0].label == "amazing")
{
    document.getElementById("update_hand gesture").innerHTML="&#128076;";
}
if(result[0].label == "good luck")
{
    document.getElementById("update_hand gesture").innerHTML="&#129310;";
}
if(result[0].label == "peace")
{
    document.getElementById("update_hand gesture").innerHTML="&#9996;";
}
if(results[1].label == "victory")
{
 document.getElementById("update_hand gesture2").innerHTML="&#9996;";
 }
if(results[1].label == "best")
{
    document.getElementById("update_hand gesture2").innerHTML="&#128077;";
}
if(result[1].label == "peace")
{
    document.getElementById("update_hand gesture2").innerHTML="&#9996;";
}
if(result[1].label == "good luck")
{
    document.getElementById("update_hand gesture2").innerHTML="&#129310;";
}

    }
}
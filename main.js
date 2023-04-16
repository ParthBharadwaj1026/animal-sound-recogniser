function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    //add ml5 link
    classifier=ml5.soundClassifier('',modelLoaded);
}

function modelReady(){
    console.log("model is ready");
}

function modelLoaded(){
    classifier.classify(modelReady);
    console.log('model is loaded');
}
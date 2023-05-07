lion_count=0;
cat_count=0;
goat_count=0;
dog_count=0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });

    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8ITSEgQ9q/model.json',modelLoaded);
}

function modelLoaded(){
    classifier.classify(modelReady);
    console.log('model is loaded');
}

function modelReady(error,result){
   if (error) {
    console.error(error);
   }
   else{
    console.log(result);
    
    rng_num_R=Math.floor(Math.random()*255)+1;
    rng_num_G=Math.floor(Math.random()*255)+1;
    rng_num_B=Math.floor(Math.random()*255)+1;

    document.getElementById('hearing_sound').style.color='rgb('+rng_num_R+','+rng_num_G+','+rng_num_B+')';
    document.getElementById('hearing_sound').innerHTML='I can hear '+result[0].label;
    document.getElementById('count').innerHTML=dog_count+cat_count+lion_count+goat_count;

    img=document.getElementById('img_animal');

    if(result[0].label=='dog'){
        img.src='dog.png';
        dog_count++;
    }
    else if(result[0].label=='cat'){
        img.src='cat.png';
        cat_count++;
    }
    else if(result[0].label=='goat'){
        img.src='goat.png';
        goat_count++;
    }
    else if(result[0].label=='lion'){
        img.src='lion.png';
        lion_count++;
    }
    else{
        img.src='hearing.gif';
    }
   }
}
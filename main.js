function startClassification() 
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('teachable machine link/model.json', modelReady);
}

function modelReady() 
{
    classifier.classify(gotResults);
}
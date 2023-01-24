//https://teachablemachine.withgoogle.com/models/D5TR9me8i/

Webcam.attach( '#camera');

  Webcam.set({
   width:350,
   heigth:300,
   image_format : 'png',
   png_quality:90

  });

  function take_snapshot()
  {
    Webcam.snap(function(data_uri) {
        document.grtElementByld("result").innerHTML = '<img id="selfie_image"'+data_uri+'"/>';
    });
  }

   console.log('ml5 version:', m15.version)

    //initialize the image Classifier mthod with MobileNet
//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/D5TR9me8i/model.json',modelLoaded);

function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by cofidence.
    console.log(results);
    document.getElementByld("result_object_name").innerHTML = results[0].label;
    document.getElementByld("result_object_accuracy").innerHTML = results[0].cofidence.toFixed(3);
  }
}




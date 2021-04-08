document.querySelector("#speech").addEventListener("click", function(e){
  speech.start();
  alert("RECORDING");
  speech.stop();
  console.log(e)
});


var speech = new SpeechRecognition();
speech.lang = "jp";

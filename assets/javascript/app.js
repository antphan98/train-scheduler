$(document).on("click", "#submit", function (event) {
event.preventDefault;

let trainData = {
    trainName: $("#inputTrain").val().trim(),
    destination: $("#inputDestination").val().trim(),
    trainTime: $("#inputTrainTime").val().trim(),
    frequency: parseInt($("#inputFrequency").val().trim())

}

console.log(trainData);



});
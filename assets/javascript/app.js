$(document).ready(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyAnMKcmu_grEC7n94X5EjJ387SyglzTnWA",
        authDomain: "trainscheduler-39708.firebaseapp.com",
        databaseURL: "https://trainscheduler-39708.firebaseio.com",
        projectId: "trainscheduler-39708",
        storageBucket: "trainscheduler-39708.appspot.com",
        messagingSenderId: "545866011970",
        appId: "1:545866011970:web:318bcd1f80ef1e760464db"
    };

    firebase.initializeApp(firebaseConfig);

    const database = firebase.database();
    console.log(database);


    $(document).on("click", "#submit", function (event) {

        event.preventDefault;


        const trainName = $("#inputTrain").val().trim();
        const destination = $("#inputDestination").val().trim();
        const trainTime = $("#inputTrainTime").val().trim();
        const frequency = parseInt($("#inputFrequency").val().trim());

        database.ref().push({

            trainName: trainName,
            destination: destination,
            frequency: frequency,
            trainTime: trainTime,

        });

        $("#inputTrain").val("");
        $("#inputDestination").val("");
        $("#inputTrainTime").val("");
        $("#inputFrequency").val("");

    });

    database.ref().on("child_added", function (childSnapshot) {
        const newTrain = childSnapshot.val().trainName;
        const newDestination = childSnapshot.val().destination;
        const newTime = childSnapshot.val().trainTime;
        const newFrequency = childSnapshot.val().frequency;

        const startTime = moment(newTime, "hh:mm").subtract(1, "years");
        const subtractTime = moment().diff(moment(startTime), "minutes");
        const remainder = subtractTime % newFrequency;
        const minToArrival = newFrequency - remainder;
        const nextTrain = moment().add(minToArrival, "minutes");
        const train = moment(nextTrain).format("hh:mm");

        $("#table").append(
            "<tr><td>" + newTrain +
            "</td><td>" + newDestination +
            "</td><td>" + newFrequency +
            "</td><td>" + train +
            "</td><td>" + minToArrival + "</td></tr>");
    });

});
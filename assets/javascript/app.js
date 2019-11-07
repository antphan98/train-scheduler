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


            console.log(trainData);
            database.ref().push({

                trainName: trainName,
                destination: destination,
                frequency: frequency,
                trainTime: trainTime,
                dateAdded: firebase.database.ServerValue.TIMESTAMP

            });

            database.ref().on("child_added", function (childSnapshot) {
                const trainName = childSnapshot.val();
                const destination = childSnapshot.val();
                const trainTime = childSnapshot.val();
                const frequency = childSnapshot.val();



                $("#table").append(
                    ' <tr><td>' + trainName +
                    ' </td><td>' + destination +
                    ' </td><td>' + trainTime +
                    ' </td><td>' + frequency + ' </td></tr>');
            });
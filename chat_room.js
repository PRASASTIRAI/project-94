
//ADD YOUR FIREBASE LINKS HERE
firebaseConfig = {
      apiKey: "AIzaSyCsAIOHITbluP6syPLQPFKbCFMF3UdpCaU",
      authDomain: "kwitter-cf448.firebaseapp.com",
      databaseURL: "https://kwitter-cf448-default-rtdb.firebaseio.com",
      projectId: "kwitter-cf448",
      storageBucket: "kwitter-cf448.appspot.com",
      messagingSenderId: "7948493365",
      appId: "1:7948493365:web:e32183cb986ecb41f6477c",
      measurementId: "G-QT3VT7JPJN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
 //function addroom start//
 //function addroom end//

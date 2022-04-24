const firebaseConfig = {
      apiKey: "AIzaSyC53MIoAsvgBtaXy8SNftVHsfIBSo2FPQQ",
      authDomain: "kwitter-2237c.firebaseapp.com",
      databaseURL: "https://kwitter-2237c-default-rtdb.firebaseio.com",
      projectId: "kwitter-2237c",
      storageBucket: "kwitter-2237c.appspot.com",
      messagingSenderId: "1061531070837",
      appId: "1:1061531070837:web:0364c34a4ca251535f633c",
      measurementId: "G-BYMJ15CXJY"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

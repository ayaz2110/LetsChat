//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBOr2EyGKaK-E26jgDVPPqb9-DFKNy0Mdg",
      authDomain: "kwitter-2131a.firebaseapp.com",
      databaseURL: "https://kwitter-2131a-default-rtdb.firebaseio.com",
      projectId: "kwitter-2131a",
      storageBucket: "kwitter-2131a.appspot.com",
      messagingSenderId: "1028458933714",
      appId: "1:1028458933714:web:fba90db3ce39f9ddd76c0b"
    };
    //ADD YOUR FIREBASE LINKS HERE
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0     
          });

          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

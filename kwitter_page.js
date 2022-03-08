//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDe3Oz_nrPRPCMfKEt7wYQCu5Sh0OsxK0M",
      authDomain: "kwitter-app-c40cc.firebaseapp.com",
      databaseURL: "https://kwitter-app-c40cc-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-c40cc",
      storageBucket: "kwitter-app-c40cc.appspot.com",
      messagingSenderId: "383539895953",
      appId: "1:383539895953:web:af4a54052c539cb36fe930",
      measurementId: "G-29Y9J2PDNR"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     username=localStorage.getItem("username");
     roomname=localStorage.getItem("roomname");
    function  send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(roomname).push({
                name:username,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

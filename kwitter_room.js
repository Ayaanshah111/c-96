
//ADD YOUR FIREBASE LINKS HERE
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
 document.getElementById("user_name").innerHTML="welcome   "+username+"   !";
 function  addroom(){
       roomname=document.getElementById(Room_name).value;
       firebase.database().ref("/").child(roomname).update({
             purpose:"adding room name"
       });
       localStorage.setItem("roomname",roomname);
   window.location="kwitterpage.html";

 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      Room_name=childKey;
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("roomname",name);
      window.location="kwitterpage.html";
}
function logout(){
   localStorage.removeItem("username")  ; 
   localStorage.removeItem("roomname");
   window.location="kwitter.html";
}
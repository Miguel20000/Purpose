const firebaseConfig = {
  apiKey: "AIzaSyCM0mBZD7fRwcD7_Dr8FS_jdFIzS2RkBd4",
  authDomain: "vamosconversar-3775b.firebaseapp.com",
  databaseURL: "https://vamosconversar-3775b-default-rtdb.firebaseio.com",
  projectId: "vamosconversar-3775b",
  storageBucket: "vamosconversar-3775b.appspot.com",
  messagingSenderId: "256427620731",
  appId: "1:256427620731:web:0a2ede58e323809912e5de"
};

// Initialize Firebase
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
console.log(firebase_message_id);         
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button class = 'btn btn-warming' id="+firebase_message_id+" value = "+like+" onclick='updateLike(this.id)' >"; 
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById(output).innerHTML += row
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
 
  






  

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}

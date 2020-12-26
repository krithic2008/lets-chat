var roomName;
var username=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome " +username;
function addRoom(){
    roomName=document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomName).update({
          purpose:"adding room"
    })
    localStorage.setItem("roomName",roomName);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
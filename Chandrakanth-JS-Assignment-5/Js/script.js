
let users = [{
    userId: "USR0001",
    name: "Arjun",
    profilepicture: "person1.avif",
    statusMessage: "Knowledge is power.",
    presence: 1,
},
{
    userId: "USR0002",
    name: "Allen",
    profilepicture: "person2.jpg",
    statusMessage: "All that glitters is not gold.",
    presence: 2,
},
{
    userId: "USR0003",
    name: "Saikumar",
    profilepicture: "person3.jpg",
    statusMessage: "Eighty percent of success is showing up.",
    presence: 3,
},
{
    userId: "USR0004",
    name: "Shreya",
    profilepicture: "person4.jpg",
    statusMessage: "May the Force be with you.",
    presence: 4,
},
{
    userId: "USR0005",
    name: "Ganesh",
    profilepicture: "person5.jpg",
    statusMessage: "Frankly, my dear, I don't give a damn.",
    presence: 3,
},
{
    userId: "USR0006",
    name: "umesh",
    profilepicture: "person2.jpg",
    statusMessage: "For those to whom much is given, much is required.",
    presence: 1,
},
{
    userId: "USR0007",
    name: "srikanth",
    profilepicture: "person3.jpg",
    statusMessage: "Go ahead, make my day.",
    presence: 2,
},
{
    userId: "USR0008",
    name: "Chandrakanth",
    profilepicture: "person4.jpg",
    statusMessage: "He travels the fastest who travels alone.",
    presence: 3,
},
{
    userId: "USR0009",
    name: "Akash",
    profilepicture: "person5.jpg",
    statusMessage: "The journey of a thousad miles begin with one step",
    presence: 2,
},
{
    userId: "USR00010",
    name: "chintu",
    profilepicture: "person2.jpg",
    statusMessage: "Online",
    presence: 1,
},
{
    userId: "USR00011",
    name: "karuna",
    profilepicture: "person4.jpg",
    statusMessage: "Hell has no fury like a woman scorned.",
    presence: 4,
},
{
    userId: "USR00012",
    name: "Sarah",
    profilepicture: "person2.jpg",
    statusMessage: "The journey of a thousad miles begin with one step",
    presence: 2,
},

];
function getStatusBorderColor(x){
    switch (x) {
        case 1:
            return "green";
        case 2:
            return "red";
        case 3:
            return "yellow";
        default:
            return "grey";
    }
}
function renderList() {
    const userContainer = document.querySelector(".userlist");
    userContainer.innerHTML = ""; // Clear previous content
    
    for (let i of users) {
        const div = document.createElement("div");
        div.id = i.userId;
        div.className = "friends";
             div.innerHTML = `
            <img src="${i.profilepicture}" class="profile" style="border-color: ${getStatusBorderColor(i.presence)}">
            <span class="name-holder">
                <h4>${i.name}</h4>
                <span class="tag-line">${i.statusMessage}</span>
            </span>
            <i class="fa-solid fa-ellipsis-vertical"></i>`;
            
        
        userContainer.appendChild(div); // Append the created div to the userContainer
    }
}
function updatePresence(status){
    for(let i of users){
        if(i.userId==status.userId){
            i.presence = status.presence;
        }
    
    }
    renderList();
}
function updatemessage(msg){
    for(let i of users){
        if(i.userId==msg.userId){
            i.statusMessage=msg.statusMessage;
        }
    }
    renderList();
}
function addUser(user){
    users.unshift(user);
    renderList();

}
function deleteUser(userId){
    users=users.filter(user=>user.userId!=userId);
    renderList();
}

// Call the renderList function to populate the user profiles
renderList();


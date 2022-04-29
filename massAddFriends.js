let icon = document.querySelectorAll("i.hu5pjgll.lzf7d6o1")

let addFriendElement;

let friendstoAdd = [];

for(let a=0; a<icon.length; a++){
    addFriendElement = icon[a].parentElement.parentElement.parentElement.parentElement;
    if(addFriendElement.ariaLabel=='Add Friend'){
        friendstoAdd.push(addFriendElement);
 }}

console.log("Number of Friends to add : ",friendstoAdd.length);
console.log("If the Number is smaller then total reactions then make sure scroll enough");

function getRandomInt(min, max) {
  return ( Math.floor(Math.random() * max) + min);
}

friendstoAdd.forEach(el=>{
	if(el!=undefined){
		setTimeout(()=>{
			el.click();
			console.log("friend added");
		}, getRandomInt(6000, 15000))
	}
})

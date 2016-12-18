// assume this info is from login
var currentUser = {
	first: "Jin",
	last: "Kuwata",
	id: "a1"
};

var userMsg = [];

document.querySelector('#submit').addEventListner('click', function(){
	userMsg.push(document.querySelector('#textinput').value);
	alert(userMsg);
	document.querySelector('#textinput').value = "";
});


// var userMsg = document.querySelector('#textinput').value;
//
// document.getElementById('submit').addEventListner('click', function(){
// alert(userMsg);
// document.querySelector('#textinput').value = "";
// });
//
// };


let boxes = document.getElementsByClassName("checks");
let boxesArray = new Array();
function getNames() {
	//alert("hi there!")

	for (let i=0; i<boxes.length; i++) {

		if (boxes[i].checked === true) {
			boxesArray.push(boxes[i].value);

		}	else {
		false;
	}
	}

	var list = "<li>" + boxesArray.join("</li><li>") + "</li>";
	document.getElementById("list-result").innerHTML = list;

}



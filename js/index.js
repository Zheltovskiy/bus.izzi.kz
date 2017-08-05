function submitData(){
	console.log("hello");
	var xhtpp = new XMLHttpRequest();
	xhtpp.open("POST", "http://auctioneer.inessoft.kz/api/tickets");
	xhtpp.setRequestHeader("Content-type","application/json");
	xhtpp.send(JSON.stringify(
		{"phoneNumber":document.getElementById("phonenumber").value, "ticketId":document.getElementById("ticketId").value}));

	xhtpp.onreadystatechange = function() {
        if (xhtpp.readyState == 4) {
        	console.log(xhtpp.status);
            switch(xhtpp.status){
		case 201: {
			document.getElementById("modal_header").innerHTML = "Поздравляем! "; 
			document.getElementById("modal_body").innerHTML = "Вы участвуете в розыгрыше"; 
			break;} 
		case 400: {
			document.getElementById("modal_header").innerHTML = "Ошибка!"; 
			document.getElementById("modal_body").innerHTML = "Данный билет id уже зарегистрирован"; 
			break;}
		default : {
			document.getElementById("modal_header").innerHTML = "Ой!";
			 document.getElementById("modal_body").innerHTML = "Что-то пошло не так..."; 
			break;}
	}
        }
    };	
}
// function getWinners(){
// 	var xhtpp = new XMLHttpRequest();
// 	xhtpp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var myArr = JSON.parse(this.responseText);
//         myFunction(myArr);
//     }
// 	};
// 	xhtpp.open("GET", "http://auctioneer.inessoft.kz/api/lottery-rounds");
// 	xhtpp.send();

// }
// function myFunction(arr) {
// 	console.log(arr);
//     var row = "";
//     var i;
// 	var table = document.getElementById("myTable");    
// 	for(i = 0; i < arr.length; i++) {
//        row = table.insertRow(i);
//        var id = row.insertCell(0);
//        var phoneNumber = row.insertCell(1);
//        var award = row.insertCell(2);

//        id.innerHTML = arr[i].winner.ticketId;
//        phoneNumber.innerHTML = arr[i].winner.phoneNumber;
//        award.innerHTML = arr[i].prize;
//     }
// }

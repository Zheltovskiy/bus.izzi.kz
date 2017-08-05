function getWinners(){
	var xhtpp = new XMLHttpRequest();
	xhtpp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
	};
	xhtpp.open("GET", "http://auctioneer.inessoft.kz/api/lottery-rounds");
	xhtpp.send();

}
function myFunction(arr) {
	console.log(arr);
    var row = "";
    var i;
	var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];    
	for(i = 0; i < arr.length; i++) {
       row = table.insertRow(i+1);
       var id = row.insertCell(0);
       var phoneNumber = row.insertCell(1);
       var award = row.insertCell(2);

       id.innerHTML = arr[i].winner.ticketId;
       phoneNumber.innerHTML = arr[i].winner.phoneNumber;
       award.innerHTML = arr[i].prize;
    }
}
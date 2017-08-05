function isPhoneValid(phoneNumber) {
    var phonePattern = /^\+7[0-9]{10}$/;
    return phonePattern.test(phoneNumber);
}

function isTicketIdValid(ticketId) {
    var ticketIdPattern = /^[0-9]{6}$/;
    return ticketIdPattern.test(ticketId);
}

function submitData() {
    var phoneNumber = document.getElementById("phonenumber").value;
    var ticketId = document.getElementById("ticketId").value;
    if (!isPhoneValid(phoneNumber)) {
        document.getElementById("modal_header").innerHTML = "Неверный номер";
        document.getElementById("modal_body").innerHTML = "Пожалуйста, введите номер в формате +77071234567";
        return;
    }
    if (!isTicketIdValid(ticketId)) {
        document.getElementById("modal_header").innerHTML = "Неверный идентификатор";
        document.getElementById("modal_body").innerHTML = "Пожалуйста, введите шестизначный идентификатор билета";
        return;
    }

    var xhtpp = new XMLHttpRequest();
    xhtpp.open("POST", "http://auctioneer.inessoft.kz/api/tickets");
    xhtpp.setRequestHeader("Content-type", "application/json");
    xhtpp.send(JSON.stringify(
        {
            "phoneNumber": phoneNumber,
            "ticketId": document.getElementById("ticketId").value
        }));

    xhtpp.onreadystatechange = function () {
        if (xhtpp.readyState == 4) {
            console.log(xhtpp.status);
            switch (xhtpp.status) {
                case 201:
                {
                    document.getElementById("modal_header").innerHTML = "Поздравляем! ";
                    document.getElementById("modal_body").innerHTML = "Вы участвуете в розыгрыше";
                    break;
                }
                case 400:
                {
                    document.getElementById("modal_header").innerHTML = "Ошибка!";
                    document.getElementById("modal_body").innerHTML = "Данный билет id уже зарегистрирован";
                    break;
                }
                default :
                {
                    document.getElementById("modal_header").innerHTML = "Ой!";
                    document.getElementById("modal_body").innerHTML = "Что-то пошло не так...";
                    break;
                }
            }
        }
    };
}
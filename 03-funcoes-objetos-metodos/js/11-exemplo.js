(function () {
    var hotel = {
        name: 'Stark',
        roomRate: 100,
        discount: 10,
        offerPrice: function () {
            return this.roomRate * ((100 - this.discount) / 100);
        }
    }

    var elHotelName, elRoomRate, elSpecialRate;

    elHotelName = document.getElementById('hotelName');
    elRoomRate = document.getElementById('roomRate');
    elSpecialRate = document.getElementById('specialRate');

    elHotelName.textContent = hotel.name;
    elRoomRate.textContent = '$ ' + hotel.roomRate.toFixed(2);
    elSpecialRate.textContent = '$ ' + hotel.offerPrice();

    var expiryMessage, today, elEnds;

    function offerExpires (today) {
        var weekFromToday, day, date, month, year, dayNames, monthNames;

        // Adiciona 7 dias à data/hora atual (milissegundos)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
            'November', 'December'];

        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        // Define a mensagem
        expiryMessage = 'Offer expires next ';
        expiryMessage += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';

        return expiryMessage;
    }

    today = new Date();
    elEnds = document.getElementById('info');
    elEnds.innerHTML = offerExpires(today);
}());
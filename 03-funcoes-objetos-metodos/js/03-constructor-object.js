/* Notação construtor */

var hotel = new Object();

hotel.name = 'Stark';
hotel.rooms = 200;
hotel.booked = 150;
hotel.checkAvailability = function () {
    return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
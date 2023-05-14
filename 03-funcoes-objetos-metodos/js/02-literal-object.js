/* Objeto com notação literal */

var hotel = {
    name: 'Stark',
    rooms: 200,
    booked: 150,
    checkAvailability: function () {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
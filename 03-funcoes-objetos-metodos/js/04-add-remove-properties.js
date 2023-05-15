/* Adicionando e removendo propriedades */

var hotel = {
    name: 'Stark',
    rooms: 200,
    booked: 150
};

hotel.gym = true;
hotel.pool = false;

delete hotel.pool;

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elGym = document.getElementsByClassName('gym');
elGym.textContent = 'Gym: ' + hotel.gym;
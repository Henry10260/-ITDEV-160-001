//constructed hotel data
var hotels = []; 

//Hotel constructor function
function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
}

//Hotel list item click handler
function hotelClick(event){
    var hotelName = event.target.innerHTML;
    var hotel = hotels.find(function(hotel){return hotel.name === hotelName});

    if(hotel !== undefined)
    {
        var nameEl = document.getElementById('name');
        nameEl.textContent = hotel.name;

        var roomsEl = document.getElementById('rooms');
        roomsEl.textContent = hotel.rooms;

        var bookedEl = document.getElementById('booked');
        bookedEl.textContent = hotel.booked;

        var availableEl = document.getElementById('available');
        availableEl.textContent = hotel.checkAvailability();
    }
};

//Return today's date, formatted
function getTodaysDate(){
    var today = new Date();
    return today.getFullYear();
}

//Page init function
function init(){
    //construct hotels and add to data array
    hotels.push(new Hotel('Hilton', 200, 150));
    hotels.push(new Hotel('Pfister', 100, 50));
    hotels.push(new Hotel('Days Inn', 150, 140));

    //Write the copyright date
    var dateEl = document.getElementById('date');
    dateEl.textContent = getTodaysDate();

    //Wire hotels list click event handler
    var hotelList = document.getElementById('hotel-list');
    hotelList.onclick = hotelClick;
}

init();

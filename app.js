let menu = document.querySelector('#bars');

menu.addEventListener('click', () => {
    document.querySelector('ul').classList.toggle('active');
})



// Renk butonlarını seç
let redBtn = document.querySelector('#redColor');
let greenBtn = document.querySelector('#greenColor');
let yellowBtn = document.querySelector('#yellowColor');
let blueBtn = document.querySelector('#blueColor');

// Bisiklet resimlerini seç
let redBike = document.querySelector('#red-bike');
let greenBike = document.querySelector('#green-bike');
let yellowBike = document.querySelector('#yellow-bike');
let blueBike = document.querySelector('#blue-bike');

// İkinci grup renk butonlarını seç
let rBtn = document.querySelector('#red');
let gBtn = document.querySelector('#green');
let yBtn = document.querySelector('#yellow');
let bBtn = document.querySelector('#blue');

// Renk butonlarına tıklama işlemi
redBtn.addEventListener('click', () => setActiveColor('.color-red', redBike, '.colors .color'));
greenBtn.addEventListener('click', () => setActiveColor('.color-green', greenBike, '.colors .color'));
yellowBtn.addEventListener('click', () => setActiveColor('.color-yellow', yellowBike, '.colors .color'));
blueBtn.addEventListener('click', () => setActiveColor('.color-blue', blueBike, '.colors .color'));

// İkinci grup renk butonlarına tıklama işlemi
rBtn.addEventListener('click', () => setActiveColor('.color-red', redBike, '.colors-2 .color'));
gBtn.addEventListener('click', () => setActiveColor('.color-green', greenBike, '.colors-2 .color'));
yBtn.addEventListener('click', () => setActiveColor('.color-yellow', yellowBike, '.colors-2 .color'));
bBtn.addEventListener('click', () => setActiveColor('.color-blue', blueBike, '.colors-2 .color'));

function setActiveColor(colorClass, bike, parentSelector) {
    // Aktif renk butonunu yönet
    let activeColor = document.querySelector(parentSelector + '.active');
    if (activeColor) {
        activeColor.classList.remove('active');
    }
    document.querySelector(colorClass).classList.add('active');
    
    // Aktif bisikleti yönet
    let activeBike = document.querySelector('.bikes img.active');
    if (activeBike) {
        activeBike.classList.remove('active');
    }
    bike.classList.add('active');
}


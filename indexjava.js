const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});


function displayTime() {
    let dateTime = new Date(); // Dabartinė data ir laikas
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    // Pridedame nulį prie valandų, minučių ar sekundžių, jei jos mažesnės nei 10
    if (hrs < 10) hrs = "0" + hrs;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    // Atnaujiname laikrodžio turinį
    const clock = document.getElementById("clock");
    if (clock) {
        clock.textContent = `${hrs}:${min}:${sec}`;
    }
}

// Nustatome, kad funkcija būtų iškviečiama kas sekundę
setInterval(displayTime, 1000);

// Iškart atnaujiname laikrodžio reikšmę
displayTime();


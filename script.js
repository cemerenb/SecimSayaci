



var countDownDate = new Date("05 14 2023 09:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    document.getElementById("countdown_gun").innerHTML = days + " " +"Gün ";

    // Tamamlandı yazısı
    
}, 1000);


var countDownDate = new Date("05 14 2023 09:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    document.getElementById("countdown_saat").innerHTML = hours +" " + "Saat ";

    // Tamamlandı yazısı
    
}, 1000);


var countDownDate = new Date("05 14 2023 09:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById("countdown_dak").innerHTML = minutes +" " + "Dakika " ;

    
}, 1000);


var countDownDate = new Date("05 14 2023 09:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countdown_san").innerHTML = seconds + " " + "Saniye " ;

    
}, 1000);

var countDownDate1 = new Date("05 14 2023 09:00:00").getTime();

var x = setInterval(function() {

    var now1 = new Date().getTime();

    var distance = countDownDate1 - now1;


    // Tamamlandı yazısı
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown_text").innerHTML = "Şimdi sandığa gitme vakti";
    }
}, 1000); 

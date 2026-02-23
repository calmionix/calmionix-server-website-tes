function toggleMenu(){
  document.getElementById("sidebar").classList.toggle("active");
}

/* COUNTDOWN */
const eventDate = new Date("2026-03-30T23:59:59").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if(distance < 0){
    document.getElementById("countdown").innerHTML = "Event Selesai";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days+" Hari "+hours+" Jam "+minutes+" Menit "+seconds+" Detik";
},1000);

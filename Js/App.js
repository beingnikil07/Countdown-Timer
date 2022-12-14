const endDate = "14 December 2022 11:00 AM";
document.getElementById("end-date").innerText = endDate; // Setting date dynamically
const inputs = document.querySelectorAll("input");
function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000; // Converting milliseconds to seconds
  inputs[0].value = Math.floor(diff / 3600 / 24); //Calculation for days
  inputs[1].value = Math.floor((diff / 3600) % 24); // Gives you hours always <=24 becz of remainder operator
  inputs[2].value = Math.floor((diff / 60) % 60); // Gives you Minutes
  inputs[3].value = Math.floor(diff % 60); // Gives you seconds
}
// Initial call
clock();

setInterval(() => {
  clock();
}, 1000);
/* But hum chahte hai kiii ye clock function har ek second mai call hoye,to isko
   hum log setInterval ke through krr sakte hai . Initial call to hamari aaise  
   he rahegi.
/*
/**
 *  If we divide milliseconds to 1000 then we get the seconds of milliseconds
 *  we know that
 *  1 Day=24 hrs
 *  1hr =60 minutes
 *  60 minutes=3600 seconds
 *
 */

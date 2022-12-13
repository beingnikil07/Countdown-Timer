const endDate = "15 December 2022 8:00 PM";
document.getElementById("end-date").innerText = endDate; // Setting date dynamically

// Javascript ka date object kisi bhi date ka ek time stamp bna krr deta hai  jo 1 January 1970 se avv tkk ka
// milliseconds hote hai to humko ussi concept ka use karte hue ye countdown banana hai

function clock(){
    const end=new Date(endDate)
    // Basically yha humne kiya ye kii humne end date ke milliseconds bna liye  
    const now=new Date()       
    //Ye ho gyi humari avv kii Date
    console.log(end);
    console.log(now);            
}

// Initial call
clock();
const endDate = "15 December 2022 8:00 PM";
document.getElementById("end-date").innerText = endDate; // Setting date dynamically

function clock(){
    const end=new Date(endDate)
    const now=new Date()                   
    const diff=end-now;
    console.log(diff);     // This will shows you the difference b/w end date and current date
    
}

// Initial call
clock();
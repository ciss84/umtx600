/*function done() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("alldone").style.display = "block";
}*/
function done() {
    document.getElementById("alldone").style.display = "none";
}
function CalcTime(dur){hrs=Math.floor(dur/1000/60/60);min=Math.floor(dur/1000/60-hrs*60);sec=Math.floor(dur/1000-min*60);mil=dur.toString().slice(-3);if (min!=0){ShowDuration=" - WK Exploited In : "+min+" minute"+(min==1?"":"s")+", "+sec+" second"+(sec==1?"":"s");}else {ShowDuration=" - Exploited In: "+sec+" second"+(sec==1?"":"s");}}
function StartTimer(){StartTime=Date.now();}
function EndTimer(){EndTime=Date.now();CalcTime(EndTime=Date.now()-StartTime);document.title+=ShowDuration;}

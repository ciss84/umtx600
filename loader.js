function CalcTime(dur){hrs=Math.floor(dur/1000/60/60);min=Math.floor(dur/1000/60-hrs*60);sec=Math.floor(dur/1000-min*60);mil=dur.toString().slice(-3);if (min!=0){ShowDuration=" - WK Exploited In : "+min+" minute"+(min==1?"":"s")+", "+sec+" second"+(sec==1?"":"s");}else {ShowDuration=" - Exploited In: "+sec+" second"+(sec==1?"":"s");}}
function StartTimer(){StartTime=Date.now();}
function EndTimer(){EndTime=Date.now();CalcTime(EndTime=Date.now()-StartTime);document.title+=ShowDuration;}

function toogle_payload(){var a=new XMLHttpRequest;a.responseType="arraybuffer",a.open("GET",PLfile),a.send(),a.onreadystatechange=function(){if(4==a.readyState){PLD=a.response;var i=chain.syscall(477,0,4*PLD.byteLength,7,4098,-1,0),t=p.array_from_address(i,4*PLD.byteLength),r=new Uint8Array(4-a.response.byteLength%4%4),e=new Uint8Array(a.response.byteLength+r.byteLength);e.set(new Uint8Array(a.response),0),e.set(r,a.response.byteLength);var n=new Uint32Array(e.buffer);t.set(n,0);var s=p.malloc(16);chain.call(libKernelBase.add32(OFFSET_lk_pthread_create_name_np),s,0,i,0), showMessage("EtaHEN Loaded Sucssefuly !..."); EndTimer(); }}}

function load_exploit_done(){
  showMessage("Loading EtaHEN..Please Wait"),
  setTimeout(load_etahen, 100);
}

function load_etahen(){
  PLfile = "etaHEN.bin";
  toogle_payload();
}
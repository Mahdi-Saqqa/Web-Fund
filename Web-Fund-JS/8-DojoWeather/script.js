function alertupdate(elem){
    alert("Loading weather report for "+elem.innerText);
}
function removecookies(elem){
    elem.parentElement.remove();
}
function changetemp(elem){
    console.log(elem.value);
    if(elem.value=="c"){
        var temps=document.querySelectorAll('.temp');
        for(i=0;i<temps.length;i++){
            var t=temps[i].innerText;
            t=(t-32)/1.8;
            temps[i].innerText=Math.round(t);

        }
    }
    else if(elem.value=="f"){
        var temps=document.querySelectorAll('.temp');
        for(i=0;i<temps.length;i++){
            var t=temps[i].innerText;
            t=(t*1.8)+32;
            temps[i].innerText=Math.round(t);
        }
    }
}
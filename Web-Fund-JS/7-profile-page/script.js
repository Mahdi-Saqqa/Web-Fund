console.log("page loaded...");
function change(){
    document.querySelector("#name").innerText="Your Name"
}

function add(id){
    Remove(id);
    document.querySelector('#frnum').innerText++;

}
function Remove(id){

    document.querySelector('#reqnum').innerText--;
    document.querySelector(id).remove();
}
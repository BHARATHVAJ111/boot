function sendToWhatsapp(){
    let num=+916385441763;

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let message=document.getElementById('message').value;

    var url="http://wa.me/"+ + num + "?text="
    +"name :" +name + "%0a"
    +"email :" +email + "%0a"
    +"message :" +message+ "%0a%0a";

    window.open(url, '_blank').focus();
}
function randevu_ver_butonu() {
    alert("Kaydınız Başarıyla tamamlanmıştır..!")
    
}
function gorusme_buton() {
    alert("Görüşme Başarıyla Eklenmiştir..!")
}
function kimlikbuton() {
    alert("Hasta Kimlik Kartı Başarıyla Eklenmiştir..!")
}
function tedavi_butonu() {
    alert("Tedaviniz Başarıyla Eklenmiştir..!")
    
}
function yeni_hasta_ver_butonu() {
    alert("Şu anlık yeni hasta kayıt edemezsiniz..!")
    
}
function yaz()
{
 if(document.anaform.kad.value=="admin" && document.anaform.sifre.value=="admin")

 {

    window.location.href="Anasayfa.html";
  

 }
 else if(document.anaform.kad.value=="" && document.anaform.sifre.value=="")
 {
  alert("Lütfen Kullanıcı Adı ve Şifre giriniz !")
 }
 else{
     alert("Kullanıcı Adı ve Şifre Yanlış !")
 }
}
function temizle(){
    document.getElementById('kad').value = "";
    document.getElementById('sifre').value = "";
}


window.onload = function(){ 


// Popup Al
var modal = document.getElementById('myModal');

// Kipi açan düğmeyi al
var btn = document.getElementsByClassName("myBtn");

// Kipi kapatan <span> öğesini edinin
var span = document.getElementsByClassName("close")[0];
for (let index = 0; index < btn.length; index++) {
     
    // Kullanıcı düğmeyi tıklattığında
btn[index].onclick = function() {
    modal.style.display = "block";
}
}


// Kullanıcı <span> (x) düğmesini tıkladığında, popup
span.onclick = function() {
    modal.style.display = "none";
}

// Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
window.onclick = function(event) {
    if (event.target == modal) {
       
        modal.style.display = "none";
    }
}

}
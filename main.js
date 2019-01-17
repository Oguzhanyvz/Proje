var kullanicilar = [
    {
        id: 1,
        kullanici_adi: 'serhat',
        sifresi: 1234
    },
    {
        id: 2,
        kullanici_adi: 'kadir',
        sifresi: 1234


    },
    {
        id: 3,
        kullanici_adi: 'oğuzhan',
        sifresi: 1234
    },
    {
        id: 4,
        kullanici_adi: 'mert',
        sifresi: 1234


    },
    {
        id: 5,
        kullanici_adi: 'cumhur',
        sifresi: 1234
    },
    {
        id: 6,
        kullanici_adi: 'admin',
        sifresi: 1234


    }
];
function giris() {
    for (let index = 0; index < kullanicilar.length; index++) {
        if (kullanicilar[index].kullanici_adi == document.getElementById('kad').value && kullanicilar[index].sifresi == document.getElementById('sifre').value) {
            window.location.href = 'Anasayfa.html'
        }

        else if (document.getElementById('kad').value == "" && document.getElementById('sifre').value == "") {
            alert("Lütfen Kullanıcı Adı ve Şifre giriniz !")
            break;
        }
        else if (kullanicilar[index].kullanici_adi != document.getElementById('kad').value && kullanicilar[index].sifresi != document.getElementById('sifre').value) {
            alert("Kullanıcı Adı ve Şifre Yanlış !")
            break;
        }
    }





}

function temizle() {
    document.getElementById('kad').value = "";
    document.getElementById('sifre').value = "";
}


window.onload = function () {


    // Popup Al
    var modal = document.getElementById('myModal');

    // Kipi açan düğmeyi al
    var btn = document.getElementsByClassName("myBtn");

    // Kipi kapatan <span> öğesini edinin
    var span = document.getElementsByClassName("close")[0];
    for (let index = 0; index < btn.length; index++) {

        // Kullanıcı düğmeyi tıklattığında
        btn[index].onclick = function () {
            modal.style.display = "block";
        }
    }


    // Kullanıcı <span> (x) düğmesini tıkladığında, popup
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
    window.onclick = function (event) {
        if (event.target == modal) {

            modal.style.display = "none";
        }
    }

}
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




var o = {
    "ogrenciler": [
        { "ad": "Hasan", "soyad": "Gider", "yas": 18 },
        { "ad": "Ayşe", "soyad": "Dursun", "yas": 20 },
        { "ad": "Çetin", "soyad": "Fidan", "yas": 17 },
        { "ad": "Cemal", "soyad": "Kaya", "yas": 12 },
        { "ad": "Cenk", "soyad": "Dağlar", "yas": 20 },
        { "ad": "Tarık", "soyad": "Bakır", "yas": 19 },
        { "ad": "Mehmet", "soyad": "Yılmaz", "yas": 18 },
        { "ad": "Buğlem", "soyad": "Akyıldız", "yas": 20 },
        { "ad": "Mehmet", "soyad": "Suadiye", "yas": 17 },
        { "ad": "Reşat", "soyad": "Koç", "yas": 16 },
        { "ad": "Yunus", "soyad": "Çelik", "yas": 20 },
        { "ad": "Mustafa", "soyad": "Argın", "yas": 19 }
    ]
};


function doldur(alan){
    o.ogrenciler.sort(function(o1,o2){return eval("o1."+alan)>eval("o2."+alan)});
    var tablo = document.getElementById('tablo');     
    var mevcut = o.ogrenciler.length;
    var satir = '<tr><td><a href="javascript:doldur(\'ad\')">Ad</a></td><td><a href="javascript:doldur(\'soyad\')">Soyad</a></td><td><a href="javascript:doldur(\'yas\')">Yaş</a></td></tr>';
    tablo.innerHTML = satir;
    for(var i=0;i<mevcut;i++){
        var ogrenci = o.ogrenciler[i];
        satir = '<tr><td>'+ogrenci.ad+'</td><td>'+ogrenci.soyad+'</td><td>'+ogrenci.yas+'</td></tr>';
        tablo.innerHTML += satir;
    }
}
function ara(){
    var aranan = document.getElementById('txtara').value;
    var ogrenciler2 = o.ogrenciler.filter(function(o){return o.ad == aranan ||o.soyad == aranan || o.yas == aranan });
    var tablo = document.getElementById('tablo');     
    var mevcut = ogrenciler2.length;
    var satir = '<tr><td><a href="javascript:doldur(\'ad\')">Ad</a></td><td><a href="javascript:doldur(\'soyad\')">Soyad</a></td><td><a href="javascript:doldur(\'yas\')">Yaş</a></td></tr>';
    tablo.innerHTML = satir;
    for(var i=0;i<mevcut;i++){
        var ogrenci = ogrenciler2[i];
        satir = '<tr><td>'+ogrenci.ad+'</td><td>'+ogrenci.soyad+'</td><td>'+ogrenci.yas+'</td></tr>';
        tablo.innerHTML += satir;
    }
}
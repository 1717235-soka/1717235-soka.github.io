     
            function getImage(){
    var arr=['img/onigiri_ume.png' , 'img/onigiri_sake.png' , 'img/onigiri_seachicken.ping' , 'img/onigiri_tarako.png' , 'img/supamusubi.png', 'img/onigiri_yukari.png', 'img/onigiri_gomoku.png' , 'img/onigiri_ikura.png'  ]
    
    var obj =document.getElementById("onigiri");
    var a =Math.floor(Math.random() * arr.length);
    obj.src=arr[a];
    
  
}   
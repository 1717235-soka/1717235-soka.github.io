     
            function getImage(){
    var arr=['https://github.com/1717235-soka/1717235-soka.github.io/blob/master/img/onigiri_ume.png?raw=true' , 'https://github.com/1717235-soka/1717235-soka.github.io/blob/master/img/onigiri_sake.png?raw=true' , 'https://github.com/1717235-soka/1717235-soka.github.io/blob/master/img/onigiri_seachicken.png?raw=true' , 'https://github.com/1717235-soka/1717235-soka.github.io/blob/master/img/onigiri_tarako.png?raw=true' ,'https://github.com/1717235-soka/1717235-soka.github.io/blob/master/img/supamusubi.png?raw=true', 'https://github.com/1717235-soka/1717235-soka.github.io/blob/master/img/onigiri_yukari.png?raw=true', 'https://github.com/1717235-soka/1717235-soka.github.io/blob/master/img/onigiri_gomoku.png?raw=true' , 'https://github.com/1717235-soka/1717235-soka.github.io/blob/master/img/onigiri_ikura.png?raw=true'  ]
    
    var obj =document.getElementById("onigiri");
    var a =Math.floor(Math.random() * arr.length);
    obj.src=arr[a];
}   

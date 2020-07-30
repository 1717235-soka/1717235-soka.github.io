function janken(myhand){
     //じゃんけんの手を格納する配列
    var handArray = ['グー', 'チョッキ','パー'];
    console.log(handArray[myhand]);
    
    //コンピュータの手をランダムに決める
    //Math.random は、0以上1未満の疑似乱数を返す
    var random = Math.random()*100;
    console.log(random);
  
     var randomNum =Math.floor(random);
    console.log(randomNum);
    
    //乱数からコンピュータの手を決める(乱数を3で割ったあまりを使う)
    var computerHand=randomNum % 3;
    console.log(computerHand);

    
    var victory=(myhand - computerHand+3)%3;
    var messageArray=['あいこ','まけ','かち'];
  //  alert("あなたの手は"+handArray[myhand] +"コンピュータの手は" +handArray[computerHand]+"なので"+messageArray[victory]);
  //   $('#janken-result').append("<p>あなたの手は"+handArray[myhand] +"コンピュータの手は" +handArray[computerHand]+"なので"+messageArray[victory]+"</p>");
    
    $('#janken-result-p').text("あなたの手は"+handArray[myhand] +"コンピュータの手は" +handArray[computerHand]+"なので"+messageArray[victory]);
    
    //人間の手とコンピュータの手を比較して勝敗を判断する
//    f(myhand ==0 ){
  //      if(computerHand ==0 ){
    //        alert("あなたの手は"+handArray[myhand]+"、コンピュータは"+handArray[computerHand]+"なのであいこです");
//     }else if(computerHand==1){
  //             alert("あなたの手は"+handArray[myhand]+"、コンピュータは"+handArray[computerHand]+"なので勝ちです");
  //      }  else if(computerHand==2) {
   //    alert("あなたの手は"+handArray[myhand]+"、コンピュータは"+handArray[computerHand]+"なので負けです");
        }
    
  //  }else if (myhand ==1){
    //     if(computerHand ==0 ){
    //        alert("あなたの手は"+handArray[myhand]+"、コンピュータは"+handArray[computerHand]+"なのであいこです");
     //   }else if(computerHand==1){
     //          alert("あなたの手は"+handArray[myhand]+"、コンピュータは"+handArray[computerHand]+"なので勝ちです");
   //     }  else if(computerHand==2) {
  //     alert("あなたの手は"+handArray[myhand]+"、コンピュータは"+handArray[computerHand]+"なので負けです");
        }
    
        
//    }else if(myhand == 2){
   //     if(computerHand ==0 ){
            alert("あなたの手は"+handArray[myhand]+"、コンピュータは"+handArray[computerHand]+"なのであいこです");
    //    }else if(computerHand==1){
      //         alert("あなたの手は"+handArray[myhand]+"、コンピュータは"+handArray[computerHand]+"なので勝ちです");
  //      }  else if(computerHand==2) {
    //   alert("あなたの手は"+handArray[myhand]+"、コンピュータは"+handArray[computerHand]+"なので負けです");
        }
        
    }
    
    
}
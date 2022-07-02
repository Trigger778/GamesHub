var ele = document.getElementById("s1");
var ele2 = document.getElementById("s2");
var ct=0;
var ctdir=0;
var ct2=0;
document.addEventListener('keypress' , function(event) {
if(ctdir==1){
    var char = String.fromCharCode(event.keyCode);
    if(char=='d'){
       
        if(ct<500){
            
      // alert(ct);
       ct += 15;
       ele.style.marginLeft=ct+"px";
        }
    }else   if(char=='a'){
      // alert(ct);
      if(ct>0){
        ct -= 15;
       ele.style.marginLeft=ct+"px";
      }
    }
    if(char=='l'){
       
        if(ct2<500){
            
      // alert(ct);
      ct2 += 15;
       ele2.style.marginLeft=ct2+"px";
        }
    }else   if(char=='j'){
      if(ct2>0){
        ct2 -= 15;
       ele2.style.marginLeft=ct2+"px";
      }
    }
}else{
    return;
}
});
var ele3 = document.getElementById("ball");
var ct3=10;
var ct4=10;
var ctu=0;
var ctl=0;
ele3.style.marginLeft = ct3+"px";
ele3.style.marginTop = ct4 +"px";
ele2.style.marginTop = 500-ct4+"px";
function set(){
    ele3.style.marginLeft = ct3+"px";
    ele3.style.marginTop = ct4 +"px";
    ele2.style.marginTop = 500-ct4+"px";
    if(ct3>=570 || ct3<=0){
        ctl=1-ctl;
    }
    if(ct4>=500 || ct4<=0){
        if(ct4<0){
            if(ct-10>ct3||ct3>ct+80){
                alert("player 2 won");
                window.location.reload();
            }
        }else{
             if(ct2-10>ct3||ct3>ct2+80){
                alert("player 1 won");     
                window.location.reload();
            }
        }
        ctu=1-ctu;
    }
   if(ctl==0 ){
       ct3+=3;
   }else{
       ct3-=3;
   }
   if(ctu==0){
    ct4+=3;
   }else{
       ct4-=3;
   }
}
var ele4 = document.getElementsByTagName('button');
var el = 1;
ele4[0].addEventListener('click',function(){
    el = 1-el;
    ctdir = 1-ctdir;
    if(el==0)
    ele4[0].innerText="pause";
    else
    ele4[0].innerText="resume";
});
function set1(){
    if(el==0){
        set();
        return;
    }else{
        return;
    }
}
var t=60;
setInterval(set1 , 15);

var kepek = ["kep1.jpg","kep2.jpg","kep3.jpg","kep4.jpg","kep5.jpg","kep6.jpg","kep7.jpg","kep8.jpg","kep9.jpg","kep10.jpg","kep11.jpg","kep12.jpg","kep13.jpg","kep14.jpg","kep15.jpg","kep16.jpg","kep17.jpg","kep18.jpg","kep19.jpg","kep20.jpg","kep1.jpg","kep2.jpg","kep3.jpg","kep4.jpg","kep5.jpg","kep6.jpg","kep7.jpg","kep8.jpg","kep9.jpg","kep10.jpg","kep11.jpg","kep12.jpg","kep13.jpg","kep14.jpg","kep15.jpg","kep16.jpg","kep17.jpg","kep18.jpg","kep19.jpg","kep20.jpg"];
var kepekalt=["likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny","likóla szörny","zöld szörny"];
var kepektomb = [];
var kepekalttomb =[];

var szamlalo = 0;
var lepesek = 0;
var parok = 0;
var hossz = 0;
var kattintott  = [];
$(function(){
    //console.log("Hello Világ");
    //$("article").append('<img src="kepek/kep1.jpg" alt="kep1">');
    //$("article").append('<img src="kepek/kep2.jpg" alt="kep1">');
    $("main").append('<aside></aside>');
    ariticle();
    
    
});
function ariticle(){

        $("aside").append('<label>Hány képpár legyen?</label>');
        for (let i = 0; i < 3; i++) {
            $("aside").append('<input>');
        }
        $("aside>input").eq(0).attr("type", "text");
        $("aside>input").eq(0).attr("id", "szoveg");
        $("aside>input").eq(1).attr("type", "button");
        $("aside>input").eq(1).attr("id", "OK");
        $("aside>input").eq(1).attr("value", "OKÉ");
        $("aside>input").eq(2).attr("type", "button");
        $("aside>input").eq(2).attr("id", "uj");
        $("aside>input").eq(2).attr("value", "Új játék");
        $("#OK").click(keptombhossz);
        $("#uj").click(ujjatek);
}

function keptombhossz(){
    hossz=$("#szoveg").val();
    
    for (let i = 0; i < hossz; i++) {
        kepektomb[i]=("kep"+(i+1)+".jpg"); 
       
        
        //console.log(kepektomb[i]);    
    }
    for (let i = hossz; i < hossz*2; i++) {
        kepektomb[i]=("kep"+(i-hossz+1)+".jpg");
        //console.log(kepektomb[i]); 
    }
    var tombs = [];
    for (let i = 0; i < hossz*2; i+=2) {
        kepekalttomb[i]=("likóla szörny");
        kepekalttomb[i+1]=("zöld szörny");
        tombs[i]=(i);
        console.log(tombs[i]);
    }
    
    var x;
    for (let i = 0; i < kepektomb.length; i++) {
        x = Math.floor((Math.random() * (tombs.length)));
        console.log(x);
        $("article").append('<img>');
        $("article>img").eq(tombs[x]).attr("src", "kepek/hatter.jpg");
        $("article>img").eq(tombs[x]).attr("alt", "szörny");
        $("article>img").eq(tombs[x]).attr("id", i);
        console.log(tombs[x]);
        $(tombs[x]).remove();
        
    }
    $("article>img").click(kattint);
}
function kattint(){
    var id = $(this).attr("id");
    //console.log(id);
    $(this).attr("src","kepek/"+kepektomb[id]);
    $(this).attr("alt", kepekalttomb[id]);
    lepesek++
    szamlalo++;
    //console.log(szamlalo);
    kattintott [szamlalo] =id;
    //console.log(kattintott);
    if (szamlalo===2) {
        if (kepektomb[kattintott[1]]===kepektomb[kattintott[2]]) {
            $("article>img").eq(kattintott[1]).attr("src", "");
            $("article>img").eq(kattintott[2]).attr("src", "");
            parok++;
            if (parok==hossz) {
                $("article>img").remove();
                $("article").append('<div></div>');
                $("article>div").append('<p></p>');
                $("article>div>p").append('Felfordított képek száma: '+lepesek);
                //console.log(lepesek);
                $("aside>label").remove();
                $("aside").append('<label>Szeretne új játékot?</label>');
                $("aside>input").remove();
                $("aside").append('<input>');
                $("aside>input").eq(0).attr("type", "button");
                $("aside>input").eq(0).attr("id", "uj");
                $("aside>input").eq(0).attr("value", "Új játék");
                $("#uj").click(ujjatek);
                //$("aside>input").eq(1).remove();
               
            }
        }
        else{
            setTimeout(visszafordit,1000);
        }
        szamlalo  = 0;
    }
    //console.log(hossz);
    //console.log(parok);
    //console.log(lepesek); 
}


function ujjatek(){ 
    szamlalo  = 0; 
    szamlalo = 0;
    lepesek = 0;
    parok = 0;
    hossz = 0;
    jatekok = 0;
    kepektomb = [];
    kepekalttomb =[]; 
    $("article>img").remove();
    $("article>div").remove();
    $("aside>label").remove();
    $("aside>input").remove();
    ariticle();
}

function visszafordit(){
    $("article>img").eq(kattintott[1]).attr("src", "kepek/hatter.jpg");
    $("article>img").eq(kattintott[2]).attr("src", "kepek/hatter.jpg");
}
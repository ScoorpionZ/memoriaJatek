var kepektomb = [];
var kepekalttomb =[];

var szamlalo = 0;
var lepesek = 0;
var parok = 0;
var hossz = 0;
var tombs = [];
var kattintott  = [];
var altszamol  = [];

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
    if (hossz>21) {
        alert("Maximum 20 pár lehet");
        $("aside>label").html('<label>Adjon meg újra a képpárok számát </label>');
    }
    else
    {
        for (let i = 0; i < hossz; i++) {
            kepektomb[i]=("kep"+(i+1)+".jpg"); 
            //console.log(kepektomb[i]);    
        }
        for (let i = hossz; i < hossz*2; i++) {
            kepektomb[i]=("kep"+(i-hossz+1)+".jpg");
            //console.log(kepektomb[i]); 
        }
        
        for (let i = 0; i < hossz*2; i+=2) {
            kepekalttomb[i]=("lila szörny");
            kepekalttomb[i+1]=("zöld szörny");
        }
    
        for (let i = 0; i < kepektomb.length; i++) {
            $("article").append('<img>');
            tombs[i]=i+1;
            //console.log(tombs[i]);
        }
        
        var x;
        for (let i = 0; i < kepektomb.length; i++) {
            x = Math.floor((Math.random() * (tombs.length)));
            //console.log(x);
            
            $("article>img").eq(i).attr("src", "kepek/hatter.jpg");
            $("article>img").eq(i).attr("alt", i);
            $("article>img").eq(i).attr("id", tombs[x]-1);
            console.log(tombs[x]);
            tombs.splice(x, 1);
        }
        $("article>img").click(kattint);
    }  
}

function kattint(){
    var id = $(this).attr("id");
    //console.log(id);
    $(this).attr("src","kepek/"+kepektomb[id]);
    //$(this).attr("alt", kepekalttomb[id]);
    lepesek++
    szamlalo++;
    //console.log(szamlalo);
    kattintott [szamlalo] = $(this).attr("src");
    altszamol [szamlalo] = $(this).attr("alt");
    //console.log(kattintott);
    if (szamlalo===2) {
        if (kattintott[1]===kattintott[2]) {
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
    tombs = [];
    $("article>img").remove();
    $("article>div").remove();
    $("aside>label").remove();
    $("aside>input").remove();
    ariticle();
}

function visszafordit(){
    $("article>img").eq(altszamol[1]).attr("src", "kepek/hatter.jpg");
    $("article>img").eq(altszamol[2]).attr("src", "kepek/hatter.jpg");
}
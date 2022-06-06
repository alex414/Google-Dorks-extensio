function uncheck() {
    if (document.getElementById("b").checked === true){
        var busq2 = document.getElementById("b").value + document.getElementById("q").value;
        document.getElementById("q").value=busq2;
    }
    if (document.getElementById("b1").checked === true){
        var separated= new Array;
        separated = document.getElementById("q").value.split(" ");
        var busq5 = document.getElementById("b1").value + separated[0] + " " + "\"" + separated[1] + "\"";
        document.getElementById("q").value=busq5;
    }

    if (document.getElementById("c").checked === true){
        var busq3 = document.getElementById("c").value + " " + document.getElementById("q").value;
        document.getElementById("q").value=busq3;
    }
    if (document.getElementById("d").checked === true){
        var separatin= new Array;
        separatin = document.getElementById("q").value.split(" ");
        var busq4 = document.getElementById("d").value + separatin[0] + " " + "site:" + separatin[1];
        document.getElementById("q").value=busq4;
    }
    if (document.getElementById("e").checked === true){
        var separator= new Array;
        separator = document.getElementById("q").value.split(" ");
        var busq6 = document.getElementById("e").value + separator[0] + " " + separator[1];
        document.getElementById("q").value=busq6; 

    }
    if (document.getElementById("f").checked === true){
        var busq7 = document.getElementById("f").value + " " + document.getElementById("q").value;
        document.getElementById("q").value=busq7;
    }
    if (document.getElementById("g").checked === true){
        var separate= new Array;
        separate = document.getElementById("q").value.split(" ");
        var busq8 = document.getElementById("g").value + separate[0] + " " + "\'" + separate[1] + "\'";
        document.getElementById("q").value=busq8; 

    }
    if (document.getElementById("h").checked === true){
        var separ= new Array;
        separ = document.getElementById("q").value.split(" ");
        var busq9 = document.getElementById("h").value + separ[0] + " " + separ[1] + " " + "site:" + separ[2];
        document.getElementById("q").value=busq9;
}
}

function reFresh(){
location.reload(true)
}


window.onload=function(){
document.getElementById("z").addEventListener("click", reFresh);
document.getElementById("x").addEventListener("click", uncheck);
}


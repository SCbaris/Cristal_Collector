var win=0,
    lose=0,
    lastScore=0,
    compGuess,
    gemScore=[0,0,0,0];
var sameValArr=[0,0];
function randomise(begin,range){ // finding number between begin and range.
    var trash=0;
    var sel = Math.floor((Math.random()*range)+begin);
    for(var i=0; i!=1 ; trash++){ //infinite loop to chose proper number.
        if (sel>range){ // if number reach up to range, find another one
            sel = Math.floor((Math.random()*range)+begin);
        }
        else { // if number is proper and between range, go up to infinite loop
            i=1;
        }
    }
    trash=0;
    return sel;   
} 
function twoArrayCorrelation(array1,array2){ // Two array correlation (General P.S. "Add var sameValArr=[0,0];" before function)
    var boo=true;
    for(var i=0; i<array1.length;i++){
        for(var y=0; y<array2.length; y++){
            if(array1[i]===array2[y]){
                boo= false;
                sameValArr[0]=i; 
                sameValArr[1]=y;
            } 
        }   
    }
    return boo;
}
function selfCorrelation(array){ // self correlation (General P.S. "Add var sameValArr=[0,0];" before function)
    var boo=true;
    for(var i=0; i<array.length;i++){
        for(var y=0; y<array.length; y++){
            if(i!=y){
            if(array[i]===array[y]){
                boo= false;
                sameValArr[0]=y;
                sameValArr[1]=i;
            }} 
        }   
    }
    return boo;
}
function reset(){ // Reset (Specified for this code)
    for(var i=0; i<gemScore.length ; i++){
        gemScore[i]=randomise(1,9);
    }
    while(selfCorrelation(gemScore)==false){ // same gem values elimite
        if(selfCorrelation(gemScore)==false){
            gemScore[sameValArr[0]]=randomise(1,12);
            gemScore[sameValArr[1]]=randomise(1,12);
        }
    }
    compGuess=randomise(19,120);
    lastScore=0;
    console.log("CompGuess: " + compGuess);
    console.log("Gem Scores: " + gemScore);
    
    
}
function finalCompare(x,y){ //Comparition (Specified for this code)
    if(x>y){
        lose++;
        $("#result").text("Lose!");
        reset();
    }else if(x==y){
        win++;
        $("#result").text("Win!");
        reset();
    }
}
function print(){  //Printing Values to specific elements (Specified for this code)
    $("#win-text").text("Wins: " + win);
    $("#lose-text").text("Losses: " + lose);
    $("#compGuess-text").text(compGuess);
    $("#lastScore-text").text(lastScore);
}

reset();
print();
console.log("First CompGuess: " + compGuess);
console.log("Gem Scores: " + gemScore);
console.log("Gem Score self correlation: " + selfCorrelation(gemScore));
console.log("Gem Score self correlation same values location in array:  " + sameValArr);

$(document).ready(function() {
    


    $(".gem-red").on("click", function() { 
        lastScore=lastScore+gemScore[0];
        console.log("Last Score: " + lastScore);
        finalCompare(lastScore,compGuess);
        print();
    });
    $(".gem-blue").on("click", function() {
        lastScore=lastScore+gemScore[1];
        console.log("Last Score: " + lastScore);
        finalCompare(lastScore,compGuess);
        print();
    });
    $(".gem-yellow").on("click", function() {
        lastScore=lastScore+gemScore[2];
        console.log("Last Score: " + lastScore);
        finalCompare(lastScore,compGuess);
        print();
    });
    $(".gem-green").on("click", function() {
        lastScore=lastScore+gemScore[3];
        console.log("Last Score: " + lastScore);
        finalCompare(lastScore,compGuess);
        print();
    });





});
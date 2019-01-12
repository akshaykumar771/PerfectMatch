function average(scores){
    var total = 0;
    scores.forEach(function(score){
        total+= score;
        
    });
    var avg = total/scores.length;
    return Math.round(avg);
    
}
var scores = [90,98,89,100,100,86,94];
console.log(average(scores));
var scores2 = [23,45,34,67,55,89,98,12,37,25];
console.log(average(scores2));
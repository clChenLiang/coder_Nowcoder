var n = parseInt(readline());
var ans = 0;
var max = 0;
var lines = readline();

minDif(lines);

  var minDif = function(lines){

  lines = lines.split(" ").map(function(a){return parseInt(a);}).sort(function(a,b){return a-b});
  //console.log(lines);
  var leftLine= [lines[0]];
  var rightLine = [lines[0]];

  var left = false;
  var tempMax;
  //预先取最大值为 靠近 max 的两个值 
  var max = lines[lines.length - 1] - (lines[lines.length - 2]>lines[lines.length - 3]>0 ?
                        lines[lines.length - 3]:lines[lines.length - 2]);
  var n = lines.length;

  for(var i = 1;i<n-1;i++){
      if(left){
          max = ( lines[i] - leftLine[ leftLine.length - 1 ])>max?( lines[i] - leftLine[ leftLine.length - 1 ]):max;
          leftLine.push(lines[i]);
      //console.log(max,lines[i],tempMax)
      }else{
      max = ( lines[i] - rightLine[ rightLine.length - 1 ])>max?( lines[i] - rightLine[ rightLine.length - 1 ]):max;
          rightLine.push(lines[i]);

      //console.log(max,lines[i],tempMax,( lines[i] - rightLine[ rightLine.length - 2 ]))
      }
      left = !left;
      //console.log(left);    
   }
  return max;
}

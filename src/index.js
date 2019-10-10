module.exports = function zeros(expression) {
  var srt_arr = expression.split("*");
  var Count_2 = 0;   // cxtnxbr 2
  var Count_5 = 0;   // счетчик 5
  for (i = 0; i < srt_arr.length; i++) { 
      if (srt_arr[i].indexOf("!!")>0) {     // это двойной фактириал?
          dd = +srt_arr[i].substr(0, srt_arr[i].length-2);
          for (j = dd; j > 0; j = j-2) {
              mm = j;
              while ((mm>1) && (mm%5==0)) {    
                  if ((mm % 5)==0) {
                      Count_5++;
                      mm = mm / 5
                  }
              }
              mm = j;
              while ((mm>1) && (mm%2==0)) {    
                  if (mm%2==0) {
                      Count_2++;
                      mm = mm / 2
                  }
              }
          }
      } else {                              
          dd = +srt_arr[i].substr(0, srt_arr[i].length-1);
          for (j = dd; j > 0; j--) {
              mm = j;
              while ((mm>1) && (mm%5==0)) {    
                  if ((mm % 5)==0) {
                      Count_5++;
                      mm = mm / 5
                  }
              }
              mm = j;
              while ((mm>1) && (mm%2==0)) {    
                  if (mm%2==0) {
                      Count_2++;
                      mm = mm / 2
                  }
              }
          }
      }

  }    
  return (Math.min(Count_5, Count_2));
}

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
  setInterval( function() {
      var time = getSecondsSinceStartOfDay();
      // your code here
      var secdeg=(time%60)*6+180;
      var mindeg=(time/60)*6+180;
      var hourdeg=(time/3600%12)*30+180;

      console.log(hourdeg);

  
      document.querySelector('#seconds').style.transform='rotate('+secdeg+'deg)';
      document.querySelector('#minutes').style.transform='rotate('+mindeg+'deg)';
      document.querySelector('#hour').style.transform='rotate('+hourdeg+'deg)';
  
  }, 1000);
  

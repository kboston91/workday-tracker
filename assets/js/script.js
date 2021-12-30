$(document).ready(function () {

  var init = false;
  var now = moment().format('LLLL'); 

  let now24 = moment().format('H'); 
  let now12 = moment().format('h'); 
  if (init) {
      now24 = 13;
      now12 = 1;
  }

  // Display current date
  const currentDate = $('#currentDay');
  currentDate.text(now);

  var cal = new Date(); // init date and time
  var currentHour = cal.getHours(); // returns 0-23 on a 24 hour clock

  for (var i = 8; i < 18; i++) {
      if (i < currentHour) {
          document.getElementById(i.toString()).classList.add('past');
      } else if (i === currentHour) {
          document.getElementById(i.toString()).classList.add('present');
      } else if (i > currentHour) {
          document.getElementById(i.toString()).classList.add('future');
      }
  }
  // Local Storage Feature

   {
      $('.saveBtn').click(function () {
          var h8 = document.getElementById('8').value;
    localStorage.setItem('text8', h8);
    var h9 = document.getElementById('9').value;
    localStorage.setItem('text9', h9);
    var h10 = document.getElementById('10').value;
    localStorage.setItem('text10', h10);
    var h11 = document.getElementById('11').value;
    localStorage.setItem('text11', h11);
    var h12 = document.getElementById('12').value;
    localStorage.setItem('text12', h12);
    var h13 = document.getElementById('13').value;
    localStorage.setItem('text13', h13);
    var h14 = document.getElementById('14').value;
    localStorage.setItem('text14', h14);
    var h15 = document.getElementById('15').value;
    localStorage.setItem('text15', h15);
    var h16 = document.getElementById('16').value;
    localStorage.setItem('text16', h16);
    var h17 = document.getElementById('17').value;
    localStorage.setItem('text17', h17);
      });
   }

   // Display saved tasks
   var stored8 = localStorage.getItem('text8');
   document.getElementById('8').value = stored8;
   var stored9 = localStorage.getItem('text9');
   document.getElementById('9').value = stored9;
   var stored10 = localStorage.getItem('text10');
   document.getElementById('10').value = stored10;
   var stored11 = localStorage.getItem('text11');
   document.getElementById('11').value = stored11;
   var stored12 = localStorage.getItem('text12');
   document.getElementById('12').value = stored12;
   var stored13 = localStorage.getItem('text13');
   document.getElementById('13').value = stored13;
   var stored14 = localStorage.getItem('text14');
   document.getElementById('14').value = stored14;
   var stored15 = localStorage.getItem('text15');
   document.getElementById('15').value = stored15;
   var stored16 = localStorage.getItem('text16');
   document.getElementById('16').value = stored16;
   var stored17 = localStorage.getItem('text17');
   document.getElementById('17').value = stored17;
});

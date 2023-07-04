  function currentTime() {
  let date = new Date(); 
  let hour = date.getHours();
  
  if(hour == 0){
      hour = 12;
  }
   hour = (hour < 10) ? "0" + hour : hour;
 
  let time = hour
  let print=document.getElementById("date1")
  print.innerText = time; 
  
}
  function min1() {
  let date = new Date(); 
  let min = date.getMinutes();
 
  min = (min < 10) ? "0" + min : min;
  
   let time = min;
   document.getElementById("minutes").innerText = time; 
   currentTime()
}
	
  function sec1() {
  let date = new Date(); 
  let sec = date.getSeconds();
 
  sec = (sec < 10) ? "0" + sec : sec;
   
    
   let tim =  sec ;
  document.getElementById("seconds").innerText = tim; 
  min1()
}

  function sess1() {
  let date = new Date(); 
  let hour = date.getHours();
  let session = "AM";
  
  if(hour > 12){
      hour = hour - 12;
      session = "PM";
   }
   
  let tim = session;
  document.getElementById("session").innerText = tim; 
  sec1()
}
setInterval(sess1, 1000);

  function date() {
  let date = new Date(); 
  let min = date.getDate();
  
  min = (min < 10) ? "0" + min : min;
  
  let date1=min;
  document.getElementById("date123").innerText = date1; 
  month()
}

  function month() {
  let date = new Date(); 
  // let month = date.getMonth();
  let month1 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"]
  let month23=month1[date.getMonth()]
  
   month = (month < 10) ? "0" + month : month;

  // let tim =month;
  let tim =month23;
  document.getElementById("month").innerText = tim; 
  year()
}


 function year() {
  let date = new Date(); 
  let year1 = date.getFullYear();

  document.getElementById("year").innerText = year1; 
  sec1()
}
setInterval(date, 1000);
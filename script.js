
  /*------START--------*/

  window.oncontextmenu=function(){
      console.log("Right Click Disable");
      return false;
  }

  document.onkeydown=function(e)
  {
    if(Event.keyCode == 123 )
     {
       return false;
     }
     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
      {
        return false;
    
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0) )
      {
        return false;
    
      }
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
      {
        return false;
      }
  }
   


  /* -----End-------*/


























































































































































































































































































































































































































































































  function lgin() {
    var fivem = 'fivem://connect/game.subunited.online';
    window.location = fivem; 
  }
  function lgin1() {
    var URL = '?login';
    window.location = fivem; 
  }



function lgin2() {
    var ts = 'ts3server://game.subunited.online';
    window.location = ts; 
  }
  function lgin3() {
    var URL = '?login2';
    window.location = ts3; 
  }


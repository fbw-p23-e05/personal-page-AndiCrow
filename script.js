document.addEventListener("DOMContentLoaded", function() {
    const switchButton = document.getElementById("Switch");
    const body = document.body;
    let isLightBackground = true;
  
    switchButton.addEventListener("click", function() {
      if (isLightBackground) {
        body.style.backgroundColor = "black";
        body.style.color = "white"; 
      } else {
        body.style.backgroundColor = "lightblue";
        body.style.color = "black"; 
      }
      isLightBackground = !isLightBackground;
    });
  });
  
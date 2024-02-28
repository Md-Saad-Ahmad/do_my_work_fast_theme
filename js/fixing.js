document.addEventListener("DOMContentLoaded", function() {
    openCustomPopup();
  });
  
  function openCustomPopup() {
    document.getElementById("custom-popup").style.display = "block";
  }
  
  function closeCustomPopup() {
    document.getElementById("custom-popup").style.display = "none";
  }
  
  function toggleCustomForm() {
    var loginForm = document.getElementById("custom-loginForm");
    var signupForm = document.getElementById("custom-signupForm");
    
    if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
    } else {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    }
  }

  
  
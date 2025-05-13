
  function allowAccess() {
    // Hide popup
    document.getElementById("popupOverlay").style.display = "none";

    // Show main content
    document.getElementById("mainContent").style.display = "block";

    // Play audio
    const audio = document.getElementById("myAudio");
    audio.play().catch(err => {
      console.log("Autoplay failed:", err);
    });
  }

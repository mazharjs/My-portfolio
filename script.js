
  new WOW().init();


// Function to send email using emailjs
function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_fr8tjsp", "template_rv1s5nu", params)
    .then(function(res) {
      // Swal.fire("Email Sent Sucessfully..!");
      Swal.fire({
        title: "Email Sent Sucessfully..!",
        text: "Thank you for Contacting us ",
        icon: "sucess"
      });
      // Clear the form fields after successful submission
      document.getElementById("contact-form").reset();
    })
    .catch(function(err) {
      console.error("Failed to send email:", err);
      alert("Failed to send email. Please try again later.");
    });
}

// Attach the sendEmail function to the form's submit event
document.getElementById("contact-form").addEventListener("submit", sendEmail);

// pre loader

$(window).on("load", function() {
  $(".loader-wrapper").fadeOut(200);
});

setTimeout(function() {
  if ($(".loader-wrapper").is(":visible")) {
    $(".loader-wrapper").fadeOut(200);  // Fallback in case the load event doesn't trigger
  }
}, 5000);  // Force fade out after 5 seconds

// autotype
const typed = new Typed('.multiple-text',{
  strings:['BSCS Student at IQRA University ','Frontend developer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});

// counter effect
$(document).ready(function() {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});


locoScroll.on('call', function(func, way, obj) {
  if (func === 'counter' && way === 'enter') {
      $('.counter').counterUp({
          delay: 1000,
          time: 2000
      });
  }
});



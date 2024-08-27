// document.querySelector('#contact-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     e.target.elements.name.value = '';
//     e.target.elements.email.value = '';
//     e.target.elements.message.value = '';
//   });

  new WOW().init();

  

// MouseFollower.registerGSAP(gsap);
  
// const cursor = new MouseFollower({
//   skewing: 3,
//   stickDelta: 0.009,
//   stateDetection:{
//     '-pointer':'a,button',
//     '-opaque': '[data-cursor-opaque]',
//     '-active': '[data-cursor]'
//   }
// });

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   btn.classList.toggle('active');
// });


function sendMail() {
  let params = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
}
emailjs.send("service_fr8tjsp","template_rv1s5nu",params).then(function(res){
  alert("Email sent sucessfully..!")
})
}


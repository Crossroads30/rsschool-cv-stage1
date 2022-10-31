
function progress() {
   let elem = document.getElementById('progress_line'),
   width = 1,
   id = setInterval(progressStatus, 60);
   function progressStatus () {
   	if (width  >= 100) {
   		 clearInterval(id);
   	} else {
   		width ++;
   		elem.style.width = width + '%';

   	}
   }
};
 
// burger_menu //

/*const header_burger = document.querySelector('.header_burger');
if(burger_menu){
  const burger_menu = document.querySelector('.burger_menu');
    burger_menu.addEventListener("click", function(e){
      burger_menu.classList.toggle('_active');
  }
}

/*$(document).ready(function() {
  $('.header_burger').click(function(event) {
    $('.header_burger','.burger_menu').toggleClass('active');
  });
});*/



/*let validation = new JustValidate('#form')
     

validation
  .addField('#email', [
     {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ])

<script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js">
		</script>*/
  





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

let header_burger_logo = document.querySelector('.header_burger_logo');
let burger_menu = document.querySelector('.burger_menu');
header_burger_logo.addEventListener('click', function(){
  document.body.classList.toggle('_lock');
  header_burger_logo.classList.toggle('_active');
  burger_menu.classList.toggle('_active');
})

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
  




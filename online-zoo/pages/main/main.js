
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
  




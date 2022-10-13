
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
}
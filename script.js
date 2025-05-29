// Fade Animation
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting){
			entry.target.classList.add('show');
		} else{
			entry.target.classList.remove('show')
		}
	});
})

const hiddenElements = document.querySelectorAll('.hidden', '.hidden-slide')
hiddenElements.forEach((el) => observer.observe(el));

// Drop down menu options
function dropdownFunction() {
  document.getElementsByClassName("dropdown-content")[0].classList.toggle("show-dropdown");
  return false;
}

window.addEventListener("DOMContentLoaded", function() {
  console.log("email: " + document.getElementById('email').value.trim() + ', ' + document.getElementById('email').value.trim().length)
  if(document.getElementById('email').value.trim().length > 0){
    console.log('Pass')
    const enterScreen = document.getElementById("enter-form");
    const successScreen = document.getElementById("mail-success");

    const enterScreenRect = enterScreen.getBoundingClientRect();

    let diff = 0

    const width = window.innerWidth;
    if (width >= 1441){
      diff = 73;
    }

    enterScreen.style.display = 'none';
    successScreen.style.display = 'flex';
    successScreen.style.width = `${enterScreenRect.width - diff}px`;
    successScreen.style.height = `${enterScreenRect.height}px`;
  }
});



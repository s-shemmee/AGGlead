/*-----------------------------input ----------------------------------------*/

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

/*-----------------------------show and hide password----------------------------------------*/

    var state= false;
    function toggle(){
        if(state){
            document.getElementById("password").setAttribute("type","password");
            document.getElementById("eye").style.color='#800080';
            state = false;
        }
        else{
            document.getElementById("password").setAttribute("type","text");
            document.getElementById("eye").style.color='#ffdf00';
            state = true;      
        }
    }

    function togglePw(){
        var password = document.querySelector('[name=password]');

        if(password.getAttribute('type')==='password'){
            password.setAttribute('type', 'password');
            document.getElementById("font").style.color='#ffdf00';
        }
        else{
            (password.getAttribute('type')==='password');
            document.getElementById("font").style.color='#800080';            
        }
    }

/*-----------------------------remember me checkbox--------------------------------------*/

const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}
/*--------------- Preloader------------*/

  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }
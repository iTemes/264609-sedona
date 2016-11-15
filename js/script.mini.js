var btn=document.querySelector(".btn-modal");var form=document.querySelector(".hotel-search");form.classList.add("hidden");btn.addEventListener("click",function(event){event.preventDefault();console.log("Click!")
form.classList.toggle("show")})

const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")



const copyText = (e) => {
  e.preventDefault()

  

setTimeout(() =>{
  btn.textContent = "Copied!"
  
}, 3000);
}

btn.addEventListener("click", copyText)
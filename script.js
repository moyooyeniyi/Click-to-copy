const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")



const copyText = (e) => {
  e.preventDefault()

  coupon.select()
  coupon.setSelectionRange(0, 99999)
document.execCommand("copy")

setTimeout(() =>{
  btn.textContent = "Copied!"
  
}, 300);
}

btn.addEventListener("click", copyText)
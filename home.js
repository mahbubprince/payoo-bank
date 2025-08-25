document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const validPin = 1234

    const bank = document.getElementById("bank").value

    const accountNumber = document.getElementById("account-number").value

    const addMoney = parseInt(document.getElementById("add-money").value)

    const pinNumber = parseInt(document.getElementById("pin-number").value)

    const avilavaleBalance = parseInt(document.getElementById("avilavale-balance").innerText)

    if (accountNumber.length < 11) {
        alert("Invalid Account Number")
        return
    }
    if (pinNumber !== validPin) {
        alert("Invalid Pin Number")
        return
    }
    const totalavilavaleBalance = avilavaleBalance + addMoney

    document.getElementById("avilavale-balance").innerText = totalavilavaleBalance


})
// cash out feature
document.getElementById("withdraw-money-btn").addEventListener("click", function () {
    const pin = 1234
    const accountNumber = document.getElementById("cash-out-account-number")

    const avilavaleBalance = document.getElementById("avilavale-balance").innerText

    const withdrawMoney = parseInt(document.getElementById("withdraw-money").value)

    const cashOutPinNumber = parseInt(document.getElementById("cash-out-pin-number").value)

    if (accountNumber < 11) {
        alert("Invalid Account Number")
        return
    }

    if (cashOutPinNumber !== pin) {
        alert("Invalid Pin Number")
        return
    }

    const totalAvilavaleBalance = avilavaleBalance - withdrawMoney
    document.getElementById("avilavale-balance").innerText = totalAvilavaleBalance


})















// toggling feature

document.getElementById("add-btn").addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
    document.getElementById("Transfer-Money-parent").style.display="none"
    document.getElementById("get-bouns-parent").style.display = "none"
    document.getElementById("pay-bil-parent").style.display = "none"

})


document.getElementById("cash-out-btn").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
    document.getElementById("Transfer-Money-parent").style.display="none"
    document.getElementById("get-bouns-parent").style.display = "none"
    document.getElementById("pay-bil-parent").style.display = "none"

}) 
document.getElementById("Transfer-Money-btn").addEventListener("click",function(){
    document.getElementById("Transfer-Money-parent").style.display="block"
    document.getElementById("add-money-parent").style.display="none"
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("get-bouns-parent").style.display = "none"
    document.getElementById("pay-bil-parent").style.display = "none"

})
document.getElementById("get-bouns-btn").addEventListener("click",function(){ 
    document.getElementById("Transfer-Money-parent").style.display="none"
    document.getElementById("add-money-parent").style.display="none"
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("get-bouns-parent").style.display = "block"
    document.getElementById("pay-bil-parent").style.display = "none"

}) 
document.getElementById("pay-bil-btn").addEventListener("click",function(){ 
    document.getElementById("Transfer-Money-parent").style.display="none"
    document.getElementById("add-money-parent").style.display="none"
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("get-bouns-parent").style.display = "none"
    document.getElementById("pay-bil-parent").style.display = "block"

}) 

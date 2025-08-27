    const transactionHistry =[]

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

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transactionHistry.push(data)
    console.log(transactionHistry)


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

    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    } 
    transactionHistry.push(data)
    console.log(transactionHistry)

})
// transaction section

document.getElementById("Transaction-btn").addEventListener("click", function () {
    const transactionContainer = document.getElementById("Transaction-container")
    transactionContainer.innerHTML=`

    `
    console.log(transactionHistry)
    for (const data of transactionHistry) {
        console.log(data)
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="mx-auto max-w-lg rounded-2xl p-[7px] ">
        
        <div class="  bg-white rounded-2xl p-[8px] ">
            <div class="flex justify-between items-center">
                <div class="flex items-center  ">
                    <div>
                        <img class="mx-auto rounded-full h-[40px] border p-[5px] mr-[10px]" src="image/wallet1.png" alt="">

                    </div>
                    <div>
                        <p class="text-[14px] text-gray-700">${data.name}</p>
                        <p class="text-[14px] text-gray-700">${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    </div>
        `
        transactionContainer.appendChild(div)

    }
})


// document.getElementById("add-btn").addEventListener("click", function () {
//     const formBtns = document.getElementsByClassName("form-btn")
//     for (const formBtn of formBtns) {
//         formBtn.classList.remove("border-[#0874f2]", "bg-[#0875f22a]")
//         formBtn.classList.add("border-gray-500")
//     }
//     document.getElementById("add-btn").classList.remove("border-gray-500")
//     document.getElementById("add-btn").classList.add("border-[#0874F2]", "border-2", "bg-[#0875f22a]")
// })
// document.getElementById("cash-out-btn").addEventListener("click", function () {
//     const formBtns = document.getElementsByClassName("form-btn")
//     for (const formBtn of formBtns) {
//         formBtn.classList.remove("border-[#0874f2]", "bg-[#0875f22a]")
//         formBtn.classList.add("border-gray-500")

//     }
//     document.getElementById("cash-out-btn").classList.remove("border-gray-500")
//     document.getElementById("cash-out-btn").classList.add("border-[#0874F2]", "border-2", "bg-[#0875f22a]")
// })


function btnToggling(id) {
    const formBtns = document.getElementsByClassName("form-btn")
    for (const formBtn of formBtns) {
        formBtn.classList.remove("border-[#0874f2]", "bg-[#0875f22a]")
        formBtn.classList.add("border-gray-500")

    }
    document.getElementById(id).classList.remove("border-gray-500")
    document.getElementById(id).classList.add("border-[#0874F2]", "border-2", "bg-[#0875f22a]")
}




// toggling function
function toggleHandler(id) {
    const forms = document.getElementsByClassName("form")
    for (const form of forms) {
        form.style.display = "none"
    } 
    console.log(document.getElementById(id))
    document.getElementById(id).style.display = "block"
}








// toggling feature 
document.getElementById("add-btn").addEventListener("click", function (e) {


    toggleHandler("add-money-parent")
    btnToggling("add-btn")
})

document.getElementById("cash-out-btn").addEventListener("click", function (e) {

    toggleHandler("cash-out-parent")
    btnToggling("cash-out-btn")

})

document.getElementById("Transfer-Money-btn").addEventListener("click", function (e) {

    toggleHandler("Transfer-Money-parent")
    btnToggling("Transfer-Money-btn")

})

document.getElementById("get-bouns-btn").addEventListener("click", function (e) {

    toggleHandler("get-bouns-parent")
    btnToggling("get-bouns-btn")

})

document.getElementById("pay-bil-btn").addEventListener("click", function (e) {

    toggleHandler("pay-bil-parent")
    btnToggling("pay-bil-btn")

})
document.getElementById("Transaction-btn").addEventListener("click", function (e) {

    toggleHandler("Transaction-container")
    btnToggling("Transaction-btn")
})


// log out feature
document.getElementById("log-out-btn").addEventListener("click", function () {
    console.log("kk")
    window.location.href = "./index.html"

})

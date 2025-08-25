document.getElementById("login-btn").addEventListener("click",
    function (e) {
        e.preventDefault()
        console.log('button clicked')
        const mobileNumber = 12345678910
        const pin = 1234

        const mobileNumberValue = document.getElementById("mobile-number").value
        const mobileNumberValueConverted = parseInt(mobileNumberValue)
        const pinNumberValue = document.getElementById("pin-number").value
        const pinNumberValueConverted = parseInt(pinNumberValue)
        console.log(mobileNumberValueConverted, pinNumberValueConverted)
        if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pin) {
            window.location.href = "./home.html"
        }
        else {
            alert("Invalid Info")
        }
    })
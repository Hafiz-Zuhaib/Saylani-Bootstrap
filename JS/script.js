const showTostify = ()=>{
    Toastify({
        text: "This Button function is not defined, Now",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to left, #8e0e00, #1f1c18)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
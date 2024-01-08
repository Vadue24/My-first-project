document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const formattedData = document.getElementById("formattedData");
    const errorContainer = document.getElementById("errorContainer");
    const enterData = document.getElementById("enterData").value;

    try {
        const jsonData = JSON.parse(enterData);
        const formattedJsonData = JSON.stringify(jsonData, null, 4);
        formattedData.value = formattedJsonData;

        errorContainer.classList.remove("show");
    } catch (error) {
        errorMessage.innerText = 'format error';
        errorContainer.classList.add("show");

        setTimeout(function () {
            errorContainer.classList.remove("show");
        }, 3000);
    }
});

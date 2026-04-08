/** Funções para o formulário de adoção de cães */
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = form.querySelectorAll("input, select, textarea");
        let valid = true;

        inputs.forEach(input => {
            if (input.type !== "checkbox" && input.value.trim() === "") {
                input.style.border = "1px solid red";
                valid = false;
            } else {
                input.style.border = "1px solid #ddd";
            }
        });

        const checkbox = form.querySelector("input[type='checkbox']");
        if (!checkbox.checked) {
            alert("Você precisa aceitar os termos!");
            valid = false;
        }

        if (valid) {
            showSuccess();
            form.reset();
        }
    });

    function showSuccess() {
        const msg = document.createElement("div");
        msg.innerText = "Formulário enviado com sucesso!";

        msg.style.position = "fixed";
        msg.style.top = "20px";
        msg.style.right = "20px";
        msg.style.background = "#4CAF50";
        msg.style.color = "white";
        msg.style.padding = "15px 20px";
        msg.style.borderRadius = "10px";
        msg.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
        msg.style.zIndex = "999";

        document.body.appendChild(msg);

        setTimeout(() => msg.remove(), 3000);
    }

});
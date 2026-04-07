/** Funções para o formulário de adoção de cães */
const cpfsCadastrados = ["12345678900", "11122233344"];

document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = parseInt(document.getElementById("idade").value);
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
    let pet = document.getElementById("pet").value;
    let horas = parseInt(document.getElementById("horas").value);
    let motivo = document.getElementById("motivo").value.toLowerCase();
    let termo = document.getElementById("termo").checked;
    let financeiro = document.getElementById("financeiro").value;
    let decisao = document.getElementById("decisao").value;

    if (nome.length < 3) return alert("Nome inválido");
    if (!email.includes("@")) return alert("Email inválido");
    if (telefone.length < 8 || isNaN(telefone)) return alert("Telefone inválido");
    if (!cpf) return alert("CPF obrigatório");
    if (cpfsCadastrados.includes(cpf)) return alert("CPF já cadastrado");
    if (idade < 18) return alert("Você deve ser maior de idade");
    if (!cidade) return alert("Cidade obrigatória");
    if (!moradia) return alert("Selecione a moradia");
    if (!quintal) return alert("Informe sobre quintal");
    if (!pet) return alert("Informe se já teve pet");
    if (isNaN(horas)) return alert("Horas inválidas");
    if (motivo.length < 10) return alert("Motivo muito curto");
    if (["quero", "porque sim"].includes(motivo))
        return alert("Motivo muito genérico");

    if (!termo) return alert("Aceite o termo");
    if (moradia === "apartamento" && quintal === "sim")
        return alert("Apartamento não pode ter quintal");
    if (moradia === "casa" && quintal === "nao")
        alert("Verifique se há espaço adequado");

    if (horas > 8) {
        let justificativa = prompt("O animal ficará muito tempo sozinho. Justifique:");
        if (!justificativa) return alert("Justificativa obrigatória");
    }

    if (pet === "nao")
        alert("A ONG poderá acompanhar sua adapção com o pet");

    if (financeiro === "ruim")
        return alert("Adoção não recomendada sem condições financeiras");

    if (decisao === "hoje")
        alert("Atenção: decisão impulsiva!");

    alert("Formulário enviado com sucesso!");

});
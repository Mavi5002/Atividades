const frm = document.querySelector("form")

const resp = document.querySelector("h3")

const emails = []
const nomes = []

frm.addEventListener("submit",(e) => {

    e.preventDefault()
    const nome = frm.inNome.value
    const email = frm.inEmail.value
    const i = nomes.indexOf(nome)


    nome.push(`${nomes}`)
    emails.push(`${email}`)
    dados = ""

})

frm.btProcurar.addEventListener("click",() => {

    if(!frm.checkVisibility()){

        alert("Informe o nome a ser cadastrado!")
        frm.inNome.focus()
        return
    }


})

frm.btListar.addEventListener("click",() =>{

})
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const emails = []
const nomes = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = frm.inNome.value
    const email = frm.inEmail.value
    const i = nomes.indexOf(nome)

    //verifica se o nome ja foi cadastrado
    if(i !== -1){
        alert("Nome ja cadastrado")
        return
    }
    
    //adiciona os dados ao array
    nomes.push(nome)
    emails.push(email)

    frm.inNome.value = " "
    frm.inEmail.value = " "
})




frm.btProcurar.addEventListener("click", () =>{
    const nome = frm.inNome.value()
    
    if(!frm.checkVisibility()){
        alert("informe o nome a ser cadastrado!")
        frm.inNome.focus()
        return
    }

    const i = nomes.indexOf(nome)
    if(i !== -1){
        alert(`Nome:${nomes[i]}, Email:${emails[i]}`)
       
    }else{
        alert("Nome não encontrado")
    }

})





frm.btListar.addEventListener("click",() =>{
    


})
const frm = document.querySelector("form")
const resp = document.querySelector("h3")


const lista = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inProduto.value
    const qt = frm.inQuantidade.value
    const valor = parseFloat(frm.inValor.value)
    const preço = valor * qt

    lista.push(`${nome}     ${qt}     ${preço}`)
    let compras = ""

    for(let i = 0 ; i < lista.length ; i++){
        compras += `${i +1}. ${lista[i]}\n`
    }
    
    resp.innerText = compras
    frm.inProduto.value = " "
    frm.inQuantidade.value = " "
    frm.inValor.value = " "
    frm.inProduto.focus()

})
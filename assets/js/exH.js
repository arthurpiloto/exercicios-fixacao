`use strict`

function readNumber()
{
    const valueA = +document.getElementById(`a`).value
    const valueB = +document.getElementById(`b`).value
    const valueC = +document.getElementById(`c`).value
    const valueD = +document.getElementById(`d`).value
    const readerForm = document.getElementById(`reader-form`)
    const result = document.getElementById(`result`)
    let numbers = []

    if (readerForm.reportValidity())
    {
        if (valueA % 2 == 0 || valueA % 3 == 0)
        {
            numbers.push(valueA)
        }
        
        if (valueB % 2 == 0 || valueB % 3 == 0)
        {
            numbers.push(valueB)
        }
        
        if (valueC % 2 == 0 || valueC % 3 == 0)
        {
            numbers.push(valueC)
        }
        
        if (valueD % 2 == 0 || valueD % 3 == 0)
        {
            numbers.push(valueD)
        }
        result.textContent = `Foram encontrados ${numbers.length} números divisíveis por 2 ou 3: ${numbers}`
    }
}

const readNum = document.getElementById(`read`).addEventListener(`click`, readNumber)
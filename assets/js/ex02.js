`use strict`

function readNumber()
{
    let valN = +document.getElementById(`value-n`).value
    const result = document.getElementById(`result`)
    const readerForm = document.getElementById(`reader-form`)

    if (readerForm.reportValidity())
    {
        if (valN < 0)
        {
            valN = valN * (-1)
        }
        result.textContent = `Valor positivo: ${valN}`   
    }
}

const valReader = document.getElementById(`val-reader`).addEventListener(`click`, readNumber)
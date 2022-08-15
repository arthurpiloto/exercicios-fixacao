`use strict`

function readNumber()
{
    const valN = +document.getElementById(`value-n`).value
    const result = document.getElementById(`result`)

    if (valN < 0)
    {
        valN = valN * (-1)
    }
    else
    {
        result.textContent = `Valor positivo: ${valN}`
    }
}

const valReader = document.getElementById(`val-reader`).addEventListener(`click`, readNumber)
`use strict`

function readNumber()
{
    const value = +document.getElementById(`value`).value
    const form = document.getElementById(`diference-form`)
    const result = document.getElementById(`result`)

    if (form.reportValidity())
    {
        if (value < 3)
        {
            result.textContent = `${value} é menor que 3`
        }
        else
        {
            result.textContent = `${value} é maior que 3`
        }
    }
}

const numberReader = document.getElementById(`calculate`).addEventListener(`click`, readNumber)
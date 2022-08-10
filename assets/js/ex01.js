`use strict`

function diferenceResult()
{
    const valueA = +document.getElementById(`value-a`).value
    const valueB = +document.getElementById(`value-b`).value
    const result = document.getElementById(`result`)
    const diferenceForm = document.getElementById(`diference-form`)

    if (diferenceForm.reportValidity())
    {
        let diferenceValue = ``
        if (valueB > valueA)
        {
            diferenceValue = valueB - valueA
        }
        else
        {
            diferenceValue = valueA - valueB
        }

        result.textContent = `${valueA} - ${valueB} = ${diferenceValue}`
    }

}

const calculate = document.getElementById(`calculate`).addEventListener(`click`, diferenceResult)
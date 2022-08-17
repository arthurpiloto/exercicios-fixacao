`use strict`

function mediaCalculate(n1, n2, n3, n4)
{
    const nota1 = +document.getElementById(`n1`).value
    const nota2 = +document.getElementById(`n2`).value
    const nota3 = +document.getElementById(`n3`).value
    const nota4 = +document.getElementById(`n4`).value
    const mediaForm = document.getElementById(`media-form`)

    if (mediaForm.reportValidity())
    {
        if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10)
        {
            return console.log(`ERROR`)
        }

        media = (nota1 + nota2 + nota3 + nota4) / 4
        return media.toFixed(1)
    }
}
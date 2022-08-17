`use strict`

function mediaCalculate(n1, n2, n3, n4)
{
    const nota1 = +document.getElementById(`n1`).value
    const nota2 = +document.getElementById(`n2`).value
    const nota3 = +document.getElementById(`n3`).value
    const nota4 = +document.getElementById(`n4`).value
    const mediaForm = document.getElementById(`media-form`)
    const result = document.getElementById(`result`)

    if (mediaForm.reportValidity())
    {
        if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10)
        {
            return alert(`ERROR`)
        }

        let media = (nota1 + nota2 + nota3 + nota4) / 4
        let status

        if (media >= 7)
        {
            status = `aprovado`
        }
        else
        {
            let examScore = parseFloat(prompt(`ALUNO REPROVADO. INSIRA A NOTA DO EXAME`))
            if (examScore < 0 || examScore > 10)
            {
                return alert(`ERROR`)
            }
            else
            {
                let mediaExam = (examScore + media) / 2
    
                if (mediaExam >= 5)
                {
                    status = `aprovado em exame`
                }
                else
                {
                    status = `reprovado em exame`
                }
            }
        }
        result.textContent = `Média = ${media.toFixed(1)}. O aluno foi ${status}.`
    }
}

const calculateMedia = document.getElementById(`calculate`).addEventListener(`click`, mediaCalculate)
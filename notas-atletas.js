let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
]

function ordenaNotas(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].notas.sort(function (a, b) {
            return a - b
        });
    }
    return array
}

function calculaMedia(array) {
    let medias = []
    for (let i = 0; i < array.length; i++) {
        const notasOriginais = [...array[i].notas]
        array[i].notas.pop()
        array[i].notas.shift()

        const somaNotas = array[i].notas.reduce((total, nota) => total + nota, 0)
        const media = somaNotas / array[i].notas.length

        medias.push({ nome: array[i].nome, notasOriginais, media: media.toFixed(2) })
    }
    return medias
}

ordenaNotas(atletas)
const medias = calculaMedia(atletas)

for (let i = 0; i < medias.length; i++) {
    const { nome, notasOriginais, media } = medias[i];
    console.log(`Atleta: ${nome} `);
    console.log(`Notas Obtidas: ${notasOriginais}`)
    console.log(`Média Válida: ${media}`)
    console.log("")
}

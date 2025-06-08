/*
1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.


/*
Partindo do pressuposto de que o parâmetro de entrada venha no formato correto e que os números sejam inteiros e positivos
*/
function validaData(dia, mes, ano) {
    switch (mes) {
//Estes meses sempre terão 31 dias:
        case 1:  // Janeiro
        case 3:  // Março
        case 5:  // Maio
        case 7:  // Julho
        case 8:  // Agosto
        case 10: // Outubro
        case 12: //Dezembro 
            return dia >= 1 && dia <= 31;
        
//Estes meses sempre terão 30 dias:
        case 4:  // Abril
        case 6:  // Junho
        case 9:  // Setembro
        case 11: // Novembro
            return dia >= 1 && dia <= 30;

/*
Fevereiro tem 28 dias nos anos normais e 29 dias nos anos bissextos:
*/
        case 2:  // Fevereiro
            // Verifica se é ano bissexto
            const bissexto = (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0));
            return dia >= 1 && dia <= (bissexto ? 29 : 28);

        default:
//Data inválida:
            return false;
    }
}
//Chamada da função:

const resultado = validaData(28, 2, 2024); // Aqui você passa a data por parâmetro. Exemplo: 28 de fevereiro de 2024
console.log(resultado ? "Data válida" : "Data inválida");


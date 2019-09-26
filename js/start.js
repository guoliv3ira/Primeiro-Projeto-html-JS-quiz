let quiz = [
  {
  pergunta: 'Qual o nome do primeiro avião de Santos Dumont?',
  resptrue: '14 Bis',
  respfalse:'14 Bass',
  respfalse2:'12 Bis'
},
{
  pergunta: 'A Lua é um satélite...',
  resptrue: 'Natural da Terra',
  respfalse: 'Artificial da Terra',
  respfalse2: 'de Saturno'
},
{
  pergunta: 'Quantos séculos há em um milênio?',
  resptrue: '10 séculos',
  respfalse: '100 séculos',
  respfalse2: '20 séculos'
},
{
  pergunta: 'Em qual pólo fica a Antártica?',
  resptrue: 'Pólo Sul',
  respfalse: 'Pólo Norte',
  respfalse2: 'Nenhuma das alternativas'
}
]

const addElement = () => {
  let divquiz = document.getElementById('quiz-quiz')
  let novoDivs = '';
for (let i = 0; i < quiz.length; i++ ) {
  novoDivs += `${i+1}) ${quiz[i].pergunta} <br />
  <input type="radio" name="quiz${i}" value="${quiz[i].resptrue}">
  ${quiz[i].resptrue}<br>
  <input type="radio" name="quiz${i}" value="${quiz[i].respfalse}">
  ${quiz[i].respfalse}<br>
  <input type="radio" name="quiz${i}" value="${quiz[i].respfalse2}">
  ${quiz[i].respfalse2}<br>
  <hr>`;

}
divquiz.innerHTML = novoDivs;

}
let verificarResp = (id, value) => {
  for (let i = 0; i < quiz.length; i++){
    if (id==i){
      if (quiz[i].resptrue == value){
        return true;
      }
    }
  }
  return false;
}
const verificar = () => {
  let questTrue = "";
  let questFalse = "";
  let respTrue = 0;
  let respFalse =0;
  let divquiz = document.getElementById('quiz-quiz')
  const tm = quiz.length
  for (let i = 0; i < tm; i++){
    let refradio = document.getElementsByName(`quiz${i}`);
    for (let a = 0; a < refradio.length; a++){
      if (refradio[a].checked){
        if (verificarResp(i, refradio[a].value)){
          respTrue++;
          questTrue+= `${i+1}ª, `
        }
          else {
            respFalse++
            questFalse+= `${i+1}ª, `
          }
        }
      }
    }
    questTrue = questTrue.substr(0, (questTrue.length - 2));
    questFalse = questFalse.substr(0, (questFalse.length - 2));
    let divResp = document.getElementById('resp');
    questTrue = `Total de acertos: ${respTrue}<br /> Perguntas acertadas: <br />
    ${questTrue}`
    questFalse = `Total de erros: ${respFalse}<br /> Perguntas erradas: <br />
    ${questFalse}`
    divResp.innerHTML = `${questTrue} <hr /> ${questFalse}`


}

addElement();






//fim

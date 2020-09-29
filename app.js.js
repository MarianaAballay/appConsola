const request = require("request-promise");
const readline = require('readline');


var opciones = {uri: 'https://opentdb.com/api.php?amount=10', json: true};

var r1= readline.createInterface(process.stdin, process.stdout);


request(opciones)
.then(resp => preguntasyopc(resp))
.catch(err => console.log("Error: " + err));
var cont =0;

function inicio(){
    console.log("Bienvenidos a Trivia DB!");
}

function salir (){
    console.log("Gracias por haber jugado, hasta la próxima!");
};

function preguntasyopc(obj){
    inicio();

    obj.results.forEach(element => {
        var resp = "";
        r1.question(
            "Categoría: " + element.category +
            "\nPregunta: " + element.question + "\nOpciones: "
        + element.correct_answer + ", " + element.incorrect_answers
        + "\nIngrese su respuesta: ", (respuesta)=> {
            resp = respuesta;
            if (resp === element.correct_answer){
                console.log("Respuesta correcta!");
                cont++;
            }else{
                console.log("Respuesta incorrecta! La respuesta correcta era: " + element.correct_answer );
            }
           salir();
            //process.exit();
      
        });
    });
        
}

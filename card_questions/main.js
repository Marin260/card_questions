var questions = ["Što je to animacija daj definicije?",
"Što je to phi fenomenom?",
"Koje su vrste animacije? 3",
"Opiši 2d i 3d animaciju?",
"Razlika između 2d i 3d animacije?",
"Di se primjenjuje ran?",
"Kako generiramo pokretne u ran?",
"Tehnike generiranja pokreta? 3",
"Što je to artikulirani model?",
"Što je to sustav cestica?",
"Od kuda animacija posuđuje tehnike? 3",
"Što su to animacijski principi?",
"Koja je svrha tih principa?",
"Nabroji principe animacije? 12",
"Opiši princip elastičnosti?",
"Opiši princip iščekivanja?",
"Opiši princip Režiranja?",
"Opiši princip linearnog animiranja ili animiranja iz poze u pozu?",
"Opiši princip prateće ili preklapajuće radnje?",
"Opiši princip laganog ulaza i laganog izlaza?",
"Opiši princip trajanja radnje?",
"Opiši princip gibanja u lukovima?",
"Opiši princip sekundarne radnje?",
"Opiši princip pretjerivanja?",
"Opiši princip uvjerljivog crteža?",
"Opiši princip privlačnosti?",
"Što je to produkcijski postupak animacije?",
"Što je rezultat produkcijskog postupka? 3",
"Faze produkcijskog postupka?",
"Opis podfaza pretprodukcije? 5",
"Opis podfaza produkcije? 8",
"Opis podfaza postprodukcije? 4",
"Zašto je važna dobra priča u animaciji?",
"Kakav mora biti tijek price?",
"Kakav mora biti glavni lik?",
"Koji su arhetipovi glavnog lika?",
"Koji su ciljevi glavnog lika?",
"Što je sukob glavnog lika?",
"Kakav može biti sukob glavnog lika?",
"Kakav mora biti stil pripovijedanja?",
"Što se postiže tehnikom predvizualizacije, za što se koristi?",
"Koje su 3 predvizualizacijske tehnike?",
"Kakve vrste kadrova imamo? 6",
"Pravila organizacije scene? 3",
"Kako se usmjerava pozornost?",
"Zašto je bitan dokumentacijski proces kod animacije?",
"Kako možemo dokumentirati proces? 3",
"Što je to Graticule?",
"Što je to Field guide?",
"Što je to dope sheet?",
"Koja je važnost planiranja, što se planiranjem postiže?",
"Što je to produkcijska knjiga?",
"Opiši vremensko planiranje aktivnosti?",
"Opiši produkcijski trokut?",
"Koji su alati za planiranje vremenskih aktivnosti? 3",
"Opiši PERT dijagram?",
"Opiši Gantov dijagram?",
"Opiši produkcijske ploče?",
"Što su alati za praćenje sredstava?",
"Što je to organizacija imenovanja projektnih mapa?",
"Što je to virtualni lik?",
"Koji su problemi s realizmom u simulaciji?",
"Gdje se primjenjuju virtualni likovi? 3",
"Koje su metode modeliranja virtualnih likova? 3",
"Kako se animira tijelo lika, opis?",
"Koje su tehnike za stvaranje modela kostura? 6",
"Kakve vrste zglobova postoji u kosturu? 4",
"Što su to stožerne točke?",
"Što je to unaprijedna kinematika?",
"Što je to inverzna kinematika?",
"Što se radi alatima za deformiranje, nakon stvaranja lika i kostura?",
"Što su to ograničenja nad objektima u sceni?"
];
const arr_len = questions.length;
let index = 0;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function next(){
    var htmlQuestion = document.getElementById("current_question");
    var pos = document.getElementById("pos");
    if (index == arr_len-1) index = 0;
    else index += 1;
    htmlQuestion.innerHTML=questions[index];
    pos.innerHTML=index+1+"/"+arr_len;
}
function prev(){
    var htmlQuestion = document.getElementById("current_question");
    var pos = document.getElementById("pos");
    if (index == 0) index = arr_len-1;
    else index -= 1;
    htmlQuestion.innerHTML=questions[index];
    pos.innerHTML=index+1+"/"+arr_len;
    console.log(htmlQuestion)
}
// to do create one function "change" that does both next and prev

shuffle(questions);


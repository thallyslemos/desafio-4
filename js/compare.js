
//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome,
        this.preco = preco,
        this.alturaCacamba = alturaCacamba,
        this.alturaVeiculo = alturaVeiculo,
        this.alturaSolo = alturaSolo,
        this.capacidadeCarga = capacidadeCarga,
        this.motor = motor,
        this.potencia = potencia,
        this.volumeCacamba = volumeCacamba,
        this.roda = roda,
        this.image = image;
    }
} 


/* PERMITE VARRER UM ARAY, RETORNANDO À POSIÇÃO DO OBJETO ARMAZENADO SE 
FOR IGUAL AO OBJETO INFORMADO. SE N ENCONTRAR, RETORNA -1.*/
// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) { //não entendi onde deveria usar essa função
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;

}
/*PERMITE INSERIR UM OBJETO CAR NO ARRAY, APENSA SE O CHECKBOX ESTIVER COM ESTADO CHECKED.
 NÃO DEVE SE PERMITIR A INCLUSÃO DE MAISQUE 2 CARROSNO ARRAY E QUANDO FOR DEMARCDO,
  DEVERÁ REMOVER O O OJBETO */
 function SetCarToCompare(el, carClass) {
    let checkbox1 = document.getElementById("car1");
    let checkbox2 = document.getElementById("car2");
    let checkbox3 = document.getElementById("car3");
    //Apenas dois checkbox podem ser marcados
   if(checkbox1.checked == true && checkbox2.checked == true ) { 
    checkbox3.disabled = true;
   }if(checkbox1.checked == true && checkbox3.checked == true) {
    checkbox2.disabled = true;
   } if(checkbox2.checked == true && checkbox3.checked == true) {
    checkbox1.disabled = true;
   }   

    if(carClass instanceof Car){       
        if(el.checked){
              carArr.push(carClass);  
        } else {
            carArr.pop(carClass);
        } 
    } else {
        throw "You need set a Car Class";
    }
   

}

/*EXIBE POP-UP COM TABELA */
function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();  
}

/* OCULTA POP-UP*/
function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
    let checkbox1 = document.getElementById("car1"); //desmarca os checkbox ao fechar a tabela
    checkbox1.checked = false;
    let checkbox2 = document.getElementById("car2");
    checkbox2.checked = false;
    let checkbox3 = document.getElementById("car3");
    checkbox3.checked = false;
    carArr = []; //limpa o array ao fechar a tabela
    checkbox1.disabled = false; //habilita todos os checkbox ao fechar a tabela
    checkbox2.disabled = false;
    checkbox3.disabled = false;
}

function UpdateCompareTable() {
    document.getElementById("compare").style.display = "block";
    let carro0 = carArr[0]; //uma variável para cada objeto do array
    let carro1 = carArr[1];

    let imagem0 = document.getElementById("compare_image_0"); //uma variável para cada celula da tabela de comparação
    imagem0.innerHTML = `<img src="${carro0.image}" width="150px">`; //o conteúdo da célula recebe o respectivo atributo do objeto
    let imagem1 = document.getElementById("compare_image_1");
    imagem1.innerHTML = `<img src="${carro1.image}" width="150px">`;
    let modelo0 = document.getElementById("compare_modelo_0");
    modelo0.textContent = carro0.nome;
    let modelo1 = document.getElementById("compare_modelo_1");
    modelo1.textContent = carro1.nome;
    let alturaCacamba0 = document.getElementById("compare_alturacacamba_0");
    alturaCacamba0.textContent = carro0.alturaCacamba;
    let alturaCacamba1 = document.getElementById("compare_alturacacamba_1");
    alturaCacamba1.textContent = carro1.alturaCacamba;
    let alturaVeiculo0 = document.getElementById("compare_alturaveiculo_0");
    alturaVeiculo0.textContent = carro0.alturaVeiculo;
    let alturaVeiculo1 = document.getElementById("compare_alturaveiculo_1");
    alturaVeiculo1.textContent = carro1.alturaVeiculo;
    let alturaSolo0 = document.getElementById("compare_alturasolo_0");
    alturaSolo0.textContent = carro0.alturaSolo;
    let alturaSolo1 = document.getElementById("compare_alturasolo_1");
    alturaSolo1.textContent = carro1.alturaSolo;
    let capacidadeCarga0 = document.getElementById("compare_capacidadecarga_0");
    capacidadeCarga0.textContent = carro0.capacidadeCarga;
    let capacidadeCarga1 = document.getElementById("compare_capacidadecarga_1");
    capacidadeCarga1.textContent = carro1.capacidadeCarga;
    let motor0 = document.getElementById("compare_motor_0");
    motor0.textContent = carro0.motor;
    let motor1 = document.getElementById("compare_motor_1");
    motor1.textContent = carro1.motor;
    let potencia0 = document.getElementById("compare_potencia_0");
    potencia0.textContent = carro0.potencia;
    let potencia1 = document.getElementById("compare_potencia_1");
    potencia1.textContent = carro1.potencia;
    let volumeCacamba0 = document.getElementById("compare_volumecacamba_0");
    volumeCacamba0.textContent = carro0.volumeCacamba;
    let volumeCacamba1 = document.getElementById("compare_volumecacamba_1");
    volumeCacamba1.textContent = carro1.volumeCacamba;    
    let roda0 = document.getElementById("compare_roda_0");
    roda0.textContent = carro0.roda;
    let roda1 = document.getElementById("compare_roda_1");
    roda1.textContent = carro1.roda;
    let preco0 = document.getElementById("compare_preco_0");
    preco0.textContent = carro0.preco;
    let preco1 = document.getElementById("compare_preco_1");
    preco1.textContent = carro1.preco;
}

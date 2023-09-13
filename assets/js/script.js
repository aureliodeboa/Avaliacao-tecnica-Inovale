function openSortingPage() {
    document.getElementById('container').innerHTML = `
        <h1> Bubble Sort</h1>
        <form>
            <label for="inputArray">Digite os números separados por vírgula:</label>
            <input type="text" id="inputArray">
            <button type="button" onclick="sortArray()">Ordenar</button>
        </form>
        <div id="outputDiv">
            <p>Array ordenado:</p>
            <p id="sortedArray"></p>
        </div>
    `;
}

function openSearchPage() {
    document.getElementById('container').innerHTML = `
        <h1>Algoritmo de Busca Binária </h1>
        <form>
            <label for="inputArray">Digite os números separados por vírgula:</label>
            <input type="text" id="inputArray"> 
            <label for="searchValue">Digite o valor a ser buscado:</label>
            <input type="text" id="searchValue">
            <button type="button" onclick="searchArray()">Buscar</button>
        </form>
        <div id="outputDiv">
            <p>Resultado da busca:</p>
            <p id="searchResult"></p>
        </div>
    `;
}

function sortArray() {
    const inputArray = document.getElementById('inputArray').value;
    const array = inputArray.split(',').map(Number);
    bubbleSort(array);
    document.getElementById('sortedArray').textContent = array.join(', ');
}

function bubbleSort(vetor){
    let n = vetor.length;
    let i=0,j=0;
    for(i=0; i<n;i++){
        for(j=0;j<(n - i - 1);j++){

            if(vetor[j]>vetor[j+1]){ //troca
                let temp = vetor[j];
                vetor[j]=vetor[j+1];
                vetor[j+1]=temp;

            }
        }
    }
}


function searchArray() {
    const inputArray = document.getElementById('inputArray').value;
    const array = inputArray.split(',').map(Number); //converte a string em um vetor numerico
    const searchValue = parseInt(document.getElementById('searchValue').value);
    buscaBinaria(array,searchValue);
}


function buscaBinaria(vetor,valor){
   
    bubbleSort(vetor); //porque o vetor precisa esta ordenado
    let inicial=0;
    let tam = vetor.length;
    let final = tam-1;
    let result=`O valor ${valor} não foi encontrado`; 
   
    while(inicial <= final){
        let meio = Math.floor((inicial+final)/2)
        console.log(meio);
        if(vetor[meio] === valor)
        {
            
            result=`O valor ${valor} foi encontrado.`;
            break;
        }
        else
        {
            if(vetor[meio] > valor)
            {
                final = meio-1;
            }
            else{
                
                inicial = meio+1;
            }
        }
    }

    document.getElementById('searchResult').textContent= result;
    
}
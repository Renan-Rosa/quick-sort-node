// Função para gerar um array de números aleatórios
const generateRandomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 10000));
};

// Função Quick Sort com partição
const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    // Função para particionar o array
    const partition = (low, high) => {
        const pivot = arr[Math.floor((low + high) / 2)];
        let left = low;
        let right = high;

        while (left <= right) {
            // Encontre um elemento maior que o pivô à esquerda
            while (arr[left] < pivot) left++;
            // Encontre um elemento menor que o pivô à direita
            while (arr[right] > pivot) right--;

            if (left <= right) {
                // Troque os elementos e mova os ponteiros
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right--;
            }
        }
        return left;
    };

    // Função recursiva para ordenar o array
    const sort = (low, high) => {
        if (low < high) {
            const index = partition(low, high);
            sort(low, index - 1);
            sort(index, high);
        }
    };

    sort(0, arr.length - 1);
    return arr;
};

// Gerar um array desordenado com 1000 elementos
const array = generateRandomArray(1000);
console.log('Array desordenado:', array);

// Ordenar o array usando Quick Sort
const sortedArray = quickSort(array);
console.log('Array ordenado:', sortedArray);
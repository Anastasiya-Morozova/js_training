// Our array with different scores
const scores = [
  110, 195, 25, 150, 10, 198, 145, 170, 15, 187, 40, 135, 0, 165, 95, 182, 103,
  20, 140, 190, 115, 155, 125, 105,
];

//Let's sort it in descending order
function descBubbleSort (arr){
    for (let i=0; i<=arr.length-1; i++){
        console.log("New iteration_______________________________________")
        for (let j=arr.length-1; j>=i+1; j--){
            let temp;
            console.log(`Compare the pair of ${arr[j]} and ${arr[j-1]}`)
            console.log(`Compare the ${j} and ${j-1} indexes`)
            console.log(`The array we work with is [${arr}]`)
            if(arr[j]>arr[j-1]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
            console.log(`Intermediate array is [${arr}]`)
        }
    }
    console.log(arr);
}

descBubbleSort(scores);
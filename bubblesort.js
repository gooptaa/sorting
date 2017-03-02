function bubbleSort(arr){
	if(arr.length === 0) return [];
	for(var i = 0; i < arr.length - 1; i++){
		for(var j = 0; j < arr.length - i; j++){
			if(arr[j] > arr[j+1]){
				swap(arr, j, j+1);
			}
		}
	}
	return arr;
}

function swap(arr, index1, index2){
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}
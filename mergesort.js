// function mergeSort(arr){
// 	return mergeSortHelper(arr, 0, arr.length - 1);
// }

// // for splitting:
// // base case: if length === 1, return self
// // otherwise: split 0 -> Math.floor(n/2), Math.floor(n/2) -> length
// // merge(mergeSort(arr.slice(0, n / 2)), mergeSort(arr.slice(n/2, length)))

// // 1 2 3 | 4 5 6 7

// // merge(split(arr, begin1, end1), split(arr, begin2, end2)) => begin end
// // ==> split(arr, begin1, end1) => mergeSortHelper(arr, begin1, end1)
// // 


// /*
// mergeSortHelper
// 	arr - full array to be sorted
// 	begin - the beginning index of the current subarrays
// 	end - the end index of the current subarray
// */
// function mergeSortHelper(arr, begin, end){
// 	if(begin === end){								
// 		// this subarray is sorted, don't do anything
// 	} else {
// 		// we need to sort and merge
// 	}
// };

// // helper function to merge 2 "subarrays"
// function merge(arr, begin1, end1, begin2, end2){

// }

function mergeSort(arr){
	if(arr.length === 0 || arr.length === 1) return arr;
	var splitArr = split(arr);
	return merge([mergeSort(splitArr[0]), mergeSort(splitArr[1])]);
}

function split(arr){
	var firstHalf = arr.slice(0, Math.floor(arr.length / 2));
	var secondHalf = arr.slice(Math.floor(arr.length / 2));
	return [firstHalf, secondHalf];
}

function merge(arr){
	var arr1 = arr[0];
	var arr2 = arr[1];
	var mergedArr = [];
	var index1 = index2 = 0;
	while(index1 < arr1.length && index2 < arr2.length){
		if(arr1[index1] < arr2[index2]){
			mergedArr.push(arr1[index1]);
			index1++;
		} else {
			mergedArr.push(arr2[index2]);
			index2++;
		}
	}
	if(index1 === arr1.length){
		mergedArr = mergedArr.concat(arr2.slice(index2));
	} else {
		mergedArr = mergedArr.concat(arr1.slice(index1));
	}
	return mergedArr;
}
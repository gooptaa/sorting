var sortedArr, sortedArr2, unsortedArr, backwardsArr, dupeArr, sortedDupeArr, singleArr;

beforeEach(function(){
  sortedArr = [1, 2, 3, 4, 5];
  sortedArr2 = [1, 2, 3, 4, 5];
  unsortedArr = [2, 5, 4, 1, 3];
  backwardsArr = [5, 4, 3, 2, 1]
  dupeArr = [1, 1, 1, 1, 1, 2, 1, 2, 1, 2];
  sortedDupeArr = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2];
  singleArr = [10];
});

describe('Split Array function', function() {
  it('is able to split an odd length array into two halves', function() {
    expect( split(unsortedArr) ).toEqual([[2, 5], [4, 1, 3]]); 
  });
  it('is able to split an even length array into two halves', function() {
    expect( split(dupeArr) ).toEqual([ [ 1, 1, 1, 1, 1 ], [ 2, 1, 2, 1, 2 ] ]); 
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([sortedArr, sortedArr2]) ).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
  });
});

describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it('handles a single element array', function(){
    expect( mergeSort(singleArr) ).toEqual( singleArr );
  });
  it('handles a sorted array', function(){
    expect( mergeSort(sortedArr) ).toEqual( sortedArr );
  });
  it('handles an unsorted array', function(){
    expect( mergeSort(unsortedArr) ).toEqual( sortedArr );
    expect( mergeSort(backwardsArr) ).toEqual( sortedArr );
  });
  it('handles a duplicates in array', function(){
    expect( mergeSort(dupeArr) ).toEqual( sortedDupeArr );
  });
});
var sortedArr = [1, 2, 3, 4, 5];
var unsortedArr = [2, 5, 4, 1, 3];
var backwardsArr = [5, 4, 3, 2, 1]
var dupeArr = [1, 1, 1, 1, 1, 2, 1, 2, 1, 2];
var sortedDupeArr = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2];
var singleArr = [10];
unsortedArr.sort();

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a single element array', function(){
    expect( bubbleSort(singleArr) ).toEqual( singleArr );
  });
  it('handles a sorted array', function(){
    expect( bubbleSort(sortedArr) ).toEqual( sortedArr );
  });
  it('handles an unsorted array', function(){
    expect( bubbleSort(unsortedArr) ).toEqual( sortedArr );
    expect( bubbleSort(backwardsArr) ).toEqual( sortedArr );
  });
  it('handles a duplicates in array', function(){
    expect( bubbleSort(dupeArr) ).toEqual( sortedDupeArr );
  });
});
{
  function removeDuplicates(nums: number[]): number[] {
    return nums.filter((val, indx) => nums.indexOf(val) === indx);
  }
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}

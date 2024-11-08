{
  function sumArray(nums: number[]): number {
    let totalSum = 0;
    nums.map((num) => (totalSum += num));
    return totalSum;
  }
  console.log(sumArray([1, 2, 3, 4, 5]));
}

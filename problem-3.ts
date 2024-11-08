{
  function countWordOccurrences(val: string, key: string): number {
    const smlVal = val.toLowerCase();
    const smlKey = key.toLowerCase();

    return smlVal.split(" ").filter((v) => v === smlKey).length;
  }
  console.log(countWordOccurrences("I love typescript", "typescript"));
}

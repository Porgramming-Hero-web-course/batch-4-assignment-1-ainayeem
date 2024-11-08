{
  function getProperty<T, P extends keyof T>(obj: T, key: P) {
    return obj[key];
  }

  // Sample Input:
  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));
}

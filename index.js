// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  let keyValueObj = { [key]: value }
  return Object.assign({}, obj, keyValueObj);
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key) {
  const newObj = Object.assign({}, obj);
  delete newObj[`${key}`];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[`${key}`];
  return obj;
}
export function onlyNumbers(string) {
  return string.replace(/[^0-9]/g,'');
}

function compareAttribute(a, b, attribute) {
  if ( a[attribute].toLowerCase() < b[attribute].toLowerCase()){
    return -1;
  }
  if ( a[attribute].toLowerCase() > b[attribute].toLowerCase()){
    return 1;
  }
  return 0;
}

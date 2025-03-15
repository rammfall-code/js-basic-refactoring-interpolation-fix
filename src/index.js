// Questioner

function askInfo(message) {
  let name;

  do {
    name = prompt(message);

    if (name === null) {
      return null;
    }
  } while (name.trim() === '' || /\d/.test(name));

  return name;
}

function askInfoNumber(message) {
  let number;

  do {
    number = prompt(message);

    if (number === null) {
      return null;
    }
  } while (isNaN(number) || number.trim() === '');

  return +number;
}

function questioner() {
  const firstName = askInfo('Your name');

  if (firstName === null) {
    alert('you cancelled');
    return;
  }

  const lastName = askInfo('Your last name');
  if (lastName === null) {
    alert('you cancelled');
    return;
  }

  const age = askInfoNumber('Your age');
  if (age === null) {
    alert('you cancelled');
    return;
  }
  alert(`Hi, ${firstName} ${lastName}, your age is ${age}`);
}

questioner();

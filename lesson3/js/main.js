alert('Введите любое целое число');

let namber = prompt(+'', '');

nextPrime:
for (var i = 2; i < namber; i++) {

  for (var j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  alert( i );
}

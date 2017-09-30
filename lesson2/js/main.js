const ADMIN = 'admin';
const PASSWORD = 'Черный властелин';
let who, password;

function enterPassword(){
  if(password == false){
    alert('Вход отменен');
  }else if(password != PASSWORD){
    alert('Пароль неверен');
  }else{
    alert('Добро пожаловать!!!)))');
  }
}

who = prompt('Кто вы?');

if(who == null){
  alert('Вход отменен');
}else if(who != ADMIN){
  alert('Я вас не знаю');
}else{
  password = prompt('Введите пароль', '');
  enterPassword();
}

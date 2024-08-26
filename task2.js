const fs = require('fs');

// Создайте файл с именем `info.txt` и запишите в него текст "Node.js is awesome!"
fs.writeFile('info.txt', 'Node.js is awesome!', (err) => {
    if (err) {
        console.error('Ошибка при записи в файл:', err);
    } else {
        console.log('Текст успешно записан в файл "info.txt"!');
    }
});

// Прочитайте содержимое файла `info.txt`.
fs.readFile('info.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка при чтении файла:', err);
    } else {
        console.log(data);
    }
});

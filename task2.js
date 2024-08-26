const fs = require('fs');

fs.writeFile('info.txt', 'Node.js is awesome!', (err) => {
    if (err) {
        console.error('Ошибка при записи в файл:', err);
    } else {
        console.log('Текст успешно записан в файл "info.txt"!');
    }
});

fs.readFile('info.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка при чтении файла:', err);
    } else {
        console.log(data);
    }
});

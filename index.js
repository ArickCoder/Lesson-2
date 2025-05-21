var fs = require('fs');

fs.writeFile('newTextfile.txt', 'I changed the content!', function (err) {
    if (err) throw err;
    console.log('Content Changed!!!');
});

fs.unlink('newTextfile.txt', function (err) {
    if (err) throw err;
    console.log('File Deleted!')
})

fs.rename('file.txt', 'renamedfile.txt', function (err){
    if (err) throw err;
    console.log('File renamed as renamedfile.txt');
})
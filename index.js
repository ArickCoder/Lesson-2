var fs = require('fs');

fs.writeFile('newTextfile.txt', 'I changed the content!', function (err) {
    if (err) throw err;
    console.log('Content Changed!!!');
});

fs.unlink('newTextfile.txt', function (err) {
    if (err) throw err;
    console.log('File Deleted!')
})

fs.rename('demofile.txt', 'renamedfile2.txt', function (err){
    if (err) throw err;
    console.log('File renamed as renamedfile.txt');
})




fs.readFile('renamedfile.txt', function (err){
    if (err) throw err;
    console.log('File Open');
});

fs.appendFile('renamedfile.txt', 'Hello User!', function (err){
    if (err) throw err;
    console.log('append');
});
let fs = require('fs');
let fs2 = require('fs/promises');


fs2
.readFile('hell.txt', 'utf-8')
.then((content) =>  fs2.writeFile('backup.txt' , content))
.then(() => fs2.unlink('hell.txt'))
.catch((err) => console.log('Erooo',err));



fs.readFile('hell.txt', 'utf-8', function (err, content) {
    if (err) {
        console.log("Sorry, an error occurred:", err);
    } else {
        console.log(content);
        fs.writeFile('backup.txt' , content, function(err){
            if(err){
                console.log('Sorry uable to read file');
            } else{
                fs.unlink('hell.txt', function(err){
                    if(err){
                        console.log('unable to0 delete');
                    }else{
                        console.log('Everthing Done')
                    }

                })
            }
        })
    }
});



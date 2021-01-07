const fs = require('fs')
const manifest = require('./manifest')

function makep(dir) {
    let paths = dir.split('/');
    for(let i =1;i<paths.length;i++){
        let newPath = paths.slice(0,i).join('/');
        try{
            //是否能访问到这个文件，如果能访问到，说明这个文件已经存在，进入循环的下一步。
            //accessSync的第二个参数就是用来判断该文件是否能被读取
            fs.accessSync(newPath,fs.constants.R_OK);

        }catch (e){
            fs.mkdirSync(newPath);
        }
    }
}
makep('dist/')



// 写入文件内容（如果文件不存在会创建一个文件）
fs.writeFile('./dist/manifest.json', JSON.stringify(manifest), function (err) {
    if (err) {
        throw err;
    }
    // 写入成功后读取测试
    fs.readFile('./dist/manifest.json', 'utf-8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });
});
console.log(process.argv);


process.stdin.on('data',data =>{
    console.log('you typed' + data);
    process.exit();
});
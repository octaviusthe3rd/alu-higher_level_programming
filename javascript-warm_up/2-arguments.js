#!/usr/bin/node
const arguments = process.argv.slice(2);
if(arguments.length === 1 ){
console.log('Argument found');
}else if(arguments.length > 1){
console.log('Arguments found');
}else{
console.log('No argument');
}

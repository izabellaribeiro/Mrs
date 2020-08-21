let a = 3;

global.b = 123;
this.c = 456;

console.log(this.a);
console.log(global.a);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// criando uma variável maluca: sem var e sem le!!!
abc = 3; // não faça isso em casa!!!
console.log(global.abc);

//module.exports = { e: 456, f: false, g: 'teste}

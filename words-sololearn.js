class Add {
constructor(...words) {
this.words = words;
this.print=print;
}
//your code goes here
}
function print(){
console.log('$');
for(let val of this.words)
{
console.log(val);
console.log('$');
}
}
var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();
function createMyObject(){
    
    let myObj = {foo: 'bar',answerToUniverse: '42', ['olly olly']: 'oxen free',}
    myObj.hello = function(){
        return 'hello' 
    }
}
function updateObject(obj){
    obj.foo = 'foo';
    obj.bar ='bar';
    obj.bizz ='bizz';
    obj.bang = 'bang';
    return obj;
}


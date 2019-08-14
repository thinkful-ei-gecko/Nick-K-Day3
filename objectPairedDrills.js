function createMyObject(){
    
    let myObj = {foo: 'bar',answerToUniverse: '42', ['olly olly']: 'oxen free',}
    myObj.hello = function(){
        return 'hello' 
    }
    return myObj;
}
function updateObject(obj){
    obj.foo = 'foo';
    obj.bar ='bar';
    obj.bizz ='bizz';
    obj.bang = 'bang';
    return obj;
}

function personMaker(){
    var person ={
        firstName: 'Nick',
        lastName: 'Kerner',
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
    }
}


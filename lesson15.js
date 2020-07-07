'use strict';

class First {
    hello(){
        console.log('Привет я метод родителя!');
    }
}

class Second extends First {

    hello(){
        super.hello();
        console.log('А я наследуемый метод!');
    }
    
}

const class2 = new Second();

class2.hello();
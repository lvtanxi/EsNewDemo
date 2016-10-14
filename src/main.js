/**
 * Created by Simon on 2016/10/14.
 */
import fs from './Test';
import Person from './ChildTest'


let c = new fs();
c.ddd();

class Abc {
    getPerson() {
        const person = new Person('wangwu', 46);
        person.getInfo()
    }
}

let p = new Abc();
p.getPerson();
/**
 * Created by Simon on 2016/10/14.
 */

import LastChild from "./LastChild"

class CTest{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        console.log(LastChild.myLastName);
        console.log(LastChild.myTest(this.name));
        return this.name + '\'s age is ' + this.age;
    }
}

export default CTest;
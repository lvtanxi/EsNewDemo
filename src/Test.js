/**
 * Created by Simon on 2016/10/14.
 */

import Cast from './ChildTest'

class Test {
    ddd() {
        console.log('This is ddd function');
        const person = new Cast('zhangsan', 34);
        let c = person.getInfo();
        console.log(c);
    }
}

export default Test;
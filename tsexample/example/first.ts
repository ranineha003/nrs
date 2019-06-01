/**
 * my first
 */

interface standard {
    getSet();
}
class User {
    public name: string = "test";
    private age: number;
    protected likes: Array<string> = ["apple", "mango", "banana"];
    constructor() {
        this.submiValue("string", 41)
    }
    submiValue(a: string, b: any): void {
        console.log('abcs');
    }
}
class Student extends User implements standard {

    constructor() {
        super()
    }
    getSet() {
        console.log('abcs');
    }
}

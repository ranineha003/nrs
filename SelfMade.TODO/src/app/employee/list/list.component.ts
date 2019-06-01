import { Component } from "@angular/core";

@Component({
    selector: "list",
    templateUrl: "./list.component.html",
    styleUrls: ['./list.component.css']
})

export class ListComponent {
    listArray = [
        { name: "Neha", empID: 117632, contactInfo: 8604330869 },
        
    ];
    myInput: string = "45455454";
    constructor() {

    }
    myTemplateSubmit(form) {
        console.log(form);
        if(form.valid){
            this.listArray.push(form.value);
            form.reset();
        }else{
            alert('kuch to enter kar mere bhai')
        }
        
    }


}
import { Component } from "@angular/core";

@Component({
    selector: "contacts",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"]
})

export class ContactsComponent {
    contactList = [
        { name: "manoj", phone: 77777777777 },
        { name: "neha", phone: 455666666666 }
    ];
    employeeInfoOriginal = [];

    viewMode='list';

    employeeInfo = [
        { name: 'Gopal', phone: 9004003858, ID: 123456 },
        { name: 'Neha', phone: 8904330869, ID: 117632 },
        { name: 'Saurya', phone: 8291195254, ID: 114843 },
        { name: 'Gops', phone: 9766570067, ID: 117631 }

    ];
    constructor() {
        this.employeeInfoOriginal = JSON.parse(JSON.stringify(this.employeeInfo))
    }
    handleClick() {
        //this.contactList.push({name:"test",phone:233645127641})
        // alert("Working!!!");
        var retRes = prompt();
        var i = 0;
        var len = this.employeeInfo.length;
        for (i = 0; i < len; i++) {
            if (retRes !== this.employeeInfo[i].name || retRes !== this.employeeInfo[i].ID.toString()) {
                this.employeeInfo.splice(i, 1)
            }
        }
        console.log(retRes)
    }
    reset() {
       this.employeeInfo = JSON.parse(JSON.stringify(this.employeeInfoOriginal));
    }
    delete(index) {
        this.contactList.splice(index, 1)
    }
}
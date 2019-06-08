import { Component } from '@angular/core';
@Component({
    selector: 'app-progress',
    template: `
    <div class="progress" [hidden]="inc==100">
    <div class="progress-bar" role="progressbar" [style.width]="inc + '%'" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  `
})
export class ProgressComponent {
    public inc: number = 0;
    public start = false;
    autoStart() {
        if (this.start) {
            this.inc = this.inc + 3;
            setTimeout(() => {
                this.autoStart()
            }, 1000)
        }
    }
}

import {
  Component,
  AfterContentChecked,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  Input
} from '@angular/core';
import { NgdsFormConfig, NgdsFormInputCompOption } from './form.config';
import { NgdsFormComp } from './form.component';

/**
 * A component that makes it easy to create tabbed interface.
 */
@Component({
  selector: 'ngds-form-input',
  template: `
  <div nz-col [nzSpan]="option.span" *ngIf="!option.hidden">
    <div nz-form-item nz-row>
      <div nz-form-label nz-col [nzSpan]="option.labelSpan" >
        <label for="{{option.property}}">{{option.label}}</label>
      </div>
      <div nz-form-control nz-col [nzSpan]="option.compSpan" [nzValidateStatus]="getFormControl(option.property)">
        <nz-input [nzSize]="'large'" [nzDisabled]="option.disabled" nzType="{{option.type}}" [nzPlaceHolder]="option.placeHolder || '请输入'" 
        [(ngModel)]="option.value"
        (ngModelChange)="onChange($event)"
        [formControl]="getFormControl(option.property)"></nz-input>
        <div *ngIf="option.maxLength" class="input-limit">{{option.value?option.value.length:0}}/{{option.maxLength}}</div>
        <div nz-form-explain *ngFor="let val of option.validations">
            <span class="error-msg" *ngIf="getFormControl(option.property).errors&&
            getFormControl(option.property).errors[val.type]">{{val.msg}}</span>
        </div>

      </div>
    </div>
  </div>
  `
})
export class NgdsFormInput extends NgdsFormComp implements AfterContentChecked {
  constructor() {
    super();
  }

  option: NgdsFormInputCompOption;
  oldValue: string = "";
  onChange(value: any) {
    if (value && this.option.maxLength) {
      if (value.length > this.option.maxLength) {
        setTimeout(() => {
          this.option.value = this.oldValue;
        }, 0);
        return;
      }
    }
    this.option.value = value;
    this.oldValue = value;
    this.option.onChange && this.option.onChange(this.option);
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
  }

  getFormControl(name: string): any {
    return this.option.formGroup.controls[name];
  }

}

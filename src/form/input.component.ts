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
  <div nz-col [nzSpan]="option.span">
    <div nz-form-item nz-row>
      <div nz-form-label nz-col [nzSpan]="4" >
        <label for="{{option.property}}">{{option.label}}</label>
      </div>
      <div nz-form-control nz-col [nzSpan]="20" [nzValidateStatus]="getFormControl(option.property)">
        <nz-input [nzSize]="'large'" nzType="{{option.type}}" 
        [formControl]="getFormControl(option.property)"></nz-input>

        <div nz-form-explain *ngFor="let val of option.validations">
            <span class="error-msg" *ngIf="getFormControl(option.property).dirty&&
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

  onChange(){
    this.option.onChange && this.option.onChange(this.option);
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
  }

  getFormControl(name:string):any {
    return this.option.formGroup.controls[ name ];
  }

}
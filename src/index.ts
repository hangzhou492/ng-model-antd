import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgdsDataGridModule } from './datagrid/datagrid.module';
export {
	NgdsDataGridModule,
	NgdsDataGrid,
	
	NgdsDataGridConfig, NgdsDataGridOption, NgdsDataGridTableOption,
	NgdsDataGridColumnOption, NgdsDataGridOpOption, NgdsDataGridOpBtnOption,
	NgdsDsDataGridModel, NgdsDsDataGridPageModel
} from './datagrid/datagrid.module';

import { NgdsPanelModule } from './panel/panel.module';
export {
	NgdsPanelModule,
	NgdsPanel,

	NgdsPanelConfig, NgdsPanelOption, NgdsPanelCrumbsOption
} from './panel/panel.module';


import { NgdsTabModule } from './tab/tab.module';
export {
	NgdsTabModule,
	NgdsTab,
	NgdsTabConfig, NgdsTabOption
} from './tab/tab.module';


import { NgdsFormModule } from './form/form.module';
export {
	NgdsFormModule,
	NgdsForm,
	NgdsFormComp,
	NgdsFormInput,
	NgdsFormRadio,
	NgdsFormCheckbox,
	NgdsFormSelect,
	NgdsFormUmeditor,
	NgdsFormUploader,
	NgdsFormDatePicker,

	NgdsFormConfig, NgdsFormOption, NgdsFormInputCompOption, NgdsFormTextareaCompOption, NgdsFormCompOption,
	NgdsFormRadioCompOption, NgdsFormCheckboxCompOption, NgdsFormSelectCompOption, 
	NgdsFormDatePickerCompOption,NgdsFormUmeditorCompOption,NgdsFormUploaderCompOption
} from './form/form.module';


export {
	NgdsDataSource, NgdsDsModel
} from './core/datasource';


import {
	NgdsPipeModule
} from './pipe/index';

export {
	NgdsPipeModule, DatagridDeepPropertyPipe
} from './pipe/index';


const NGB_MODULES = [
	NgdsDataGridModule,
	NgdsPanelModule,
	NgdsFormModule,
	NgdsTabModule
];

@NgModule({
  imports: [
	  NgdsDataGridModule.forRoot(),
	  NgdsPanelModule.forRoot(),
	  NgdsFormModule.forRoot(),
	  NgdsTabModule.forRoot(),
	  NgZorroAntdModule.forRoot(),
	  NgdsPipeModule.forRoot()
  ],
  exports: NGB_MODULES
})
export class NgdsRootModule {
}

@NgModule({ imports: NGB_MODULES, exports: NGB_MODULES })
export class NgdsModule {
  static forRoot(): ModuleWithProviders { return { ngModule: NgdsRootModule }; }
}
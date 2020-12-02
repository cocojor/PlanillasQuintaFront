import { TitleComponent } from './../layout/principal/title/title.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CalendarModule } from 'angular-calendar';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ClickOutsideModule } from 'ng-click-outside';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { Ng2CompleterModule } from 'ng2-completer';
import { AutocompleteModule } from 'ng2-input-autocomplete';
import { ToastyModule } from 'ng2-toasty';
import { NgxPaginationModule } from 'ngx-pagination';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AccordionDirective } from './accordion/accordion.directive';
import { AccordionAnchorDirective } from './accordion/accordionanchor.directive';
import { AccordionLinkDirective } from './accordion/accordionlink.directive';
import { CardToggleDirective } from './card/card-toggle.directive';
import { CardComponent } from './card/card.component';
import { DataFilterPipe } from './elements/data-filter.pipe';
import { ToggleFullScreenDirective } from './fullscreen/toggle-fullscreen.directive';
import { ModalAnimationComponent } from './modal-animation/modal-animation.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { SpinnerComponent } from './spinner/spinner.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CalendarModule,
    HttpClientModule,
    PerfectScrollbarModule,
    ClickOutsideModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgSelectModule,
    ToastyModule.forRoot(),
    AutocompleteLibModule,
    AutocompleteModule.forRoot(),
    Ng2AutoCompleteModule,
    Ng2CompleterModule,
    NgxChartsModule,
    CKEditorModule
  ],
  exports: [
    NgbModule,
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    HttpClientModule,
    PerfectScrollbarModule,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    ClickOutsideModule,
    // EnumToArrayPipe,
    // SafeUrlPipe,
    // SplitFilenamePipe,
    DataFilterPipe,
    // OnlyDigitsDirective,
    // OnlyNumbersDirective,
    // AuditDirective,
    ToastyModule
],
declarations: [
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    // EnumToArrayPipe,
    // SafeUrlPipe,
    // SplitFilenamePipe,
    DataFilterPipe,
    // OnlyDigitsDirective,
    // OnlyNumbersDirective,
    // AuditDirective,
],
providers: [
    {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    }
]
})
export class SharedModule {}

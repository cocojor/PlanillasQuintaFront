import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToggleFullScreenDirective } from './fullscreen/toggle-fullscreen.directive';
import { AccordionAnchorDirective } from './accordion/accordionanchor.directive';
import { AccordionLinkDirective } from './accordion/accordionlink.directive';
import { AccordionDirective } from './accordion/accordion.directive';
import { HttpClientModule } from '@angular/common/http';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TitleComponent } from '../layout/admin/title/title.component';
import { CardComponent } from './card/card.component';
import { CardToggleDirective } from './card/card-toggle.directive';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { ModalAnimationComponent } from './modal-animation/modal-animation.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { EnumToArrayPipe } from '../pipes/enum-to-array.pipe';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { SplitFilenamePipe } from '../pipes/split-filename.pipe';

import { DataFilterPipe } from './elements/data-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CalendarModule } from 'angular-calendar';

import { NgSelectModule } from '@ng-select/ng-select';
import { ToastyModule } from 'ng2-toasty';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AutocompleteModule } from 'ng2-input-autocomplete';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { Ng2CompleterModule } from 'ng2-completer';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// tslint:disable-next-line: max-line-length


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        CalendarModule.forRoot(),
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
        EnumToArrayPipe,
        SafeUrlPipe,
        SplitFilenamePipe,
        DataFilterPipe,
        ToastyModule,
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
        EnumToArrayPipe,
        SafeUrlPipe,
        SplitFilenamePipe,
        DataFilterPipe
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class SharedModule { }

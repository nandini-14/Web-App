import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { NgxEchartsModule } from 'ngx-echarts';
import { AGM_API_KEY } from 'src/app/common/variable';
import { CommonComponentsModule } from 'src/app/modules/common-components/common-components.module';
import { CustomMaterialModule } from 'src/app/modules/custom-material/custom-material.module';
import { FriendsDetailComponent } from './friends-detail.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseCardComponent } from './components/expense-card/expense-card.component';

const appRoutes: Routes = [
    { path: '', component: FriendsDetailComponent }
];

@NgModule({
    declarations: [
        FriendsDetailComponent, 
        ExpenseCardComponent,
        ExpenseListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(appRoutes),
        CustomMaterialModule,
        AgmCoreModule.forRoot({
            apiKey: 'wrong_key'
    	}),
        NgbModule,
        CommonComponentsModule,
        
    ],
	providers: [
        CookieService
    ],
    entryComponents: [
        FriendsDetailComponent
    ]
})

export class FriendsDetailModule {}

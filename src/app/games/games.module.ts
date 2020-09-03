import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GamesRoutingModule } from './games-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        GamesRoutingModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        FormsModule,
        MatButtonModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        DetailComponent
    ]
})
export class GamesModule { }
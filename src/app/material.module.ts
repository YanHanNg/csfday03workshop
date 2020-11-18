import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';


const MATERIAL = [ MatButtonModule, MatIconModule, 
    MatFormFieldModule, MatInputModule, MatCardModule, MatDatepickerModule,
    MatNativeDateModule, MatRadioModule, MatCheckboxModule ];

@NgModule({
    imports: MATERIAL,
    exports: MATERIAL
})
export class MaterialModule { }
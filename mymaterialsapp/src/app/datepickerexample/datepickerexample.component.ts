import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter }  from '@angular/material/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-datepickerexample',
  templateUrl: './datepickerexample.component.html',
  styleUrls: ['./datepickerexample.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerexampleComponent { }

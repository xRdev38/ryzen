import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FieldsModel } from '../../models';

@Component({
  selector: 'ryzen-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
})
export class DynamicInputComponent {
  @Input() field!: FieldsModel;
  formName: FormGroup;

  private formGroupDirective: FormGroupDirective = inject(FormGroupDirective);

  constructor() {
    this.formName = this.formGroupDirective.control;
  }
}

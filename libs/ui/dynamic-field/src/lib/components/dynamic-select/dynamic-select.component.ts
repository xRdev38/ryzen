import {
  AfterViewInit,
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
import { filter } from 'rxjs';
import { NgForOf } from '@angular/common';
import { MessageService } from '../../services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FieldsModel, ValueField } from '../../models';

@Component({
  selector: 'ryzen-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf],
})
export class DynamicSelectComponent implements AfterViewInit {
  @Input() field!: FieldsModel;
  formName!: FormGroup;

  private formGroupDirective: FormGroupDirective = inject(FormGroupDirective);
  private messageService: MessageService = inject(MessageService);

  constructor() {
    this.formName = this.formGroupDirective.control;
  }

  ngAfterViewInit(): void {
    this.listenForLinkData();
  }

  listenForLinkData(): void {
    if (!this.field?.link) {
      return;
    }
    this.messageService.message$
      .pipe(
        filter((v) => v.link === this.field.link),
        takeUntilDestroyed()
      )
      .subscribe((v) => {
        this.field.options = v.data;
      });
  }

  changedValue(value: string): void {
    if (!this.field.provideData) {
      return;
    }
    this.messageService.messageSubject.next({
      link: this.field.fieldName,
      data: this.field.provideData.filter(
        (v: ValueField) => v.sourceValue === value
      ),
    });
  }
}

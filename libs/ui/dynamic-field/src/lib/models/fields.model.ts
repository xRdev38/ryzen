import { Rule } from 'eslint';

export type TypeField = 'select' | 'date' | 'text' | 'number';

export type Rule = {
  [key: string]: unknown;
};

export interface ValueField {
  sourceValue: unknown;
}

export interface Options {
  label: string;
  value: string;
}

export interface FieldsModel {
  label: string;
  value: unknown;
  link?: string;
  type: TypeField;
  options?: Options[];
  rules?: Rule;
  provideData?: ValueField[];
  fieldName: string;
}

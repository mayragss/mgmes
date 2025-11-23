import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { cn } from '../../../lib/utils';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ],
  template: `
    <textarea
      [value]="value"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [class]="textareaClasses"
      (input)="onInput($event)"
      (blur)="onTouched()"
    ></textarea>
  `,
  styles: []
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() className: string = '';
  @Input() disabled: boolean = false;

  value: string = '';
  onChange = (value: string) => {};
  onTouched = () => {};

  get textareaClasses(): string {
    return cn(
      'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      this.className
    );
  }

  onInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}


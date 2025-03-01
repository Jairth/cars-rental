import { CommonModule, NgClass } from '@angular/common';
import { input, signal } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  imports: [NgClass, CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  message = signal<string>('');
  type = signal<'success' | 'error'>('success');
  isVisible = signal(false);

  showToast(message: string, type: 'success' | 'error' = 'success') {
    this.message.set(message);
    this.type.set(type);
    this.isVisible.set(true);

    setTimeout(() => {
      this.isVisible.set(false);
    }, 2000);
  }
}

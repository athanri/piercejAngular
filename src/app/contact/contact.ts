import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    email: '',
    name: '',
    subject: '',
    message: '',
  };

  status = '';
  statusType: 'success' | 'error' | '' = '';
  isSending = false;

  private serviceId = 'YOUR_SERVICE_ID';
  private templateId = 'YOUR_TEMPLATE_ID';
  private publicKey = 'YOUR_PUBLIC_KEY';

  async sendMessage(form: NgForm) {
    if (!form.valid) {
      this.status = 'Please complete all required fields correctly.';
      this.statusType = 'error';
      return;
    }

    this.isSending = true;
    this.status = '';
    this.statusType = '';

    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message,
      to_email: 'piercejord@gmail.com',
    };

    try {
      await emailjs.send(this.serviceId, this.templateId, templateParams, this.publicKey);
      this.status = 'Message sent successfully. Thank you!';
      this.statusType = 'success';
      form.resetForm();
      this.formData = {
        email: '',
        name: '',
        subject: '',
        message: '',
      };
    } catch (error) {
      console.error('EmailJS send error', error);
      this.status = 'Unable to send message right now. Please try again later.';
      this.statusType = 'error';
    } finally {
      this.isSending = false;
    }
  }
}


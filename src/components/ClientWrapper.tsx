'use client';

import { ReactNode } from 'react';
import { FormSubmitProvider } from './FormSubmitContext';
import FloatingCallButton from './ui/FloatingCallButton';

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const handleFormSubmit = async (data: { name: string; phone: string }) => {
    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
      } else {
        alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.');
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
    }
  };

  return (
    <FormSubmitProvider onSubmit={handleFormSubmit}>
      {children}
      <FloatingCallButton onSubmit={handleFormSubmit} />
    </FormSubmitProvider>
  );
}

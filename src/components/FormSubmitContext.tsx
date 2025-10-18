'use client';

import { createContext, useContext, ReactNode } from 'react';

type FormSubmitFunction = (data: { name: string; phone: string }) => Promise<void>;

const FormSubmitContext = createContext<FormSubmitFunction | undefined>(undefined);

export function useFormSubmit() {
  const context = useContext(FormSubmitContext);
  if (!context) {
    throw new Error('useFormSubmit must be used within FormSubmitProvider');
  }
  return context;
}

interface FormSubmitProviderProps {
  children: ReactNode;
  onSubmit: FormSubmitFunction;
}

export function FormSubmitProvider({ children, onSubmit }: FormSubmitProviderProps) {
  return (
    <FormSubmitContext.Provider value={onSubmit}>
      {children}
    </FormSubmitContext.Provider>
  );
}

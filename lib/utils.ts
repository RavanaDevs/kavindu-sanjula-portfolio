import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function downloadResume() {
  window.open("/docs/kavindu-sanjula-resume.pdf");
};
'use client';

import { useState } from 'react';
import { UserRoundPlus } from 'lucide-react';

interface ContactData {
  firstName: string;
  lastName?: string;
  organization?: string;
  phone: string;
  email?: string;
  website?: string;
}

interface AddContactButtonProps {
  contact: ContactData;
}

export default function AddContactButton({ contact }: AddContactButtonProps) {
  const [isCreating, setIsCreating] = useState(false);

  const handleAddContact = () => {
    try {
      setIsCreating(true);

      const fullName = [contact.firstName, contact.lastName].filter(Boolean).join(' ');

      const vCard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${fullName}`,
        `N:${contact.lastName ?? ''};${contact.firstName};;;`,
        contact.organization ? `ORG:${contact.organization}` : '',
        contact.phone ? `TEL;TYPE=CELL:${contact.phone}` : '',
        contact.email ? `EMAIL;TYPE=WORK:${contact.email}` : '',
        contact.website ? `URL:${contact.website}` : '',
        'END:VCARD',
      ]
        .filter(Boolean)
        .join('\r\n');

      const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `${fullName || 'contact'}.vcf`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 1000);
    } catch (error) {
      console.error('Ошибка при создании контакта:', error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <button
      className={'p-3 glass border-l-1 bg-white rounded-l-xl'}
      type="button"
      onClick={handleAddContact}
      disabled={isCreating}
    >
      <UserRoundPlus size={'20'} strokeWidth={1.5} />
    </button>
  );
}

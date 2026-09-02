'use client';
import { X } from 'lucide-react';
import { Heading } from '@/shared';
import { ContactForm } from '@/widgets/contact/ContactForm';

export function ConfiguratorModal({
  open,
  onClose,
  setSubmitted,
}: {
  open: boolean;
  onClose: () => void;
  setSubmitted: (open: boolean) => void;
}) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="
        z-1001
        fixed inset-0 z-50
        flex items-center justify-center
        bg-slate-950/40
        p-4
        backdrop-blur-sm
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="
          relative
          w-full max-w-2xl
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          border border-slate-200
          bg-white
          p-5
          shadow-[0_25px_80px_rgba(15,23,42,.2)]
          sm:p-7
          lg:p-8
        "
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="
            absolute right-4 top-4
            flex h-9 w-9 items-center justify-center
            rounded-full
            text-slate-400
            transition
            hover:bg-slate-100
            hover:text-slate-700
          "
        >
          <X size={20} />
        </button>

        <div className="mb-6 pr-10">
          <Heading hClassName="text-[22px] sm:text-[24px] lg:text-[24px]" pClassName="text-[15px]">
            Отправка запроса
          </Heading>

          <p className="mt-2 text-sm text-slate-500">
            Оставьте контактные данные, и мы свяжемся с вами
          </p>
        </div>

        <ContactForm setSubmitted={setSubmitted} />
      </div>
    </div>
  );
}

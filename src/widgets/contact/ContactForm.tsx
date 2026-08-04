'use client';

import { Paperclip } from 'lucide-react';
import { useRef, useState } from 'react';
import { InputContacts } from '@/widgets/contact/Input';

export function ContactForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);
  };

  return (
    <>
      {/* подсветка сверху */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

      <form
        className="relative rounded-[32px] border border-white/40
        bg-white/15 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,82,204,.18)] p-8
        lg:p-10

        {/*типа эффект стекла*/}
        relative overflow-hidden rounded-[36px] border border-white/30 bg-white/20 backdrop-blur-3xl shadow-[0_40px_120px_rgba(0,82,204,.15)]
      "
      >
        <div className="grid gap-6 md:grid-cols-2">
          <InputContacts label="Имя *" name="name" />

          <InputContacts label="Компания *" name="company" />

          <InputContacts label="Телефон *" name="phone" />

          <InputContacts label="Электронная почта *" name="email" type="email" />
        </div>

        <div className="mt-8">
          <label className="block">
            <span className="mb-3 block text-[15px] text-slate-500">
              Кратко опишите ваш проект или вопрос
            </span>

            <textarea
              rows={4}
              className="w-full resize-none border-0 border-b border-slate-300 bg-transparent pb-3 outline-none transition placeholder:text-slate-400 focus:border-primary"
            />
          </label>
        </div>

        <div className="mt-8">
          <input ref={inputRef} hidden type="file" onChange={handleFileChange} />

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="
            inline-flex items-center gap-2 px-5 py-3
            rounded-xl border border-slate-300
            bg-white/80
            text-sm text-slate-600
            transition hover:border-primary hover:text-primary
          "
          >
            <Paperclip size={18} />

            {fileName || 'Выбрать файл'}
          </button>
        </div>

        <button
          className="
          mt-12 h-16 w-full
          rounded-2xl bg-primary
          text-lg font-semibold text-white transition-all duration-300
          hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,82,204,.45)] active:scale-[.99]
        "
        >
          Отправить заявку
        </button>

        <p className="mt-6 text-center text-sm leading-6 text-slate-500">
          Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
        </p>
      </form>
    </>
  );
}

'use client';

import { Paperclip } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { InputContacts } from '@/widgets/contact/Input';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];

    if (!selected) return;

    setFile(selected);
    setFileName(selected.name);
  };

  const handleSendRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
        }),
      });

      // открыть модалку
      // setIsSuccessModalOpen(true);
      console.log('открылась модалка');

      // очистить форму
      setForm({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: '',
      });

      setFile(null);
      setFileName('');

      if (inputRef.current) {
        inputRef.current.value = '';
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* подсветка сверху */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

      <form
        onSubmit={handleSendRequest}
        className="relative rounded-[32px] border border-white/40
        bg-white/15 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,82,204,.18)] p-8
        lg:p-10

        {/*типа эффект стекла*/}
        relative overflow-hidden rounded-[36px] border border-white/30 bg-white/20 backdrop-blur-3xl shadow-[0_40px_120px_rgba(0,82,204,.15)]
      "
      >
        <div className="grid gap-6 md:grid-cols-2">
          <InputContacts label="Имя *" name="name" value={form.name} onChange={handleChange} />

          <InputContacts
            label="Компания *"
            name="company"
            value={form.company}
            onChange={handleChange}
          />

          <InputContacts
            label="Телефон *"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <InputContacts
            label="Электронная почта *"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="mt-8">
          <label className="block">
            <span className="mb-2 md:mb-3 block text-sm md:text-[15px] text-slate-500">
              Кратко опишите ваш проект или вопрос
            </span>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full resize-none text-sm md:text-[15px] border-0 border-b border-slate-300 bg-transparent pb-3 outline-none transition placeholder:text-slate-400 focus:border-primary"
            />
          </label>
        </div>

        <div className="mt-4 md:mt-8">
          <input ref={inputRef} hidden type="file" onChange={handleFileChange} />

          <button
            type="submit"
            disabled={loading}
            className="
            inline-flex items-center gap-2 px-5 py-2 md:py-3
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

        <Button
          variant="glass"
          onClick={(e) => handleSendRequest(e)}
          className="
          mt-12 h-10 w-full
          rounded-2xl
          text-lg font-medium transition-all duration-300

          hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,82,204,.45)] hover:bg-primary hover:text-white active:scale-[.99]
        "
        >
          Отправить заявку
        </Button>

        <p className="mt-6 text-center text-[12px] md:text-sm leading-[1.2] text-slate-500">
          Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
        </p>
      </form>
    </>
  );
}

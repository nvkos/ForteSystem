'use client';

import { Paperclip } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { InputContacts } from '@/widgets/contact/Input';
import { Button } from '@/components/ui/button';
import { useNotification } from '@/components/notifications/NotificationProvider';
import { PlatformId } from '@/widgets/configurator/data/brands';
// import { router } from 'next/client';
// import { usePathname } from 'next/navigation';
import { ConfigValues } from '@/widgets/configurator/types/configurator.types';

const MAX_FILES = 6;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export function ContactForm({
  type,
  platform,
  values,
  setSubmitted,
  onClose,
}: {
  type?: string;
  platform?: PlatformId | null;
  setSubmitted?: (submitted: boolean) => void;
  values?: ConfigValues;
  onClose?: (open: boolean) => void;
}) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const { notify } = useNotification();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const selectedFiles = Array.from(e.target.files ?? []);

    if (!selectedFiles.length) return;

    const availableSlots = MAX_FILES - files.length;

    if (availableSlots <= 0) {
      notify(`Можно загрузить не более ${MAX_FILES} файлов`);
      e.target.value = '';
      return;
    }

    const filesToAdd = selectedFiles.slice(0, availableSlots);

    if (selectedFiles.length > availableSlots) {
      notify(`Можно загрузить не более ${MAX_FILES} файлов`);
    }

    const oversizedFiles = filesToAdd.filter((file) => file.size > MAX_FILE_SIZE);

    if (oversizedFiles.length > 0) {
      notify(`Файл "${oversizedFiles[0].name}" превышает максимальный размер 10 МБ`);
    }

    const validFiles = filesToAdd.filter((file) => file.size <= MAX_FILE_SIZE);

    setFiles((prev) => [...prev, ...validFiles]);

    e.target.value = '';
  };

  const handleSendRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('🔥🔥🔥 HANDLE SEND REQUEST');
    console.log(form);
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append('name', form.name);
      formData.append('company', form.company);
      formData.append('phone', form.phone);
      formData.append('email', form.email);
      formData.append('message', form.message);

      if (type === 'config') {
        formData.append('isConfigurator', 'true');
      }
      if (platform) {
        formData.append('platform', platform);
      }
      if (values) {
        formData.append('config', JSON.stringify(values));
      }

      files.forEach((file) => {
        formData.append('files', file);
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      console.log('STATUS:', response.status);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ошибка отправки');
      }

      console.log('Заявка отправлена:', data);

      notify('Заявка успешно создана! Спасибо за обращение.');

      if (type !== 'main' && setSubmitted && onClose) {
        setSubmitted(true);
        onClose(true);
      }
      setForm({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: '',
      });
      console.log('очистилась форма');
      setFiles([]);

      if (inputRef.current) {
        if ('value' in inputRef.current) {
          inputRef.current.value = '';
        }
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
        <div className="grid gap-6 sm:grid-cols-2">
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
          <input ref={inputRef} hidden type="file" multiple onChange={handleFileChange} />

          <button
            type="button"
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              inputRef.current?.click();
            }}
            className="
              inline-flex items-center gap-2 px-4 py-2 md:py-3
              rounded-xl border border-slate-300
              bg-white/80
              text-sm text-slate-600
              transition hover:border-primary hover:text-primary
            "
          >
            <Paperclip size={18} />
            Выбрать файлы
          </button>

          {files.length > 0 && (
            <div className="mt-3 space-y-2">
              {files.map((file, index) => (
                <div
                  key={`${file.name}-${file.lastModified}-${index}`}
                  className="
                    flex items-center justify-between gap-3
                    rounded-lg border border-slate-200
                    bg-slate-50 px-3 py-2
                    text-sm
                  "
                >
                  <div className="min-w-0">
                    <div className="truncate text-slate-600">{file.name}</div>

                    <div className="text-xs text-slate-400">
                      {(file.size / 1024 / 1024).toFixed(2)} МБ
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setFiles((prev) => prev.filter((_, i) => i !== index));
                    }}
                    className="
                      shrink-0 text-lg text-slate-400
                      transition hover:text-red-500
                    "
                    aria-label={`Удалить ${file.name}`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <p className="mt-2 text-xs text-slate-400">
            До {MAX_FILES} файлов, не более 10 МБ каждый
          </p>
        </div>

        <Button
          variant="glass"
          type="submit"
          disabled={loading}
          className={`
            mt-12 h-${type === 'main' ? 12 : 9} w-full
            rounded-full
            text-sm font-regular transition-all duration-300
            font-unbounded
            hover:shadow-[0_20px_60px_rgba(0,82,204,.3)] hover:bg-primary hover:text-white active:scale-[.99]`}
        >
          {loading && (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          )}
          {loading ? 'Отправка...' : 'Отправить'}
        </Button>

        <p className="mt-6 text-center text-[12px] md:text-sm leading-[1.2] text-slate-500">
          Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
        </p>
      </form>
    </>
  );
}

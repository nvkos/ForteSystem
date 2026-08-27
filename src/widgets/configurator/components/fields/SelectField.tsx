'use client';

import { Check, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Portal } from '@radix-ui/react-portal';

import type { ConfigField } from '../../types/configurator.types';

type Props = {
  field: ConfigField;
  value: string;
  onChange: (value: string) => void;
};

export function SelectField({ field, value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const selectedOption = field.options.find((option) => {
    const optionValue = typeof option === 'string' ? option : option.value;

    return String(optionValue) === String(value);
  });

  const selectedLabel = selectedOption
    ? typeof selectedOption === 'string'
      ? selectedOption
      : selectedOption.label
    : '';

  /*
   * Позиция dropdown
   */
  const updatePosition = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    setPosition({
      top: rect.bottom + 8,
      left: rect.left,
      width: rect.width,
    });
  };

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    updatePosition();
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = (event: Event) => {
      const target = event.target as Node | null;

      if (target && dropdownRef.current?.contains(target)) {
        return;
      }

      setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedButton = buttonRef.current?.contains(target);

      const clickedDropdown = dropdownRef.current?.contains(target);

      /*
       * Если кликнули либо по кнопке,
       * либо по dropdown — ничего не делаем.
       *
       * Только настоящий внешний клик закрывает меню.
       */
      if (clickedButton || clickedDropdown) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isOpen]);

  /*
   * Escape
   */
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  /*
   * Выбор значения
   */
  const handleSelect = (optionValue: string) => {
    console.log('SELECTED:', optionValue);

    onChange(optionValue);

    setIsOpen(false);
  };

  return (
    <div className="space-y-2">
      {/* LABEL */}

      <label htmlFor={field.id} className="block text-sm font-medium text-slate-700">
        {field.label}
      </label>

      {/* SELECT BUTTON */}

      <button
        ref={buttonRef}
        id={field.id}
        type="button"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`
          flex
          w-full
          items-center
          justify-between
          rounded-2xl
          border
          bg-white/70
          px-3
          py-2
          text-left
          text-sm
          outline-none
          transition-all
          duration-200

          ${
            isOpen
              ? `
                border-primary
                bg-white
                ring-4
                ring-primary/10
                shadow-[0_8px_30px_rgba(0,82,204,.10)]
              `
              : `
                border-slate-200
                hover:border-slate-300
              `
          }
        `}
      >
        <span className={selectedLabel ? 'text-slate-800' : 'text-slate-400'}>
          {selectedLabel || 'Не выбрано'}
        </span>

        <ChevronDown
          size={18}
          className={`
            shrink-0
            text-slate-400
            transition-transform
            duration-200

            ${isOpen ? 'rotate-180 text-primary' : ''}
          `}
        />
      </button>

      {/* DROPDOWN */}

      {mounted && isOpen && (
        <Portal>
          <div
            ref={dropdownRef}
            className="
              fixed
              z-[999999]

              max-h-[50vh]
              overflow-y-auto

              rounded-2xl
              border
              border-slate-200/80

              bg-white/95
              p-1.5

              shadow-[0_20px_60px_rgba(15,23,42,.18)]
              backdrop-blur-xl

              animate-in
              fade-in
              zoom-in-[0.98]
              duration-150

              scrollbar-thin
    scrollbar-thumb-slate-300
    scrollbar-track-transparent
            "
            style={{
              top: position.top,
              left: position.left,
              width: position.width,
            }}
            role="listbox"
          >
            {/* НЕ ВЫБРАНО */}

            <button
              type="button"
              role="option"
              aria-selected={value === ''}
              onClick={() => handleSelect('')}
              className={`
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                px-3
                py-2.5
                text-left
                text-sm
                transition-colors

                ${
                  value === ''
                    ? 'bg-primary/8 font-medium text-primary'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }
              `}
            >
              <span>Не выбрано</span>

              {value === '' && <Check size={16} />}
            </button>

            {/* OPTIONS */}

            {field.options.map((option) => {
              const optionValue = typeof option === 'string' ? option : option.value;

              const optionLabel = typeof option === 'string' ? option : option.label;

              const isSelected = String(optionValue) === String(value);

              return (
                <button
                  key={optionValue}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(optionValue)}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-2.5
                    text-left
                    text-sm
                    transition-colors

                    ${
                      isSelected
                        ? 'bg-primary/8 font-medium text-primary'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }
                  `}
                >
                  <span>{optionLabel}</span>

                  {isSelected && <Check size={16} className="shrink-0" />}
                </button>
              );
            })}
          </div>
        </Portal>
      )}
    </div>
  );
}

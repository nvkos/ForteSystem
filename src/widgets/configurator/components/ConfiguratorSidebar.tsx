'use client';

import { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, Settings2 } from 'lucide-react';
import { ConfigBlock, ConfigField } from '@/widgets/configurator/types/configurator.types';

type Schema = ConfigBlock[];

type ConfiguratorSidebarProps = {
  platform?: string | null;
  brand?: string | null;
  schema: Schema;
  values?: Record<string, unknown>;
  collapsed?: boolean;
  onToggle?: () => void;
};

export function ConfiguratorSidebar({
  platform,
  brand,
  schema = [],
  values = {},
  collapsed = false,
  onToggle,
}: ConfiguratorSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const selectedFields = useMemo(() => {
    return schema.flatMap((block) => {
      return block.fields.reduce<Array<ConfigField & { displayValue: string }>>((result, field) => {
        if (!values) {
          return result;
        }

        const value = values[field.id];

        if (value !== undefined && value !== null && value !== '') {
          result.push({
            ...field,
            displayValue: String(value),
          });
        }

        return result;
      }, []);
    });
  }, [schema, values]);

  const selectedCount = Number(Boolean(platform)) + Number(Boolean(brand)) + selectedFields?.length;

  const content = (
    <div className="flex flex-col">
      {/*Header */}
      <div className="hidden sm:flex items-center justify-between border-b border-slate-200/70 px-5 py-2">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Settings2 size={18} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Ваша конфигурация</p>

            <p className="text-xs text-slate-400">
              {selectedCount > 0 ? `Выбрано: ${selectedCount}` : 'Пока ничего не выбрано'}
            </p>
          </div>
        </div>

        {onToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="
              hidden lg:flex
              h-8 w-8
              items-center justify-center
              rounded-lg
              text-slate-400
              transition
              hover:bg-slate-100
              hover:text-slate-700

            "
            aria-label={collapsed ? 'Развернуть' : 'Свернуть'}
          >
            {collapsed ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <div className="space-y-3">
          {selectedFields?.map((field) => (
            <SummaryItem key={field.id} label={field.label} value={field.displayValue} />
          ))}

          {!platform && !brand && selectedFields?.length === 0 && (
            <div className="flex min-h-40 items-center justify-center text-center">
              <div>
                <p className="text-sm font-medium text-slate-500">Конфигурация пока пуста</p>

                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Выберите параметры слева,
                  <br />и они появятся здесь
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside
        className={`
          sticky
          top-28
          hidden lg:block
          h-fit

          shrink-0
          overflow-hidden
          rounded-[28px]
          border border-white/60
          bg-white/65
          shadow-[0_20px_70px_rgba(0,82,204,.10)]
          backdrop-blur-2xl
          transition-all
          duration-300

          ${collapsed ? 'w-[76px]' : 'w-[320px]'}
        `}
      >
        {collapsed ? (
          <button
            type="button"
            // onClick={onToggle}
            className="
              flex h-full w-full
              flex-col items-center
              pt-5
              text-slate-500
              transition
              hover:text-primary
            "
          >
            <Settings2 size={20} />

            <span
              className="
                mt-5
                text-[10px]
                [writing-mode:vertical-rl]
                uppercase
                tracking-[0.15em]
              "
            >
              Конфигурация
            </span>
          </button>
        ) : (
          content
        )}
      </aside>

      {/* Mobile */}
      <div className="fixed inset-x-4 bottom-4 z-50 lg:hidden">
        <div
          className="
            overflow-hidden
            rounded-[24px]
            border border-white/70
            bg-white/80
            shadow-[0_20px_60px_rgba(0,82,204,.20)]
            backdrop-blur-2xl
          "
        >
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="
              flex w-full
              items-center justify-between
              px-5 py-4
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Settings2 size={18} />
              </div>

              <div className="text-left">
                <p className="text-sm font-semibold text-slate-900">Ваша конфигурация</p>

                <p className="text-xs text-slate-400">
                  {selectedCount > 0 ? `${selectedCount} параметров` : 'Выберите параметры'}
                </p>
              </div>
            </div>

            {mobileOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </button>

          {mobileOpen && <div className="max-h-[65vh] border-t border-slate-200/70">{content}</div>}
        </div>
      </div>
    </>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="
        flex items-center
        [&:not(:last-child)]:border-b border-slate-200/70
        bg-white/55
        [&:not(:last-child)]:pb-2
      "
    >
      <p className="text-[13px] font-medium tracking-wide text-slate-600">
        {`${label}: `}
        <span className="text-[13px] font-semibold text-slate-800">{value}</span>
      </p>
    </div>
  );
}

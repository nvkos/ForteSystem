'use client';

interface LoadingOverlayProps {
  isLoading: boolean;
  text?: string;
}

export default function LoadingOverlay({ isLoading, text = 'Отправка...' }: LoadingOverlayProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex min-w-[220px] flex-col items-center gap-4 rounded-2xl bg-white px-8 py-7 shadow-2xl">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#0052CC]" />
        </div>

        <p className="text-sm font-medium text-gray-700">{text}</p>
      </div>
    </div>
  );
}

import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CreditCard,
  MoreHorizontal,
  PackageCheck,
  ReceiptText,
  ShoppingBag,
} from 'lucide-react';

import { cn } from '@/lib/utils';

interface CommerceDashboardProps {
  className?: string;
}

const bars = [46, 68, 54, 78, 66, 92, 73, 86, 62, 88, 96, 82];

export function CommerceDashboard({ className }: CommerceDashboardProps) {
  return (
    <div
      aria-label="Concept interface showing sales and inventory information"
      className={cn(
        'overflow-hidden rounded-[22px] border border-white/15 bg-[#071b3a] p-2 shadow-[0_30px_90px_rgba(7,48,113,0.35)]',
        className,
      )}
      role="img"
    >
      <div className="overflow-hidden rounded-[17px] bg-[#f8fafc]">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-brand-700 text-xs font-bold text-white">
              U
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-900">Business overview</p>
              <p className="text-[10px] text-slate-500">Concept interface</p>
            </div>
          </div>
          <MoreHorizontal className="size-4 text-slate-400" aria-hidden="true" />
        </div>

        <div className="grid gap-3 p-3 sm:grid-cols-3 sm:p-5">
          {[
            {
              icon: ShoppingBag,
              label: 'Today’s sales',
              value: 'MWK 842,500',
              trend: '+12.4%',
              up: true,
            },
            {
              icon: CreditCard,
              label: 'Card payments',
              value: 'MWK 318,200',
              trend: '+8.1%',
              up: true,
            },
            {
              icon: PackageCheck,
              label: 'Stock alerts',
              value: '12 items',
              trend: '-3 today',
              up: false,
            },
          ].map((metric) => (
            <div className="rounded-xl border border-slate-200 bg-white p-3" key={metric.label}>
              <div className="flex items-center justify-between">
                <span className="grid size-8 place-items-center rounded-lg bg-brand-50 text-brand-700">
                  <metric.icon className="size-4" aria-hidden="true" />
                </span>
                <span
                  className={cn(
                    'inline-flex items-center text-[10px] font-semibold',
                    metric.up ? 'text-emerald-700' : 'text-amber-700',
                  )}
                >
                  {metric.up ? (
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                  ) : (
                    <ArrowDownRight className="size-3" aria-hidden="true" />
                  )}
                  {metric.trend}
                </span>
              </div>
              <p className="mt-3 text-[10px] text-slate-500">{metric.label}</p>
              <p className="mt-1 text-sm font-bold tracking-[-0.02em] text-slate-950">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 px-3 pb-3 sm:grid-cols-[1.45fr_0.75fr] sm:px-5 sm:pb-5">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-900">Sales activity</p>
                <p className="mt-0.5 text-[10px] text-slate-500">Last 12 hours</p>
              </div>
              <span className="rounded-md bg-slate-100 px-2 py-1 text-[9px] text-slate-600">Today</span>
            </div>
            <div className="mt-6 flex h-24 items-end gap-1.5">
              {bars.map((height, index) => (
                <span
                  className="flex-1 rounded-t bg-brand-600/20"
                  key={`${height}-${index}`}
                  style={{ height: `${height}%` }}
                >
                  <span
                    className="block w-full rounded-t bg-brand-600"
                    style={{ height: index > 7 ? '72%' : '42%' }}
                  />
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                <ReceiptText className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-900">Invoice status</p>
                <p className="text-[10px] text-slate-500">Concept workflow</p>
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              {['Sale captured', 'Payment recorded', 'Invoice prepared'].map((item) => (
                <div className="flex items-center gap-2 text-[10px] text-slate-600" key={item}>
                  <span className="grid size-4 place-items-center rounded-full bg-emerald-600 text-white">
                    <Check className="size-2.5" aria-hidden="true" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

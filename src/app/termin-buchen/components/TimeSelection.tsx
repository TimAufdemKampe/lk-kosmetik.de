import React from 'react';
import { WEEKDAYS, OPENING_HOURS } from '../misc/constants';

interface TimeSelectionProps {
  times: { [key: string]: { from: string; to: string } };
  onTimesChange: React.Dispatch<React.SetStateAction<{ [key: string]: { from: string; to: string } }>>;
  timeErrors: Record<string, string>;
  hasTimeError: boolean;
}

export const TimeSelection: React.FC<TimeSelectionProps> = ({
  times,
  onTimesChange,
  timeErrors,
  hasTimeError,
}) => {
  // Hilfsfunktion: Tag aktivieren/deaktivieren
  const handleDayActiveChange = (day: string, checked: boolean) => {
    if (checked) {
      onTimesChange((prev) => ({
        ...prev,
        [day]: { from: OPENING_HOURS[day].start, to: OPENING_HOURS[day].end },
      }));
      // Fokussiere das erste Zeitfeld nach Aktivierung
      setTimeout(() => {
        const input = document.getElementById(`from-${day}`);
        if (input) (input as HTMLInputElement).focus();
      }, 100);
    } else {
      onTimesChange((prev) => {
        const copy = { ...prev };
        delete copy[day];
        return copy;
      });
    }
  };

  // Zeit auf alle Werktage übernehmen
  const handleCopyToAll = () => {
    const firstActive = WEEKDAYS.find((d) => times[d]);
    if (!firstActive) return;
    const { from, to } = times[firstActive];
    onTimesChange((prev) => {
      const updated = { ...prev };
      WEEKDAYS.forEach((d) => {
        if (prev[d]) {
          updated[d] = { from, to };
        }
      });
      return updated;
    });
  };

  const handleTimeChangeSafe = (day: string, field: 'from' | 'to', value: string) => {
    onTimesChange((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };

  return (
    <div className='flex flex-col gap-4'>
      <label className='mb-1 block font-medium'>Wann hast du Zeit? (innerhalb der Öffnungszeiten)</label>
      <div className='flex flex-col gap-2'>
        {WEEKDAYS.map((tag) => (
          <div key={tag} className='flex flex-col'>
            <div className='flex items-center gap-2 min-h-[36.69px]'>
              <input
                type='checkbox'
                checked={!!times[tag]}
                onChange={e => handleDayActiveChange(tag, e.target.checked)}
                className='accent-[#bb9167] w-6 h-6 rounded border border-neutral-300 shadow-sm transition-all duration-150'
                id={`day-${tag}`}
              />
              <label htmlFor={`day-${tag}`} className='w-24 cursor-pointer font-medium select-none'>{tag}:</label>
              {times[tag] && (
                <div className='flex flex-col gap-2 bg-[#f7f2ee] border border-[#ecdcc7] rounded px-2 py-1'>
                  <div className='flex items-center gap-1'>
                    <label htmlFor={`from-${tag}`} className='text-xs text-neutral-500'>von</label>
                    <input
                        id={`from-${tag}`}
                        type='time'
                        min={OPENING_HOURS[tag].start}
                        max={OPENING_HOURS[tag].end}
                        value={times[tag]?.from || ''}
                        onChange={(e) => handleTimeChangeSafe(tag, 'from', e.target.value)}
                        className={`rounded border px-1 py-0.5 text-sm w-20 ${timeErrors[tag] ? 'border-red-400' : ''}`}
                        />
                    <span>-</span>
                    <label htmlFor={`to-${tag}`} className='text-xs text-neutral-500'>bis</label>
                    <input
                        id={`to-${tag}`}
                        type='time'
                        min={OPENING_HOURS[tag].start}
                        max={OPENING_HOURS[tag].end}
                        value={times[tag]?.to || ''}
                        onChange={(e) => handleTimeChangeSafe(tag, 'to', e.target.value)}
                        className={`rounded border px-1 py-0.5 text-sm w-20 ${timeErrors[tag] ? 'border-red-400' : ''}`}
                        />
                    </div>
                  <span className='text-xs text-neutral-400'>Öffnungszeiten ({OPENING_HOURS[tag].start}–{OPENING_HOURS[tag].end})</span>
                </div>
              )}
            </div>
            {timeErrors[tag] && (
              <div className='text-xs text-red-500 mt-1 ml-10'>{timeErrors[tag]}</div>
            )}
          </div>
        ))}
        <div className='flex flex-wrap gap-2 mt-2'>
          <button
            type='button'
            className='text-xs border border-[#bb9167] rounded px-2 py-1 bg-[#f7f2ee] hover:bg-[#ecdcc7] text-[#bb9167]'
            onClick={handleCopyToAll}
            disabled={Object.keys(times).length === 0}
          >
            Montags-Zeit für alle ausgewählten Tage übernehmen
          </button>
        </div>
      </div>
      {Object.keys(times).length === 0 && (
        <div className='text-xs text-red-500 mt-2'>Bitte wähle mindestens einen Tag aus.</div>
      )}
      {hasTimeError && (
        <div className='text-xs text-red-500 mt-1'>Bitte korrigiere die markierten Zeiten, um fortzufahren.</div>
      )}
    </div>
  );
};

import React from 'react';
import { WEEKDAYS, OPENING_HOURS } from '../misc/constants';

interface TimeSelectionProps {
  times: { [key: string]: { from: string; to: string } };
  onTimesChange: React.Dispatch<
    React.SetStateAction<{ [key: string]: { from: string; to: string } }>
  >;
  timeErrors: Record<string, string>;
  hasTimeError: boolean;
}

export const TimeSelection: React.FC<TimeSelectionProps> = ({
  times,
  onTimesChange,
  timeErrors,
  hasTimeError,
}) => {
  const handleDayActiveChange = (day: string, checked: boolean) => {
    if (checked) {
      onTimesChange((prev) => ({
        ...prev,
        [day]: { from: OPENING_HOURS[day].start, to: OPENING_HOURS[day].end },
      }));
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

  const handleCopyToAll = () => {
    const firstActive = WEEKDAYS.find((d) => times[d]);
    if (!firstActive) return;
    const { from, to } = times[firstActive];

    onTimesChange((prev) => {
      const updated = { ...prev };
      WEEKDAYS.forEach((d) => {
        if (prev[d]) {
          const dayOpeningHours = OPENING_HOURS[d];

          let adjustedFrom = from;
          let adjustedTo = to;

          if (from < dayOpeningHours.start) {
            adjustedFrom = dayOpeningHours.start;
          }

          if (to > dayOpeningHours.end) {
            adjustedTo = dayOpeningHours.end;
          }

          if (from > dayOpeningHours.end) {
            adjustedFrom = dayOpeningHours.start;
          }

          if (adjustedFrom > adjustedTo) {
            adjustedFrom = dayOpeningHours.start;
            adjustedTo = dayOpeningHours.end;
          }

          updated[d] = { from: adjustedFrom, to: adjustedTo };
        }
      });
      return updated;
    });
  };

  const getFirstActiveDay = () => {
    return WEEKDAYS.find((d) => times[d]);
  };

  const handleTimeChangeSafe = (
    day: string,
    field: 'from' | 'to',
    value: string
  ) => {
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
      <label className='mb-1 block font-medium'>
        Wann hast du Zeit? (innerhalb der Öffnungszeiten)
      </label>
      <div className='flex flex-col gap-2'>
        {WEEKDAYS.map((tag) => (
          <div key={tag} className='flex flex-col'>
            <div className='flex min-h-[36.69px] flex-col gap-2 md:flex-row'>
              <div className='flex flex-row items-center gap-2'>
                <input
                  type='checkbox'
                  checked={!!times[tag]}
                  onChange={(e) => handleDayActiveChange(tag, e.target.checked)}
                  className='h-6 w-6 rounded border border-neutral-300 accent-[#bb9167] shadow-sm transition-all duration-150'
                  id={`day-${tag}`}
                />
                <label
                  htmlFor={`day-${tag}`}
                  className='w-24 cursor-pointer font-medium select-none'
                >
                  {tag}:
                </label>
              </div>
              {times[tag] && (
                <div className='flex flex-col gap-2 rounded border border-[#ecdcc7] bg-[#f7f2ee] px-2 py-1'>
                  <div className='flex items-center gap-1'>
                    <label
                      htmlFor={`from-${tag}`}
                      className='text-xs text-neutral-500'
                    >
                      von
                    </label>
                    <input
                      id={`from-${tag}`}
                      type='time'
                      min={OPENING_HOURS[tag].start}
                      max={OPENING_HOURS[tag].end}
                      value={times[tag]?.from || ''}
                      onChange={(e) =>
                        handleTimeChangeSafe(tag, 'from', e.target.value)
                      }
                      className={`w-20 rounded border px-1 py-0.5 text-sm ${timeErrors[tag] ? 'border-red-400' : ''}`}
                    />
                    <span>-</span>
                    <label
                      htmlFor={`to-${tag}`}
                      className='text-xs text-neutral-500'
                    >
                      bis
                    </label>
                    <input
                      id={`to-${tag}`}
                      type='time'
                      min={OPENING_HOURS[tag].start}
                      max={OPENING_HOURS[tag].end}
                      value={times[tag]?.to || ''}
                      onChange={(e) =>
                        handleTimeChangeSafe(tag, 'to', e.target.value)
                      }
                      className={`w-20 rounded border px-1 py-0.5 text-sm ${timeErrors[tag] ? 'border-red-400' : ''}`}
                    />
                  </div>
                  <span className='text-xs text-neutral-400'>
                    Öffnungszeiten ({OPENING_HOURS[tag].start}–
                    {OPENING_HOURS[tag].end})
                  </span>
                </div>
              )}
            </div>
            {timeErrors[tag] && (
              <div className='mt-1 ml-10 text-xs text-red-500'>
                {timeErrors[tag]}
              </div>
            )}
          </div>
        ))}
        <div className='mt-2 flex flex-wrap gap-2'>
          <button
            type='button'
            className='rounded border border-[#bb9167] bg-[#f7f2ee] px-2 py-1 text-xs text-[#bb9167] hover:bg-[#ecdcc7] disabled:cursor-not-allowed disabled:opacity-50'
            onClick={handleCopyToAll}
            disabled={Object.keys(times).length === 0}
          >
            {getFirstActiveDay()
              ? `Zeit von ${getFirstActiveDay()} für alle übernehmen`
              : 'Erste Zeit für alle übernehmen'}
          </button>
        </div>
      </div>
      {hasTimeError && (
        <div className='mt-1 text-xs text-red-500'>
          Bitte korrigiere die markierten Zeiten, um fortzufahren.
        </div>
      )}
    </div>
  );
};

import * as React from 'react';

import { FormattedMessage, FormattedTime } from 'react-intl';

interface OpeningTimes {
  open: string;
  close: string;
}

export interface OpeningDays {
  monday?: OpeningTimes;
  tuesday?: OpeningTimes;
  wednesday?: OpeningTimes;
  thursday?: OpeningTimes;
  friday?: OpeningTimes;
  saturday?: OpeningTimes;
  sunday?: OpeningTimes;
}

const getDayElement = (day: string, times?: OpeningTimes) => {
  return {
    day,
    times
  };
};

const getOpeningTimeData = (
  days: OpeningDays
): Array<{ day: string; times?: OpeningTimes }> => {
  return [
    getDayElement('MONDAY', days.monday),
    getDayElement('TUESDAY', days.tuesday),
    getDayElement('WEDNESDAY', days.wednesday),
    getDayElement('THURSDAY', days.thursday),
    getDayElement('FRIDAY', days.friday),
    getDayElement('SATURDAY', days.saturday),
    getDayElement('SUNDAY', days.sunday)
  ];
};

interface Props {
  days: OpeningDays;
}

export const OpeningTimes = ({ days }: Props) => (
  <div>
    <h3>
      <FormattedMessage id="OPENING_TIMES" />
    </h3>
    {getOpeningTimeData(days).map(day => (
      <div key={day.day} className="flex justify-start">
        <div className="flex-1">
          <FormattedMessage id={day.day} />
          {': '}
        </div>
        <div className="flex-1">
          {day.times && day.times.open && (
            <FormattedTime value={`2018-01-01 ${day.times.open}`} />
          )}
          {' - '}
          {day.times && day.times.close && (
            <FormattedTime value={`2018-01-01 ${day.times.close}`} />
          )}
        </div>
      </div>
    ))}
  </div>
);

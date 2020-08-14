import moment from 'moment';

export const toDaysSince = (date: Date): string => moment(date).fromNow();
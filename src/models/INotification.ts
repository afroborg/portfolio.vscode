export interface INotification {
  header: string;
  body?: string;
  type: 'success' | 'failure' | 'warning';
}
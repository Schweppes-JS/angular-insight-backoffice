export type KeyValue = { key: string; value: string };

export type SelectOptionsType = KeyValue[];

export interface IOriginalError {
  error: string;
  message: Array<string>;
  statusCode: number;
}

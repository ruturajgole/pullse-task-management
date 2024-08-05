import { AxiosError } from "axios";

export const getError = (error: unknown) =>
  (error as AxiosError<Record<string, string>>).response?.data.message;

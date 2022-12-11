export type TextInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  screenReadingText?: string;
  placeholder?: string;
  value: string;
};

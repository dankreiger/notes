export type TextInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  screenReaderText?: string;
  placeholder?: string;
  value: string;
};

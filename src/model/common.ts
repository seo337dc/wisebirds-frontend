export type TOption = {
  value: any;
  label: string;
};

export type TModalProps = {
  onClose: () => void;
};

export type TApiError = {
  error: string; //  "invalid email"
  message: string; // "seo@asdf.com is not exist"
  status: number; //  422
};

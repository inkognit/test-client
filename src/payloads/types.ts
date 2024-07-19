export type TPhotoUploader = {
  formData: any;
  setFormData: (data: any) => void;
};

export type TSignUpFormData = {
  firstName: string;
  lastName: string;
  middleName: string;
  login: string;
  password: string;
  birthday: string;
  avatar: string;
  email: string;
};

export type TTarget = {
  target: {
    name: string;
    value: string;
  };
};


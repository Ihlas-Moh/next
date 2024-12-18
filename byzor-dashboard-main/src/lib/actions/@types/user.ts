export type KindeUserType = {
  kindeId: string;
  name: string;
  picture?: string;
  email?: string;
  role: string;
};

export type UserType = KindeUserType & {
  _id: string;
  token: string;
};

export interface UserAdmin {
  id?: string | undefined;
  email: string | undefined;
  role?: string;
  accessToken?: string;
  refreshToken?: string;
  confirmedAt?: string;
  createdAt?: string;
  lastSignInAt?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  image?: string;
}

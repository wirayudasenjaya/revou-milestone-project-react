import { atom, selector } from 'recoil';

interface User {
  fullname: string,
  isLoggedIn: boolean,
  email?: string,
  dateOfBirth?: string,
  city?: string,
  street?: string,
  state?: string,
}

export const userState = atom<User>({
  key: 'user',
  default: {
    fullname: "name",
    isLoggedIn: false,
  },
});

export const userSelector = selector<User>({
  key: 'userSelector',
  get: ({ get }) => {
    const user = get(userState);

    return user;
  },
});

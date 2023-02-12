import axiosInstance from '..';

const signUp = async (email: string, password: string) => {
  const data = await axiosInstance.post('/auth/signup', {
    email,
    password,
  });
  return data;
};

export { signUp };

axiosInstance({
  method: 'post',
});

export const getCookie = (name) => {
  if (process?.browser) {
    // const value = document?.cookie?.match(`;\\s*${name}=([^;]+)`)?.[1];
    const value = document?.cookie?.match(`${name}=([^;]+)`)?.[1];
    return value;
  }
};

export const setCookie = (cookie_data) => {
  document.cookie = cookie_data;
};

import { useSnackbar } from 'react-simple-snackbar';

const UseSnackbar = () => {
  const options = {
    position: 'top-center',
    style: {
      backgroundColor: '#DB2840',
      fontFamily: 'proxima-nova',
      fontSize: '16px',
      textAlign: 'center',
      // ...(isMobile ? { marginBottom: '20px' } : { marginTop: '20px' }),
      color: '#FFF',
    },
    closeStyle: {
      color: 'lightcoral',
      fontSize: '16px',
    },
    duration: 3000,
  };

  const [openSnackbar, closeSnackbar] = useSnackbar(options);

  const showSnackbarError = (msg, duration) => {
    openSnackbar(msg ?? 'Sorry something went wrong!', duration);
  };

  const showSnackbarSuccess = (msg, duration) => {
    options.style.backgroundColor = '#325A17';
    options.closeStyle.color = '#FFF';
    openSnackbar(msg ?? 'Success', duration);
  };

  return { showSnackbarError, showSnackbarSuccess, closeSnackbar };
};

export default UseSnackbar;

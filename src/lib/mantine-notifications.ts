export const defaultNotification = {
  autoClose: 3000,
};

export const notificationDetails = {
  error: {
    ...defaultNotification,
    title: 'Error!',
    message: 'Your operation failed.',
    color: 'red',
  },
  success: {
    ...defaultNotification,
    title: 'Success!',
    message: 'Your operation has been successfully created.',
    color: 'green',
  },
};

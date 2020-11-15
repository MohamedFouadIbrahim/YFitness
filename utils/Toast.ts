import toast from 'react-native-simple-toast';

enum toastTime {
    short = 5,
    long = 10
}

export const showToast = (msg: string, time: toastTime = toastTime.short) => {
    toast.show(msg, time)
}
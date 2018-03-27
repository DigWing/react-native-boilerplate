import { AsyncStorage } from 'react-native';

const TOKEN = 'X-AuthToken';

export const setToken = (value, cb) => AsyncStorage.setItem(TOKEN, value, cb);
export const getToken = cb => AsyncStorage.getItem(TOKEN, cb);
export const removeToken = cb => AsyncStorage.removeItem(TOKEN, cb);

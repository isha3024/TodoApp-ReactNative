import AsyncStorage from "@react-native-async-storage/async-storage";
import { FETCH_QUOTES_REQUEST, FETCH_QUOTES_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../Types";

import axios from "axios";
import { Alert, ToastAndroid } from "react-native";



//user login post request
export const userLogin = (user) => async (dispatch) => {
	dispatch({ type: LOGIN_REQUEST });
	try {
		const response = await axios({
			url: 'https://dummyjson.com/user/login',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			data: user
		})
		if (response.status === 200) {
			const user = response.data;
			// Save token to AsyncStorage
			await AsyncStorage.setItem('user', JSON.stringify(user));
			dispatch({ type: LOGIN_SUCCESS, payload: user });
			Alert.alert(
				"Login Success",
				"Welcome " + user.username + "!",
				[{text: 'OK', onPress: () => null}]
			)
		}
		return {type: LOGIN_SUCCESS, payload: response.data}
	}
	catch(error) {
		// console.error('Error details:', error.response.data.message);
		ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)
		dispatch({ type: LOGIN_FAILURE, payload: error });

		return {type: LOGIN_FAILURE, payload: error}
	}
}

export const logoutUser = () => {
	return { 
		type: LOGOUT 
	};
}

export const fetchQuotes = () => async (dispatch) => {
	dispatch({
		type: FETCH_QUOTES_REQUEST
	})
	try {
		const response = await axios({
			url: 'https://type.fit/api/quotes',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		if (response.status === 200) {
			const quotes = response.data;
			console.log('quotes response in getQuotes: ', quotes)
			await AsyncStorage.setItem('quotes', JSON.stringify(quotes));
			dispatch({ type: FETCH_QUOTES_SUCCESS, payload: quotes });
		}
	}
	catch (error) {
		// console.error('Error details:', error.response.data.message);
		ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)
	}
}
/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableNativeFeedback, View, Text, StyleSheet} from 'react-native';

/*
    Si se especifica una propiedad como opcional,
    esto es para quien llama al componente
*/
interface Props {
    title: string;
    position?: 'bl' | 'br';
    onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
    return (
		<View
			style={[
				styles.fabLocation,
				(position === 'br') ? styles.right : styles.left,
			]}
		>
			<TouchableNativeFeedback
				onPress={onPress}
				background={ TouchableNativeFeedback.Ripple('#28425D', true, 30) }
			>
				<View style={styles.fab}>
					<Text style={styles.fabText}>{title}</Text>
				</View>
			</TouchableNativeFeedback>
		</View>
    );
};

const styles = StyleSheet.create({
    fabLocation: {
		position: 'absolute',
		bottom: 25,
		right: 25,
	},
	left: {
		left: 25,
	},
	right: {
		right: 25,
	},
	fab: {
		backgroundColor: '#5856D6',
		width: 60,
		height: 60,
		borderRadius: 100,
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,

		elevation: 9,
	},
	fabText: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
});

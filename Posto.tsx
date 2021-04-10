import * as React from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView, StatusBar } from 'react-native';
import { ListItem, } from 'react-native-elements'
// import { Assets, createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer, StackActions } from '@react-navigation/native';


import { Avatar, Card, Title, Paragraph, List } from 'react-native-paper';


export default function PostoScreen({ route }) {



	const posto = route.params;
	// console.info(route.params.img);


	return (

		<View>
			<Card>
				<Card.Content>
					<Title>{posto.title}</Title>
				</Card.Content>
				<Card.Cover source={posto.img} />
			</Card>

			<ListItem bottomDivider>
				<ListItem.Content>
					<ListItem.Title>
						Endereço: {posto.endereco}
					</ListItem.Title>
				</ListItem.Content>
			</ListItem>

			<ListItem bottomDivider>
				<ListItem.Content>
					<ListItem.Title>
						Preço da Gasolina: {posto.precoGas}
					</ListItem.Title>
				</ListItem.Content>
			</ListItem>
			<ListItem bottomDivider>
				<ListItem.Content>
					<ListItem.Title>
						Preço do etanol: {posto.precoEta}
					</ListItem.Title>
				</ListItem.Content>
			</ListItem>
		</View>
	);
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute'
	},
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},
	fab: {
		position: 'absolute',
		margin: 16,
		right: 0,
		bottom: 0,
	},
	menu: {
		backgroundColor: '#F02A4B',
	},
	scrollView: {
		// backgroundColor: 'pink',
		marginHorizontal: 20,
	},
	safeAreaView: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		backgroundColor: 'white',
	}
});
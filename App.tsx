import 'react-native-gesture-handler';
import * as React from 'react';
import PostoScreen, * as Posto from './Posto';


import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native';
import { ListItem, Icon, SearchBar, Button } from 'react-native-elements'
import { FAB, List } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';





// const [searchQuery, setSearchQuery] = React.useState('');
// const onChangeSearch = query => setSearchQuery(query);

function addPosto({ }) {
	const list = [
		{
			id: 11,
			title: 'Posto 11',
			endereco: 'endereco',
			precoGas: 5.39,
			precoEta: 3.99,
			precoDie: 3.79,
			bairro: "Centro",
			img: "Eldorado",
		}
	]
	postos.concat(list);
}

function HomeScreen({ navigation }) {

	return (

		<ScrollView>
			<View >
				<SearchBar style={styles.searchBar}
					placeholder="Type Here..."
				/>

				{
					postos.map((item, i) => (
						<ListItem key={i} bottomDivider
							onPress={() => navigation.dispatch(StackActions.push("posto", item))} //chamando tela 'posto' com parametro 'item'
						>
							<ListItem.Content>
								<ListItem.Title>{item.title}</ListItem.Title>
								<ListItem.Subtitle>
									Gasolina: {item.precoGas},
									Etanol: {item.precoEta},
									Diesel: {item.precoDie}
								</ListItem.Subtitle>
							</ListItem.Content>
							<ListItem.Chevron />
						</ListItem>
					))
				}

				{/* <FAB
						style={styles.fab}
						color="#fff"
						icon="plus"
						onPress={() => addPosto}
					/> */}

			</View>
		</ScrollView>
	);
}



export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Preço combustível em Palmas">
				<Stack.Screen name="Preço combustível em Palmas" component={HomeScreen} />
				<Stack.Screen name="posto" component={PostoScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}




const Stack = createStackNavigator();


const postos = [
	{
		id: 1,
		title: 'Auto Posto Eldorado',
		endereco: '206 Sul, Avenida NS 4 - Arse 22',
		precoGas: 5.39,
		precoEta: 3.99,
		precoDie: 3.79,
		bairro: "Centro",
		img: require("./assets/postos/Eldorado.png"),
	},
	{
		id: 2,
		title: 'Auto Posto Cristal',
		endereco: '208 Sul Avenida LO 5, 10 - Plano Diretor Sul',
		precoGas: 5.36,
		precoEta: 4.08,
		precoDie: 3.89,
		bairro: "Centro",
		img: require("./assets/postos/Cristal.png"),
	},
	{
		id: 3,
		title: 'Posto Tucunaré',
		endereco: '110 Sul Avenida NS 8, 17',
		precoGas: 5.29,
		precoEta: 3.99,
		precoDie: 3.88,
		bairro: "Centro",
		img: require("./assets/postos/Tucunaré.png"),
	},
	{
		id: 4,
		title: 'Posto Petro',
		endereco: '203 Sul Alameda Central, Avenida NS 1',
		precoGas: 5.33,
		precoEta: 4.14,
		precoDie: 3.83,
		bairro: "Centro",
		img: require("./assets/postos/Petro.png"),
	},
	{
		id: 5,
		title: 'Auto Posto Advento',
		endereco: '308 Sul Alameda 7, 212 - Arse 33',
		precoGas: 5.39,
		precoEta: 4.09,
		precoDie: 3.79,
		bairro: "Centro",
		img: require("./assets/postos/Advento.png"),
	},
	{
		id: 6,
		title: 'Posto Primavera',
		endereco: '204 Sul Avenida NS 2, 1 - Plano Diretor Sul',
		precoGas: 5.34,
		precoEta: 3.99,
		precoDie: 3.90,
		bairro: "Centro",
		img: require("./assets/postos/Primavera.png"),
	},
	{
		id: 7,
		title: 'Petrolíder 704 Sul',
		endereco: '704 Sul, Avenida NS 4, Lote 19 - Plano Diretor Sul',
		precoGas: 5.44,
		precoEta: 4.19,
		precoDie: 3.99,
		bairro: "Sul",
		img: require("./assets/postos/Petrolider704.png"),
	},
	{
		id: 8,
		title: 'Posto JK (Palacinho)',
		endereco: '110 Norte, Avenida NS 10',
		precoGas: 5.44,
		precoEta: 4.19,
		precoDie: 3.99,
		bairro: "Norte",
		img: require("./assets/postos/PostoJK.png"),
	},
	{
		id: 9,
		title: 'Auto Posto Vitória III',
		endereco: 'TO-030, 231 - Taquaruçu',
		precoGas: 5.40,
		precoEta: 4.14,
		precoDie: 3.89,
		bairro: "Taquaralto",
		img: require("./assets/postos/Vitoria3.png"),
	},
	{
		id: 10,
		title: 'Rodoposto II',
		endereco: 'Avenida Tocantins - Taquaralto',
		precoGas: 5.39,
		precoEta: 4.09,
		precoDie: 3.89,
		bairro: "Taquaruçu",
		img: require("./assets/postos/Rodoposto2.png"),
	},

]

const bairros = [
	"Norte",
	"Sul",
	"Centro",
	"Taquaralto",
	"Taquaruçu"
]

const bai = [
	{
		id: 1,
		title: "Norte"
	},
	{
		id: 2,
		title: "Centro"
	},
	{
		id: 3,
		title: "Sul"
	},
	{
		id: 4,
		title: "Taquaralto"
	},
	{
		id: 5,
		title: "Taquaruçu"
	},

]


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
	searchBar: {
		// backgroundColor: "blue",
	},
	fab: {
		position: 'absolute',
		margin: 16,
		right: 0,
		bottom: 0,
	},
	menu: {
		backgroundColor: '#F02A4B',
	}
});
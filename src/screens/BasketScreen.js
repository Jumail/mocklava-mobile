import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BasketScreen() {
	return (
		<Layout style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
					<Text>Basket Screen</Text>
				</View>
			</SafeAreaView>
		</Layout>
	)
}
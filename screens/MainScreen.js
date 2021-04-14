import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Servicii} from "../data/Servicii";
import ServiceCard from "../components/ServiceCard";

const MainScreen = props => {
    const renderEachItem = itemData => {
        return (
            <ServiceCard
                color={itemData.item.color}
                title={itemData.item.title}
                uri={itemData.item.uri}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'ServiceDetailScreen',
                        params: {
                            serviciuId: itemData.item.id,
                            serviciuTitle: itemData.item.title,
                            serviciuUri:itemData.item.uri,

                        }
                    })
                }
                }
            />
        )
    }
    return (
        <View style={styles.flatListContainer}>
            <FlatList
                data={Servicii}
                renderItem={renderEachItem}
                numColumns={1}/>
        </View>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

MainScreen.navigationOptions =
    {
        headerTitle: 'Welcome'
    }
export default MainScreen;

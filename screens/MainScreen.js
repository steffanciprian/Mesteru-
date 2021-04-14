import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CATEGORIES} from "../data/CategoriesData";
import ServiceCard from "../components/ServiceCard";

const MainScreen = props => {
    const renderEachItem = itemData => {
        return (
            <ServiceCard
                onPress={() => props.navigation.navigate('ServiceDetailScreen')}
                color={itemData.item.color}
                title={itemData.item.title}
            />

        )
    }
    return (
        <View style={styles.flatListContainer}>
            <FlatList
                data={CATEGORIES}
                renderItem={renderEachItem}
                numColumns={1}/>
        </View>
    )
}

const styles=StyleSheet.create({
    flatListContainer:{
        justifyContent:'center',
        alignItems:'center',
    }
})

MainScreen.navigationOptions =
    {
        headerTitle: 'Welcome'
    }
export default MainScreen;

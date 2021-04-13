import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {CATEGORIES} from "../data/CategoriesData";
import ServiceCard from "../components/ServiceCard";

const MainScreen = () => {
    const renderEachItem = itemData => {
        return (
            <ServiceCard
            color={itemData.item.color}
            title={itemData.item.title}
            />

        )
    }
return (
    <View>
        <Text>
            Bine ati venit pe MainScreen!
        </Text>
        <FlatList
            data={CATEGORIES}
            renderItem={renderEachItem}
            numColumns={1}/>
    </View>
)
}
MainScreen.navigatinOptions =
    {
        headerTitle: 'Alege din serviciile noastre'
    }
export default MainScreen;

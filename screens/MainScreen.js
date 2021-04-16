import React, {useState} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {Servicii} from "../data/Servicii";
import ServiceCard from "../components/ServiceCard";
import {SearchBar} from 'react-native-elements'

const MainScreen = props => {
    const [data, setData] = useState(Servicii);
    const [filteredData, setFilteredData] = useState();
    const [value, setValue] = useState();

    const search = searchText => {
        let filteredData = data.filter(item => {
            if (item.title.toLowerCase().includes(searchText) || item.title.toLowerCase() === searchText) {
                return item;
            }
        });
        setFilteredData(filteredData);
        setValue(searchText);
    };
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
                            serviciuUri: itemData.item.uri,
                        }
                    })
                }}
            />
        )
    }
    return (
        <View style={styles.mainScreenStyle}>
            <View style={styles.searchBarContainer}>
                <SearchBar
                    round={true}
                    lightTheme={true}
                    placeholder="Search..."
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => search(text)}
                    value={value}
                />
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={filteredData ? filteredData : data}
                    renderItem={renderEachItem}
                    numColumns={1}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',

    },
    searchBarContainer: {
        width: Dimensions.get('window').width * 0.9,
    },
    mainScreenStyle: {
        alignItems: 'center',
    }
})
MainScreen.navigationOptions =
    {
        headerTitle: 'Welcome'
    }
export default MainScreen;

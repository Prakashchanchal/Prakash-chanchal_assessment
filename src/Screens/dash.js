import React,{Component} from 'react';
import {StyleSheet, FlatList, Text, View, Image, ActivityIndicator} from 'react-native';
import styles from '../stylesSheet/styles'
import headerScreen from '../Auth/headerScreen'
export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            page:1,
            isLoading:false
        }
    }
    componentDidMount(){
        this.setState({isLoading:true}, this.fetchData);
    }
    fetchData = () => {
        const url= "https://randomuser.me/api/?seed=1&results=10&page="+this.state.page
        fetch (url).then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
            data:this.state.data.concat(responseJson.results)
            })
        })
    }
    renderItem=({item})=>{
        return(
            <View style={styles.item}>
                <Text style={styles.itemText}>{`${item.name.first} ${item.name.last}`}</Text>
                <Text style={styles.itemText}>{item.email}</Text>
                <Text style={styles.itemText}>{item.phone}</Text>
                <Image source={{uri:item.picture.thumbnail}} style={styles.viewimage}/>
            </View>
        )
    }
    handleLoadMore=()=>{
        this.setState(
            {page:this.state.page+1, isLoading:false},
            this.fetchData
        )
    }

    renderFooter=()=>{
        return(
            this.state.isLoading ?
            <View style={styles.loader}>
                <ActivityIndicator size="large"/>
            </View> :null
        )
    }
    render(){
        return(
            <FlatList
                style={StyleSheet.containerView}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=>index.toString()}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={100}
                ListFooterComponent={this.renderFooter}
            />    
        ); 
    }  
}


/**
 * Shop online management
 * https://linhho.net
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Icon } from 'native-base';

export default class AOrder extends Component {
  //Constructor
  constructor(props) {
    super(props);
    //init var
    this.orderStatusIcon= '';
    this.orderStatusColor = '';
  }
  //
  componentWillMount() {
    if(this.props.order.orderStatus == 0) {
      this.orderStatusIcon = 'ios-alert-outline';
      this.orderStatusColor = '#f57f17';
    }
    else {
      if(this.props.order.orderStatus == 1) {
        this.orderStatusIcon= 'ios-happy-outline';
        this.orderStatusColor = '#2e7d32';
      }
      else {
        this.orderStatusIcon= 'ios-sad-outline';
        this.orderStatusColor = '#dd2c00';
      }
    }
  }

  render() {
    return (
      <View style={styles.orderContainer}>
        <View style={{flex:1,flexDirection: 'row'}}>
          <View style={{flex:6}}>
            <Text style={styles.orderCode}>
              <Icon style={{fontSize:16,color:this.orderStatusColor}} name={this.orderStatusIcon} /> {this.props.order.orderCode}
            </Text>
          </View>
          <View style={{flex:4}}>
            <Text style={styles.orderPrice}>
              {this.props.order.orderPrice}
            </Text>
          </View>
          
        </View>
        <View style={{flex:1,flexDirection: 'row', marginTop:7}}>
          <View style={{flex:6}}>
            <Text style={styles.customerName}>
              <Icon style={{fontSize:16,color: '#9e9e9e'}} name='person' /> {this.props.order.customerName}
            </Text>
          </View>
          <View style={{flex:4}}>
            <Text style={styles.orderDate}>
              <Icon style={{fontSize:16,color: '#9e9e9e'}} name='ios-calendar-outline'/> {this.props.order.orderDate}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

AOrder.propTypes = {
  order: React.PropTypes.shape({
    orderCode: React.PropTypes.number,
    customerName: React.PropTypes.string,
    orderDate: React.PropTypes.string,
    orderPrice: React.PropTypes.number,
    orderStatus: React.PropTypes.number,
  })
};

const styles = StyleSheet.create({
  orderContainer: {
    marginLeft:10,
    marginRight:10,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f8bbd0',
  },
  orderCode: {
    color: '#c2185b',
    fontSize: 16
  },
  customerName: {
    color: '#9e9e9e',
    fontSize: 15
  },
  orderDate: {
    color: '#9e9e9e',
    fontSize: 15,
    textAlign: 'right'
  },
  orderPrice: {
    color: '#c2185b',
    fontSize: 16,
    textAlign: 'right'
  },
});

/**
 * Shop online management
 * https://linhho.net
 * @flow
 */

import React, {Component} from 'react';
import {
  Container,
  ListItem,
  Header,
  Tabs,
  Tab,
  TabHeading,
  Left,
  Body,
  Right,
  Title,
  Content,
  Icon,
  Button,
  Text,
  Item,
  Input
} from 'native-base';

import AOrder from './components/aOrder';

export default class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};
        this.lang = {
            'tabTitle': {
                'waitTab': 'Đợi giao',
                'shipTab': 'Đang giao',
                'doneTab': 'Hoàn thành'
            },
            'search':'Tìm kiếm' 
        }
        // Toggle the state every second
        setInterval(() => {
        this.setState({ showText: !this.state.showText });
        }, 1000);
    }
  //Wait tab content
  renderWaitTab() {
    return (
        <Content>
          <Item style={{margin:10}} rounded>
              <Input placeholder={this.lang.search}/>
              <Icon name='search' />
          </Item>
          <AOrder order={{
              'orderCode':170200006,
              'customerName':'Anh Quân',
              'orderDate':'05/12/2016',
              'orderPrice':1000000,
              'orderStatus':1}} 
            />
            <AOrder order={{
              'orderCode':170200005,
              'customerName':'Phương Mỹ Chi',
              'orderDate':'04/12/2016',
              'orderPrice':500000,
              'orderStatus':0
            }} />
            <AOrder order={{
              'orderCode':170200004,
              'customerName':'Nguyễn Đức Trọng',
              'orderDate':'03/12/2016',
              'orderPrice':500000,
              'orderStatus':1
            }} />
            <AOrder order={{
              'orderCode':170200003,
              'customerName':'Lê Trọng Tấn',
              'orderDate':'06/11/2016',
              'orderPrice':500000,
              'orderStatus':1
            }} />
            <AOrder order={{
              'orderCode':170200002,
              'customerName':'Hà Thị Tuyết',
              'orderDate':'05/11/2016',
              'orderPrice':500000,
              'orderStatus':2
            }} />
            <AOrder order={{
              'orderCode':170200001,
              'customerName':'Nguyễn Hà Đông',
              'orderDate':'03/11/2016',
              'orderPrice':500000,
              'orderStatus':2
            }} />
          
        </Content>
    );
  }
  //Ship tab content
  renderShipTab() {
    return (
        <Content>
          <Item style={{margin:10}} rounded>
              <Input placeholder={this.lang.search}/>
              <Icon name='search' />
          </Item>
          
        </Content>
    );
  }
  //Done tab content
  renderDoneTab() {
    return (
        <Content>
          <Item style={{margin:10}} rounded>
              <Input placeholder={this.lang.search}/>
              <Icon name='search' />
          </Item>
          
        </Content>
    );
  }
  render() {
    return (
      <Container>
        <Header hasTabs>
            <Left>
                <Button transparent>
                    <Icon style={{fontSize:22}} name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>Đơn hàng</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon style={{fontSize:30}} name='ios-add-outline' />
                </Button>
            </Right>
        </Header>
        <Tabs>
            <Tab heading={
              <TabHeading>
                <Icon style={{fontSize:20}} name="ios-clock-outline" />
                <Text style={{fontSize:14}}>{this.lang.tabTitle.waitTab}</Text>
              </TabHeading>
            }>
                {this.renderWaitTab()}
            </Tab>
            <Tab heading={
              <TabHeading>
                <Icon style={{fontSize:20}} name="ios-boat-outline" />
                <Text style={{fontSize:14}}>{this.lang.tabTitle.shipTab}</Text>
              </TabHeading>
            }>
                {this.renderShipTab()}
            </Tab>
            <Tab heading={
              <TabHeading>
                <Icon style={{fontSize:20}} name="list" />
                <Text style={{fontSize:14}}>{this.lang.tabTitle.doneTab}</Text>
              </TabHeading>
            }>
              {this.renderDoneTab()}
            </Tab>
        </Tabs>
      </Container>
    );
  }
}

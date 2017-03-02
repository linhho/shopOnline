/**
 * Shop online management
 * https://linhho.net
 * @flow
 */

import React, {Component} from 'react';
import {
  Container,
  Footer,
  FooterTab,
  Icon,
  Button,
  Text,
  getTheme,
  StyleProvider
} from 'native-base';
import material from './config/variables/material';

import Orders from './modules/orders/orders';
export default class shopOnline extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Orders/>
          <Footer>
            <FooterTab>
              <Button>
                <Icon name="apps"/>
              </Button>
              <Button>
                <Icon name="globe"/>
              </Button>
              <Button>
                <Icon active name="basket"/>
              </Button>
              <Button>
                <Icon name="home"/>
              </Button>
              <Button>
                <Icon name="person"/>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }
}

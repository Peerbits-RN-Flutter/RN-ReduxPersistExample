import React, { Component } from 'react'
import { Image, View, StatusBar, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../../actions/CommonActions'
import { Images, FontName, FontSize, Colors } from '../../../utils';
import { WarpperComponent } from '../../common';
import styles from '../styles/Splash.style'


class Splash extends Component {

  timer = ""
  componentDidMount() {

    this.startTimer('Welcome')
  }

  startTimer(routeName) {

    timer = setInterval(() => {

      this.props.navigation.replace(routeName)
    }, 1500)
  }
  componentWillUnmount() {

    clearInterval(timer)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='transparent' translucent />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.Blue400 }}>
          <Image style={{ alignSelf: "center" }} source={{uri:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2Fpng_detail%2F20180911%2Fbackground-material-design-for-lorem-ipsum-logo-png_87814.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fbackground-material-design-for-lorem-ipsum-logo_3624722.html&tbnid=RI8S1cKYVJ_BXM&vet=12ahUKEwjvkciCn_vvAhUPCLcAHTcQBKkQMygGegUIARDbAQ..i&docid=YfSQbP3IGM4VnM&w=640&h=640&q=lorem%20ipsum%20logo&client=safari&ved=2ahUKEwjvkciCn_vvAhUPCLcAHTcQBKkQMygGegUIARDbAQ'}} />
        </View>
      </View>
    )
  }
}



export default WarpperComponent(Splash)
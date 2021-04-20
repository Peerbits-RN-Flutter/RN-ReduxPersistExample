import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button, FloatingEditText, MainContainer, ScrollContainer, WarpperComponent } from '../../common'
import styles from '../styles/Welcome.style'


class Welcome extends Component {
    
    state={
        text:"",
    }

    setValue=()=>{
        this.props.setSession("value",this.state.text)// Will set the value to Async Storage
        this.setState({text:""})
    }

    getValue=()=>{
        const value=this.props.session.value
        this.setState({text:value}) // Get the value from Async storage
    }

    render() {
        return (
            <MainContainer header={{title:"Redux Persist Example"}}>
                <ScrollContainer>
                    <View style={styles.mainContainer}>
                        <View style={styles.ContainView}>
                            
                                <FloatingEditText 
                                value={this.state.text}
                                    onChangeText={
                                        (text)=>{
                                            this.setState({ text: text })
                                        }
                                    }
                                label="Value" />
                            <View style={styles.btnView}>
                                <Button onPress={() => {
                                    this.setValue()
                                }} style={styles.leftbtn} title="SET" />

                                <Button onPress={() => {
                                    this.getValue()
                                }} style={styles.rightbtn} bordered title="GET" />
                            </View>
                        </View>
                    </View>
                </ScrollContainer>
            </MainContainer>
        )
    }
}
 
export default WarpperComponent(Welcome) // WarpperComponent Required to user session method like setSession() and session object

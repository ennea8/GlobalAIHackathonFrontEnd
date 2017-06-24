// app.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

//import using commonJS Module *Require Plugins
//import { Button } from 'react-weui'

//import Using ES6 syntax
import WeUI from 'react-weui';

//import styles
import 'weui';
import 'react-weui/lib/react-weui.min.css';

const {
  Button,
  ActionSheet
} = WeUI;

class App extends Component {

  state = {
    auto_show: false,
    ios_show: false,
    android_show: false,
    menus: [{
      label: '拍照',
      onClick: ()=> {
        MeteorCameraUI.getPicture({},function(data){
          console.log(data)
        })

      }
    }, {
      label: <label htmlFor="select-img-input">
        选择图片
        <input  id ='select-img-input' type="file" style={{display:'none'}}/>
      </label>,
      onClick: ()=> {

      }
    }],
    actions: [
      {
        label: '取消',
        onClick: this.hide.bind(this)
      }
    ]
  };

  hide(){
    this.setState({
      auto_show: false,
      ios_show: false,
      android_show: false,
    })
  }

  render() {
    const styles ={
      logo:{
        // width:'90%',
        marginTop:'50px',
        textAlign: 'center',

      },
      footer:{
        position:'fixed',
        bottom:0,
        height:'50px',
        width:'100%',
      }

    }


    return (
      <div>
        <div style={styles.logo}>
          <img src="img/page1.png" alt=""/>
        </div>


        <div style={styles.footer}>

          <Button type="default"
                  onClick={e=>this.setState({auto_show: true})}>
            选择图片
          </Button>

          <input type="file" name="select-file" />

        </div>

          <ActionSheet
            menus={this.state.menus}
            actions={this.state.actions}
            show={this.state.auto_show}
            onRequestClose={e=>this.setState({auto_show: false})}
          />


      </div>
    );
  }
}

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

// app.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

//import Using ES6 syntax
import WeUI from 'react-weui';
import 'weui';
import 'react-weui/lib/react-weui.min.css';


const {
  Button,
  ActionSheet,
  Gallery,
  Popup,
} = WeUI;


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {

  state = {
    show_result:false,
    imgData:'',




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
        <input  id ='select-img-input'
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                capture="Camera"
                onChange={(e) => {
                  const reader = new FileReader()
                  reader.onload = (e) => {
                    //snapHandler(e.target.result, `${owner}ShowModal`)
                    console.log(e.target.result)

                    this.setState({
                      imgData:e.target.result,
                      show_result:true,
                    })

                  }
                  reader.readAsDataURL(e.target.files.item(0))
                }}
        />

      </label>,
      onClick: (e)=> {

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

  showResult(){
    this.setState({show_result:true})
  }
  hideResult(){
    this.setState({show_result:false})
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


        <Popup show={this.state.show_result}
               onRequestClose={e=>this.setState({show_result: false})}
               className="result">


          <div className="result-img">
            <img  src={this.state.imgData}
                  style={{maxWidth:'300px'}}
                  alt=""/>

          </div>


          <div className="result-data">





          </div>




        </Popup>

      </div>
    );
  }
}


Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

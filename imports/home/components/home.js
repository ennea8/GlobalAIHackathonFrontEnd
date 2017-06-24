/**
 * Created on 24/06/2017.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

//import Using ES6 syntax
import WeUI from 'react-weui';
import 'weui';
import 'react-weui/lib/react-weui.min.css';


const {
  Button,
  ActionSheet,
  Gallery,
  Popup,

  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,

  Flex,
  FlexItem,

} = WeUI;

export default class Home extends Component {

  state = {
    show_result: true,
    imgData: '',

    ///////
    auto_show: false,
    ios_show: false,
    android_show: false,
    menus: [
    //   {
    //   label: '拍照',
    //   onClick: () => {
    //     MeteorCameraUI.getPicture({}, function (data) {
    //       console.log(data)
    //     })
    //
    //   }
    // },
      {
      label: <label htmlFor="select-img-input">
        选择图片
        <input id='select-img-input'
               type="file"
               accept="image/*"
               style={{display: 'none'}}
               capture="Camera"
               onChange={(e) => {
                 const reader = new FileReader()
                 reader.onload = (e) => {
                   //snapHandler(e.target.result, `${owner}ShowModal`)
                   console.log(e.target.result)

                   this.setState({
                     imgData: e.target.result,
                     show_result: true,
                   })

                 }
                 reader.readAsDataURL(e.target.files.item(0))
               }}
        />

      </label>,
      onClick: (e) => {

      }
    }],
    actions: [
      {
        label: '取消',
        onClick: this.hide.bind(this)
      }
    ]
  };

  hide() {
    this.setState({
      auto_show: false,
      ios_show: false,
      android_show: false,
    })
  }

  showResult() {
    this.setState({show_result: true})
  }

  hideResult() {
    this.setState({show_result: false})
  }


  render() {
    const styles = {

      footer: {

        paddingLeft:'20px',

        // position: 'fixed',
        // bottom: 0,
        height: '50px',
        width: '50%',
      },
      logo: {
        marginLeft: '10px',

        marginTop: '20px',

        marginBottom:'10px',
        textAlign: 'left',

      },
      button:{
        background:'blue'
      },

      labelButton:{
        background:'rgb(27, 155, 255)'
      }

    }


    return (
      <div className="home-page">


        <img src="img/group3.png"  width='100%' alt=""/>

        <div style={styles.footer}>

          <div style={styles.logo}>
            <img src="img/page1.png" alt=""/>
          </div>


          {/*<Button*/}
            {/*style={styles.button}*/}
            {/*onClick={e => this.setState({auto_show: true})}>*/}
            {/*选择图片*/}
          {/*</Button>*/}


          <label htmlFor="select-img-input"
                 className="label-button"
                 style = {styles.labelButton}>

            选择图片
            {/*<Button*/}
              {/*style={styles.button}>*/}
              {/*选择图片*/}
            {/*</Button>*/}

            <input id='select-img-input'
                   type="file"
                   accept="image/*"
                   style={{display: 'none'}}
                   capture="Camera"
                   onChange={(e) => {
                     const reader = new FileReader()
                     reader.onload = (e) => {
                       //snapHandler(e.target.result, `${owner}ShowModal`)
                       console.log(e.target.result)

                       this.setState({
                         imgData: e.target.result,
                         show_result: true,
                       })

                     }
                     reader.readAsDataURL(e.target.files.item(0))
                   }}
            />

          </label>




        </div>

        <ActionSheet
          menus={this.state.menus}
          actions={this.state.actions}
          show={this.state.auto_show}
          onRequestClose={e => this.setState({auto_show: false})}
        />


        <Popup show={this.state.show_result}
               onRequestClose={e => this.setState({show_result: false})}
               className="result">


          <div style={{padding:'15px'}}>
            <span onClick={e => this.setState({show_result: false})}>
              返回
            </span>
          </div>



          <div className="result-img">
            <img src={this.state.imgData}
                 style={{width: '100%'}}
                 alt=""/>

          </div>

          <div className="result-data">

            <div className="list">
              <h4 className="title">Result</h4>
              <h2 className="emotion">Angry</h2>

              <br/>

              <div className="row">
                <div className="col">
                  <span className="lable"> Happy</span>
                  <span className="num">2%</span>
                </div>
                <div className="col">

                  <span className="lable"> Fear</span>
                  <span className="num">3%</span>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <span className="lable"> Neutral</span>
                  <span className="num">2%</span>
                </div>
                <div className="col">

                  <span className="lable"> Angry</span>
                  <span className="num">3%</span>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <span className="lable"> Sad</span>
                  <span className="num">2%</span>
                </div>
                <div className="col">

                  <span className="lable"> Disgust</span>
                  <span className="num">3%</span>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <span className="lable"> Surprise</span>
                  <span className="num">2%</span>
                </div>
                <div className="col">

                </div>
              </div>

            </div>


          </div>

        </Popup>

      </div>
    );
  }
}
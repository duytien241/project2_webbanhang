import React from 'react';
import Category from './Category';
import Home from './Home.jsx';
import { BrowserRouter, Route, Link } from "react-router-dom";
import DetailProduct from'./DetailProduct';
import FormDangKy from './FormDangKy';
import FormDangnhap from './FormDangnhap';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
          arr :[],
          isAdd : true,
          searchname :'',
          filter : false
        };
      }
      componentWillMount(){
        if(localStorage && localStorage.getItem('arr')){
          var arr = JSON.parse(localStorage.getItem('arr'));
          this.setState({
            arr : arr
          });
        
        }
        
      }
      generateData = () => {
        var arr=[{
          id: this.randomid(),
          name:"Tien 2",
          trangthai: 1},
        {
          id :this.randomid(),
          name:"Du",
          trangthai : 0
        }
      ];
      this.setState({
        arr:arr
      });
      
      
      }
      randomstring(){
        return Math.floor(((1*Math.random()) * 0x10000)).toString(16).substring(1);
      }
      randomid(){
        return this.randomstring()+this.randomstring()+"-"+this.randomstring();
      }
      showAdd =()=>{
        var {isAdd} = this.state;
        this.setState({
          isAdd : !isAdd
        });
      }
      closeFrom=()=>{
        var {isAdd} = this.state;
        this.setState({
          isAdd : !isAdd
        });
      }
      addTask=(name,state) =>{
        var {arr} = this.state;
        arr.push({id:this.randomid(),name:name,trangthai:state})
        this.setState({
          arr:arr
        })
        localStorage.setItem('arr',JSON.stringify(arr));
      }
      delItem = (index)=>{
        var {arr} = this.state;
        var t = 0;
        arr.splice(index,1);
        this.setState({
          arr:arr
        })
        localStorage.setItem('arr',JSON.stringify(arr));
      }
      searchname=(name)=>{
        this.setState({
          searchname : name,
          filter : true
        })
      }
    render() {
        var {arr,isAdd,filter,searchname} =  this.state;
        if(filter){
          arr = arr.filter((task)=>{
              return task.name.toLowerCase().indexof(searchname) !== -1;
          })
        }
       return ( 
       <BrowserRouter>
       < div >
       <div className="super_container">
             {/* <Home/> */}
            {/* <Category/> */}
            {/* <DetailProduct/> */}
            <FormDangKy/>
            </div>
            <
            /div>
           
          </BrowserRouter>
        );
    }
}
export default App;
import React,{Component} from 'react';
import NumBtn from '../components/NumBtn';
import PlusBtn from '../components/PlusBtn';
import Result from '../components/Result';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';


class CalcultorContainer extends Component{
    render(){
        const {calculator,actions}=this.props;
        return(
            <div>
                <div>
                    <NumBtn onClick={()=>actions.onNumClick(1)}>1</NumBtn>
                    <NumBtn onClick={()=>actions.onNumClick(2)}>2</NumBtn>
                    <NumBtn onClick={()=>actions.onNumClick(3)}>3</NumBtn>
                </div>          
                <div>
                    <NumBtn onClick={()=>actions.onNumClick(4)}>4</NumBtn>
                    <NumBtn onClick={()=>actions.onNumClick(5)}>5</NumBtn>
                    <NumBtn onClick={()=>actions.onNumClick(6)}>6</NumBtn>
                </div>
                <div>
                    <NumBtn onClick={()=>actions.onNumClick(7)}>7</NumBtn>
                    <NumBtn onClick={()=>actions.onNumClick(8)}>8</NumBtn>
                    <NumBtn onClick={()=>actions.onNumClick(9)}>9</NumBtn>
                </div>
                <div>
                <NumBtn n={0} onClick={() => actions.onNumClick(0)}>0</NumBtn>
                    <PlusBtn onClick={actions.onPlusClick} />
                </div>
                <Result result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
            </div>
        )
    }
}

const mapState=(state,ownProps)=>({
    calculator:state.calculator,
});


function mapDispatch(dispatch){
    return {
        actions:bindActionCreators(actions,dispatch),
    };
}
export default connect(mapState,mapDispatch)(CalcultorContainer);
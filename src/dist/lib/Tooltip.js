import React from 'react';
import PropTypes from 'prop-types';

import { isNativeApp } from './utils/mobileDetect';

import InfoIcon from './icons/infoIcon';

import './styles.css';

class Tooltip extends React.Component{

    state={
        openTooltip: false,
        topTraslate: 0,
        isCalculated: false,
        rigthTranslate: 0,
        rigthTranslateCloud:0,
        id:'0',
    }

    componentDidUpdate=(prevState)=>{
        const {id} = {...this.props}
        if(this.state.openTooltip!==prevState.openTooltip && this.state.openTooltip && !this.state.isCalculated){
            const buttonClassName = `tooltip-${id ? id:this.state.id}`
            //console.log('buttonClassName-- ',buttonClassName)
            let element = document.getElementsByClassName(buttonClassName)[0];
            //console.log('element-- ',element)
            let positionButton = element.getBoundingClientRect().y;
            const arrowClassName = `tooltip-cloud-arrow-${id ? id:this.state.id}`
            //console.log('arrowClassName-- ',arrowClassName)
            let elementArrow = document.getElementsByClassName(arrowClassName)[0];
            let arrowPosition = elementArrow.getBoundingClientRect().y;
            //console.log('arrowPosition-- ',arrowPosition,' --positionButton-- ',positionButton,' -dif- ',arrowPosition-positionButton)
            const paddingAndDimensions = this.props.height+3 //button dimension: icon+3padding + arrow dimensions: 9 fontSize
            const arrowWidth=14
            let rigthTranslateCloud=arrowWidth-(this.props.width/2) //position=right
            this.setState({topTraslate:(positionButton-arrowPosition+paddingAndDimensions), isCalculated:true, rigthTranslate:arrowWidth-(this.props.width/2), rigthTranslateCloud})
        }
    }

    
    render(){
        const { children, color, image, width, delay, height, id, position, dark }={...this.props}
        //const padding='3'

        return <div className="tooltip-container" style={{width: `${width}px`, height: `${height}px`,}}>
            <button id='tooltip' className={`tooltip-${id ? id:this.state.id}`} style={{width: `${width}px`, height: `${height}px`, color:color}} 
                onMouseOver={isNativeApp ? null:()=>{this.setState({openTooltip:true})}} 
                onMouseOut={isNativeApp ? null:()=>setTimeout(()=>this.setState({openTooltip:false}),delay)} 
                onClick={isNativeApp ? ()=>{this.setState({openTooltip:!this.state.openTooltip})}:null}
                onBlur={()=>setTimeout(()=>this.setState({openTooltip:false}),delay)}
                type='button'
            >
            {
                image ? image : <InfoIcon style={{width: width, height: height, cursor: 'pointer'}} colorIndex={color} />
            }
            
            </button>
            <div id="tooltip-cloud" style={{display:`${this.state.openTooltip ? 'block':'none'}`, maxWidth:`${this.props.maxWidth ? `${this.props.maxWidth}px`:'300px'}`}}>
                <div id="tooltip-cloud-arrow" className={`tooltip-cloud-arrow-${id ? id:this.state.id}`} style={{right:`${this.state.rigthTranslate}px`,top:this.state.topTraslate, borderBottom:`${dark ? 'medium none transparent':'7px solid #fff'}`}}><p id='tooltip-p'>▲</p></div>
                <div id="tooltip-cloud-content" className={`${position}`} style={{maxWidth:`${this.props.maxWidth ? `${this.props.maxWidth}px`:'300px'}`,top:this.state.topTraslate,right:`${this.state.rigthTranslateCloud}px` }}>{children}</div>
            </div>
        </div>

    }
};

Tooltip.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
    position: PropTypes.oneOf([ //for future implementation
        'left',
        'right',
        'center',
    ]),
    maxWidth: PropTypes.number,
    width:PropTypes.number,
    height:PropTypes.number,
    color: PropTypes.string,
    image: PropTypes.oneOfType([ //better SVG
        PropTypes.node,
        PropTypes.string,
    ]),
    id: PropTypes.string,
    dark: PropTypes.bool, // true if backgroud is not white
    delay:PropTypes.number, //time after that tooltip info disappear
};

Tooltip.defaultProps = {
    color: 'red',
    width: '24',
    height: '24',
    position:'rigth',
};

export default Tooltip;

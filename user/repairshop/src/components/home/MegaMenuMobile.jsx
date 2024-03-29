import React, { Component, Fragment } from 'react'

class MegaMenuMobile extends Component {

    
    constructor() {
        super();
        this.MegaMenu = this.MegaMenu.bind(this);
    }

    componentDidMount(){
        this.MegaMenu();
    }

    MegaMenu() {
        var acc = document.getElementsByClassName('accordionMobile');
        var accNum = acc.length;
        var i;
        for(i=0;i<accNum; i++){
            acc[i].addEventListener('click',function(){
                this.classList.toggle('active');
                var panel = this.nextElementSibling;
                if(panel.style.maxHeight){
                    panel.style.maxHeight = null;
                }else{
                    panel.style.maxHeight=panel.scrollHeight+ "px"
                }
             
            })
        }

    }

  render() {
    return (
        <div className='accordionMenuDivMobile'>
        <div className='accordionMenuDivInsideMobile'>
            
            
            <button className='accordionMobile'>
                <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/512/8361/8361111.png"></img>&nbsp;
                Cars accesories
            </button>
            <div className='panelMobile'>
                <ul>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>

                </ul>
            </div>

            <button className='accordionMobile'>
                <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/512/8361/8361111.png"></img>&nbsp;
                Cars accesories
            </button>
            <div className='panelMobile'>
                <ul>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>

                </ul>
            </div>

            <button className='accordionMobile'>
                <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/512/8361/8361111.png"></img>&nbsp;
                Cars accesories
            </button>
            <div className='panelMobile'>
                <ul>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>

                </ul>
            </div>

            <button className='accordionMobile'>
                <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/512/8361/8361111.png"></img>&nbsp;
                Cars accesories
            </button>
            <div className='panelMobile'>
                <ul>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>

                </ul>
            </div>

            <button className='accordionMobile'>
                <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/512/8361/8361111.png"></img>&nbsp;
                Cars accesories
            </button>
            <div className='panelMobile'>
                <ul>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>

                </ul>
            </div>

            <button className='accordionMobile'>
                <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/512/8361/8361111.png"></img>&nbsp;
                Cars accesories
            </button>
            <div className='panelMobile'>
                <ul>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>

                </ul>
            </div>
            

            <button className='accordionMobile'>
                <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/512/8361/8361111.png"></img>&nbsp;
                Cars accesories
            </button>
            <div className='panelMobile'>
                <ul>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>

                </ul>
            </div>

            <button className='accordionMobile'>
                <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/512/8361/8361111.png"></img>&nbsp;
                Cars accesories
            </button>
            <div className='panelMobile'>
                <ul>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>
                    <li><a href="#" className='accordionItemMobile'> Perfumes</a></li>

                </ul>
            </div>

        </div>

    </div>
    )
  }
}

export default MegaMenuMobile
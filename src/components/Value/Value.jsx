import React, { useState } from 'react'
import {Accordion, 
    AccordionItem, 
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from "react-icons/md"
import "./Value.css";
// import data from '../../utils/accordion';


const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container ">
        {/* left-side */}
        <div className="v-left">
            <div className="image-container">
                <img src="./value.png" alt="value" />
            </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value we give to you</span>
            <span className='secondaryText'>We are always ready to help by providing the best services for you.
                <br />
                We beleive that  living in a good place can make your life alot better.
            </span>

        <Accordion
        className='accordion'
        allowMultipleExpanded = {false} 
        preExpanded = {[0]}>
        
        </Accordion>
        </div>
        </div>
    </section>
  )
}

export default Value
import React from "react"; 
import "../Headersection/Header.css"
import imglogo from "../Images/image2.jpg";
export const Headerfile =()=>
{
    return(
        <div>
           <h1 style={{backgroundColor:"red"}}>THis is pickupbiz</h1>
           <p className="header-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque possimus itaque aut delectus. Impedit quisquam consequuntur quaerat facere eaque optio deserunt expedita dignissimos iure omnis minima magni necessitatibus sed ipsam voluptatem dicta deleniti, molestias nesciunt natus illum officiis maxime voluptatibus labore. Quam totam animi asperiores? Delectus voluptatum alias quae dolorem laboriosam, id veritatis dolore blanditiis tempora eos, odit nihil 
               libero deleniti cupiditate error, veniam nesciunt? Sunt tempora omnis rem temporibus harum. Sint quod assumenda, rem tempora, quasi facere provident officia, laborum nemo corrupti quam ut earum? Magni, sunt quis voluptatum tempora possimus eum architecto sequi natus omnis odit! Esse, ipsum?</p>
               <img src="Assests/image1.jpg" alt="image1"/>
               <img src={imglogo} alt="star"/>
        </div>
    );
};
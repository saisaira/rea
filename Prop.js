import React from 'react';
export function Prop(props){
    const {name:n,fan:f}=props;
    return(
     <>
     <h1>{n} is {props.children} {f} fan</h1>
     </>
    );
}
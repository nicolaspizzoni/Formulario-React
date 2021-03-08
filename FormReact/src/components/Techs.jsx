import React from 'react';

export default function Techs(props) {
    return(
        <div className={props.styles}>
            <label htmlFor="html">
                <input type="checkbox" id="html" name="html" value="html"/>
                HTML
            </label>
            <label htmlFor="css">
                <input type="checkbox" id="css" name="css" value="css"/>
                CSS
            </label>
            <label htmlFor="js">
                <input type="checkbox" id="js" name="js" value="js"/>
                Javascript
            </label>
            <label htmlFor="react">
                <input type="checkbox" id="react" name="react" value="react"/>
                React
            </label>
            <label htmlFor="react-native">
                <input type="checkbox" id="react-native" name="react-native" value="react-native"/>
                React-Native
            </label>
            <label htmlFor="php">
                <input type="checkbox" value="php" id="php" name="php"/>
                PHP
            </label>
            <label htmlFor="csharp">
                <input type="checkbox" value="csharp" id="csharp" name="csharp"/>
                C#
            </label>
            <label htmlFor="node">
                <input type="checkbox" value="node" id="node" name="node"/>
                Node
            </label>
            <label htmlFor="vue">
                <input type="checkbox" value="vue" id="vue" name="vue"/>
                Vue
            </label>
        </div>
    )
}
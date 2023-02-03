import React from "react";
import styled from "styled-components";
import $ from "jquery";
import { useState } from 'react';

const Heading = styled.h1`
    margin-left: 10px;
    color: orange;
`;
const Container = styled.div`
    width: 870px;
    height: 350px;
    background-color: black;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
`;

const MainKeys = styled.div`
    display:flex;
    flex-wrap: wrap;
    padding: 10px;
`;

const Keycaps = styled.button`
    background-color: black;
    border: 1px solid orange;
    color: aliceblue;
    width: ${props => props.width ? props.width : '50px'};
    height: ${props => props.height ? props.height : '50px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '3px'};
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 3px;
`;

function SeventyFivePercent(){


    const[key, setKey] = useState("");
    const buttons = document.querySelectorAll('button');

    $("body").on('keydown', function(event){
        //console.log('KeyPressed: ' + event.code);
        setKey(event.code);
    });

    $("body").on('keyup', function(event){
        console.log('KeyPressed: ' + event.code);
        //setKey(event.code);

        buttons.forEach(button => {
            if(button.name == key){
                button.style.backgroundColor = "blue";
            }
        });
    });

    

    buttons.forEach(button => {
        if(button.name == key){
            button.style.backgroundColor = "red";
        }
    });

    return(
        <>
        <Heading>75% Keyboard</Heading>
        <Container>
            <MainKeys>
                <Keycaps name='Escape'>esc</Keycaps>
                            
                <Keycaps name='F1'>f1</Keycaps>
                <Keycaps name='F2'>f2</Keycaps>
                <Keycaps name='F3'>f3</Keycaps>
                <Keycaps name='F4'>f4</Keycaps>
                <Keycaps name='F5'>f5</Keycaps>
                <Keycaps name='F6'>f6</Keycaps>
                <Keycaps name='F7'>f7</Keycaps>
                <Keycaps name='F8'>f8</Keycaps>
                <Keycaps name='F9'>f9</Keycaps>
                <Keycaps name='F10'>f10</Keycaps>
                <Keycaps name='F11'>f11</Keycaps>
                <Keycaps name='F12'>f12</Keycaps>
                <Keycaps name='F10'>prtsc</Keycaps>
                <Keycaps name='F11'>pause</Keycaps>
                <Keycaps name='Delete'>del</Keycaps>

                <Keycaps name='Backquote'>`~</Keycaps>
                <Keycaps name='Digit1'>1!</Keycaps>
                <Keycaps name='Digit2'>2@</Keycaps>
                <Keycaps name='Digit3'>3#</Keycaps>
                <Keycaps name='Digit4'>4$</Keycaps>
                <Keycaps name='Digit5'>5%</Keycaps>
                <Keycaps name='Digit6'>6^</Keycaps>
                <Keycaps name='Digit7'>7&</Keycaps>
                <Keycaps name='Digit8'>8*</Keycaps>
                <Keycaps name='Digit9'>9{'('}</Keycaps>
                <Keycaps name='Digit0'>0{')'}</Keycaps>
                <Keycaps name='Minus'>-_</Keycaps>
                <Keycaps name='Equal'>+=</Keycaps>
                <Keycaps width = "104px" name='Backspace'>BackSpace</Keycaps>
                <Keycaps name='Home'>home</Keycaps>

                <Keycaps width = '75px' name='Tab'>tab</Keycaps>
                <Keycaps name='KeyQ'>Q</Keycaps>
                <Keycaps name='KeyW'>W</Keycaps>
                <Keycaps name='KeyE'>E</Keycaps>
                <Keycaps name='KeyR'>R</Keycaps>
                <Keycaps name='KeyT'>T</Keycaps>
                <Keycaps name='KeyY'>Y</Keycaps>
                <Keycaps name='KeyU'>U</Keycaps>
                <Keycaps name='KeyI'>I</Keycaps>
                <Keycaps name='KeyO'>O</Keycaps>
                <Keycaps name='KeyP'>P</Keycaps>
                <Keycaps name='BracketLeft'>{'[{'}</Keycaps>
                <Keycaps name='BracketRight'>{']}'}</Keycaps>
                <Keycaps width='78px' name='Backslash'>\|</Keycaps>
                <Keycaps name='End'>end</Keycaps>

                <Keycaps width = '90px' name='CapsLock'>caps</Keycaps>
                <Keycaps name='KeyA'>A</Keycaps>
                <Keycaps name='KeyS'>S</Keycaps>
                <Keycaps name='KeyD'>D</Keycaps>
                <Keycaps name='KeyF'>F</Keycaps>
                <Keycaps name='KeyG'>G</Keycaps>
                <Keycaps name='KeyH'>H</Keycaps>
                <Keycaps name='KeyJ'>J</Keycaps>
                <Keycaps name='KeyK'>K</Keycaps>
                <Keycaps name='KeyL'>L</Keycaps>
                <Keycaps name='Semicolon'>;:</Keycaps>
                <Keycaps name='Quote'>'"</Keycaps>
                <Keycaps width='114px' name='Enter'>enter</Keycaps>
                <Keycaps name='PageUp'>pgup</Keycaps>

                <Keycaps name='Insert'>ins</Keycaps>
                           
                            
                            
                            
                            

                <Keycaps width = '120px' name='ShiftLeft'>shift</Keycaps>
                <Keycaps name='KeyZ'>Z</Keycaps>
                <Keycaps name='KeyX'>X</Keycaps>
                <Keycaps name='KeyC'>C</Keycaps>
                <Keycaps name='KeyV'>V</Keycaps>
                <Keycaps name='KeyB'>B</Keycaps>
                <Keycaps name='KeyN'>N</Keycaps>
                <Keycaps name='KeyM'>M</Keycaps>
                <Keycaps name='Comma'>{',<'}</Keycaps>
                <Keycaps name='Period'>{'.>'}</Keycaps>
                <Keycaps name='Slash'>/?</Keycaps>
                <Keycaps width='85px' name='ShiftRight'>shift</Keycaps>
                <Keycaps name='ArrowUp'>↑</Keycaps>
                <Keycaps name='PageDown'>pgdn</Keycaps>

                <Keycaps width = '60px' name='ControlLeft'>ctrl</Keycaps>
                <Keycaps width = '60px' name='AltLeft'>alt</Keycaps>
                <Keycaps width = '70px' name='MetaLeft'>win</Keycaps>
                <Keycaps width = '297px' name='Space'>⎯</Keycaps>
                <Keycaps width = '60px' name='AltRight'>alt</Keycaps>
                <Keycaps width = '60px' name='ControlRight'>ctrl</Keycaps>
                <Keycaps width = '60px' name=''>fn</Keycaps>
                <Keycaps name='ArrowLeft'>←</Keycaps>
                <Keycaps name='ArrowDown'>↓</Keycaps>
                <Keycaps name='ArrowRight'>→</Keycaps>

                
            </MainKeys>
        </Container>
        </>
    )
}

export default SeventyFivePercent;
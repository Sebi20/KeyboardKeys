import React from 'react';
import styled from 'styled-components';
import $ from "jquery";
import { useState } from 'react';

const Heading = styled.h1`
    margin-left: 10px;
    color: orange;
`;
const Container = styled.div`
    width: 812px;
    height: 285px;
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



function SixtyPercent(){

    const[key, setKey] = useState("");

    $("body").on('keydown', function(event){
        console.log('KeyPressed: ' + event.code);
        setKey(event.code);
    });

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        if(button.name == key){
            button.style.backgroundColor = "red";
        }
    });
    
        return(
            <>
                <Heading>60% Keyboard</Heading>
                <Container>
                    <MainKeys>
                        <Keycaps name='Escape'>`~</Keycaps>
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
                        <Keycaps width = "100px" name='Backspace'>BackSpace</Keycaps>

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
                        <Keycaps width='75px' name='Backslash'>\|</Keycaps>

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
                        <Keycaps width='113px' name='Enter'>enter</Keycaps>

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
                        <Keycaps width='136px' name='ShiftRight'>shift</Keycaps>

                        <Keycaps width = '70px' name='ControlLeft'>ctrl</Keycaps>
                        <Keycaps width = '70px' name='AltLeft'>alt</Keycaps>
                        <Keycaps width = '70px' name='MetaLeft'>win</Keycaps>
                        <Keycaps width = '278px' name='Space'>⎯</Keycaps>
                        <Keycaps width = '70px' name='AltRight'>alt</Keycaps>
                        <Keycaps width = '70px' name='ContextMenu'>menu</Keycaps>
                        <Keycaps width = '70px' name='ControlRight'>ctrl</Keycaps>
                        <Keycaps width = '70px' name=''>fn</Keycaps>

                    </MainKeys>
                </Container>
            </>
        )
}

export default SixtyPercent;
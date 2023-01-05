import React from 'react';
import styled from 'styled-components';
import $ from "jquery";

import { useState } from 'react';


const Container = styled.div`
    width: 1195px;
    height: 350px;
    background-color: black;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
`;

const Keyboard = styled.div`
    padding: 15px;
    display:flex;
`;

const BaseBlock = styled.div`
    width: 800px;
`;

const NavigationBlock = styled.div`
    width: 160px;
`;

const NumberPadBlock = styled.div`
    margin-top: 55px;
    display: flex;
    flex-wrap: wrap;
    width: 300px;
`;

const Keycaps = styled.button`
    background-color: black;
    border: 1px solid orange;
    color: aliceblue;
    width: ${props => props.width ? props.width : '50px'};
    height: ${props => props.height ? props.height : '50px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '3px'};
    border-radius: 5px;
`;

const FunctionRow = styled.div`
    display: flex;
    margin-bottom: 5px;
`;

const MainKeys = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const TopNav = styled.div`
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center;
`;

const ScrollNav = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
    align-items: center;
    justify-content: center;
`;

const Arrows = styled.div`
    display:flex;
    align-items: center;
justify-content: center;
`;

const UpArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LeftNumPad = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 160px;
`;

const RightNumPad = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50px;
`;








function TKL(){

    const[key, setKey] = useState("");
    

    $("body").on('keydown', function(event){
        console.log('KeyPressed: ' + event.code);
        setKey(event.code);
    });

    const test = document.querySelectorAll('button');

    test.forEach(button => {
        if(button.name == key){
            button.style.backgroundColor = "red";
        }
    });

  

    return(
        <Container>
            <Keyboard>
                <BaseBlock>
                    <FunctionRow>
                        <Keycaps marginRight = '50px' name='Escape'>esc</Keycaps>
                        
                            <Keycaps name='F1'>f1</Keycaps>
                            <Keycaps name='F2'>f2</Keycaps>
                            <Keycaps name='F3'>f3</Keycaps>
                            <Keycaps marginRight = '31px' name='F4'>f4</Keycaps>
                            <Keycaps name='F5'>f5</Keycaps>
                            <Keycaps name='F6'>f6</Keycaps>
                            <Keycaps name='F7'>f7</Keycaps>
                            <Keycaps marginRight = "31px" name='F8'>f8</Keycaps>
                            <Keycaps name='F9'>f9</Keycaps>
                            <Keycaps name='F10'>f10</Keycaps>
                            <Keycaps name='F11'>f11</Keycaps>
                            <Keycaps name='F12'>f12</Keycaps>
                        
                    </FunctionRow>

                    <MainKeys>
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
                        <Keycaps width = '70px' name='AltLeft'>option</Keycaps>
                        <Keycaps width = '70px' name='MetaLeft'>command</Keycaps>
                        <Keycaps width = '278px' name='Space'>⎯</Keycaps>
                        <Keycaps width = '70px' name='MetaRight'>command</Keycaps>
                        <Keycaps width = '70px' name='AltRight'>option</Keycaps>
                        <Keycaps width = '70px' name=''>fn</Keycaps>
                        <Keycaps width = '70px' name='ControlRight'>ctrl</Keycaps>
                    </MainKeys>
                </BaseBlock>

                <NavigationBlock>
                    <TopNav>
                        <Keycaps></Keycaps>
                        <Keycaps></Keycaps>
                        <Keycaps></Keycaps>
                    </TopNav>

                    <ScrollNav>
                        <Keycaps name='Insert'>ins</Keycaps>
                        <Keycaps name='Home'>home</Keycaps>
                        <Keycaps name='PageUp'>pgup</Keycaps>
                        <Keycaps name='Delete'>del</Keycaps>
                        <Keycaps name='End'>end</Keycaps>
                        <Keycaps name='PageDown'>pgdn</Keycaps>
                    </ScrollNav>

                    <UpArrow>
                       <Keycaps name='ArrowUp'>↑</Keycaps>
                    </UpArrow>
                    
                    <Arrows>
                        <Keycaps name='ArrowLeft'>←</Keycaps>
                        <Keycaps name='ArrowDown'>↓</Keycaps>
                        <Keycaps name='ArrowRight'>→</Keycaps>
                    </Arrows>

                </NavigationBlock>

                <NumberPadBlock>
                    <LeftNumPad>
                        <Keycaps name='NumLock'>num</Keycaps>
                        <Keycaps name='NumpadDivide'>/</Keycaps>
                        <Keycaps name='NumpadMultiply'>*</Keycaps>
                        <Keycaps name='Numpad7'>7</Keycaps>
                        <Keycaps name='Numpad8'>8</Keycaps>
                        <Keycaps name='Numpad9'>9</Keycaps>
                        <Keycaps name='Numpad4'>4</Keycaps>
                        <Keycaps name='Numpad5'>5</Keycaps>
                        <Keycaps name='Numpad6'>6</Keycaps>
                        <Keycaps name='Numpad1'>1</Keycaps>
                        <Keycaps name='Numpad2'>2</Keycaps>
                        <Keycaps name='Numpad3'>3</Keycaps>
                        <Keycaps width = '104px' name='Numpad0'>0</Keycaps>
                        <Keycaps name='NumpadDecimal'>.</Keycaps>
                    </LeftNumPad>

                    <RightNumPad>
                        <Keycaps name='NumpadSubtract'>-</Keycaps>
                        <Keycaps height = '100px' name='NumpadAdd'>+</Keycaps>
                        <Keycaps height = '100px' name='NumpadEnter'>enter</Keycaps>
                    </RightNumPad>
                    
                </NumberPadBlock>
                
            </Keyboard>
            
        </Container>
    )
}

export default TKL;

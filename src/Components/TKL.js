import React from 'react';
import styled from 'styled-components';


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
    return(
        <Container>
            <Keyboard>
                <BaseBlock>
                    <FunctionRow>
                        <Keycaps marginRight = '50px'>esc</Keycaps>
                        
                            <Keycaps>f1</Keycaps>
                            <Keycaps>f2</Keycaps>
                            <Keycaps>f3</Keycaps>
                            <Keycaps marginRight = '31px'>f4</Keycaps>
                            <Keycaps>f5</Keycaps>
                            <Keycaps>f6</Keycaps>
                            <Keycaps>f7</Keycaps>
                            <Keycaps marginRight = "31px">f8</Keycaps>
                            <Keycaps>f9</Keycaps>
                            <Keycaps>f10</Keycaps>
                            <Keycaps>f11</Keycaps>
                            <Keycaps>f12</Keycaps>
                        
                    </FunctionRow>

                    <MainKeys>
                        <Keycaps>`~</Keycaps>
                        <Keycaps>1!</Keycaps>
                        <Keycaps>2@</Keycaps>
                        <Keycaps>3#</Keycaps>
                        <Keycaps>4$</Keycaps>
                        <Keycaps>5%</Keycaps>
                        <Keycaps>6^</Keycaps>
                        <Keycaps>7&</Keycaps>
                        <Keycaps>8*</Keycaps>
                        <Keycaps>9{'('}</Keycaps>
                        <Keycaps>0{')'}</Keycaps>
                        <Keycaps>-_</Keycaps>
                        <Keycaps>+=</Keycaps>
                        <Keycaps width = "100px">BackSpace</Keycaps>

                        <Keycaps width = '75px'>tab</Keycaps>
                        <Keycaps>Q</Keycaps>
                        <Keycaps>W</Keycaps>
                        <Keycaps>E</Keycaps>
                        <Keycaps>R</Keycaps>
                        <Keycaps>T</Keycaps>
                        <Keycaps>Y</Keycaps>
                        <Keycaps>U</Keycaps>
                        <Keycaps>I</Keycaps>
                        <Keycaps>O</Keycaps>
                        <Keycaps>P</Keycaps>
                        <Keycaps>{'[{'}</Keycaps>
                        <Keycaps>{']}'}</Keycaps>
                        <Keycaps width='75px'>\|</Keycaps>

                        <Keycaps width = '90px'>caps</Keycaps>
                        <Keycaps>A</Keycaps>
                        <Keycaps>S</Keycaps>
                        <Keycaps>D</Keycaps>
                        <Keycaps>F</Keycaps>
                        <Keycaps>G</Keycaps>
                        <Keycaps>H</Keycaps>
                        <Keycaps>J</Keycaps>
                        <Keycaps>K</Keycaps>
                        <Keycaps>L</Keycaps>
                        <Keycaps>;:</Keycaps>
                        <Keycaps>'"</Keycaps>
                        <Keycaps width='113px'>enter</Keycaps>

                        <Keycaps width = '120px'>shift</Keycaps>
                        <Keycaps>Z</Keycaps>
                        <Keycaps>X</Keycaps>
                        <Keycaps>C</Keycaps>
                        <Keycaps>V</Keycaps>
                        <Keycaps>B</Keycaps>
                        <Keycaps>N</Keycaps>
                        <Keycaps>M</Keycaps>
                        <Keycaps>{',<'}</Keycaps>
                        <Keycaps>{'.>'}</Keycaps>
                        <Keycaps>/?</Keycaps>
                        <Keycaps width='136px'>shift</Keycaps>

                        <Keycaps width = '70px'>ctrl</Keycaps>
                        <Keycaps width = '70px'>option</Keycaps>
                        <Keycaps width = '70px'>command</Keycaps>
                        <Keycaps width = '278px'>⎯</Keycaps>
                        <Keycaps width = '70px'>command</Keycaps>
                        <Keycaps width = '70px'>option</Keycaps>
                        <Keycaps width = '70px'>fn</Keycaps>
                        <Keycaps width = '70px'>ctrl</Keycaps>
                    </MainKeys>
                </BaseBlock>

                <NavigationBlock>
                    <TopNav>
                        <Keycaps></Keycaps>
                        <Keycaps></Keycaps>
                        <Keycaps></Keycaps>
                    </TopNav>

                    <ScrollNav>
                        <Keycaps>ins</Keycaps>
                        <Keycaps>home</Keycaps>
                        <Keycaps>pgup</Keycaps>
                        <Keycaps>del</Keycaps>
                        <Keycaps>end</Keycaps>
                        <Keycaps>pgdn</Keycaps>
                    </ScrollNav>

                    <UpArrow>
                       <Keycaps>↑</Keycaps>
                    </UpArrow>
                    
                    <Arrows>
                        <Keycaps>←</Keycaps>
                        <Keycaps>↓</Keycaps>
                        <Keycaps>→</Keycaps>
                    </Arrows>

                </NavigationBlock>

                <NumberPadBlock>
                    <LeftNumPad>
                        <Keycaps>num</Keycaps>
                        <Keycaps>/</Keycaps>
                        <Keycaps>*</Keycaps>
                        <Keycaps>7</Keycaps>
                        <Keycaps>8</Keycaps>
                        <Keycaps>9</Keycaps>
                        <Keycaps>4</Keycaps>
                        <Keycaps>5</Keycaps>
                        <Keycaps>6</Keycaps>
                        <Keycaps>1</Keycaps>
                        <Keycaps>2</Keycaps>
                        <Keycaps>3</Keycaps>
                        <Keycaps width = '104px'>0</Keycaps>
                        <Keycaps>.</Keycaps>
                    </LeftNumPad>

                    <RightNumPad>
                        <Keycaps>-</Keycaps>
                        <Keycaps height = '100px'>+</Keycaps>
                        <Keycaps height = '100px'>enter</Keycaps>
                    </RightNumPad>
                    
                </NumberPadBlock>
                
            </Keyboard>
            
        </Container>
    )
}

export default TKL;

import styled from "styled-components";

export const Container = styled.div 
`
    width: 100%;
    height: 70px
    background: #999;
    display: flex;

`

export const LeftSide = styled.div 
`
    width: 50%;
    height: 70px;
    background: #20295F;
    border-bottom: 5px solid #EE6B26;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img{
        width: 100px;
        height: 40px;
        
    }

    
`

export const RightSide = styled.div
`
    width: 50%;
    height: 70px;
    background: #20295F;
    border-bottom: 5px solid #EE6B26;
    display: flex;
    align-items: center;
    justify-content: flex-end;


    a, button {
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #EE6B26;
        }
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;

    }

    #notification {
        img {
            width: 25px;
            height: 30px
        }

        span {
            background: #FFF;
            color: #EE6B26;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px;
        }

        &:hover{
            opacity: 0.5;
        }

        button {
            
        }
    }

    

    
`
import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Search } from '@material-ui/icons';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <HeaderContainer>
            {/* Header left */}
            <HeaderLeft>
                <HeaderAvatar
                // TODO: Add onclick

                />
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderSearch>
                <Search />
                <input placeholder="Search PapaFam" />
            </HeaderSearch>

            {/* Header Right */}
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;


const HeaderSearch = styled.div`
    flex: 0.4;
    display: flex;
    text-align: center;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`;


const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    color: white;
    background-color: var(--slack-color)
`
const HeaderLeft = styled.div`
    display: flex;
    text-align: center;
    flex: 0.3;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;
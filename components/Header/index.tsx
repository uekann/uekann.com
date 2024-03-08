import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import styled from "styled-components";

const StyledHeader = styled.div`
    // background-color: black;
    background-color: #242426;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    width: 100vw;
    height: 150px;
    color: rgb(255, 255, 255, 0.81);
    align-items: center;
    @media (max-width: 834px) {
        height: 100px;
    }
    @media (max-width: 393px) {
        padding: 10px;
        height: 80px;
    }
`

const StyledTitle = styled.div`
    padding-left: 40px;
    margin: 0;
    display: flex;
    align-items: center;
    @media (max-width: 834px) {
        width: 35vw;
        padding-left: 4vw;
    }
    @media (max-width: 393px) {
        width: 50vw;
        padding-left: 2vw;
    }
`

const TitleImage = styled(Image)`
    width: 100%;
    vertical-align: middle;
`

const StyledContact = styled.div`
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: 10px;
    padding-right: 40px;
    @media (max-width: 834px) {
        display: none;
    }
`

const LeftContactIcon = styled(Link)`
    margin-left: 0;
    margin-right: auto;
`

const CenterContactIcon = styled(Link)`
    margin-left: auto;
    margin-right: auto;
`

const RightContactIcon = styled(Link)`
    margin-right: 0;
    margin-left: auto;
`


const Header = () => (
    <StyledHeader>
        <StyledTitle>
            <Link href="/">
                <TitleImage src="/title_logo.svg" alt="uekann" width={420} height={110} />
            </Link>
        </StyledTitle>
        <StyledContact>
            <LeftContactIcon href="https://www.instagram.com/uekan8">
                <Image src="/sns/Instagram.svg" alt="Instagram" width={37} height={37} />
            </LeftContactIcon>
            <CenterContactIcon href="https://github.com/uekann">
                <Image src="/sns/GitHub.svg" alt="GitHub" width={37} height={37} />
            </CenterContactIcon>
            <RightContactIcon href="https://zenn.dev/uekann">
                <Image src="/sns/Zenn.svg" alt="Zenn" width={37} height={37} />
            </RightContactIcon>
        </StyledContact>
    </ StyledHeader>
);

export default Header;

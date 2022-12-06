import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 350px;
`

export const Column = styled.div`
    flex: 1;
`

export const ColumnTermos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    margin-top: 20px;
`

export const RowLogin = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: left;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 80%;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;
`

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const SubTitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`


export const AceitoTermos = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    color: #FFFFFF;
`

export const TextLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #FFFFFF;
`
export const Login = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    cursor: pointer;

    color: #23DD7A;
`
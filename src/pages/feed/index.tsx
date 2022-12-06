import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import {Container, Column, Title, TitleHighlight} from './styles'

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title> Feed </Title>
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight> #RANKING DA SEMANA </TitleHighlight>
                <UserInfo percentual={89} nome="Victor Barboza" image="https://wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"/>
                <UserInfo percentual={55} nome="Victor Barboza" image="https://wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"/>
                <UserInfo percentual={12} nome="Victor Barboza" image="https://wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"/>
                <UserInfo percentual={78} nome="Victor Barboza" image="https://wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"/>
                <UserInfo percentual={99} nome="Victor Barboza" image="https://wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"/>
            </Column>
        </Container>
    </>)
}

export { Feed }
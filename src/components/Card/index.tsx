import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'

import { CardContainer, ImageBackground, Content, UserInfo, UserPicture, PostInfo, HasInfo, } from './styles'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cover-photo%2Cbackground%2C-technology-design-template-708b0881e40d33376afe161e5a38d9bc_screen.jpg?ts=1593459050"/>
      <Content>
        <UserInfo>
          <UserPicture src='https://wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg' />
         <div>
          <h4> Victor Barboza </h4>
          <p> Há 6 minutos </p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }
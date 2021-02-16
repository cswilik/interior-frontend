import React from 'react'
import { Header, Container, Grid, Icon, Menu} from 'semantic-ui-react'
import styled from 'styled-components';


function HomePage() {
    return (
        <div >
        <Grid >
            <Grid.Row columns={16} className="home-page-header">
            <HeaderTitle >
                <h1 className="main-title">INTERIOR</h1>
            </HeaderTitle>
            </Grid.Row>
        
             <Grid.Row columns={5}>
             <Grid.Column width={16}>
                 <Container textAlign= "left">
                     
                    {/* <h3>Learn about our beloved National Parks </h3>
                    <h4>Tell us about your travels</h4> */}
                    <HomePageInfo> A travel app designed to track your travels to America's National Parks</HomePageInfo>
                    <b></b>
                    <b></b>
                    {/* <HomePageInfo> Come learn about our beloved parks and plan your next adventure!</HomePageInfo> */}
                    
                 </Container>
             </Grid.Column>
             </Grid.Row>
             <Grid.Row columns={2}>
                <Container textAlign= "center" >
                    <p>Made with <Icon name='heart' color='red'/> by Chelsey Swilik </p>
                    <Menu className="borderless" >
                        <Menu.Item  position="right" href="https://www.instagram.com/cswilik/?hl=en" > <Icon className='instagram' /></Menu.Item><Menu.Item href="https://github.com/cswilik"><Icon className='github'/></Menu.Item><Menu.Item position="left" href="https://www.linkedin.com/in/chelsey-swilik-2b9033203/"><Icon className='linkedin'/></Menu.Item>
                    </Menu>
                 </Container>
             </Grid.Row>
         </Grid>
             
     </div>
    )
}


const HeaderTitle = styled.div`
    width: 100%;
    text-align: left;
    padding-top: 28%

`
const HomePageInfo = styled.p`
    font-family: 'Oxygen', sans-serif;
    margin-bottom: 5%
    
`
export default HomePage;
import React from 'react'
import { Header, Container, Grid, Icon, Menu} from 'semantic-ui-react'


function HomePage() {
    return (
        <div >
        <Grid celled>
            <Grid.Row columns={16} className="home-page-header">
            <Container textAlign='left'  >
                <Header as='h1'>Interior</Header>
            </Container>
            </Grid.Row>
        
             <Grid.Row columns={5}>
             <Grid.Column width={16}>
                 <Container textAlign= "left">
                     
                    <h1>Learn about our beloved National Parks and tell us about your visits</h1>
                   
                 </Container>
             </Grid.Column>
             </Grid.Row>
             <Grid.Row columns={2}>
                <Container textAlign= "center">
                    <p>Made with <Icon name='heart' color='red'/> by Chelsey Swilik </p>
                    <Menu className="borderless">
                        <Menu.Item position="right" href="https://www.instagram.com/cswilik/?hl=en" > <Icon className='instagram' /></Menu.Item><Menu.Item href="https://github.com/cswilik"><Icon className='github'/></Menu.Item><Menu.Item position="left" href="https://www.linkedin.com/in/chelsey-swilik-2b9033203/"><Icon className='linkedin'/></Menu.Item>
                    </Menu>
                 </Container>
             </Grid.Row>
         </Grid>
             
     </div>
    )
}

export default HomePage;
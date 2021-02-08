import React from 'react'
import { Header, Container, Grid, Icon} from 'semantic-ui-react'


function HomePage() {
    return (
        <div >
        <Header className="home-page-header" textAlign="center" >
         <Header.Content>Interior</Header.Content>
         </Header>
        <Grid celled>
             <Grid.Row columns={5}>
             <Grid.Column width={16}>
                 <Container textAlign= "left">
                     
                    <h1>Enjoy the parks</h1>
                   
                 </Container>
             </Grid.Column>
             </Grid.Row>
             <Grid.Row columns={2}>
                <Container textAlign= "center">
                    <p>Made with <Icon name='heart' color='red'/> by Chelsey Swilik </p>
                    <span><Icon className='instagram'/>|<Icon className='github'/>|<Icon className='linkedin'/></span>
                 </Container>
             </Grid.Row>
         </Grid>
             
     </div>
    )
}

export default HomePage;
import React, { useEffect } from 'react'
import { Container, Grid, Icon, Menu} from 'semantic-ui-react'
import { setCurrentUser } from '../../Redux/user'
import { useDispatch} from 'react-redux'


function HomePage() {
    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch("http://localhost:3000/dashboard", {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(r => r.json())
        .then(data => dispatch(setCurrentUser(data)))
    }, [dispatch])






    return (
        <div >
        <Grid >
            <Grid.Row columns={16} className="home-page-header">
            <div className="header-div" >
                <h1 className="main-title">INTERIOR</h1>
            </div>
            </Grid.Row>
        
             <Grid.Row columns={5}>
             <Grid.Column width={16}>
                 <Container textAlign= "left">
                     
                    {/* <h3>Learn about our beloved National Parks </h3>
                    <h4>Tell us about your travels</h4> */}
                    <p className="header-info"> A travel app designed to track your travels to America's National Parks</p>
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


export default HomePage;
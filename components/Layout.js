import Header from './Header'
import Container from "@material-ui/core/Container"
import Copyright from './Copyright'

const layout = props => {
    return (
        <div>
          <Container maxWidth="lg">  
            <Header />
            {props.children}
            <Copyright />
          </Container>
        </div>
    );
};

export default layout;
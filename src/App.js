import {Navbar,Nav,Container,Carousel,Card} from 'react-bootstrap';
import './App.css';



function App() {
  return (
    <div className="App">
      
      <h1>The Fitness FaCtory</h1>
      <Card>
  <Card.Body> Want to know the secrets to getting a fit-as-hell body in record time? We did too, so we went straight to research, personal trainers, exercise physiologists, and fitness instructors to round up the best workout tips to kick a fitness routine into high gear.</Card.Body>
</Card>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Contact</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://media.gqmagazine.fr/photos/5fca4467f795cc114336359c/16:9/w_2560%2Cc_limit/GettyImages-982408932-(1).jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>No Equipment Workout</h3>
      <p>But if you're working out at home with no equipment except your own body, you might wonder whether you'll still see gains—or, frankly, lose some you worked hard to get previously. The simple answer: You certainly can still build muscle without all those weight plates and barbells</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://media.gqmagazine.fr/photos/61a0adb2ddfa16e9c15f3651/16:9/w_2560%2Cc_limit/photo-1517836357463-d25dfeac3438.jpeg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Dumbbells And Barbell Workout</h3>
      <p>Both dumbbells and barbells are free weights. Compared to gym machines, they force your muscles to work harder, require greater stability and balance, and allow for movement in multiple planes. Machines, on the other hand, provide a more stable environment and greater linear and compound variable resistance.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://evofitness.ch/wp-content/uploads/2019/06/Battle-ropes-Cordes-ondulatoires-EVO-Fitness-1200x675.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Cardio Workout</h3>
      <p>Even if you don't cut back on your calorie consumption, a half hour of cardio exercise a day could result in losing at least a pound a month (one pound equals about 3,500 calories). Exercising more frequently and making dietary changes could result in even greater weight loss.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default App;

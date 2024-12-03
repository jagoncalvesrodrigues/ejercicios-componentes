import CalculateCircleArea from "./components/calculateCircleArea/calculateCircleArea";
import CalculateSquareArea from "./components/calculateSquareArea/calculateSquareArea";
import CalculateTriangleArea from "./components/calculateTriangleArea/calculateTriangleArea";
import CelsiusToFahrenheit from "./components/celsiusToFahrenheit/celsiusToFahrenheit";
import FahrenheitToCelsius from "./components/fahrenheitToCelsius/fahrenheitToCelsius";
import SayHello from "./components/sayHello/sayHello";
import TotalPrice from "./components/totalPrice/totalPrice";
import WriteMessage from "./components/writeMessage/writeMessage";

const title = <h1>Curso de React</h1>;

console.log(title)

const App = () => {
	return <>
		<SayHello text="Juan"/>
		<CalculateSquareArea  number={8}/>
		<CalculateTriangleArea  base={9} height={9}/>
		<CalculateCircleArea radio={9}/>
		<CelsiusToFahrenheit celsius={30}/>
		<FahrenheitToCelsius farenh={90}/>
		<TotalPrice price={80}/>
		<WriteMessage name='Juan' material='Aluminio' size='XL' note='Envio por Galicia'/>
	</>
	;
};

export default App;

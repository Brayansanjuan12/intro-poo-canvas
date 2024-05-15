
// ------------------------------------- PRIMER CANVAS ----------------------------------------------------------- //

const canvasOOP = document.getElementById("canvasOOP");
const ctx = canvasOPP.getContext("2d");

canvasOPP.height = "200"
canvasOPP.width = "300" 
canvasOPP.style.background = "green";

class Circle {
    // Carga los valores determinados del objeto
    constructor(x, y, radius, color, text, backcolor) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.backcolor = backcolor;
    }

    draw(context) {
        context.beginPath();

        // Rellena el círculo con el color de fondo
        context.fillStyle = this.backcolor;
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.fill();

        context.strokeStyle = this.color;
        context.lineWidth = 4; // Para poner más grosor a la línea  
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        
        context.textAlign = "center"; // Alineación horizontal 
        context.textBaseline = "middle"; // Alineación vertical
        context.font = "bold 20px Arial";
        context.fillStyle = "black"; // Cambia el color del texto si lo deseas

        // Renderiza un texto en el centro del objeto
        context.fillText(this.text, this.posX, this.posY);
        context.closePath();
    }
}

// Crear el círculo con un color de fondo específico y dibujarlo en el canvas
let miCirculo = new Circle(150, 100, 50, 'blue', 'Tec', 'yellow');
miCirculo.draw(ctx);

// ------------------------------------- SEGUNDO CANVAS ----------------------------------------------------------- //

const canvasMovi = document.getElementById("canvasmovi");
const ctxMovi = canvasMovi.getContext("2d");

canvasMovi.height = 200; // No es necesario usar comillas para números
canvasMovi.width = 300; // No es necesario usar comillas para números
canvasMovi.style.background = "orange";

let randomX = Math.random() * canvasMovi.width;
let randomY = Math.random() * canvasMovi.height;
let randomRadius = Math.floor(Math.random() * 100 + 30);

let miCirculoMovimiento = new Circle(randomX, randomY, randomRadius, 'black', 'Tec','blue');
miCirculoMovimiento.draw(ctxMovi);

// ---------------------------------- TERCER CANVAS -------------------------------------------------- //

function validPlacement(x, y, radius, canvas) {
    return (x - radius > 0 && x + radius < canvas.width && 
            y - radius > 0 && y + radius < canvas.height);
}

const canvasMultiple = document.getElementById("canvasMultiple");
const ctxMultiple = canvasMultiple.getContext("2d");

canvasMultiple.width = 300;
canvasMultiple.height = 200;
canvasMultiple.style.background = "yellow";
let arrayCircle = [];

// Generar y dibujar círculos
for (let i = 0; i < 10; i++) {
    let randomRadius, randomX, randomY;

    do {
        randomRadius = Math.floor(Math.random() * 30 + 30);
        randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;
        randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius;
    } while (!validPlacement(randomX, randomY, randomRadius, canvasMultiple));

    let newCircle = new Circle(randomX, randomY, randomRadius, "blue", i + 1, 'rgb(88, 242, 32)');
    arrayCircle.push(newCircle);
    newCircle.draw(ctxMultiple);
}
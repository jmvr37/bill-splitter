
const http = require('http');
const { restart } = require('nodemon');
const queryParser =require('./parseQuery');



const server = http.createServer((req, res) => {
    const [url,query]=req.url.split('?')

    result='';
    if (query){  
        req.query=queryParser(query); 
        const amount1 = Number(req.query.amount);
        const tax1 = Number(req.query.tax);
        const people = Number(req.query.numberPeople)
        console.log(req.query);
    
        result = ((amount1 + tax1) /  people);

    }

    if (url === '/bill'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(
            `
            <main>
            <h1>Bill Splitter</h1>
            <form>
            <div>
            <label for="amount"> amount </label>
            <input type="number" name="amount">
            </div>
            <div>
            <label for="tax"> tax </label>
            <input type="number" name="tax">
            </div>
            <div>
            <label for="numberPeople"> number of people </label>
            <input type="number" name="numberPeople">
            </div>
            <input type="submit" value="Send">
            </form>
            </main>
            <h1>Result= ${result ? result : 'Not valid' }</h1>
            `
            
        )
        return res.end();
    }
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write("HELLO WORLD");
  res.end();
});


const PORT = 3000;
const DOMAIN = 'localhost';

server.listen(PORT, DOMAIN, () => {
  console.log('server listneing')
});
















// // const app = express();
// const server = http.createServer((request, res) =>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('bill splitter');
//    return res.end();
// })



// get('/bill', (request, res) => response.render('bill'))

// get('/outcome', (request, res) => {

//     const { amount, tax, numberPeople } = request.query
//     const totalAmount = amount
//     const totalTax = tax
//     const toalPeople = numberPeople
    
//     response.render('./bill',{
//         totalAmount
//     })

// })



// const PORT = 3000;
// const DOMAIN = 'localhost';

// server.listen(PORT, DOMAIN, () =>{
//     console.log('listening on port' + PORT);
// })


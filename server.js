const express = require("express")
let app = express()
const port = 8080


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('public'))
app.use('/css', express.static(__dirname+ 'public/css'))
app.use('/css', express.static(__dirname+ 'public/img'))

app.get('/', (req,res)=>{
    res.render("home.ejs")
})

app.get('/contact',(req,res)=>{
    res.render("contact.ejs")
})

app.get('/c', (req,res) =>{
    res.render("c#.ejs")
})

app.get('/js', (req,res)=>{
    res.render('js.ejs')
})

app.get('/html_css', (req,res)=>{
    res.render('html.ejs')
})


app.listen(port, () => console.info('Listening to port 8080'))
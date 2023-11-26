const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const EstudianteDAO = require('./public/js/dao/EstudianteDAO.js')
const PisoDAO = require('./public/js/dao/PisoDAO.js')

const app = express()
const port = 3000

// Definir opciones de la base de datos
const cliente = {
  user: 'postgres',
  password: 'asdf',
  host: 'localhost',
  port: 5432,
  database: 'together',
}

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

const estudianteDAO = new EstudianteDAO(cliente)
const pisoDAO = new PisoDAO(cliente)

let user = {  }

app.get('/', (req, res) => {
  user = { }
  res.render('index', { user })
})

app.get('/user', (req, res) => {
  res.json(user)
})

app.get('/register', (req, res) => {
  res.render('crear-cuenta')
})

app.post('/register', async (req, res) => {

  try {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    
    const data = {
      nombre: req.body.nombre,
      correo: req.body.correo,
      telefono: req.body.telefono,
      edad: req.body.edad,
      profesion: req.body.profesion,
      descripcion: req.body.descripcion,
      password: hashedPassword,
    }

    const insertarVO = await estudianteDAO.insertar(data)
    user = { name: insertarVO.name, correo: insertarVO.correo }
    res.status(201).send()
  } catch {
    console.error('Error al rellenar el formulario de registro')
    res.status(500).send('Error al registrarse')
  }
})

app.get('/login', (req, res) => {
  res.render('iniciar-sesion')
})

app.post('/login', async (req, res) => {
  try {
    const userTest = await estudianteDAO.obtenerPorId(req.body.correo)
    bcrypt.compare(req.body.password, userTest.passwd, (err, data) => {
      if (err) throw err

      if (data) {
          user = { name: userTest.nombre, correo: userTest.correo }
          return res.status(200).json({ msg: "Login success" })
      } else {
          return res.status(401).json({ msg: "Invalid credencial" })
      }
    })
  } catch {
    console.error('Error al iniciar sesion')
    res.status(500).send('No se ha podido iniciar sesion')
  }
})

app.get('/inicio', (req, res) => {
  res.render('inicio', { user })
})

app.get('/buscar-pisos', async (req, res) => {

  try {
    const pisos = await pisoDAO.obtenerTodos()
    res.render('buscar-pisos', { data: pisos })
  } catch (error) {
    console.error('Error al mostrar pisos', error)
    res.status(500).send('Error al mostrar pisos')
  }

})

app.get('/buscar-companeros', async (req, res) => {
  try {
    const companeros = await estudianteDAO.obtenerTodos()
    res.render('buscar-companeros', { data: companeros })
  } catch (error) {
    console.error('Error al mostrar companeros', error)
    res.status(500).send('Error al mostrar companeros')
  }
})

app.get('/insertar-anuncio', (req, res) => {
  res.render('insertar-anuncio-piso')
})

app.post('/insertar-anuncio', async (req, res) => {

  try{

    const comprobarPiso = await pisoDAO.obtenerPorId(user.correo)
    console.log(comprobarPiso)

    if (typeof comprobarPiso !== 'undefined') {
      res.status(500).send('Ya existe un piso creado por este usuario')
      return
    }

    const data = {
      correo : user.correo,
      ubicacion : req.body.ubicacion,
      precio : req.body.precio,
      habitaciones : req.body.habitaciones,
      descripcion : req.body.descripcion
    }

    const insertarVO = await pisoDAO.insertar(data)
    res.status(201).send()

  } catch {
    res.status(500).send()
  }

})

app.post('/logout', (req, res) => {
  user = {}
  res.status(200).send()
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
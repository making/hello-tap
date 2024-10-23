const express = require('express')
const app = express()
const port = process.env.PORT ? Number(process.env.PORT) : 3000

app.get('/', (req, res) => {
  res.send(`
████████╗ █████╗ ███╗   ██╗███████╗██╗   ██╗
╚══██╔══╝██╔══██╗████╗  ██║╚══███╔╝██║   ██║
   ██║   ███████║██╔██╗ ██║  ███╔╝ ██║   ██║
   ██║   ██╔══██║██║╚██╗██║ ███╔╝  ██║   ██║
   ██║   ██║  ██║██║ ╚████║███████╗╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝ ╚═════╝ 
                                            
running on ${process.env.HOSTNAME}
`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

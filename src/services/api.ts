import axios from "axios"


export const api = axios.create({
    baseURL: 'https://backend-git-github-week.herokuapp.com'
})

// BaseURL: https://backend-git-github-week.herokuapp.com/

// POST / users - cadastrar usuário 
// GET /users - listar usuários 
// POST /auth - logar

// sir.costa@yahoo.com.br
// 123456
import Tema from './Tema'

interface Postagem{

    id: Number;
    titulo: string;
    texto: string;
    tema?: Tema| null

}

export default Postagem;
const api = require('../api');


const get_list = async(req, res) => {
    const categoria = req.params.categoria;
    const publicacoes = await api.list('publicacoes/' + categoria);
    res.render('publicacoes/indexCat', { publicacoes, categoria });
}

const get_nova = async(req, res) => {
    const categorias = await api.list('categorias');
    console.log(categorias)
    res.render('publicacoes/adicionar', { data: null, categorias: categorias });
}

const post_nova = async(req, res) => {
    await api.create('publicacoes/' + req.body.categoria, { titulo: req.body.titulo, publicacao: req.body.publicacao });
    res.redirect('/publicacoes')

}

const excluir = async(req, res) => {
    const apagar = await api.apagar('publicacoes', req.params.id);
    console.log('Item apagado');
    res.redirect('/publicacoes');
}

const get_editar = async(req, res) => {
    const categoria = req.params.categoria
    const publicacao = await api.get('publicacoes/' + categoria, req.params.id)
    console.log(publicacao);
    res.render('publicacoes/editar', { publicacao, categoria });
}

const post_editar = async(req, res) => {
    await api.update(`publicacoes/${req.body.categoria}`, req.params.id, {
        titulo: req.body.titulo,
        publicacao: req.body.publicacao
    });
    res.redirect('/publicacoes');
}

module.exports = {
    get_list,
    get_nova,
    post_nova,
    excluir,
    get_editar,
    post_editar
}
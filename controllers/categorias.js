const api = require('../api');

const get_list = async(req, res) => {
    const categorias = await api.list('categorias');
    res.render('categorias/index', { categorias });
}

const get_nova = (req, res) => {
    res.render('categorias/adicionar', { data: null });
}

const post_nova = async(req, res) => {
    await api.create('categorias', { categoria: req.body.categoria });
    res.render('categorias/adicionar', { data: req.body.categoria });
}

const excluir = async(req, res) => {
    const apagar = await api.apagar('categorias', req.params.id);
    //Acho que pra apagar é isso
    await api.apagar('publicacoes', req.params.id);
    console.log('Item apagado');
    console.log(apagar);
    res.redirect('/categorias');
}

const get_editar = async(req, res) => {
    const categoria = await api.get('categorias', req.params.id)
    console.log(categoria);
    res.render('categorias/editar', { categoria });
}

const post_editar = async(req, res) => {
    await api.update('categorias', req.params.id, {
        categoria: req.body.categoria
    });
    res.redirect('/categorias');
}

module.exports = {
    get_list,
    get_nova,
    post_nova,
    excluir,
    get_editar,
    post_editar
}
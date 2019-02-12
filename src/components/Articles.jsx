import React, { Component } from 'react'
const articles = [
  {
    title: 'Computador e Placas Antigas Nvidia em Pleno 2019',
    author: 'Cézar Campos',
    resume: 'Se você é um infeliz que possui um computador antigo e, o que é pior, uma placa de vídeo Nvidia, então bem vindo ao clube. Sim, está difícil achar uma distribuição Linux estável e que funcione bem nestas placas que usam o driver Legacy 304. A maioria das distros já deixaram o suporte e tiraram de seus repositórios. Pesquisei bem a fundo, porque isso acontece e como sobreviver em 2019, tendo um PC antigo com placas de vídeo da Nvidia. Mostrarei neste artigo o problema e como configurar os drivers em uma distro bonitinha.'
  },
  {
    title: 'Computador e Placas Antigas Nvidia em Pleno 2019',
    author: 'Cézar Campos',
    resume: 'Se você é um infeliz que possui um computador antigo e, o que é pior, uma placa de vídeo Nvidia, então bem vindo ao clube. Sim, está difícil achar uma distribuição Linux estável e que funcione bem nestas placas que usam o driver Legacy 304. A maioria das distros já deixaram o suporte e tiraram de seus repositórios. Pesquisei bem a fundo, porque isso acontece e como sobreviver em 2019, tendo um PC antigo com placas de vídeo da Nvidia. Mostrarei neste artigo o problema e como configurar os drivers em uma distro bonitinha.'
  },
  {
    title: 'Computador e Placas Antigas Nvidia em Pleno 2019',
    author: 'Cézar Campos',
    resume: 'Se você é um infeliz que possui um computador antigo e, o que é pior, uma placa de vídeo Nvidia, então bem vindo ao clube. Sim, está difícil achar uma distribuição Linux estável e que funcione bem nestas placas que usam o driver Legacy 304. A maioria das distros já deixaram o suporte e tiraram de seus repositórios. Pesquisei bem a fundo, porque isso acontece e como sobreviver em 2019, tendo um PC antigo com placas de vídeo da Nvidia. Mostrarei neste artigo o problema e como configurar os drivers em uma distro bonitinha.'
  }
]

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.setState({articles})
  }

  render() {
    return (
      <div>
        Artigos
        {this.state.articles.map((article, index) =>
          <div key={index}>
            <span>{article.title}</span>
            <span>{article.author}</span>
            <span>{article.resume}</span>
          </div>
        )}
      </div>
    )
  }
}

export default Articles;
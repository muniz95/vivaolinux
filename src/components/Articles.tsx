import React, { Component } from "react";
import styled, { StyledComponent } from "styled-components";
const articles: any[] = [
  {
    author: "Cézar Campos",
    id: 1,
    resume: `Se você é um infeliz que possui um computador antigo e, o que é pior,
      uma placa de vídeo Nvidia, então bem vindo ao clube.
      Sim, está difícil achar uma distribuição Linux estável e que funcione bem nestas placas
      que usam o driver Legacy 304. A maioria das distros já deixaram o suporte e tiraram
      de seus repositórios. Pesquisei bem a fundo, porque isso acontece e como sobreviver em 2019,
      tendo um PC antigo com placas de vídeo da Nvidia. Mostrarei neste artigo o problema
      e como configurar os drivers em uma distro bonitinha.`,
    title: "Computador e Placas Antigas Nvidia em Pleno 2019",
  },
  {
    author: "Cézar Campos",
    id: 2,
    resume: `Se você é um infeliz que possui um computador antigo e, o que é pior,
      uma placa de vídeo Nvidia, então bem vindo ao clube.
      Sim, está difícil achar uma distribuição Linux estável e que funcione bem nestas placas
      que usam o driver Legacy 304. A maioria das distros já deixaram o suporte e tiraram
      de seus repositórios. Pesquisei bem a fundo, porque isso acontece e como sobreviver em 2019,
      tendo um PC antigo com placas de vídeo da Nvidia. Mostrarei neste artigo o problema
      e como configurar os drivers em uma distro bonitinha.`,
    title: "Computador e Placas Antigas Nvidia em Pleno 2019",
  },
  {
    author: "Cézar Campos",
    id: 3,
    resume: `Se você é um infeliz que possui um computador antigo e, o que é pior,
      uma placa de vídeo Nvidia, então bem vindo ao clube.
      Sim, está difícil achar uma distribuição Linux estável e que funcione bem nestas placas
      que usam o driver Legacy 304. A maioria das distros já deixaram o suporte e tiraram
      de seus repositórios. Pesquisei bem a fundo, porque isso acontece e como sobreviver em 2019,
      tendo um PC antigo com placas de vídeo da Nvidia. Mostrarei neste artigo o problema
      e como configurar os drivers em uma distro bonitinha.`,
    title: "Computador e Placas Antigas Nvidia em Pleno 2019",
  },
];

interface IState {
  articles: any[];
}

const ArticleComponent: StyledComponent<"div", any, {}> = styled.div`
`;

class Articles extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  public componentDidMount(): void {
    this.setState({articles});
  }

  public render(): JSX.Element {
    return (
      <div>
        Artigos
        {this.state.articles.map((article: any) =>
          <ArticleComponent key={article.id}>
            <h3>{article.title}</h3>
            <h6>Por: {article.author}</h6>
            <span>{article.resume}</span>
          </ArticleComponent>,
        )}
      </div>
    );
  }
}

export default Articles;

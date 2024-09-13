// Define um tipo chamado RepoPros
export type RepoProps = {
    // Propriedade 'name' do tipo string, que representa o nome do repositório
    name: string;
    // Propriedade 'html_url' do tipo string, que representa a URL do repositório
    html_url: string;
    // Propriedade 'language' do tipo string, que representa a linguagem de programação usada no repositório
    language: string;
    // Propriedade 'stargazers_count' do tipo number, que representa o número de estrelas que o repositório recebeu
    stargazers_count: number;
    // Propriedade 'forks_count' do tipo number, que representa o número de forks do repositório
    forks_count: number;
};

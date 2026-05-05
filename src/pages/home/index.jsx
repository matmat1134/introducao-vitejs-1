import {Link} from "react-router";

import styles from './index.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <h1>Aula React com VITE JS</h1>            
            <div className={styles.containerItens}>
                <h2>Exemplos</h2>
                <Link to="/exemplo/1">Exemplo 1 - componente básico</Link>
                <Link to="/exemplo/2">Exemplo 2 - Uso de estabilização com module</Link>
                <Link to="/exemplo/3">Exemplo 3 - State</Link>
                <Link to="/exemplo/4">Exemplo 4 - botao</Link>
                <Link to="/exemplo/5">Exemplo 5 - ex5</Link>
            </div>
            <div className={styles.containerItens}>
                <h2>Atividades</h2>
                <Link to="/atividade/1">atividade 1 - componente básico</Link>
                <Link to="/atividade/2">atividade 2 - State</Link>
                <Link to="/atividade/3">atividade 3 - butons LGBTQIAPN+</Link>
                <Link to="/atividade/4">atividade 4 - Lista de Compras</Link>
            </div>
        </div>
    )
}

export default Home;
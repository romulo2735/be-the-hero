import React,{useState} from "react";
import {Link} from "react-router-dom";
import {FiArrowDownLeft} from 'react-icons/fi';

import './styles.css';
import logo from "../../assets/logo.svg";

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    function handleNewIncident(e) {
        e.preventDefault();

        const data = {title, description, value};
        try {

        }catch (err) {
            alert('Não foi possivel cadastrar caso!');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"/>
                    <h1>Cadastro novo caso</h1>
                    <p>Descreca o caso detalhadamnete para encontrar um herói para resolver isso</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowDownLeft size={16} color="#e02041"/> Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input placeholder="Titulo do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea placeholder="Descricao"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input placeholder="Valor"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

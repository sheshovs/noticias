import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({ guardarCategoria }) => {

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Business' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'health', label: 'Health' },
        { value: 'science', label: 'Science' },
        { value: 'sports', label: 'Sports' },
        { value: 'technology', label: 'Technology' }
    ];

    //utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return (
        <div className={`row ${styles.buscador}`}>
            <div className='col s12 m8 offset-m2'>
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Find news by category</h2>

                    <SelectNoticias />

                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value='Search'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;
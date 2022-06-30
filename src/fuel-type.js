import React from 'react';

export default class FuelType extends React.Component {

    render () {
        return (
            <select>
                <option>Тип топлива</option>
                <option>Газ</option>
                <option>Газ/Бензин</option>
                <option>Дизель</option>
                <option>Электро</option>
            </select>
        )
    }
}
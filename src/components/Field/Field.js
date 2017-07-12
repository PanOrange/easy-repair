import React, { Component } from 'react';
import {Icon} from '../Icon';

class Field extends Component {
    render() {
        switch (this.props.name) {
            case "activateForm":
                return <button className="btn activate-form" onClick={this.props.clickHandler}>{this.props.text}</button>;
            case "close":
                return <button className="btn btn-close" onClick={this.props.clickHandler}><Icon name="fa fa-close" /></button>;
            case "logout":
                return <button className="btn btn-logout" onClick={this.props.clickHandler}>Вийти</button>;
            case "submit":
                return <input type="submit" className="btn btn-submit" value={this.props.text} onClick={this.props.submitHandler} />;
            case "search":
                return <button className={"btn btn-search " + this.props.className} onClick={this.props.searchHandler} >
                    <Icon name="fa fa-search"/>
                    {this.props.text}
                </button>;
            case "mobileMenu":
                return <button className={"btn btn-menu " + (this.props.isShown ? "active" : "") } onClick={this.props.onClick} >
                    <Icon name="fa fa-bars"/>
                </button>;
            case 'login':
                return (
                    <div className="input-holder">
                        <label>Введіть Ваш логін<br/>
                            <input
                                type="text"
                                name={this.props.name}
                                className="input-login"
                                placeholder="Ваш логін"
                                onChange={this.props.changeHandler}
                                value={this.props.value} />
                        </label>
                    </div>
                );
            case 'name':
                return (
                    <div className="input-holder">
                        <label>Ім'я майстра<br/>
                            <input
                                type="text"
                                name={this.props.name}
                                className="input-item"
                                onChange={this.props.changeHandler}
                                value={this.props.value} />
                        </label>
                    </div>
                );
            case 'surname':
                return (
                    <div className="input-holder">
                        <label>Прізвище майстра<br/>
                            <input
                                type="text"
                                name={this.props.name}
                                className="input-item"
                                onChange={this.props.changeHandler}
                                value={this.props.value} />
                        </label>
                    </div>
                );
            case 'email':
                return (
                    <div className="input-holder">
                        <label>Ваш е-мейл<br/>
                            <input
                                type="text"
                                name={this.props.name}
                                className="input-item"
                                onChange={this.props.changeHandler}
                                value={this.props.value} />
                        </label>
                    </div>
                );
            case 'phone':
                return (
                    <div className="input-holder">
                        <label>Ваш номер телефону<br/>
                            <input
                                type="text"
                                name={this.props.name}
                                className="input-item"
                                onChange={this.props.changeHandler}
                                value={this.props.value} />
                        </label>
                    </div>
                );
            case 'password':
                return (
                    <div className="input-holder">
                        <label>Введіть Ваш пароль<br/>
                            <input
                                type="password"
                                name={this.props.name}
                                className="input-password"
                                placeholder="Ваш пароль"
                                onChange={this.props.changeHandler}
                                value={this.props.value}
                            />
                        </label>
                    </div>
                );
            case 'city':
                return <select className="select" name={this.props.name} onChange={this.props.changeHandler} value={this.props.value}>
                    <option value="all" >Всі міста</option>
                    <option value="kyiv">Київ</option>
                    <option value="dnipro">Дніпро</option>
                    <option value="odesa">Одеса</option>
                    <option value="lviv">Львів</option>
                </select>;
            case 'work':
                return <select className="select" name={this.props.name} onChange={this.props.changeHandler} value={this.props.value} >
                    <option value="all" >Всі роботи</option>
                    <option value="window">Вікна</option>
                    <option value="door">Двері</option>
                    <option value="electricity">Електрика</option>
                    <option value="floor">Підлога</option>
                    <option value="tile">Плитка</option>
                    <option value="plumbing">Сантехніка</option>
                    <option value="ceiling">Стеля</option>
                    <option value="wall">Стіни</option>
                    <option value="paint">Фарбування</option>
                    <option value="wallpaper">Шпалери</option>
                </select>;
            case 'rate':
                return <select className="select" name={this.props.name} onChange={this.props.changeHandler} value={this.props.value} >
                    <option value="10" >10/10 зірок</option>
                    <option value="9" >9/10 зірок</option>
                    <option value="8" >8/10 зірок</option>
                    <option value="7" >7/10 зірок</option>
                    <option value="6" >6/10 зірок</option>
                    <option value="5" >5/10 зірок</option>
                    <option value="4" >4/10 зірок</option>
                    <option value="3" >3/10 зірок</option>
                    <option value="2" >2/10 зірок</option>
                    <option value="1" >1/10 зірок</option>
                </select>;
            default:
                return <select />;
        }
    }
}

export default Field;
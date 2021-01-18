import React from 'react'
import s from './ProfileInfo.module.css'





class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }
    activateEditMode = () => {      //чтобы не потерять контекст вызова this при будущем вызове этого метода, нужно или забаиндить .bind метод или использовать стрелочную функцию
        this.setState({
            editMode: true
        })
        // this.forceUpdate()       //принудительное обновление данных
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input type="text" value={this.props.status} onBlur={this.deactivateEditMode} autoFocus />
                    </div>
                }
            </div >
        )
    }


}

export default ProfileStatus
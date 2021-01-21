import React from 'react'
import s from './ProfileInfo.module.css'





class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "--------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input type="text" value={this.state.status} onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus />
                    </div>
                }
            </div >
        )
    }


}

export default ProfileStatus
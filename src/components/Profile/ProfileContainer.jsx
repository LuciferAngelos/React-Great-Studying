import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId         //берём юзерИД из пропсов
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) {        //есои пользователь не залогинен, то его перекинет компонентой Redirect на страницу логина
            return <Redirect to={'/login'} />
        }
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {
        getUserProfile
    }
)(WithUrlDataContainerComponent)

//withRouter - компонент реакт роутера. Следит за изменением урла
//и следом передаем уже не контейнерную компоненту в коннект, а withRouter
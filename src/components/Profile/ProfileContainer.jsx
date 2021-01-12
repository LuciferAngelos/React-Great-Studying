import React from 'react'
import Profile from './Profile'
import * as Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId         //берём юзерИД из пропсов
        if (!userId) {
            userId = 2;
        }
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {
        setUserProfile
    }
)(WithUrlDataContainerComponent)

//withRouter - компонент реакт роутера. Следит за изменением урла
//и следом передаем уже не контейнерную компоненту в коннект, а withRouter
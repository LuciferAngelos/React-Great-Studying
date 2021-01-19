import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId         //берём юзерИД из пропсов
        if (!userId) {
            userId = 1048;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})



export default compose(
    connect(mapStateToProps,
        {
            getUserProfile,
            getStatus,
            updateStatus
        }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

//withRouter - компонент реакт роутера. Следит за изменением урла
//и следом передаем уже не контейнерную компоненту в коннект, а withRouter
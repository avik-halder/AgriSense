import React from 'react'

import styles from '../components/ProfileInfo.module.css'
import user from '../assests/team_null.png'

const ProfileInfo = (props) => {
  return (
    <div className={styles.mainContainer}>
            <div className={styles.profileMenu}>
                <div className={styles.pictureContainer}>
                    <img src={user} alt="profile picture" style={{width:"200px"}}/>
                    <h4>Team_NULL()</h4>
                    <hr />
                </div>

                <p>First Name: <b>{props.firstName}</b></p>
                <p>Last Name: <b>{props.lasttName}</b></p>
                <p>Email: <b>{props.email}</b></p>
                <p>Institution: <b>{props.institution}</b></p>
                <p>Account Creation Date-Time: <b>{props.acCreated}</b></p>
            </div>
        </div>
  );
}

export default ProfileInfo;
import Avatar from '../avatar/Avatar';
import Box from "@mui/material/Box"
import styles from "./User.module.scss"

function User({ name = '' , info = '' , avatar = '' , size = 55 , verified = false }) {
    return (
        <div className={styles.user}>
            <Avatar url={avatar} verified={verified} />
            <Box className={styles.wrapper}>
                <div className={styles.name}>{name}</div>
                <div className={styles.info}>{info}</div>
            </Box>
        </div>
    );
}

export default User;
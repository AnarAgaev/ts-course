import { UserStat } from 'components/UserStat';
import { UserTitle } from 'components/UserTitle';
import { UserInfo } from 'components/UserInfo';
import { LocalGithubUser } from 'types';
import styles from './UserCard.module.scss';

interface UserCardProps extends LocalGithubUser { }

export const UserCard = (props: UserCardProps) => {
	const { repos, following, followers } = props

	return (
		<div className={styles.userCard}>
			<img
				src={props.avatar}
				alt={props.login}
				className={styles.avatar}
			/>
			<UserTitle
				name={props.name}
				login={props.login}
				created={props.created}
			/>
			<p className={`${styles.bio}${!props.bio ? '' : ` ${styles.empty}`}`}>
				{ props.bio || 'This profile has no bio' }
			</p>
			<UserStat
				repos={repos}
				following={following}
				followers={followers}
			/>
			<UserInfo
				blog={props.blog}
				company={props.company}
				location={props.location}
				twitter={props.twitter}
			/>
		</div>
	)
};

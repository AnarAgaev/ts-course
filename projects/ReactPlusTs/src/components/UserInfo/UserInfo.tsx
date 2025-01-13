import { ReactComponent as CompanyIcon} from '../../assets/icon-company.svg'
import { ReactComponent as LocationIcon} from '../../assets/icon-location.svg'
import { ReactComponent as TwetterIcon} from '../../assets/icon-twitter.svg'
import { ReactComponent as BlogIcon} from '../../assets/icon-website.svg'

import { LocalGithubUser } from 'types';
import { InfoItem, InfoItemProps } from 'components/InfoItem';

import styles from './UserInfo.module.scss';

interface UserInfoProps extends Pick<
	LocalGithubUser,
	'blog' | 'company' | 'location' | 'twitter'
> {}

export const UserInfo = ({blog, company, location, twitter }: UserInfoProps) => {

	const items: InfoItemProps[] = [
		{
			icon: <LocationIcon />,
			text: location
		},
		{
			icon: <BlogIcon />,
			text: blog,
			isLink: true
		},
		{
			icon: <TwetterIcon />,
			text: twitter,
		},
		{
			icon: <CompanyIcon />,
			text: company
		}
	]

	return (
		<div className={styles.userInfo}>
			{ items.map((item, idx) => (
				<InfoItem {...item} key={idx}/>
			))}
		</div>
	)
};
